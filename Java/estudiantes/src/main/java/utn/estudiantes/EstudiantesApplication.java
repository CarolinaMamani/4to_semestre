package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication //notacion que es para ejecutar
public class EstudiantesApplication implements CommandLineRunner {//la clase
	//el implements CommandLineRunner (interface) es para ejcutar por consola el menu

	@Autowired
	//definimos el atributo estudiante usando la capa de servicio
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);
	//el logger es la forma que enviamos informacion a la consola

	//cremos un salto de linea
	String nl = System.lineSeparator();//para todos los sistemas operativos llamamos a lineseprator para que nos reguese el sato de linea

	public static void main(String[] args) {//se ejecuta la fabrica de spring
		logger.info("Iniciando ... o 3 o");
		// Levantar la fabrica de Spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Fin o U o");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+"Estamos ejecutando el metodo run de Spring ..."+nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while(!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);//salto de linea
		}//Fin ciclo while
	}//fin metodo run

	private void mostrarMenu(){
		logger.info(nl);//salto de linea
		logger.info("""
				<<<<<<<<< SISTEMA DE ESTUDIANTES >>>>>>>>>
				1.Pasar lista
				2.Buscar
				3.Agregar
				4.Modificar
				5.Eliminar
				6.Salir
				Tu opcion? owo: """);
	}//fin metodo mostrarMenu

	private boolean ejecutarOpciones(Scanner consola){
		var opcion = Integer.parseInt(consola.nextLine());
		var salir = false;
		switch (opcion){
			case 1 ->{
				logger.info(nl+"<< Listado >>"+nl);
				List<Estudiantes> estudiantes = estudianteServicio.listarEstudiantes();
				estudiantes.forEach((estudiante -> logger.info(estudiantes.toString())));
			}
			case 2->{//buscar
				logger.info("Id del estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				Estudiantes estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if (estudiante != null)
					logger.info(" Lo encontre! es: "+estudiante+nl);
				else
					logger.info("No vino u_u : "+estudiante+nl);
			}
			case 3->{//agregar
				logger.info("<< Registar al nuevo recluso >>"+nl);
				logger.info("Nombre: ");
				var nombre = consola.nextLine();
				logger.info("Apellido: ");
				var apellido = consola.nextLine();
				logger.info("Telefono: ");
				var telefono = consola.nextLine();
				logger.info("Email: ");
				var email = consola.nextLine();
				//crear objeto estudiante sin id
				var estudiante = new Estudiantes();
				estudiante.setNombre(nombre);
				estudiante.setApellido(apellido);
				estudiante.setTelefono(telefono);
				estudiante.setEmail(email);
				estudianteServicio.guardarEstudiante(estudiante);
				logger.info("Ya fue empaquetado e w e: "+estudiante+nl);

			}
			case 4 ->{//modificar
				logger.info("<< Modificamos >>"+nl);

			}
			case 5 ->{//eliminar

			}
			case 6 ->{

			}
		}//Fin switch
		return salir;
	}
}
