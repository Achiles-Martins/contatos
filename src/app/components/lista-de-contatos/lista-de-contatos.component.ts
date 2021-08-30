import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[] = [
    {
      nome: "José Carioca 1",
      email: "ze@malandro.com",
      telefones: ["11111-1111"]
    },
    {
      nome: "José Carioca 2",
      email: "ze@malandro.com",
      telefones: ["22222-2222"]
    },
    {
      nome: "José Carioca 3",
      email: "ze@malandro.com",
      telefones: ["33333-3333"]
    },
    {
      nome: "José Carioca 4",
      email: "ze@malandro.com",
      telefones: ["44444-4444"]
    },
    {
      nome: "José Carioca 5",
      email: "ze@malandro.com",
      telefones: ["55555-5555"]
    },
    {
      nome: "José Carioca 6",
      email: "ze@malandro.com",
      telefones: ["66666-6666"]
    },
    {
      nome: "José Carioca 7",
      email: "ze@malandro.com",
      telefones: ["77777-7777"]
    },
    {
      nome: "José Carioca 8",
      email: "ze@malandro.com",
      telefones: ["88888-88888"]
    },
    {
      nome: "José Carioca 9",
      email: "ze@malandro.com",
      telefones: ["99999-9999"]
    },
    {
      nome: "José Carioca 10",
      email: "ze@malandro.com",
      telefones: ["10101-0101"]
    },
    {
      nome: "José Carioca 11",
      email: "ze@malandro.com",
      telefones: ["11111-1111"]
    },
    {
      nome: "José Carioca 12",
      email: "ze@malandro.com",
      telefones: ["12121-2121"]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
