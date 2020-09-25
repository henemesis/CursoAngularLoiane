# Importante  
  
É necessário declarar no **app.module.ts** o **import { FormsModule } from '@angular/forms'** e no **imports** o **FormsModule**, caso o contrário o **[NgModel]** e o **(ngModelChange)** do data-binding.component.html não funcionarão!