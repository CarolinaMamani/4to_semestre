nombre = 'Pepe'
edad = 28
sueldo = 3000
#interpolacion, {} place holder
mensaje = f'Nombre {nombre} Edad {edad} Sueldo {sueldo:.2f}' #la forma mas recomendada
print(mensaje)

print(nombre, edad, sueldo, sep=', ') #esto es una tupla