import dbPromise from '../config/database';
import { IUser } from '../interfaces/User';

const createUser = async (user: IUser): Promise<void> => {
    const db = await dbPromise;
    const personnes = await db.run('INSERT INTO personnes (nom, prenom, email) VALUES (?, ?, ?)', user.nom, user.prenom, user.email);
};

export { createUser };
