import dbPromise from '../config/database';
import { IBooks } from '../interfaces/Books';
import { IAutor } from '../interfaces/Autor';

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
    await db.run(
        'INSERT INTO livres (titre, annee_publication, quantite, created_at) VALUES (?, ?, ?, ?)',
        book.titre,
        book.annee_publication,
        book.quantite,
        book.created_at
    );
};

const updateAuteur_book = async (id: number, authorId: number): Promise<void> => {
    const db = await dbPromise;
    await db.run('INSERT INTO auteur_livre (id_livre, id_auteur) VALUES (?, ?)', id, authorId);
};

const getBookByDate = async (date: string): Promise<IBooks[]> => {
    const db = await dbPromise;
    const books = await db.all('SELECT * FROM livres WHERE created_at = ?', date);
    return books;
};

export { getAllBooks, getBookById, getBookQuantity, addBook, updateAuteur_book, getBookByDate };
