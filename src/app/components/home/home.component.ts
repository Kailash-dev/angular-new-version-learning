import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {

  ngOnInit(): void {
    
  }
  onBtnClick(){
    console.log('Button Clicked');
    let promiseEx = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("new promise is resolved")
      }, 5000);
      
    });

    promiseEx.then((data) => {
      console.log(data);
    }).catch((err) => {
      console.error(err);
    });
  }
}
