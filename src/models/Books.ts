import dbPromise from '../config/database';
import { IBooks } from '../interfaces/Books';

const getAllBooks = async (): Promise<IBooks[]> => {
    const db = await dbPromise;
    const books = await db.all('SELECT * FROM livres');
    return books;
};

const getBookById = async (id: number): Promise<IBooks> => {
    const db = await dbPromise;
    const book = await db.get('SELECT * FROM livres WHERE id = ?', id);
    return book;
};

const getBookQuantity = async (id: number): Promise<number> => {
    const db = await dbPromise;
    const book = await db.get('SELECT quantite FROM livres WHERE id = ?', id);
    return book.quantite;
};

const addBook = async (book: IBooks): Promise<void> => {
    const db = await dbPromise;
    const created_at = new Date().toLocaleString('en-GB', {
        second: '2-digit',
        minute: '2-digit',
        hour: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    await db.run(
        'INSERT INTO livres (titre, annee_publication, quantite, created_at) VALUES (?, ?, ?, ?)',
        book.titre,
        book.annee_publication,
        book.quantite,
        created_at
    );
};

const addAuteur_book = async (id: number, authorId: number): Promise<void> => {
    const db = await dbPromise;
    await db.run('INSERT INTO auteur_livre (id_livre, id_auteur) VALUES (?, ?)', id, authorId);
};

const getBookByDate = async (date: string): Promise<IBooks[]> => {
    const db = await dbPromise;
    const books = await db.all('SELECT * FROM livres WHERE created_at = ?', date);
    return books;
};

const updateBook = async (id: number, book: IBooks): Promise<void> => {
    const db = await dbPromise;
    await db.run(
        'UPDATE livres SET titre = ?, annee_publication = ?, updated_at = ? WHERE id = ?',
        book.titre,
        book.annee_publication,
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
const updateAuteur_book = async (bookId: number, newAuthorId: number): Promise<void> => {
    const db = await dbPromise;
    await db.run('UPDATE auteur_livre SET id_auteur = ? WHERE id_livre = ?', newAuthorId, bookId);
};

export { getAllBooks, getBookById, getBookQuantity, addBook, addAuteur_book, getBookByDate, updateBook, updateAuteur_book };
