import { Router } from 'express';
import { getBooks, getBooksById, getBooksQuantity, createBook, updateBooks } from '../controllers/Books';

const router = Router();

router.get('/api/livre', getBooks);
router.get('/api/livre/:id', getBooksById);
router.get('/api/livre/:id/quantite', getBooksQuantity);
router.post('/api/livre', createBook);
router.put('/api/livre/:id', updateBooks);

export default router;
