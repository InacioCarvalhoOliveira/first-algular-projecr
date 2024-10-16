import { Component, Input, input } from '@angular/core';
import { Signal } from '@angular/core';

//Input decorator and input special function

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required:true}) avatar!: string;
@Input({required:true}) name!: string;

get imagePath() {
  return '../assets/users/' + this.avatar;
}
  onSelectUser(){

  }

}
