package utn.tienda_libros.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

//Clase entidad
//Notaciones:
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Libro {
    @Id //llave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idLibro;
    String nombre;
    String autor;
    Double precio;
    Integer existencias;

}
