class ObservadorContagem:
    def update(self, contagem):
        pass


class ContadorPalavras:
    def __init__(self):
        self.observadores = []
        self.contagem_total = 0
        self.contagem_pares = 0
        self.contagem_maiuscula = 0

    def adicionar_observador(self, observador):
        self.observadores.append(observador)

    def notificar_observadores(self):
        for observador in self.observadores:
            observador.update(self)

    def contar_palavras(self, frase):
        palavras = frase.split()

        for palavra in palavras:
            self.contagem_total += 1

            if len(palavra) % 2 == 0:
                self.contagem_pares += 1

            if palavra[0].isupper():
                self.contagem_maiuscula += 1

        self.notificar_observadores()


class ExibidorContagem(ObservadorContagem):
    def update(self, contadores):
        print("Contagem Total:", contadores.contagem_total)
        print("Contagem Palavras Pares de Caracteres:", contadores.contagem_pares)
        print("Contagem Palavras Iniciadas com Maiúscula:", contadores.contagem_maiuscula)


def main():
    contador = ContadorPalavras()
    exibidor = ExibidorContagem()
    contador.adicionar_observador(exibidor)

    frase = input("Digite uma frase: ")
    contador.contar_palavras(frase)


if __name__ == "__main__":
    main()
