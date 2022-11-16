<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Digital_Tree.svg/800px-Digital_Tree.svg.png" width="150" height="150" alt="logo_tree.png"/></p>  
<h5 align="center"><a href="https://commons.wikimedia.org/wiki/Category:Tree_icons#/media/File:Digital_Tree.svg">[Source: Wikipédia]</a></h5>  
  
## O que este módulo faz?  
- Ele faz a listagem dos arquivos e diretórios especificados pelo usuário em formato `JSON`, similar ao comando `Tree` de diversos sistemas operacionais.  
  
## Instalação:  
- Rode o código abaixo para instalar via `NPM`:  
  
```bash  
$ npm i @killovsky/tree  
```  
  
- Rode o código abaixo para instalar via `GIT`:  
```bash  
$ git clone https://github.com/KillovSky/Tree.git  
```  
  
## O que este módulo tem de especial?  
- Assim como o da [NASA](https://github.com/KillovSky/NASA), muitas coisas, confira abaixo:  
  
------  
> 1. Neste módulo, os erros não afetam o funcionamento, o que significa que apesar de qualquer erro, ele ainda retornará os dados.  
>  
> 2. Os erros serão inseridos na resposta com uma explicação sobre o que causou eles, facilitando para você entender.  
>  
> 3. Não existem dependências de módulos de terceiro, tudo é feito usando o puro `Node.js`.  
>  
> 4. Cada linha do código possui uma explicação do que está rodando ou vai rodar, ou seja, o código INTEIRO é explicado, linha por linha.  
>  
> 5. E muitas outras coisas, confira o código para entender!  
------  
  
## Como testar este módulo:  
- Basta abrir um terminal na pasta do módulo e digitar:  
  
```bash  
$ npm test  
```  
  
## Como utilizar este módulo:  
- Existem diversas formas de utilizar, mas se tratando de uma função que não requer `promises` ou similar, irei explicar o melhor meio abaixo. 
- Clique em uma das linhas/setas abaixo para exibir os detalhes!  
  
<details>  
<summary><code>Descrição de cada parâmetro da execução:</code></summary>  
  
```javascript  
// Function especificada  
View.init('local')  
  
/* ------------------------------------- *  
* 1° - Local  
* Valores: string  
* Padrão: './'  
* ------------------------------------- */  
  
// Function sem especificar  
View.init()  
  
// Retorna o ambiente  
View.env()  
  
// Reseta o ambiente  
View.reset()  
  
// Retorna a package JSON  
View.pack()  
  
```  
  
</details>   
  
<details>  
<summary><code>Exemplos de código + código utilizável:</code></summary>  
  
```javascript  
// Modo de uso padrão:  
const tree = require('@killovsky/tree');  
const data = tree.View.init('LOCAL');  
// Faça seu código baseado na object 'data' aqui  
// Exemplo: console.log(data);  
  
// Exemplo de uso pronto:  
const tree = require('@killovsky/tree');  
const data = tree.View.init('LOCAL');  
console.log(data);  
```  
  
</details>  
  
<details>  
<summary><code>Exemplo de resultado com explicações:</code></summary>  
  
```JSON  
{  
  "name": "String | Nome do módulo",  
  "description": "String | Descrição do módulo",  
  "usage": {  
    "general": "String | Mensagem sobre o módulo",  
    "examples": "Array de Strings | Formas de usar este módulo"  
  },  
  "helps": "Array de Strings | Dicas sobre o módulo",  
  "exports": {  
    "env": "String | Nome padrão da função de ambiente",  
    "init": "String | Nome padrão da função de tree",  
    "pack": "String | Nome padrão da função de package.json",  
    "reset": "String | Nome padrão da função de resetar"  
  },  
  "parameters": {  
    "ambient": {  
      "arguments": "Boolean / Object | Caso precise exportar variáveis, elas estarão descritas aqui",  
      "description": "String | Descrição deste parâmetro em especifico",  
      "type": "String | Tipos de valor que a key abaixo retorna ou que vem por padrão",  
      "value": "Boolean / Function | Mesma coisa de cima"  
    },  
    "checkstats": {  
      "arguments": {  
        "localePlace": {  
          "description": "String | Descrição do que precisa nesse argumento em especifico",  
          "type": "String | Tipos de valor que a key abaixo aceita ou que vem por padrão",  
          "value": "String | Local padrão, caso nenhum seja especificado"  
        }  
      },  
      "description": "String | Descrição deste parâmetro em especifico",  
      "type": "String | Tipos de valor que a key abaixo retorna ou que vem por padrão",  
      "value": "Boolean / Function | Mesma coisa de cima"  
    }  
  },  
  "results": {  
    "description": "String | Descrição do que é esse parâmetro",  
    "type": "Boolean / Object | Tipos de valor que a key abaixo retorna ou que vem por padrão",  
    "value": "Boolean / Object | Mesma coisa de cima"  
  }  
}  
```  
  
</details>  
  
<details>  
<summary><code>Exemplo utilizável de resultado:</code></summary>  
  
- A `Object` utilizável é grande demais para ser exibida aqui, sendo 2 vezes maior que a versão explicativa acima, para conferir um exemplo utilizável, acesse a "[Github](https://github.com/KillovSky/Tree)" oficial e abra o arquivo "[utils.json](https://github.com/KillovSky/Tree/blob/master/utils.json)" ou "[Clique Aqui](https://raw.githubusercontent.com/KillovSky/Tree/master/utils.json)".  
  
</details>   
  
## Perguntas e Respostas:  
  
- Isso é bem diferente dos outros módulos seus, não é?  
> Sim, resolvi finalmente usar o `Visual Studio Code` com `ES Lint` e `AirBNB` como regra, como resultado obtive um enorme crescimento na minha tipagem de códigos, embora meu PC ainda trave um pouco com o `VS-Code`, haha.  
>  
- O que é proibido ao usar este módulo?  
> Esse módulo é puramente offline, então você não está limitado, mas mantenha em mente que utilizar em locais extremamente grandes, como a pasta `Windows` ou `System32`, pode causar uma `Memory Leak`, que travará seu processo e em casos graves e muito raros, seu computador.  
  
## Suporte  
  
- Se obtiver algum problema, você pode me dizer [Reportando nas Issues](https://github.com/KillovSky/Tree/issues).  
- Confira outros projetos meus [Acessando Isto](https://github.com/KillovSky).  
- Se gostar, pague-me um café, ele me ajudará a programar melhor, mais informações [Clicando Aqui](https://github.com/KillovSky/KillovSky#-fundings)  
  