
#help(str.join)

tupla_str = ('Hola', 'Mundo', 'Alumnos', 'Tecnicatura', 'Universitaria')
mensaje = ' '.join(tupla_str) # ya no es tupla, se vuelve una sola cadena
print(f'Mensaje: {mensaje}')

lista_cursos = ['Java', 'Python', 'Node', 'JavaScrip', 'Spring']
mensaje = ''.join(lista_cursos)
print(f'Mensaje: {mensaje}')

cadena = 'HolaMundo'
mensaje = '.'.join(cadena)
print(f'Mensaje: {mensaje}')

diccionario = {'Nombre': 'Jean', 'Apellido': 'Uresh', 'Edad': '18'}
llaves = '-'.join(diccionario.keys())
valores = '-'.join(diccionario.values())
print(f'Llaves: {llaves}, Type: {type(llaves)} \nValores: {valores}, Type: {type(valores)}')