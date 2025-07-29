import { Book } from "../models/book";

export interface IBooksRepository {
    getBooks(): Promise<Book[]>;
    
}