import dbPromise from '../config/database';
import { IAutor } from '../interfaces/Autor';

const getAllAuthors = async (): Promise<IAutor[]> => {
    const db = await dbPromise;
    const autors = await db.all('SELECT * FROM auteurs');
    return autors;
};

const getAuthorById = async (id: number): Promise<IAutor> => {
    const db = await dbPromise;
    const autor = await db.get('SELECT * FROM auteurs WHERE id = ?', id);
    return autor;
};

const addAuthor = async (autor: IAutor): Promise<void> => {
    const db = await dbPromise;
    await db.run(
        'INSERT INTO auteurs (nom, prenom, annee_naissance, annee_mort, created_at) VALUES (?, ?, ?, ?, ?)',
        autor.nom,
        autor.prenom,
        autor.annee_naissance,
        autor.annee_mort,
        new Date().toLocaleString('en-GB', {
            second: '2-digit',
            minute: '2-digit',
            hour: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    );
};

const updateAuthorById = async (id: number, author: IAutor): Promise<void> => {
    const db = await dbPromise;
    await db.run(
        'UPDATE auteurs SET nom = ?, prenom = ?, annee_naissance = ?, annee_mort = ?, updated_at = ? WHERE id = ?',
        author.nom,
        author.prenom,
        author.annee_naissance,
        author.annee_mort,
        new Date().toLocaleString('en-GB', {
            second: '2-digit',
            minute: '2-digit',
            hour: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }),
        id
    );
};

const getBookByAuthor = async (id: number): Promise<IAutor[]> => {
    const db = await dbPromise;
    const books = await db.all('SELECT * FROM auteur_livre WHERE id_auteur = ?', id);
    return books;
};

const deleteAuthorById = async (id: number): Promise<void> => {
    const db = await dbPromise;
    await db.run('DELETE FROM auteurs WHERE id = ?', id);
};

export { getAllAuthors, getAuthorById, addAuthor, updateAuthorById, getBookByAuthor, deleteAuthorById };
