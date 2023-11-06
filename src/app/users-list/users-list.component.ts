import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Ajuste o caminho conforme necessário
import { User } from '../user'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = []; // Este é um array para armazenar os usuários recebidos

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => console.error(error)
      );
  }
}
