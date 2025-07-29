import { BOOKS_URL } from "../envs";
import { IBooksRepository } from "./booksRepository.type";



export class BooksRepository implements IBooksRepository {
    async getBooks(){
        try{
            const response  = await fetch(BOOKS_URL)     
            
            return await response.json()
        }catch(err){
            throw new Error("Error fetching books")
        }
            
    }
}