package utn.estudiantes;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication //notacion que es para ejecutar
public class EstudiantesApplication implements CommandLineRunner {//la clase
	//el implements CommandLineRunner (interface) es para ejcutar por consola el menu

	public static void main(String[] args) {
		SpringApplication.run(EstudiantesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
