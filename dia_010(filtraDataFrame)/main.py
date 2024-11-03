import pandas as pd

data = {
    'nome': ['Ana','Joao','Pedro','Clara','Mateus',],
    'departamento': ['TI','RH','TI','RH','Finaceiro'],
    'salario': [1000,2000,3000,4000,5000]
}

df = pd.DataFrame(data)

# filtragem para a galera de TI

funcionarios_ti = df[df['departamento'] == 'TI']

# print(funcionarios_ti)

# agora vou pegar o salario do grupo de TI separado e faver a media deles

mediaSalario = funcionarios_ti['salario'].mean()

print(mediaSalario)