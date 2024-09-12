//Class Book Definition
class Book{
    #isbn;
    constructor (title, author, isbn, available = 'true') {
        if ((typeof title !== "string") || (typeof author !== "string"))
            {
                console.log('Enter a valid Book name or Author name')
                return
            } 
        else
            {this.title = title;
            this.author = author;}    
        
            
        this.#isbn = isbn;
        this.available = available;
    }

    borrowBook(){
        
        if (this.available == 'true')
            {console.log (`This ${this.title} book is available and will now be borrowed`)
            this.available = 'false'}
        else
            console.log(`This ${this.title} book is not available. Check later`)
    }

    returnBook(){
        
        if(this.available == 'true')
            {console.log (`This ${this.title} Is already in the store `)
            return;
    }
        else
        {this.available = 'true'
        console.log((`This ${this.title} book is has been returned and is now available`))}
    }

    getisbn(){
        return this.#isbn;
    }
 } 

//Class Lbrary definition 
class Library{
    constructor (){
    this.Shelf = [];
    
}
    
     addBook(Book){
        const existingBook = this.Shelf.find(b => b.title === Book.title)
        if (existingBook){
            console.log(`Duplicate Book`)
            return ;
        }
        this.Shelf.push(Book);
        console.log(`This ${Book.title} book has been Added to the Library` )
        
    };
    showbook(){
      console.log('We have the following Books')
        this.Shelf.forEach((Book => {
            console.log(Book.title)
        }));
    };

    removebook(isbnVal){
        const searchBook = this.Shelf.find(B => B.getisbn() === isbnVal)  
       // console.log('Before Splice', this.Shelf)
        if (searchBook){
           // console.log(searchBook)
            this.Shelf.splice(searchBook, 1)
            console.log('After Splice', this.Shelf, )
        }
    }

    findBookbytitle(Title){
        const searchBook = this.Shelf.find(B => B.title === Title)  
        if (searchBook){
            console.log(`The book '${searchBook.title}'  is available and below are the details` )
            console.log(searchBook)
        }
        else
            console.log('The book does not exit')
}}
//Class Digital Library Definition
class DigitalLibrary extends Library{
    constructor(){
        super();
    }
    downloadBook(isbn) {
        console.log('books in library:', this.Shelf.map(Book => Book.title));
        const searchBook = this.Shelf.find(index => index.getisbn() === isbn)  
        if (searchBook){
            console.log(`Downloading ${searchBook.title} with ISBN ${searchBook.getisbn()}`)
        }
        else
            console.log('The book with isbn', isbn, 'doesnot exist' )
        }
    }

   //----------------------------------------------------------------------------------
   //TEST CASES
    Book1 = new Book('Richest man in Babylon', 'Carlson', '1234567');
    Book2 = new Book('Eat that Frog', 'Hitman', '1234568');
    Book3 = new Book('Dracula', 'Anderson', '1234569');
   
    console.log('The ISBN for ', Book1.title, 'is ', Book1.getisbn());//teting the getter for the private Property
   
    Book1.borrowBook();
    Book1.borrowBook();
    Book1.returnBook();
    Book1.returnBook();
   
   Library1 = new Library();
   Library1.addBook(Book1);
   Library1.addBook(Book3);
   Library1.addBook(Book2);
   Library1.removebook('1234567');
   
   // Library1.findBookbytitle('Insanity');
   DigLab1 = new DigitalLibrary ();
   DigLab1.addBook(Book2);
   DigLab1.addBook(Book3);
   DigLab1.addBook(Book1);
   DigLab1.downloadBook('1234567');
   DigLab1.downloadBook('1234561')
