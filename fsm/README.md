# Fullstack Master - Devpleno

Anotações e exercícios do curso Fullstack Master do Devpleno.

## Módulo 3

### Ferramentas & extensões

- [Figma](https://www.figma.com)
  Planejar e prototipar, criar assets do projeto.
- [CodeSandBox](https://codesandbox.io)
  Testar e guardar snipets de código.
- [Dribbble](https://dribbble.com)
  Inspiração de design.
- Ident-Rainbow (Extensão)
- Bracket Pair Clorizer (Extensão)

### Projeto PalpiteBox

[PalpiteBox - ](https://github.com/tcretton/palpitebox)

### Web Basics

- Frontend
  html, css, js;
- Backend
  php, js;
- DB
  MySQL, MongoDB (js), Oracle;
#### Request (Frontend) - Response(Backend)

  > Request podemos enviar dados (ex: usuario e senha, arquivos).Uma Requisição request é composto de Header e Body

  > Response podemos enviar qualquer coisa (html, JSON {Objeto js} , arquivos, dados)
  > Só exite response se houver um request anterior.
  > Response tem Header e Body, por exemplo no header informar que está sendo enviado um html, e dentro do body, vai o código html.

- Fullstack (stack = pilha)

| Backend    | Frontend   |
| ---------- | ---------- |
| (Servidor) | (Cliente)  |
| javascript | html       |
| DB         | css        |
| etc        | javascript |

_Backend:_ Regra de negócios, dados sensíveis. Processa pedidos do Frontend e envia Response(HTML, Json /favicon.ico, /styles.css, /script).

_Frontend:_ Dados públicos e UI. A comunicação sempre começa no Frontend, com uma requisição ao servidor, (GET/). Method POST, envia dados geralmente para alterar dados, informação nova. (PUT, DELETE, PATCH)

#### HTML, CSS, JavaScript (Browser)
>*HTML:* Marcação semantica, e chama estilos (.css) e scripts (JavaScript).
>*CSS:* Selecionar pela tag é a forma mais genérica.
```
h1 {
  color: red;
}
```
>Outra maneira é pela combinação de tags, formatar apenas h1 que estiver dentro de uma <div>
```
div h1 {
  color: red;
}
```
>A terceira maneira é criando classes, e identificando os elementos pelas classes.
```
.mainTitle {
  color: red;
}
````
>Também podemos selecionar um elemento pelo id.
```
#title {
  color: red;
}
````




### First-steps

Javascript

| ------------ | ------ | ------ |
| ------------ | ------ | ------ |
