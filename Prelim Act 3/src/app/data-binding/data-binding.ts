import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [ FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',

})
export class DataBinding {
message = 'Data-Binding Demonstration';
imageUrl = "https://images.pexels.com/photos/9122760/pexels-photo-9122760.jpeg";
w = 150;
h = 150;
isHighlighted = true;
altText ='cat picture';
textColor = 'pink';
yourName = 'Arjee Emmanuel Abella';

count = 0;
increment() {
  this.count++;
}
decrement() {
  this.count--;

}
// Interpolation
studentName = "Arjee Emmanuel Abella";
score = 95;

// Property binding
imageUrls = "https://images.pexels.com/photos/1437466/pexels-photo-1437466.jpeg";
isDisabled = true;

// Attribute binding
colSpanValue = 3;

// Class binding
isPassing = true;

// Style binding
boxColor = "Orange";
boxSize = "150px";

}
