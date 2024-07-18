package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiante;
//Nuestro repositorio
public interface EstudianteRepositorio extends JpaRepository<Estudiante, Integer> {

}
