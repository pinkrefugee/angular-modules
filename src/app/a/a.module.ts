import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AService } from '../a.service';
import { BService } from '../b.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AModule { 
  static forRoot() {
    return {ngModule: AModule, providers: [AService]};
  }
  static forChild() {
    return {ngModule: AModule, providers: [BService]};
  }
}
