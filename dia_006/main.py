def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        resultado = 1
        for i in range(2,n+1):
            resultado = resultado * i
        return resultado
    
numero = int(input("Digite um  numero: "))

if numero < 0:
    print(f"o fartorial de {numero} nao existe")
else:
    print(f"o fatiral de {numero} é {fatorial(numero)}")