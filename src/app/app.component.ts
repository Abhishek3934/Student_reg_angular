import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives_ng';

  isDisplay=true;
  buttonName='hide';


  showHideFunc(){
    this.isDisplay= !this.isDisplay;
    if(this.buttonName=='hide'){
      this.buttonName='show'
    }
    else{
      this.buttonName='hide'
    }
  }

students:{id:number,name:string , age:number}[]=[
  {
      id:101,
      name:'Ram',
      age:22
  },
  {
    id:102,
    name:'Sham',
    age:23
}

]


}
