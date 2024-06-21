import { Request, Response } from 'express';
import {
    getAllBooks,
    getBookById,
    getBookQuantity,
    addBook,
    addAuteur_book,
    getBookByDate,
    updateAuteur_book,
    updateBook,
    updateQuantity,
    deleteBook
} from '../models/Books';
import { getAuthorById } from '../models/Autor';

const createBook = async (req: Request, res: Response) => {
    try {
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
                    annee_publication: req.body.annee_publication
                };
                console.log(book);
                console.log();
                const addedBook = await addBook(book);
                const latestBook = await getBookByDate(created_at);
                const latestBookId = latestBook[latestBook.length - 1].id;
                if (latestBookId !== undefined) {
                    await addAuteur_book(latestBookId, authotId);

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

const updateBooks = async (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            return res.status(400).json({ error: 'Invalid id' });
        } else {
            if ((await getBookById(Number(req.params.id))) === undefined) {
                return res.status(404).json({ error: 'No book found' });
            } else {
                const updatedBook = await getBookById(Number(req.params.id));
                if (req.body.auteurId !== undefined) {
                    const verifiedAuthor = await getAuthorById(Number(req.body.auteurId));
                    if (!verifiedAuthor) {
                        return res.status(400).json('Author do not exist');
                    }
                    await updateAuteur_book(parseInt(req.params.id), req.body.auteurId);
                }
                if (!req.body.titre || !req.body.annee_publication) {
                    return res.status(400).json({ error: 'Missing parameters' });
                } else {
                    const book = {
                        titre: req.body.titre,
                        quantite: updatedBook.quantite,
                        annee_publication: req.body.annee_publication
                    };
                    await updateBook(Number(req.params.id), book);
                    res.status(200).json({ message: 'Book updated' });
                }
            }
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

const updateQuantityByID = async (req: Request, res: Response) => {
    try {
        if (!req.body.quantite) {
            return res.status(400).json({ error: 'Missing parameters' });
        } else {
            if (isNaN(Number(req.params.id))) {
                return res.status(400).json({ error: 'Invalid id' });
            } else {
                if ((await getBookById(Number(req.params.id))) === undefined) {
                    return res.status(404).json({ error: 'No book found' });
                } else {
                    const quantity = req.body.quantite;
                    await updateQuantity(Number(req.params.id), quantity);
                    res.status(200).json({ message: 'Quantity updated' });
                }
            }
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

const deleteBooksById = async (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            return res.status(400).json({ error: 'Invalid id' });
        } else {
            if ((await getBookById(Number(req.params.id))) === undefined) {
                return res.status(404).json({ error: 'No book found' });
            } else {
                await deleteBook(Number(req.params.id));
                res.status(200).json({ message: 'Book deleted' });
            }
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

export { getBooks, getBooksById, getBooksQuantity, createBook, updateBooks, updateQuantityByID, deleteBooksById };
