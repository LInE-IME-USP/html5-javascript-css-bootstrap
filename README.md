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
- Conteúdo em 4 sub-diretórios:
	- html
	- css
	- js
	- img (para as imagens)

Obs.: As pastas css e js terão também uma pasta min cada uma onde ficarão as versões minificadas das folhas de estilo e das funções JavaScrip

## Automatização
Ao executar o comando 'gulp' as seguintes operações serão realizadas
	
* Os arquivos serão movidos para as pastas correspondentes
* Serão gerados os arquivos minificados de css e js dentro das respectivas pastas min
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