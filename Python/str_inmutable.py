
#help(str.capitalize)
mensaje1 = 'hola mundo'
mensaje2 = mensaje1.capitalize()
print(f'Mensaje2: {mensaje2}, id: {id(mensaje2)}')
print(f'Mensaje1: {mensaje1}, id:{id(mensaje1)}')
#los objetos son diferenetes, dos cadenas diferentes

mensaje1 += ' Adios'
print(f'Mensaje1: {mensaje1}, id:{id(mensaje1)}')