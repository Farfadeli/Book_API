import express, { Request, Response } from 'express';

//Import des routes
import BooksRoutes from './routes/Books';
import AutorRoutes from './routes/Autor';

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 8000;

//ROUTES
app.use(BooksRoutes);
app.use(AutorRoutes);

// Port listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
