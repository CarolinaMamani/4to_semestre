
#help(str.split)

cursos = 'Java JavaScript Node Python Disenio'
lista_cursos = cursos.split()
print(f'Lista de cursos: {lista_cursos}') #devuelve una lista de 5 elementos
print(type(lista_cursos))

cursos_separados_coma = 'Java,Python,Node,JavaScript,Spring'
lista_cursos = cursos_separados_coma.split(',', 2) #busca la coma solo 2 veces
print(f'Lista de cursos: {lista_cursos}') 
print(len(lista_cursos)) # hay 5 elementos al pasarle que vea las comas

