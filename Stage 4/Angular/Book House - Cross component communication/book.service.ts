import { Injectable ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  
 
   bookList:Array<any>=[
    { isbn: "ISBN 1-455-67895-1", bookName: "The Night Fire", category: "Mystery",price:750, quantity:20},           ​
    { isbn: "ISBN 7-555-07885-4", bookName: "The last bow", category: "Mystery",price:1750, quantity:50},
    { isbn: "ISBN 2-655-90795-5", bookName: "Good calories", category: "Health",price:1250, quantity:10},
    { isbn: "ISBN 7-555-06785-2", bookName: "Healing power", category: "Health",price:899, quantity:25},
    { isbn: "ISBN 9-055-32795-9", bookName: "Born to run", category: "Fitness",price:550, quantity:15},
    { isbn: "ISBN 9-185-11795-0", bookName: "Spark", category: "Fitness",price:1999, quantity:35}
   ];
   ee = new EventEmitter<string>();
  constructor() { }


  updateQuantity(isbn:string,quantity:number){
    for (let i = 0; i<this.bookList.length; i++){
        if (this.bookList[i].isbn == isbn){
            this.bookList[i].quantity = quantity;
            break;
        }
    }
    // Fill the code
    this.ee.emit(`Book with ${isbn} quantity updated to ${quantity}`);
   
  }
  
  getBooks(){
    
 // Fill the code
 return this.bookList;
  }
}
