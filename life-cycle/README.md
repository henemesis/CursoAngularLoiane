# Curso Angular #15: Ciclo de vida do Componente  
  
## Eventos do Ciclo de Vida do Angular  
    
* `ngOnChanges`: acontece antes do `ngOnInit` e quando o valor do `property-binding` é atualizado;  
  
* `ngOnInit`: executado quando o component é iniciado;  
  
* `ngDoCheck`: verificado a cada ciclo de verificação de mudança;    
  
* `ngAfterContentInit`: executado depois de inserir conteúdo externo na view;  
  
* `ngAfterContentChecked`: executado a cada verificação de conteúdo inserido;  
  
* `ngAfterViewChecked`: primeiro faz uma verificação do conteúdo inserido na view / depois, verificação no conteúdo filho;  
  
* `ngOnDestroy`: antes da diretiva / component a ser destruído;  
  
  
## `ngOnInit`  
  
Responsável por fazer a chamada no servidor, obtendo os dados para mostrar no template do nosso componente.  
  
## `ngOnChanges`  
  
Usado principalmente na mudança dos input-properties.  
  

## OBS:

Os life cycles hooks são interfaces e precisam ser inicializados na classe (`export class` logo após implements); 
