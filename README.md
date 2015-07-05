# Aplicação para servir de base a novas ferramentas HTML5/Javascript/CSS

Projeto com ferramentas e estrutura básicas para a criação em HTML5/Javascript/CSS

## Dependências:
- NodeJS
- NPM (node package manager, na instalação do NodeJS geralmente o NPM já vem instalado junto.)
- O bin do node estar dentro do path

## Rodando através do servidor embutido (dispensa instalação do Apache):
- executar no shell:
    - node basic_server.js

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

## Automatização
Ao executar o comando `gulp` as seguintes operações são realizadas:
	
* Os arquivos serão movidos para as pastas correspondentes. Caso uma pasta não exista, ela será criada
* Serão gerados os arquivos minificados de css e js dentro das respectivas pastas min
* Serão gerados os arquivos da pasta _dist_
* Qualquer modificação que for salva nos arquivos será automaticamente atualizada no navegador

<!--
## Unindo e minificando os arquivos JS:
- gulp min 
-->

<!--
	- Detalhar o funcionamento
	- Organização de diretórios
		- Mais específica
	- Retirar gulp min
 -->
