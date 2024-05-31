import { Request, Response } from 'express';
import { createUser } from '../models/User';

const createPersonnes = async (req: Request, res: Response) => {
    try {
        if (!req.body.nom || !req.body.prenom || !req.body.email) {
            return res.status(400).json({ error: 'Missing parameters' });
        } else {
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
