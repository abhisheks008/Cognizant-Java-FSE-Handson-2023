import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 
 constructor(private bookService: BookService) { }
    isbn:string = "";
    quantity:number = 0;
    books:Array<any> = [];
 
  ngOnInit(): void {
        this.books = this.bookService.getBooks();
  }

 
  updateQuantity(){
    
    // invoke the service method and update the quantity
    this.bookService.updateQuantity(this.isbn, this.quantity);
  }

}
