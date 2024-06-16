'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const sqlite3_1 = require('sqlite3');
const db = new sqlite3_1.Database('./src/livres.db');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.json({ Titre: 'Ma bibliothèque en ligne' });
});
// Routes GET
app.get('/api/livre', (req, res) => {
    db.serialize(() => {
        var resultat = [];
        db.each(
            'SELECT * FROM livres',
            (err, row) => {
                if (err) {
                    throw err;
                } else {
                    resultat.push({
                        id: row.id,
                        titre: row.titre,
                        annee_publication: row.annee_publication,
                        quantite: row.quantite
                    });
                }
                console.log(row);
            },
            () => {
                res.status(200).json(resultat);
            }
        );
    });
});
app.get('/api/livre/:id', (req, res) => {
    res.status(200).json({ livre: 'Not found' });
});
app.get('/api/livre/:id/quantite', (req, res) => {
    res.status(200).json({ quantite: 0 });
});
app.get('/api/auteur', (req, res) => {
    res.status(200).json({ auteur: 'Nicolas' });
});
app.get('/api/auteur/:id', (req, res) => {
    res.status(200).json({ auteur: 'Baptiste' });
});
app.get('/api/recherche/:mots', (req, res) => {
    res.status(200).json({ result: 'Les misérable' });
});
// Port listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
