import { AModule } from './../a/a.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, AModule.forRoot()
  ]
})
export class NonLazyLoadedModule { }
