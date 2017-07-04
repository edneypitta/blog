---
title: Por que aprender F# ?
date: 2017-06-30 00:00.000 -3
layout: Post
comments: true
issue: 5
description: Apresentação das principais motivações que me leveram a estudar F#.  O objetivo não é explicar funcionalidades ou teorias nesse momento, mas sim apresentar alguns conceitos chaves e vantagens que o F# traz para o desenvolvimento.
---

O primeiro questionamento que surge quando decidimos estudar uma nova tecnologia é por quê? Por que dentre tantas tecnologias e frameworks emergentes deveríamos escolher àquela em detrimento de outra?

Vou listar alguns motivos que me fizeram escolher F# como a linguagem de entrada para o mundo funcional. O objetivo não é explicar funcionalidades ou teorias nesse momento _(isso vai ficar para os artigos posteriores)_, mas sim apresentar alguns conceitos chaves e vantagens que o F# traz para o desenvolvimento.

## multiparadigma com foco no estilo funcional
F# é uma linguaguem primariamente funcional, mas que suporta muito bem orientação à objeto e o estilo de programação imperativo. Aprender uma linguagem com um paradigma diferente da que estamos habituados faz com que olhemos para um problema de diferentes perspectivas, fornecendo melhores soluções.

O fato do F# ser uma linguagem híbrida faz com que a transição para o mundo funcional seja mais tranquila. Sempre se pode começar com uma abordagem imperativa e evoluir gradativamente para uma abordagem funcional. Outra grande vantagem do F# suportar o estilo imperativo é que a interação com o mundo real não puro, onde se espera que ações mudem algum estado, se torna muito mais fácil.

## legibilidade de código
F# não possui instruções como chaves ou ponto e vírgula tornando o código menos verboso e mais legível. Essa é uma opinião minha, existe um debate longo sobre chaves Vs. espaços para delimitar blocos de código. Acredito que um desenvolvedor consiga se focar mais no código quando não precisa se preocupar em controlar explicitamente os blocos de código. Mas ainda sim, é uma questão de preferência.

F# possui uma ótima inferência de tipos, na maioria das vezes, não será preciso anotar tipos explicitamente.

É possível controlar fluxo de chamadas para tornar uma expressão mais legível. Nosso modelo de leitura no Brasil é ocidental. Naturalmente lemos um texto de esquerda para direita, de cima para baixo. Mas se encadear diretamente chamadas de funções, teremos algo como:
```cs
var resultado = SomarValores(
        ElevarAoQuadrado(new []{1,2,3})
      )
```
Note que nesse trecho de código a ordem de leitura é da direita para esquerda, de baixo para cima. O oposto do que estamos acostumados. Podemos atribuir variáveis para melhorar a legibilidade, mas não é uma ótima solução.

Em F# podemos inverter o fluxo e encadear através do operador pipe:
```fs
let resultado = [|1;2;3|] 
    |> ElevarAoQuadrado 
    |> SomarValores
```
Falaremos em outro artigo sobre o operador pipe, o importante agora é notar que respeitamos a ordem natural de leitura ocidental, o que torna o código mais natural.

Comparado a uma linguagem imperativa, geralmente se utiliza menos linhas de código para resolver o mesmo problema. Uma análise detalhada de alguns projetos em C# comparado à F# foi publicada [aqui](https://fsharpforfunandprofit.com/posts/cycles-and-modularity-in-the-wild/).

## declaratividade para prevenção à erros
F# possui um poderoso sistema de tipos que permite ser explicitamente declarativo sobre as expressões desenvolvidas. Assim, é possível prevenir Null Reference Exceptions de forma mais fácil.
```fs
let rs = LerArquivo caminho
match rs with
  | Success arquivo -> printfn "Arquivo: %A" arquivo
  | Fail -> printfn "Arquivo não encontrado"
```
Não se incomode caso não tenha entendido esse código 100%. O importante é entender que a função LerArquivo poderá retornar um resultado de Sucesso ou de Fracasso.

É possível codificar o domínio utilizando dos benefícios do sistema de tipos. O resultado é um domínio granular e a facilidade em tornar estados ilegais não compiláveis. 

Com a facilidade em tornar estados ilegais não compiláveis, a suite de testes será menor, já que testes de regressão para verificar estados ilegais não serão necessários.

## facilidade e aplicações
F# possui uma vasta gama de aplicações. Ele pode ser utilizado para scripting, desenvolvimento web, mobile e desktop. Também pode ser utilizado em data science. São inúmeras possibilidades.

Muitas tarefas são mais simples de desenvolver em F#, como criação de tipos complexos, comparação e igualdade, processamento de listas, modelagem de máquina de estados, etc...

## concorrência
A facilidade em desenvolver sistemas concorrentes é um atributo da programção funcional. Como valores são nativamente imutáveis, compartilhar estado e evitar locks é muito mais fácil. Programação assíncrona, programação reativa, event handling também ficam mais fácil em F#. 

F# também tem suporte direto para fila de mensagens:
```fs
let handleInbox inbox = 
  let rec loop() = async {
        let! msg = inbox.Receive()
        printfn "mensagem é: %s" msg
        return! loop()  
        }
  loop()

let agente = MailboxProcessor.Start handleInbox
``` 

## interoperabilidade com C#/ integração com ecossistema .NET
Por F# ser considerado um [superset do C#](http://blog.ploeh.dk/2015/04/15/c-will-eventually-get-all-f-features-right/) e também por ser uma linguagem híbrida integrar código C# é uma tarefa simples e totalmente víavel. Assim é possível tirar proveito das várias bibliotecas e frameworks do ecossistema .NET.

## type providers
Provavelmente você já ouviu falar de type providers. É a feature mais conhecida do F#. É uma  extensão que permite o compilador acessar valores externos em tempo de compilação.
```fs
use cmd = new SqlCommandProvider<"
        SELECT TOP(@topN) Nome, Sobrenome
        FROM Clientes
        WHERE Id = @id
        " , connectionString>(connectionString)

    cmd.Execute(topN = 3L, id = 235L) |> printfn "%A"
```
Os valores topN e id são definidos em tempo de compilação gerados pelo type provider do SQL em SqlCommandProvider.

## comunidade
A comunidade F# é bastante acolhedora, se você precisar de ajuda, certamente alguém estará disponível. F# é mantido pela [F# Foundation](http://foundation.fsharp.org/) que recomendo que você [entre](http://foundation.fsharp.org/join). Tem muita coisa bacana lá, e depois que você entrar, receberá o link para participar do slack. Lá poderá perguntar qualquer coisa, as pessoas realmente são solidárias e pacientes com iniciantes.

## conclusão
Espero que tenha conseguido passar as motivações necessárias para que vcê começe também essa jornada. Esse post também contém algumas "promessas" que espero desvendar nos próximos artigos. Se tiver alguma dúvida é só me procurar , estou longe de ser proficiente em F#, mas prometo que tentarei ajudar!