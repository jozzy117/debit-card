import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DebitCardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    DebitCardComponent,
    FormComponent
  ]
})
export class SharedModule { }
