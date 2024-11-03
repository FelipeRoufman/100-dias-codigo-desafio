def transfomador(C):
    F = (C * 9/5) + 32
    return F

temperatura = float(input("me diga a temperatura em Celsius: "))

print(f"a temperatura {temperatura} em F sera {transfomador(temperatura)}")