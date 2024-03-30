

# Bool contiene los valores true y false
# los tipos nimericos, es false para el 0 cero, true para los demas valores

valor = 0
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

valor = 15
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

# TIPO STRING -> False '' representa una cadena vacia, True para los demas valores
valor = ''
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')


#TIPO COLECCIONES -> False para colecciones vacias, True para todas las demas

##Lista:
valor = []
resultado = bool(valor)
print(f'valor de una lista vacia: {valor}, resultado: {resultado}')

valor = [2,3,4]
resultado = bool(valor)
print(f'valor de una lista con elementos: {valor}, resultado: {resultado}')

##Tupla
valor = ()
resultado = bool(valor)
print(f'valor de una tupla vacia: {valor}, resultado: {resultado}')

valor = (5,)
resultado = bool(valor)
print(f'valor de una tupla con elementos: {valor}, resultado: {resultado}')

##Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacio: {valor}, resultado: {resultado}')

valor = {'nombre': "juan", "apellido":"perez"}
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

#Sentencias de control con bool
if '':
    print('regresa verdadero')
else:
    print('regesa falso')

##CICLOS
variable = 17
while variable:
    print('regresa verdadero')
    break
else:
    print('regesa falso')