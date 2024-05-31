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
        'INSERT INTO auteurs (nom, prenom, annee_naissance, annee_mort) VALUES (?, ?, ?, ?)',
        autor.nom,
        autor.prenom,
        autor.annee_naissance,
        autor.annee_mort
    );
};

export { getAllAuthors, getAuthorById, addAuthor };
