import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { QuoteService } from '../services/quote.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {
  productForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,private service:QuoteService){}

  ngOnInit(): void{
    this.productForm = this.formBuilder.group({
      name :["", Validators.required],
      email :["", Validators.required],
      password :["", Validators.required],
      phonenumber :["", Validators.required]
    })
  }

  AddProduct(){
    console.log(this.productForm.value)
    this.service.postProduct(this.productForm.value)
    .subscribe(response => {
      alert('successfully created');
    },error => {
      alert('succes')
    })
  }
}
