import { Component, OnInit,Input, ContentChild, AfterContentInit } from '@angular/core';

import {NgModel, FormControlName} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label:string
  @Input() errorMessage:string

  input: any

  //utilizado em template forms
  @ContentChild(NgModel) model:NgModel

  //utilizando reactive forms
  @ContentChild(FormControlName) control : FormControlName
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(){
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com a diretiva NgModel ou FormControlName')
    }

  }
  hasSuccess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
