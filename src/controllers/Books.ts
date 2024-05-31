import { Request, Response } from 'express';
import { getAllBooks, getBookById, getBookQuantity, addBook, updateAuteur_book, getBookByDate } from '../models/Books';
import { getAuthorById } from '../models/Autor';

const createBook = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        if (!req.body.titre || !req.body.auteur || !req.body.quantite || !req.body.annee_publication) {
            return res.status(400).json({ error: 'Missing parameters' });
        } else {
            if ((await getAuthorById(req.body.auteur)) === undefined) {
                return res.status(404).json({ error: 'No author found' });
            } else {
                const authotId = req.body.auteur;

                const created_at = new Date().toLocaleString('en-GB', {
                    second: '2-digit',
                    minute: '2-digit',
                    hour: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                const book = {
                    titre: req.body.titre,
                    quantite: req.body.quantite,
                    annee_publication: req.body.annee_publication,
                    created_at: created_at
                };
                console.log(book);
                const addedBook = await addBook(book);
                const latestBook = await getBookByDate(created_at);
                const latestBookId = latestBook[latestBook.length - 1].id;
                if (latestBookId !== undefined) {
                    await updateAuteur_book(latestBookId, authotId);

                    return res.status(201).json({ message: 'Book added', newBook: addedBook });
                } else {
                    return res.status(500).json({ error: 'An error occured during the binding with the author' });
                }
            }
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await getAllBooks();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const getBooksById = async (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            return res.status(400).json({ error: 'Invalid id' });
        } else {
            const book = await getBookById(Number(req.params.id));
            if (book === undefined || book === null) {
                return res.status(404).json({ error: 'No book found' });
            } else {
                res.status(200).json(book);
            }
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const getBooksQuantity = async (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            return res.status(400).json({ error: 'Invalid id' });
        } else {
            const doesEcxist = await getBookById(Number(req.params.id));
            if (doesEcxist === undefined || doesEcxist === null) {
                return res.status(404).json({ error: 'No book found' });
            } else {
                const quantity = await getBookQuantity(Number(req.params.id));
                res.status(200).json({ quantity });
            }
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export { getBooks, getBooksById, getBooksQuantity, createBook };
