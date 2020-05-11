import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AModule } from '../a/a.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AModule.forChild()
  ]
})
export class LazyLoadedModule { }
