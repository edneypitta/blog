---
title: Primeiros passos com F#
date: 2017-06-30 00:00.000 -3
layout: Draft
description: Primeiros passos com F# construções básicas e ajudar na familiarização de uma sintaxe básica e entender alguns conceitos do F#
---

F# é uma linguagem multiparadigma com suporte ao paradigma imperativo, orientação a objeto e funcional. É uma linguagem estaticamente e fortemente tipada. 

Utiliza espaços para identação e pertencente à família de [linguagens ML](https://en.wikipedia.org/wiki/ML_(programming_language)).

Ao contrário do que muita gente pensa, pode ser usado para muitas aplicações, desde data science passando por  scripting, programação web até programação mobile. É inclusive considerado um superset do C#.

Possui um ótimo compilador e uma ótima inferência de tipos. Tanto que não é considerado uma boa prática explicitamente tipar valores em F#.

Instalar F# é muito simples e você poderá seguir a página do próprio _F# Software Foundation_ em [fsharp.org](http://fsharp.org/) para sua plataforma.

# conceitos básicos

## valores e variáveis

Para declarar um valor se utiliza a palavra reservada **let**
```fs
let a = 40
```
Os valores são imutáveis por padrão. Isso significa que não existe um conceito explícito para alterar valores. Porém, pode-se criar variáveis tornando valores mutáveis:
![immutable values](/assets/fsharp-immutable.jpg)
_O sinal de menor hífen (<-) significa atribuição para variáveis em F#_.

Você poderá torná-lo mutável adicionando mutable, mas tornar valores mutáveis não é considerado uma boa prática em F#. Uma abordagem funcional normalmente não precisará de variáveis.

## funções

Funções também se declararm usando a palavra reservada **let**
```fs
let add (a:int) (b:int) :int = 
    a + b

let result = add 20 22 // 42
```
Ué, mas não foi dito anteriormente que anotar tipos explicitamente é uma má prática em F#? Sim, exatamente! Essa função poderia ser reescrita sem anotar tipo algum
```fs
let add a b = 
    a + b

let result = add 20 22 // 42
```

Ainda para simplificar, podemos remover a identação
```fs
let add a b = a + b

let result = add 20 22 // 42
```

Repare que o compilador foi capaz de inferir automaticamente que a e b são inteiros, e o retorno da função add também é um inteiro.

Em F# não existe _short circuit_. Isto é, não há como retornar mais cedo de uma função. Toda função será avaliada até sua última expressão, que por sua vez, será o o próprio retorno da função. Logo, não existe uma palavra chave para indicar o retorno de uma função.

# hello world

Podemos criar um _Console Application_ para realizar nosso primeiro hello world em F#. O projeto 
conterá um arquivo chamado Program.fs. _(o nome do arquivo pode variar de acordo com o método que você utilizou para criação, mas o conteúdo será o mesmo)_

``` fs
[<EntryPoint>]
let main argv =
    printfn "%A" argv
    0
```
Podemos notar que 

* \[\<EntryPoint\>\] é uma anotação que indica que a função anotada será o ponto de entrada da aplicação. 

* argv foi corretamente inferido como um array de strings string[]

* printfn é análogo ao Console.WriteLine, mas segue uma formatação baseado no C, é estaticamente tipado e suporta aplicação parcial _(não se preocupe se não entender o que é aplicação parcial, falaremos sobre ele posteriormente)_

* O retorno da função main é um inteiro, nesse caso 0 _(O retorno de uma aplicação de console normalmente é um inteiro que indica se a operação foi executada com sucesso. Por convenção zero signigica sucesso)_

Podemos adicionar nossa função add ao hello world

``` fs
let add a b = a + b

[<EntryPoint>]
let main argv =
    printfn "%A" argv
    let result = add 20 22
    printfn "O resultado é: %i" result
    0
```

Se tudo der certo, quando executar a aplicação, vocé verá
```bash
[||]
O resultado é: 42
```

O primeiro output é a representação textual de um array, referente ao primeiro printfn da nossa função. Já o segundo é o que nos interessa, e de fato ele somou e mostrou corretamente o resultado esperado, 42.

Esse foi um post inicial, para nos ambientarmos com valores, funções e inferência de tipos em F#. Nos posts seguintes todos esses itens ainda serão retomados com mais detalhe e profundidade.

Obrigado e até mais!