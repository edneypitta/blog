---
title: Funcões matemáticas aplicadas
date: 2017-04-21 00:00.000 -3
layout: Post
route: /pt-br/funcoes-matematicas-aplicada
description: funcões matemáticas aplicadas para gerar partículas com base na largura do display
---

Existem alguns triângulos no plano de fundo desse blog (visíveis apenas em Desktop) que foram gerados através de uma biblioteca chamada [Particles.js](https://github.com/VincentGarreau/particles.js/).

Quando estava desenvolvendo o _layout_ tentei fixar um número que não atrapalhasse a leitura do texto, mas que ao mesmo tempo gerasse um efeito legal.

Quando se fixa um número de partículas, em _display_ grande, parece que tenho poucas partíclas. Já no _display_ pequeno parece muito denso, atrapalhando a leitura.

Foi então, que percebi que o **valor de partículas deveria variar em função da largura do _display_**.

## restrições

Eu tinha algumas restrições encontradas empiricamente:
1. Quando a largura é pequena, então não devo mostrar nenhuma partícula;
2. Quando a largura é mediana, gostaria de ter 7 partículas;
3. Quando a largura é grande, gostaria de ter 32 partículas;

Esconder as partículas quando o display é pequeno, é uma tarefa simples com _media querys_:
```css
.particles {
  @media (--small) {
    display: none;
  }
}
```

Agora nos resta descrever as duas últimas restrições.

Se traçar dois eixos, sendo X o número de partículas e Y o número que representa a largura do _display_ poderíamos representar as duas últimas restrições como dois pontos no plano cartesiano:

![plano cartesiadno](/assets/funcoes-matematicas-aplicadas/plano-cartesiano.jpg)

Agora, se encontrar a função que passa por esses pontos encontrará também a função que descreve as restrições. 

O comportamento que você espera entre um ponto e outro determina a função que será preciso procurar. Por exemplo, se precisar de um segmento linear, uma reta será capaz de satisfazer suas necessidades. Se precisar de um segmento acentuado, talvez uma função quadrática seja um bom ponto de partida. Para este problema, uma função linear foi o suficiente.

## encontrando a função afim

Encontrar a função linear é bem simples. Substituimos os dois pontos pela estrutura da função linear e encontramos os coeficientes para formar a função.

![encontrar função linear](/assets/funcoes-matematicas-aplicadas/funcao-linear.jpg)

Logo, a função encontrada é **f(x) = 0.0205x - 7.3442**
(caso deseje somente saber a função linear, sem os cálculos envolvidos é possível utilizar [um software online para isso](http://www.webmath.com/equline1.html)).

Agora que encontramos a função, é só adicionarmos ao nosso componente de Partículas:
``` diff
import React from "react"

import Particles from "react-particles-js"
import config from "./config.yml"

import {particles} from "./index.css"

+let linearParticlesGenerator = x => 0.0205 * x - 7.3442

const ParticlesContainer = () => {
+ let particles = linearParticlesGenerator(window.innerWidth)
+ config.particles.number.value = particles

  return (
    <div className={particles}>
      <Particles params={config}
        width={'100%'} height={'100%'}
        style={{position:"fixed", "zIndex": "-1", display: "block"}}/>
    </div>
  )
}

export default ParticlesContainer
```

Temos assim partículas dinamicamente geradas que respeitam todas as nossas restrições. 

É possível gerar funções mais robustas envolvendo mais variáveis ou comportamentos mais sofisticados, mas para este problema, esse é a solução que forneceu o melhor resultado sobre o tempo investido.

Esse foi um breve artigo para lembrar que quando se tem alguns exemplos e o comportamento esperado, é possível encontrar funções matemáticas que descrevem suas restrições.