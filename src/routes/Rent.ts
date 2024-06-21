import { Router } from 'express';
import { rentBookById, returnBookById } from '../controllers/Rent';

const router = Router();

router.post('/api/emprunts/:id', rentBookById);
router.put('/api/emprunts/:id', returnBookById);

export default router;
