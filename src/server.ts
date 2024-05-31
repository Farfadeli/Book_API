import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.json({ "Titre": "Ma bibliothèque en ligne" });
});


// Routes GET
app.get("/api/livre", (req: Request, res: Response) => {
    res.status(200).json({ livre: "Not found" })
})

app.get("/api/livre/:id", (req: Request, res: Response) => {
    res.status(200).json({ livre: "Not found" })
})

app.get("/api/livre/:id/quantite", (req: Request , res : Response) => {
    res.status(200).json({quantite : 0})
})

app.get("/api/auteur" , (req : Request , res : Response) => {
    res.status(200).json({auteur : "Nicolas"})
})

app.get("/api/auteur/:id", (req : Request , res : Response) => {
    res.status(200).json({auteur : "Baptiste"})
})

app.get("/api/recherche/:mots" , (req : Request , res : Response) => {
    res.status(200).json({result : "Les misérable"})
})




// Port listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});