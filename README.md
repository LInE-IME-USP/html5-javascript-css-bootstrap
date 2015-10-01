# Aplicação para servir de base a novas ferramentas HTML5/Javascript/CSS

Projeto com ferramentas e estrutura básicas para a criação em HTML5/Javascript/CSS

## Dependências:
- NodeJS
- NPM (node package manager, na instalação do NodeJS geralmente o NPM já vem instalado junto.)
- O bin do node estar dentro do path

## Organização

A organização padrão dos diretórios é a seguinte:

- html
- css
	- min
- js
	- min
- img (para as imagens)
- lib (recursos externos)

### Pasta dist

Há uma pasta _dist_ que contêm 3 arquivos:

- index.html
- main.min.css
- main.min.js

Neles está agrupado em forma minificada todo o código gerado.

## Automatização e Comandos
Ao executar o comando `gulp` as seguintes operações são realizadas:
	
* Qualquer modificação que for salva nos arquivos será automaticamente atualizada no navegador

Há também comandos mais específicos para algumas tarefas tarefas

`gulp`
	: Inicia o servidor já com autocarregamento da página

`gulp organize`
	: Cria diretórios conforme especificado

`min`
	: Minifica as folhas de estilo e funções javascript

`gulp angularJS`
	: Separa e os arquivos do AngularJS (controllers, views e services) em pastas. Para melhor uso do recurso, é importante que os arquivos estejam propriamente identificados com *Ctrl*, *Service* ou *View* no final do arquivo. 