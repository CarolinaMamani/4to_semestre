package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity //es una clase identidad que representa una tabla de datos

//Boilerplate - codigo repetitivo de
@Data //(constructores get set)
@NoArgsConstructor //agrega el constructor vacio
@AllArgsConstructor //constructor con todos los argumentos (id nombre apellido tel email)
@ToString //metodo to String

public class Estudiantes {
    //agregamos los atributos

    //Llave primaria es: idestudiantes
    @Id //es para que agregue el numero de la llave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) //para llaves autoincreventables
    private Integer idestudiantes;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}
