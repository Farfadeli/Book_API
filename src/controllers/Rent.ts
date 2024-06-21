import { Request, Response } from 'express';
import { rentBook, returnBook, getRent } from '../models/Rent';
import { getBookById, updateQuantity } from '../models/Books';
import { getUser } from '../models/User';

const rentBookById = async (req: Request, res: Response) => {
    try {
        if (!req.body.id_personne) {
            return res.status(400).json({ error: 'Missing parameters' });
        } else {
            if (isNaN(Number(req.params.id))) {
                return res.status(400).json({ error: 'Invalid book id' });
            } else {
                const findedBook = await getBookById(Number(req.params.id));
                const findedUser = await getUser(Number(req.body.id_personne));
                console.log(findedUser);
                if (findedBook === undefined || null) {
                    return res.status(404).json({ error: 'No book found' });
                } else {
                    if (findedUser === undefined || null) {
                        return res.status(404).json({ error: 'No user found' });
                    } else {
                        if (findedBook.quantite === 0) {
                            return res.status(400).json({ error: 'No book available' });
                        } else {
                            const rentDate = new Date().toLocaleString('en-GB', {
                                second: '2-digit',
                                minute: '2-digit',
                                hour: '2-digit',
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            });

                            const newRent = {
                                id_personne: Number(req.body.id_personne),
                                id_livre: Number(req.params.id),
                                date_emprunt: rentDate,
                                date_retour: '  '
                            };
                            await updateQuantity(Number(req.params.id), findedBook.quantite - 1);
                            await rentBook(newRent);
                            return res.status(201).json({ message: 'Book rented' });
                        }
                    }
                }
            }
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

const returnBookById = async (req: Request, res: Response) => {
    try {
        if (!req.body.id_personne || !req.body.id_livre) {
            return res.status(400).json({ error: 'Missing parameters' });
        } else {
            if (isNaN(Number(req.body.id_personne)) || isNaN(Number(req.body.id_livre))) {
                return res.status(400).json({ error: 'Invalid id' });
            } else {
                const findedBook = await getBookById(Number(req.body.id_livre));
                if (!findedBook || !(await getBookById(Number(req.body.id_livre)))) {
                    return res.status(404).json({ error: 'No user or book found' });
                } else {
                    if (!(await getRent(Number(req.params.id)))) {
                        return res.status(404).json({ error: 'No rent found' });
                    } else {
                        await updateQuantity(Number(req.body.id_livre), findedBook.quantite + 1);
                        await returnBook(Number(req.params.id));
                        return res.status(200).json({ message: 'Book returned' });
                    }
                }
            }
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

export { rentBookById, returnBookById };
