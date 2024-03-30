
# dar formao a un string

nombre = 'Carolina'
edad = 27
mensaje_con_formato = 'Mi nombre es %s y tengo %d anios' % (nombre, edad) #tupla, respetar orden
# parametro posicionales
print(mensaje_con_formato)

# Ahora vamos a definir una tupla
persona = ('Alan', 'Mamani', 2000000)
mensaje_con_formato = 'Hola %s %s. Tu sueldo es %.2f' #% (persona) 
#Aqui le pasamos el objeto que es tupla
print(mensaje_con_formato % persona)


nombre = 'Celia' #0
edad = 28 #1
sueldo = 3000 #2
# {} place holder
mensaje_con_formato = ' Nombre {} Edad {} Sueldo {:.2f}' .format(nombre, edad, sueldo)
print(mensaje_con_formato)

# ahora con los indices de las variables
mensaje = 'Nombre {0} Edad {1} Sueldo {2}'.format(nombre, edad, sueldo)
print(mensaje)

#con variables diferentes
mensaje = 'Nombre {n} Edad {e} Sueldo {s:.2f}'.format(n= nombre, e=edad, s=sueldo)
print(mensaje)  

#usando diccionario
diccionario = {'nombre': 'Ivan', 'edad':35, 'sueldo': 8000.00}
mensaje = 'Nombre {persona[nombre]} Edad {persona[edad]} Sueldo {persona[sueldo]:.2f}'.format(persona=diccionario)
print(mensaje)

