import dbPromise from '../config/database';
import { IRent } from '../interfaces/Rent';

const rentBook = async (rent: IRent): Promise<void> => {
    const db = await dbPromise;
    await db.run('INSERT INTO emprunt (id_livre, id_personne, date_emprunt) VALUES (?, ?, ?)', rent.id_livre, rent.id_personne, rent.date_emprunt);
};

const returnBook = async (id: number): Promise<void> => {
    const db = await dbPromise;
    await db.run(
        'UPDATE emprunt SET date_retour = ? WHERE id = ?',
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

const getRent = async (id: number): Promise<IRent> => {
    const db = await dbPromise;
    const rent = await db.get('SELECT * FROM emprunt WHERE id = ?', id);
    return rent;
};

export { rentBook, returnBook, getRent };
