import { Router } from 'express';
import { getAuthors, getAuthorsById, createAuthor } from '../controllers/Autor';

const router = Router();

router.get('/api/auteur', getAuthors);
router.get('/api/auteur/:id', getAuthorsById);
router.post('/api/auteur', createAuthor);

export default router;
