import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: string[]=['edwin','Avila','coronado'];

  hello(){
    alert("hola");
  }
  //el metoo delete user recibe un usuario desde el html 
  //creamos un for para validar si el usuario coincide 
  //con el arreglo que tenemos en users
  //
  delete(user){
    for(let i = 0;  i < this.users.length; i++){
      if(user==this.users[i]){
        this.users.splice(i, 1);
      }

    }

  }

  constructor() { }

  ngOnInit() {
  }

}
