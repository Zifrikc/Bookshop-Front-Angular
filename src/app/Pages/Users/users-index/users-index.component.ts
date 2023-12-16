import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {
  books:any []=[];
  events:any [] =[];
  constructor(private bookservice: BooksService) { }

  ngOnInit(): void {
    this.bookservice.listarLibro().subscribe(
      (dato:any) => {
        this.books = dato;
        console.log(this.books);
      }
    )

  }

  }
