import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {
  fullname = '';
  email = '';
  phone = '';
  course = '';
  year = '';
  status = '';
  notes = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
