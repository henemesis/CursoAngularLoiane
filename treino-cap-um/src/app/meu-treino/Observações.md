# Passo a passo para a criação de um componente "na mão"  
  
1) Criar o projeto com: ng n nome do projeto;  
  
2) Dentro do diretório do projeto, no diretório **app**, crie o diretório com o nome do componente que você deseja desenvolver, no meu caso, meu-treino;  

3) Dentro do diretório criado, crie um arquivo para o componente, no meu caso, **meu-treino.component.ts**, lembrando-se sempre do **.component** e do **.ts**;  
  
4) Dentro do arquivo **meu-treino.component.ts**, comece criando a **class** que será **MeuTreinoComponent**;  
  
**Obs: Ao delcarar class MeuTreinoComponent, dará erro pois ela ainda não foi declarada no app.module**  
  
**Obs2: lembre-se do export na class para que as outras classes possam vê-lo!**  
  
5) Após a classe crie o **@Component** com o **selector** e o **template**;  

6) O **selector** receberá: 'meu-treino-component' e o **template** receberá a string ou objeto que o desenvolvedor deseja usar, no meu caso, utilizei uma string;  

7) Feito isso, vá ao **app-component.html** e declare a tag com o conteúdo do seletor da **meu-treino.component.ts**, ou seja, **< meu-treino-component><\meu-treino-component>**  
  
8) Deve-se ainda, criar no **app.module.ts** a declaration para o novo component, ou seja, MeuTreinoComponent na **declaration** do **@NgModule**;  
  
9) Em seguida, crie o importe para a situação acima, com: **import** **{ MeuTreinoComponent }** **from** **./meu-treino/meu-treino.component**;  
  
10) Lembrando que **./** se refere ao caminho do diretório o qual o component fora delcarado;  
  
## Finalizado o processo, teremos o nosso primeiro componente Angular criado.

