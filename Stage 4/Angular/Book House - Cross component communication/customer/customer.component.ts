import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private bookService: BookService) { }

    status:string='';
    books:Array<any> = [];
    
  ngOnInit(): void {
  
  // Fill the code
  this.display();
    this.bookService.ee.subscribe((msg:string) => {
      this.status = msg;
    });
  }

    display(){
        this.books = this.bookService.getBooks();
    }

}
