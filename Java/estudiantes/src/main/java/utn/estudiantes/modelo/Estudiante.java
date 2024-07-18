package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity //es una clase identidad que representa una tabla de datos
public class Estudiante {
    //agregamos los atributos

    //Llave primaria es: idestudiantes
    @Id //es para que agregue el numero de la llave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) //para llaves autoincreventables
    private Integer idEstudiante;

}
