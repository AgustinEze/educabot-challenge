import { Book } from "../models/book.ts";
import { BooksRepository } from "../repositories/booksRepository.ts";
import { IBooksRepository } from "../repositories/booksRepository.type.ts";

export interface IBooksProvider {
  getBooks: () => Promise<Book[]>;
}

export class BooksProvider implements IBooksProvider {
  private repository: IBooksRepository;

  constructor(booksRepository: BooksRepository) {
    this.repository = booksRepository;
  }

  async getBooks() {
    try{
      return await this.repository.getBooks();
    }catch(error){
      throw new Error("Error in books repository")
    }
  }
}
