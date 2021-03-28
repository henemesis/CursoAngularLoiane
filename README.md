
# Anotações

## O angular tem 8 blocos principais

* Componentes;
* Diretivas;
* Roteamento;
* Serviços;
* Templates;
* Metada;
* Data Binding;
* Injeção de Depedências;

## Anotações de Aula...  
* Interpolação: projeto helloWorld --> arquivo *cursos.component.html*  
  
* Observar arquivo *cursos.component.ts* --> anotações sobre o TS  
  
* Arquivo *cursos.service.ts* --> Anotações sobre a classe Service  
  
* Arquivo *meu-primeiro.component.ts* --> Anotações sobre a construção de componentes de forma manual  
  
* Arquivo *app.component.html* --> mais anotações sobre interpolação  
  
* Arquivo *app.component.html* --> método "main". É o componente principal da aplicação!

## Cap 02 Aula 01 = Data-binding -- Pacote: data-binding  
* data-binding.component.html --> {{ url }} == guia de boas práticas do Angular.  
  
* **Property Binding:** É o valor do component para o template  

## Cap 4 Aula 10 - Criando uma diretiva de atributo: ElementRef e Renderer
  
O que é uma **diretiva** == É um componente sem template. Tratamos somente a lógica!  
  
* Diretivas estruturais = ngIf, ngFor, ngSwitch;  
  
* Diretivas de atributos = ngStyle, ngClass, ngContent;  
  

A **diretiva** é um componente que poderá ser usada em **toda a aplicação**;  

Quando não souber qual atributo precisa-se alterar, basta utilizar um **console.log** para encontrar o elemento  
a ser modificado!  
  
**ElementRef**: faz acesso direto as tags, o que representa vulnerabilidade de segurança
na aplicação.  
  
No Angular 11.2.2 utilizamos o **Render2** no lugar do Render e **.setStyle** no lugar de this._renderer.
**setElementStyle**

* @ --> representa um metadados do Angular.  
