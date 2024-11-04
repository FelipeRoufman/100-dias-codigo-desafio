def tabuada(n):
    print(f"Tabuada de {n}")
    for i in range(1,11):
        resultado = n * i
        print(f"{n} x {i} = {resultado}")

numero = int(input("Digite um numero para gerar tabuada: "))

tabuada(numero)