package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes;

//Nuestro repositorio (es equivalente a la clase EstudianteDAO del anterior proyecto)
public interface EstudianteRepositorio extends JpaRepository<Estudiantes, Integer> {

}
