---
title: Melhorando legibilidade de testes
date: 2017-04-14 00:00.000 -3
layout: Post
route: /pt-br/melhorando-legibilidade-testes
description: Melhorar legibilidade de testes atuando na fase de arrange. Utilizando builders ou auto mocking containers para criar um arrange mais significativo
---

Certas vezes me pego escrevendo testes pouco legíveis. Isso se dá na maioria das vezes quando a fase de **Arrange** fica muito grande.

O Arrange é a fase inicial, onde configuramos tudo que o [SUT (system under test)](https://en.wikipedia.org/wiki/System_under_test) necessita para que funcione corretamente. É onde isolamos as dependências, configuramos _mocks_, _stubs_ e qualquer outra operação necessária (mais sobre o padrão AAA [aqui](https://www.lambda3.com.br/2010/08/testando-com-aaa-arrange-act-assert/)).

Acredito que um dos principais benefícios dos testes é **comunicar de forma clara ao mundo as intenções dos componentes testados**. Quando a legibilidade do teste é baixa, o atrito para se entender o componente aumenta drasticamente.

## creational patterns

[Padrões criacionais](https://en.wikipedia.org/wiki/Creational_pattern) podem ajudar com a complexidade de se criar dependências de forma mais simples, e podem diminuir a carga cognitiva associada à leitura do teste.

Um teste com uma quantidade considerável de arrange
``` cs
[Fact]
public void ApplyDiscountShouldReturnCalculatedDiscount()
{
    var productMock = new Mock<IProducts>("chicocode.io");

    var total = 100;
    var cartMock = new Mock<ICart>();
    cartMock.Setup(x => x.GetTotal())
        .Returns(total);

    var discountMock = new Mock<IDiscount>();
    discountMock.Setup(x => x.Calculate(It.IsAny<decimal>()))
        .Returns<decimal>(x => x * .5m);

    var sut = new ProductController(
      productMock.Object,
      cartMock.Object,
      discountMock.Object);

    sut.ApplyDiscount()
        .Should()
        .Be(total * .5m);
}
```

poderia ser reescrito em algo como
``` cs
[Fact]
public void ApplyDiscountShouldReturnCalculatedDiscount()
{
    var total = 100;

    var sut = builder
        .WithCartTotal(total)
        .WithHalfDiscount()
        .Build();

    sut.ApplyDiscount()
        .Should()
        .Be(total * .5m);
}
```
(código fonte do [builder](https://github.com/chicocode/better-arrange/blob/builder-pattern/Test/Builder/ProductControllerBuilder.cs) omitido para simplecidade)

## auto mocking container

Outra opção é utilizarmos um container para criar _Mocks_ das dependências automaticamente. Podemos utilizar [**Autofixture como um container de mocks**](http://blog.ploeh.dk/2010/08/19/AutoFixtureasanauto-mockingcontainer/) para realizar essa tarefa de uma forma fácil.
``` cs
[Theory]
[AutoMoqData]
public void ApplyDiscountShouldReturnCalculatedDiscount(
   Mock<ICart> cartMock,
   Mock<IDiscount> discountMock,
   decimal totalValue,
   ProductController sut)
{
   discountMock.Setup(x => x.Calculate(totalValue))
       .Returns<decimal>(x => x * .5m);

   cartMock.Setup(x => x.GetTotal())
      .Returns(totalValue);

   sut.ApplyDiscount()
       .Should()
       .Be(totalValue * .5m);
}
```

Além do mais, neste caso, a adição de um parâmetro ao construtor do **ProductController** não quebraria a compilação do projeto.

<div class="tip">
  <strong>TRADE-OFF</strong>
  <p>
    Quando utilizamos auto mocking container, perdemos a declaratividade para saber como o sistema  sob teste é criado. Perceba no código acima que como o SUT é criado pelo Autofixture, logo não tenho uma informação clara sobre quais os passos necessários para se criar um ProductController.
  </p>
  <p>
    É necessário avaliar o impacto na clareza sobre como SUT serão criados.
  </p>
</div>

## links
* Código Fonte: [https://github.com/chicocode/better-arrange](https://github.com/chicocode/better-arrange)
* Foto base por Martin Jenberg: [https://unsplash.com/photos/sUlEmXjrRxI](https://unsplash.com/photos/sUlEmXjrRxI)
