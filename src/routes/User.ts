import { Router } from 'express';
import { createPersonnes } from '../controllers/User';

const router = Router();

router.post('/api/personnes', createPersonnes);

export default router;
