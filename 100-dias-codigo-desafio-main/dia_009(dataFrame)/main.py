import pandas as pd
import numpy as np

# para criar um dataframe cria dados e depois trasformaeles
data = {'vendas': [100,200,300,400,500,600,700]}

#agora vai criar um dataframe com os dados criados 
df= pd.DataFrame(data)

# operaçoes

media = df['vendas'].mean()

mediana = df['vendas'].median()

desvio_padrao = df['vendas'].std()

maximo = df['vendas'].max()

minimo = df['vendas'].min()

# Resultado

print(f"a media é {media}\n mediana é {mediana}\n desvio padrao é {desvio_padrao}\n o maximo {maximo} e minimo {minimo}")
