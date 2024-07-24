package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.modelo.Libro;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

@Component
public class LibroForm extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField idTexto;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private JButton agregarButton;
    private JButton modificarButton;
    private JButton eliminarButton;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroForm(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener(e -> agregarLibro()); //Lambda

        tablaLibros.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
                cargarLibroSeleccionado();
            }
        });
        modificarButton.addActionListener(e -> modificarLibro());
        eliminarButton.addActionListener(e -> eliminarLibro());
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

    private void agregarLibro(){
        //Leer los valores del formulario
        if (libroTexto.getText().equals("")){ //si es true que la caja esta vacia
            mostrarMensaje("Ingresa el nombre del libro: ");
            libroTexto.requestFocusInWindow();//mueve el cursor para que se vuelva a ingresar el nombre del libro
            return;
        }
        //else
        var nombre = libroTexto.getText();
        var autor = autorTexto.getText();
        var precio = Double.parseDouble(precioTexto.getText());
        var existencias = Integer.parseInt(existenciasTexto.getText());
        //Creamos el objeto libro
        var libro = new Libro(null,nombre,autor,precio,existencias);
        //libro.setNombre(nombre);
        //libro.setAutor(autor);
        //libro.setPrecio(precio);
        //libro.setExistencias(existencias);
        this.libroServicio.guardarLibro(libro);
        mostrarMensaje("Agregado! ");
        limpiarFormulario();
        listarLibros();
    }

    private void cargarLibroSeleccionado(){
    //los indices de las colimnas icnician en 0
        var fila = tablaLibros.getSelectedRow();
        if (fila != -1){
            String idLibro = tablaLibros.getModel().getValueAt(fila,0).toString();
            idTexto.setText(idLibro);
            String nombre = tablaLibros.getModel().getValueAt(fila,1).toString();
            libroTexto.setText(nombre);
            String autor = tablaLibros.getModel().getValueAt(fila,2).toString();
            autorTexto.setText(autor);
            String precio = tablaLibros.getModel().getValueAt(fila,3).toString();
            precioTexto.setText(precio);
            String existencias = tablaLibros.getModel().getValueAt(fila,4).toString();
            existenciasTexto.setText(existencias);

        }
    }

    private void modificarLibro(){
        if (this.idTexto.equals("")){
            mostrarMensaje("Selecciona un registro en la tabla");
        }
        else {
            // verificamos que nombre del libro no sea nulo
            if (libroTexto.getText().equals("")){
                mostrarMensaje("Nombre de libro: ");
                libroTexto.requestFocusInWindow();
                return;
            }
            //llenamos el objetos libro a actualizar
            int idLibro = Integer.parseInt(idTexto.getText());
            var nombre = libroTexto.getText();
            var autor = autorTexto.getText();
            var precio = Double.parseDouble(precioTexto.getText());
            var existencias = Integer.parseInt(existenciasTexto.getText());
            var libro = new Libro(idLibro, nombre, autor, precio, existencias);
            libroServicio.guardarLibro(libro);
            mostrarMensaje("Modificado con exito!");
            limpiarFormulario();
            listarLibros();//refesca la tabla

        }
    }

    private void eliminarLibro(){
        var fila = tablaLibros.getSelectedRow();
        if (fila != -1){ //si selecciono alguna fila es diferente a -1
            String idLibro = tablaLibros.getModel().getValueAt(fila,0).toString();
            var libro = new Libro();
            libro.setIdLibro(Integer.parseInt(idLibro));
            libroServicio.eliminarLibro(libro);
            mostrarMensaje("El libro "+idLibro+" fue eliminado");
            limpiarFormulario();
            listarLibros();
        }
        else {
            mostrarMensaje("No ha seleccionado ningun libro para eliminarse");
        }
    }

    private void limpiarFormulario(){
        libroTexto.setText("");//la caja queda limpia
        autorTexto.setText("");
        precioTexto.setText("");
        existenciasTexto.setText("");
    }

    private void mostrarMensaje(String mensaje){
        JOptionPane.showMessageDialog(this, mensaje);
    }


    private void createUIComponents(){
        idTexto = new JTextField("");
        idTexto.setVisible(false);

        this.tablaModeloLibros = new DefaultTableModel(0, 5){
            @Override  //vamos a hacer que la tabla no sea editable mediante clicks
            public boolean isCellEditable(int row, int column){
                return false;
            }
        };
        // Array para las 5 columnas
        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);

        // Instanciar el objeto de JTable
        this.tablaLibros = new JTable(tablaModeloLibros);

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

