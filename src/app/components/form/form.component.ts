import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  profileForm!: FormGroup
  
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      age: [''],
    });
  }
  onSubmit(){

  }
}
