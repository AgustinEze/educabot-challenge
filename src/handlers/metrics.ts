import { Request, Response } from "express";
import { IBooksRepository } from "../repositories/booksRepository.type.ts";
import { MetricsUtils } from "./metrics.utils.ts";
import { Book } from "../models/book.ts";

interface GetMetricsQuery {
  author?: string;
}
interface IMetricsHandler {
  get: (
    req: Request<{}, {}, {}, GetMetricsQuery>,
    res: Response<ResponseType>
  ) => Promise<void>;
}

interface ResponseType {
  mean_units_sold: number;
  cheapest_book: Book | null;
  books_written_by_author: Book[];
}
export class MetricsHandler implements IMetricsHandler {
  booksRepository: IBooksRepository;
  constructor(booksRepository: IBooksRepository) {
    this.booksRepository = booksRepository;
  }

  get = async (
    req: Request<{}, {}, {}, GetMetricsQuery>,
    res: Response<ResponseType>
  ) => {
    const { author } = req.query;
    const books = await this.booksRepository.getBooks();
    const metricsUtils = new MetricsUtils();
    const meanUnitsSold = metricsUtils.getMeanUnitsSold(books);
    const cheapestBook = metricsUtils.getCheapestBook(books);
    const booksWrittenByAuthor = author
      ? metricsUtils.getBooksWrittenByAuthor(books, author)
      : [];

    res.status(200).json({
      mean_units_sold: meanUnitsSold,
      cheapest_book: cheapestBook,
      books_written_by_author: booksWrittenByAuthor,
    });
  };
}
