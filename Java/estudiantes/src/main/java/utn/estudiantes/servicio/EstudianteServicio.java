package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiante;
import utn.estudiantes.repositorio.EstudianteRepositorio;

import java.util.List;

//notacion de service
@Service //Componentes de tipo Service
public class EstudianteServicio implements IEstudianteServicio {

    //Spring es una fabrica de objetos, se encarga de injerctar la dependencia de los objetos
    @Autowired
    private EstudianteRepositorio estudianteRepositorio;

    @Override
    public List<Estudiante> listarEstudiantes() {
        List<Estudiante> estudiantes = estudianteRepositorio.findAll();
        return estudiantes;
    }

    @Override
    public Estudiante buscarEstudiantePorId(Integer idEstudiante) {
        Estudiante estudiante = estudianteRepositorio.findById(idEstudiante).orElse(null);
        return estudiante;
    }

    @Override
    public void guardarEstudiante(Estudiante estudiante) {

    }

    @Override
    public void eliminarEstudiante(Estudiante estudiante) {

    }
}
