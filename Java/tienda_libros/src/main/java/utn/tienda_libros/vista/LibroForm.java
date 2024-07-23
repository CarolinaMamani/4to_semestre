package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

@Component
public class LibroForm extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroForm(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
    }

    private void iniciarForma(){
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2) ;
        int y = (tamanioPantalla.height - getHeight()/2) ;
        setLocation(x, y);
    }

    private void createUIComponents(){
       // panel = new JPanel(new BorderLayout()); // Inicializa el panel con BorderLayout

        this.tablaModeloLibros = new DefaultTableModel(0, 5); // 5 Columnas
        // Array para las 5 columnas
        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        // Instanciar el objeto de JTable
        this.tablaLibros = new JTable(tablaModeloLibros);

        // Agregar JTable a un JScrollPane
        //JScrollPane scrollPane = new JScrollPane(tablaLibros);
        //panel.add(scrollPane, BorderLayout.CENTER); // Agregar JScrollPane al panel

        listarLibros();
    }

    private void listarLibros(){
        // Limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        // Obtener los libros de la base de datos
        var libros = libroServicio.listarLibros();
        // Iteramos cada libro
        libros.forEach((libro) ->{ // Función Lambda
            // Creamos cada registro para agregarlos a la tabla
            Object[] renglonLibro = { // El arreglo representa cada columna
                    libro.getIdLibro(),
                    libro.getNombre(),
                    libro.getAutor(),
                    libro.getPrecio(),
                    libro.getExistencias()
            };
            this.tablaModeloLibros.addRow(renglonLibro);
        });
    }
}

