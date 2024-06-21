import express, { Request, Response } from 'express';

//Import des routes
import BooksRoutes from './routes/Books';
import AutorRoutes from './routes/Autor';
import UserRoutes from './routes/User';
import RentRoutes from './routes/Rent';

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 8000;

//ROUTES
app.use(BooksRoutes);
app.use(AutorRoutes);
app.use(UserRoutes);
app.use(RentRoutes);

// Port listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
