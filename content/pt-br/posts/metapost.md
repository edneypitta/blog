---
title: Qual a stack deste blog?
date: 2017-04-07
layout: Post
route: /pt-br/stack-do-blog
---

Escrever um _blog post_ já é complicado o suficiente para que tenhamos que pensar em outras variáveis como gestão do banco de dados e servidor _web_, por exemplo. Tentei aqui, simplificar o máximo possível para focar no conteúdo, ainda que a flexibilidade de edição fosse muito importante para mim.

Plataformas como _medium_ são excelentes no quesito simplicidade, mas nâo tinham a flexibilidade desejada. Bem como _Wordpress_ é ótimo quando o assunto é flexibilidade, mas que vem com um _overhead_ grande.

## developer experience & stack

Verificar como o post está ficando enquanto eu escrevo, deploy automatizado, e versionamento dos _posts_ era tudo que precisava.

Acabei optando por um [gerador de site estático](https://phenomic.io/) que tem como _output_ um site em React, porque acredito que as aplicações SPA fornecem a melhor experiência para o usuário/leitor.

O [Netlify](https://www.netlify.com/) está integrado ao repositório hospedado no GitHub, logo quando subo uma atualização para o repositório, o site em produção é automaticamente atualizado.

 Escrevo os _posts_ em Markdown e vejo o conteúdo conforme salvo através do [_hot reloading_](https://gaearon.github.io/react-hot-loader/).

Utilizo _git branches_ para versionamento dos _posts_, apenas conteúdos da _branch **master**_ irão para produção. A _branch **draft**_ possui o conteúdo em progresso, ainda não concluído.

Tenho total liberdade sobre a estilização do conteúdo. Se algo no _markdown_ nâo me atender, posso simplesmente adicionar **Html & CSS**.

``` html
<div class="tip">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit
</div>
```
Irá renderizar
<div class="tip">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit
</div>

## flow

Espero que o fluxo de escrita seja algo próximo à imagem abaixo.


Se surgirem adaptações irei editar este _post_.
