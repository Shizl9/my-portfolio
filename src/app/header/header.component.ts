import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
studentName:string="sheika"
profileImage :string="assets/kitte.jpg"
 isDisabled = true
 masseg=""
 sayHi(){
 console.log("Button was clicked!")
 this.masseg="Button was clicked!"
 }
}
