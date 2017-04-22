---
title: Qual a stack deste blog?
date: 2017-04-07 00:00.000 -3
layout: Post
route: /pt-br/stack-do-blog
description: stack do blog, com react, phenomic, ssl e git
---

Escrever um _blog post_ já é complicado o suficiente para que tenhamos que pensar em outras variáveis como gestão do banco de dados e servidor _web_, por exemplo. Tentei aqui, simplificar o máximo possível para focar no conteúdo, ainda que a flexibilidade de edição fosse muito importante para mim.

Plataformas como _medium_ são excelentes no quesito simplicidade, mas não possuiam a flexibilidade desejada. Bem como _Wordpress_ é ótimo quando o assunto é flexibilidade, mas que vem com um _overhead_ grande.

## developer experience & stack

Verificar como o post está ficando enquanto eu escrevo, deploy automatizado, e versionamento dos _posts_ era tudo que precisava.

Acabei optando por um [gerador de site estático](https://phenomic.io/) que tem como _output_ um site em React, porque acredito que as aplicações SPA fornecem a melhor experiência para o usuário/leitor.

O [Netlify](https://www.netlify.com/), no plano _FREE_, está integrado ao repositório hospedado no GitHub. Logo quando subo uma atualização para o repositório, o site em produção é automaticamente atualizado.

O https foi configurado através do próprio painel, e o certificado gerado pelo [Let's Encrypt](https://letsencrypt.org/), também _FREE_.

 Escrevo os _posts_ em Markdown e vejo o conteúdo conforme salvo através do [_hot reloading_](https://gaearon.github.io/react-hot-loader/).

Utilizo _git branches_ para versionamento dos _posts_. Apenas conteúdos da _branch **master**_ irão para produção. A _branch **draft**_ possui o conteúdo em progresso, ainda não concluído.

Tenho total liberdade sobre a estilização do conteúdo. Se algo no _markdown_ não me atender, posso simplesmente adicionar **Html & CSS**.

``` html
<div class="tip">
 <strong>chicocode.io</strong>
</div>
```
Irá renderizar
<div class="tip">
 <strong>chicocode.io</strong>
</div>

Acredito ter chegado a um resultado bem satisfatório, estou bastante feliz com a forma como consigo formatar o conteúdo e em como posso disponibilizá-lo.
