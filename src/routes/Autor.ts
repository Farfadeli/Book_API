import { Router } from 'express';
import { getAuthors, getAuthorsById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/Autor';

const router = Router();

router.get('/api/auteur', getAuthors);
router.get('/api/auteur/:id', getAuthorsById);
router.post('/api/auteur', createAuthor);
router.put('/api/auteur/:id', updateAuthor);
router.delete('/api/auteur/:id', deleteAuthor);

export default router;
