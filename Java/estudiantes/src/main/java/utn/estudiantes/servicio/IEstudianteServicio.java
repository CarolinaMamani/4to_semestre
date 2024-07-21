package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiantes;

import java.util.List;

public interface IEstudianteServicio {
    //creamos los metodos dentro de la interface
    public List<Estudiantes> listarEstudiantes();
    public Estudiantes buscarEstudiantePorId(Integer idEstudiantes);
    public void guardarEstudiante(Estudiantes estudiante);
    public void eliminarEstudiante(Estudiantes estudiante);

}
