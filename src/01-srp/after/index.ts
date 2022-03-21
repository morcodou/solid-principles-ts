class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  // constructor and other methods
}

class Persistence {
  public saveToFile(book: Book): void {
    // some fs.write method to save book to file
    console.log('some fs.write method to save book to file', book.title);
  }
}

const book = new Book();
book.title = 'my';
const persistor = new Persistence();

persistor.saveToFile(book);
