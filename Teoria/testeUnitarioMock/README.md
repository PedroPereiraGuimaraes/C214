# 🚀 C214 - Engenharia de Software 
## 📒 Enunciado
Teste uma classe responsável por popular uma página WEB com informações referentes ao horário de atendimento dos professores do Inatel. O horário de atendimento é retornado por um servidor remoto em um JSON em formato String. Não é necessário demonstrar o funcionamento da página WEB, somente o teste.

## 💻 Explicação do código
Para fazer o exercício foi usado Javascript em conjunto com ```MOCHA``` e ```CHAI```.
Primeiramente foi criada uma classe para simular o funcionamento do JSON recebido:
```
Attendance:
 - teacherName
 - attendanceDay
 - period
 - room
 - building
```
Nela foi criada uma função para retornar os dados de cada atendimento:

```
toJson() {
  return {
    "nomeDoProfessor": this.teacherName,
    "diasAtendimento": this.attendanceDay,
    "periodo": this.period,
    "sala": this.room,
    "predio": this.building,
  }
}
```
Após isso foram criadas 3 funções para que possamos fazer os testes.

 - Função pra verificar o dia de atendimento:
```function chooseAttendandeDay(json, day)```

 - Função pra verificar o prédio do atendimento:
```function chooseRoom(json)```

 - Função pra mostrar os horarios do professor com base em seu periodo de trabalho:
```function showPeriodTime(json)```

## 🧪 Testes
Para fazer os testes foram usadas as bibliotecas ```MOCHA``` e ```CHAI```. Com elas foram feitos testes para as 3 funções criadas no código anterior.
Os testes foram:
```
 - Verificar prédio da sala:
   
    ✔ SUCESSO - Retorna prédio 1
   
    ✔ SUCESSO - Retorna prédio 2
   
    ✔ SUCESSO - Retorna prédio 3
   
    ✔ SUCESSO - Retorna prédio 4
   
    ✔ SUCESSO - Retorna prédio 6
   
    ✔ SUCESSO - Retorna NaN
   
    ✔ FALHA - Retorna NaN caso a entrada seja INT
   
    ✔ FALHA - Retorna NaN caso a entrada seja FLOAT
   
    ✔ FALHA - Retorna NaN caso a sala passada seja null
   
    ✔ FALHA - Retorna NaN caso a sala passada seja um texto
```
```
  - Verificar dia de atendimento:
    
    ✔ SUCESSO - Retorna true se tiver atendimento
    
    ✔ SUCESSO - Retorna false se não tiver atendimento
    
    ✔ FALHA - Retorna false se não for uma string
    
    ✔ FALHA - Retorna false se for null
```
```    
  - Verificar horario por período:
    
    ✔ SUCESSO - Retorna os horarios do periodo integral
    
    ✔ SUCESSO - Retorna os horarios do periodo noturno
    
    ✔ FALHA - Retorna NaN para uma entrada int
    
    ✔ FALHA -  Retorna NaN para uma entrada float
    
    ✔ FALHA -  Retorna NaN para uma entrada null
    
    ✔ FALHA - Retorna NaN para entrada de periodo matutino
```

Sendo no total 10 testes para cenários de *SUCESSO* e 10 teste para cenários de *FALHA*.
### Feito por ```Pedro Pereira Guimarães```
