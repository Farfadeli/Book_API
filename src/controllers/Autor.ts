import { Request, Response } from 'express';
import { getAllAuthors, getAuthorById, addAuthor, updateAuthorById, getBookByAuthor, deleteAuthorById } from '../models/Autor';

const getAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await getAllAuthors();
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const getAuthorsById = async (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            return res.status(400).json({ error: 'Invalid id' });
        } else {
            const author = await getAuthorById(Number(req.params.id));
            if (author === undefined || author === null) {
                return res.status(404).json({ error: 'No author found' });
            } else {
                res.status(200).json(author);
            }
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const createAuthor = async (req: Request, res: Response) => {
    try {
        const { nom, prenom, annee_naissance, annee_mort } = req.body;

        if (!nom || !prenom || !annee_naissance) {
            return res.status(400).json({ error: 'Missing parameters' });
        }

        if (isNaN(Number(annee_naissance))) {
            return res.status(400).json({ error: 'Invalid year of birth' });
        }

        if (annee_mort !== undefined) {
            if (isNaN(Number(annee_mort))) {
                return res.status(400).json({ error: 'Invalid year of death' });
            }

            if (annee_mort < annee_naissance) {
                return res.status(400).json({ error: 'Year of death cannot be before year of birth' });
            }
        }

        const author = {
            nom,
            prenom,
            annee_naissance,
            annee_mort: annee_mort || null
        };

        await addAuthor(author);
        res.status(201).json({ message: 'Author added' });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

const updateAuthor = async (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            return res.status(400).json({ error: 'Invalid id' });
        } else {
            if ((await getAuthorById(Number(req.params.id))) === undefined) {
                return res.status(404).json({ error: 'No author found' });
            } else {
                if (!req.body.nom || !req.body.prenom || !req.body.annee_naissance) {
                    return res.status(400).json({ error: 'Missing parameters' });
                } else {
                    const author = {
                        nom: req.body.nom,
                        prenom: req.body.prenom,
                        annee_naissance: req.body.annee_naissance,
                        annee_mort: req.body.annee_mort || null
                    };
                    if (author.annee_mort !== null && author.annee_mort < author.annee_naissance) {
                        return res.status(400).json({ error: 'Year of death cannot be before year of birth' });
                    }
                    await updateAuthorById(Number(req.params.id), author);
                    res.status(200).json({ message: 'Author updated' });
                }
            }
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const deleteAuthor = async (req: Request, res: Response) => {
    try {
        if (isNaN(Number(req.params.id))) {
            return res.status(400).json({ error: 'Invalid id' });
        } else {
            if ((await getAuthorById(Number(req.params.id))) === undefined) {
                return res.status(404).json({ error: 'No author found' });
            } else {
                if ((await getBookByAuthor(Number(req.params.id))).length > 0) {
                    return res.status(400).json({ error: 'Cannot delete author with books' });
                } else {
                    await deleteAuthorById(Number(req.params.id));
                    res.status(200).json({ message: 'Author deleted' });
                }
            }
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export { getAuthors, getAuthorsById, createAuthor, updateAuthor, deleteAuthor };
