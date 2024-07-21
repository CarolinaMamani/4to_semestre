package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.servicio.EstudianteServicio;

@SpringBootApplication //notacion que es para ejecutar
public class EstudiantesApplication implements CommandLineRunner {//la clase
	//el implements CommandLineRunner (interface) es para ejcutar por consola el menu

	@Autowired
	//definimos el atributo estudiante usando la capa de servicio
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);
	//el logger es la forma que enviamos informacion a la consola

	String nl = System.lineSeparator();//para todos los sistemas operativos llamamos a lineseprator para que nos reguese el sato de linea

	public static void main(String[] args) {//se ejecuta la fabrica de spring
		logger.info("Iniciando ... o 3 o");
		// Levantar la fabrica de Spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Fin o U o");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info("Estamos ejecutando el metodo run de Spring ...");

	}
}
