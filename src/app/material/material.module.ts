import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatOptionModule, MatSelectModule } from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule
]
@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
