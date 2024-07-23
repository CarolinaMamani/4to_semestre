package utn.tienda_libros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication//para que se levante spring de manera automatica
public class TiendaLibrosApplication {

	public static void main(String[] args) {
		SpringApplication.run(TiendaLibrosApplication.class, args);
	}
		ConfigurableApplicationContext contextoSpring =
				new SpringApplicationBuilder(TiendaLibrosApplication.class);
}
