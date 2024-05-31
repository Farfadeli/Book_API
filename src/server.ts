import express, { Request, Response } from 'express';
import sqlite3, { Database } from 'sqlite3';
import Livres from './interface/Livres';

const db = new Database("./src/livres.db")

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.json({ "Titre": "Ma bibliothèque en ligne" });
});


// Routes GET
app.get("/api/livre", (req: Request, res: Response) => {
    db.serialize(() => {
        var resultat: Livres[] = [];
        db.each("SELECT * FROM livres", (err, row: Livres) => {
            if (err) {
                throw err;
            } else {
                resultat.push({
                    id: row.id,
                    titre: row.titre,
                    annee_publication: row.annee_publication,
                    quantite: row.quantite,
                });
            }
            console.log(row)
        }, () => {
            res.status(200).json(resultat);
        });
    });
});

app.get("/api/livre/:id", (req: Request, res: Response) => {
    res.status(200).json({ livre: "Not found" })
})

app.get("/api/livre/:id/quantite", (req: Request, res: Response) => {
    res.status(200).json({ quantite: 0 })
})

app.get("/api/auteur", (req: Request, res: Response) => {
    res.status(200).json({ auteur: "Nicolas" })
})

app.get("/api/auteur/:id", (req: Request, res: Response) => {
    res.status(200).json({ auteur: "Baptiste" })
})

app.get("/api/recherche/:mots", (req: Request, res: Response) => {
    res.status(200).json({ result: "Les misérable" })
})




// Port listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});