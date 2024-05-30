![geadeLogo](https://user-images.githubusercontent.com/61987773/207887385-340c8e98-80bf-4f56-9b4f-659ae9045dc0.png)

## Sommaire

#### L'initialisation du projet

-   [Récupération du repository distant](#récupération-du-repository-distant)
-   [Initialisation](#initialisation)
-   [Démarrage du projet](#démarrage-du-projet)

#### Les différentes Routes

-   [`CONNEXION`](#pour-un-call-api-connexion)
-   [`UTILISATEUR ou ADMIN`](#pour-les-call-api-utilisateur-ou-admin)
-   [`ETABLISSEMENT`](#pour-les-call-api-etablissement)
-   [`CONVENTION`](#pour-les-call-api-convention)
-   [`USAGER`](#pour-les-call-api-usager)
-   [`ENTREPRISE`](#pour-les-call-api-entreprise)
-   [`INTERLOCUTOR`](#pour-les-call-api-interlocutor)
-   [`CONTACT`](#pour-les-call-api-contact)
-   [`POSTE_DE_TRAVAIL`](#pour-les-call-api-poste_de_travail)
-   [`OFFRE_D_EMPLOI`](#pour-les-call-api-offre_d_emploi)
-   [`PROCESSUS_OFFRE_D_EMPLOI`](#Pour-les-call-api-processus_offre_d_emploi`)
-   [`OFFRE_D_EMPLOI_EVENEMENTIEL`](#pour-les-call-api-offre_d_emploi_evenementiel)
-   [`ENTRETIEN_D_EMBAUCHE`](#pour-les-call-api-entretien_d_embauche)
-   [`DECOUVERTE`](#pour-les-call-api-decouverte)
-   [`CONTRAT_DE_TRAVAIL`](#pour-les-call-api-contrat_de_travail)
-   [`OFFRE_D_EMPLOI_INTERMEDIAIRE`](#pour-les-call-api-offre_d_emploi_intermediaire)
-   [`PROCESSUS_OFFRE_D_EMPLOI_INTERMEDIAIRE`](#Pour-les-call-api-processus_offre_d_emploi_intermediaire`)
-   [`COLLECTIVITÉ`](#pour-les-call-api-collectivite)
-   [`PARTENAIRE`](#pour-les-call-api-partenaire)
-   [`EVENT`](#pour-les-call-api-event)
-   [`COMPÉTENCES_ET_SAVOIRS_FAIRE`](#pour-les-call-api-compétences_et_savoirs_faire)
-   [`SPOUSE`](#pour-les-call-api-spouse)

## Adresse url en production

`https://geade.herokuapp.com`

## Procédure de récupération du projet

### Récupération du repository distant

1. Ouvrir son terminal (ou invité de commandes depuis windows).

2. Copier ce lien `git clone https://github.com/cybe64/a-co-r_backend.git`.

3. Coller le lien dans le terminal puis taper entrer.

4. Afin d'acceder au dossier effectuer la commande -> `cd a-co-r_backend` puis taper sur entrer.

### Initialisation

`Toujours depuis le terminal` effectuer la commande -> `npm install` afin d'installer les node_modules.

Pour ouvrir votre IDE (si c'est VS Code) faire la commande suivante `code .`

Afin de ne pas entraver le travail des collègues, penser à se creer une nouvelle branche de travail git

Dans le plus haut niveau du projet créer un fichier `.env` et y inclure

-   `PORT=<NUM_DU_PORT_DISPONIBLE>` .
-   `MONGOOSE_URL=mongodb://localhost:27017/a-co-r` (afin de connecter le projet sur la BDD local)

### Démarrage du projet

`Toujours depuis le terminal` effectuer la commande -> `npm run dev` afin de lancer le script avec le compilateur TypeScript et concurrently

### Pour un call API `CONNEXION`

<details><summary>CONNEXION</summary>
<p>

    Methode: `POST` .
       `https://geade.herokuapp.com/login`, {
                __(pour un(e) utilisateur(rice), un(e) admin(e) ou un(e) partenaire)__
            email: String
            password: String
                __(pour un(e) usager(e))__
            nom: String,
            prenom: String,
            password: String
           };

</p>
</details>

### Pour les call API `UTILISATEUR ou ADMIN`

<details><summary>CREATE</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/utilisateur/create/<ID_DE_L'ETABLISSEMENT>`, {
        email: String,
        name: String,
        male: Boolean,
        firstname: String,
        mobileNum: Number,
        isAdmin: Boolean
        password: String,
        passwordConfirmed: String,
            {
                headers: {
                Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
                };
            };
        };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/utilisateur/get/<ID_DE_L'UTILISATEUR_A_CONSULTER>,
            {
                 headers: {
                     'requesterId': <Id de l'utilisateur qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/utilisateur/get,{
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR>,
            };
        };
    };

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/utilisateur/update/<ID_DE_L'UTILISATEUR_A_MODIFIER>,{
        account:{
            name: String,
            firstname: String,
            mobileNum: String
        },
        || / &&
        {
            password: String,
            passwordConfirmed: String
        },
        || / &&
        {
            isAdmin : Boolean = false par default
        },
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR>,
            };
        };
    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/utilisateur/delete/<ID_DE_L'UTILISATEUR_A_SUPPRIMER>,{ .
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR>,
            };
        };
    };

</p>
</details>

### Pour les call API `ETABLISSEMENT`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/etablissement/create,{
        {
            "name": String,
            "adress": String,
            "zip": Number,
            "city": String
        },
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR (Valable uniquement si c'est un Admin)>,
            };
        };
    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/etablissement/get/<ID_DE_L'ETABLISSEMENT_À_CONSULTER>,{
                 headers: {
                     'requesterId': <Id de l'utilisateur qui fait la requete>,
                 }
             });,

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/etablissement/get;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/etablissement/update/<ID_DE_L'ETABLISSEMENT_A_MODIFIER>,{
        {
            "name": String,
            "adress": String,
            "zip": Number,
            "city": String
        },
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR (Valable uniquement si c'est un Admin)>,
            };
        };
    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/etablissement/delete/<ID_DE_L'ETABLISSEMENT_À_SUPPRIMER>,{
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
            };
        };
    };

</p>
</details>

### Pour les call API `CONVENTION`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/convention/create,{
        {
            name: "" (required),
            startingDate: "" (required),
            endingDate: "" (required),
            numberOfEntries: "",
            numberOfActivityStarted: "",
            numberOfActivityStartedForLongTime: "",
            NumberOfExitForGood: ""
            logos: [ {file} ]
            description: "",
            public: "",
            actionObjectif: "",
            positiveExitCriteria: "",
            balanceSheetPreparation: [
                name: String,
                received: Boolean
            ]
            responsibleOfTheConvention: "",
            adjointResponsibleOfTheConvention: "",
            AdministrativeOfficer: "",
            TheTeam: ""
        },
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
            };
        };
    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/convention/get/<ID_DE_LA_CONVENTION_À_CONSULTER>{
          headers: {
                     'requesterId': <Id de l'utilisateur qui fait la requete>,
                 }
             });;

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/convention/get;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/convention/update/<ID_DE_LA_CONVENTION_A_MODIFIER>,{
        formdata,   \\(dans un formdata, entrer les infos à modifier, ex: 'regarder le model des infos dans create)
            {
                headers: {
                Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR>,
                "Content-Type": "multipart/form-data",
                };
            };
    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/convention/delete/<ID_DE_LA_CONVENTION_À_SUPPRIMER>,{
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
            };
        };
    };

</p>
</details>

### Pour les call API `USAGER`

<details><summary>CREATE</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/usager/create/<ID_DE_LA_CONVENTION>`, {
            requesterId: String (obligatoire) "l'usager sera pushé dans prescription,
            utilisateurId: String (non obligatoire), afin dattribuer directement un utilisateur et du coup l'usager sera pushé dans orientations
            partenaireId: String (afin de pusher l'usager dans le tableau des usagers attribués du partenaire),
            prescription:{      (A inclure uniquement si une ou plusieurs valeurs sont différentes de "false")
                "Emploi" : true || false,
                "TNS": true || false ,
                "Stage": true || false ,
                "Evenement": true || false
                },
            email: String,
            male: Boolean, (obligatoire)
            name: String, (obligatoire)
            firstname: String, (obligatoire)
            mobileNum: Number,
            password: String,
            passwordConfirmed: String,
        };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/usager/get/<ID_DE_L'UTILISATEUR_A_CONSULTER>,
            {
                 headers: {
                     'requesterId': <Id de l'utilisateur qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/usager/getAll,{
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR>,
            };
        };
    };

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/usager/update/<ID_DE_L'USAGER_A_MODIFIER>,
    {
        <--- Pour une prescription--->
        utilisateurAffiliatedId: String (obligatoire) -> pour le passage de "prescriptions" à "orientations"
    },
    ||
    {
        account:{
            name: String,
            male: Boolean
            firstname: String
            mobileNum: String
            dateOfBirth: Date
            adress: String
            city: String
            zip: Number
            district: {
                        districtName: String;
                        districtType: String;
                    };
                    location: {
                        lng: Number;
                        lat: Number;
                    }
            email: String
            adressComment: String
            landlineNumber: String
            mobileNum: Number
            phoneOrEmailComment:  String
        },
        ||
        {
            password: String,
            passwordConfirmed: String
        },
        <-- Pour faire l'accueil, updater l'usager par rubrique de model-->
        ex:
            licencesAndAccreditation: {
                licencesAndAccreditation: {
                licenceDriver : true,
                licenceDriverType: [{"permis A":true},{"Permis B":true}],
                caces: true,
                cacesType: [{"E289":true}],
                electricalAccreditation: false,
                electricalAccreditationComment: "",
                weldingAccreditation: false,
                weldingAccreditationComment: "",
                otherComment: ""
            }
            };
            || / &&
            mobility: {
                car: {
                    condition: neuf;
                    insurance: true;
                    bought: false;
                    rented: false;
                    lended: false;
                };
                motorcycle: {
                    condition: ancien;
                    insurance: true;
                    bought: false;
                    rented: false;
                    lended: false;
                };
                scooter: {
                    condition: neuf;
                    insurance: true;
                    bought: false;
                    rented: false;
                    lended: false;
                };
                bicycle: {
                    condition: neuf;
                    insurance: true;
                    bought: false;
                    rented: false;
                    lended: false;
                };
                trottinette: {
                    condition: neuf;
                    insurance: true;
                    bought: false;
                    rented: false;
                    lended: false;
                };
                carpoolingIsAvailable: false;
            };
            etc ...
    },
    <--- A faire en call final, afin de conclure l'etape --->
    {
        dateOfAccueil : Date (obligatoire en cas d'accueil) "passe l'usager de 'orientations' à 'entrées'"
    },
     { headers: { Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR>, }; }; }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/usager/delete/<ID_DE_L'USAGER_A_""SUPPRIMER"">,{
        requesterId: String (obligatoire),
        conventionId: String (obligatoire),
        isAnArchive: Boolean (si true -> lusager sera supprimé de la convention et envoyer aux archives si non -> l'usager sera dans les usagerOut)
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'UTILISATEUR>,
            };
        };
    };

</p>
</details>

### Pour les call API `ENTREPRISE`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/entreprise/create/<etablissementId>,{
            requesterId: String, `(obligatoire)`
            society: String,
            currentName: String,
            siret: Number,
            adress: String,
            zip: Number,
            city: String,
            logo: req.files,
            activityarea: String,
            administratifStateOpen: Boolean,
            headquartersSociety: String,
            numberOfEmployed: Number,
            codeNAF: Number,
            details: String,
            comments: String
    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/entreprise/get/<ID_DE_L'ENTREPRISE'_À_CONSULTER>,{
                 headers: {
                     'requesterId': <Id de l'utilisateur qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/entreprise/get,{
                headers: {
                Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
                };
        };

@ Tables

</p>
</details>

<details><summary>READ ALL BY ETABLISSEMENT</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/entreprise/getAllByEtablissement/<id_de_l'etablissement>?page=1<query_de_la_recherche>,{
                headers: {
                Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
                };
        };

</p>

| Clé           | Valeur                  | Reponse                                                                                                                                                             |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| &adressLabel  | =Jean Mermoz            | Renvois un tableau filtré des différentes entreprises de mon établissement, rue `Jean Mermoz`                                                                       |
| &society      | =a.co.r                 | Renvois un tableau filtré des différentes entreprises de mon établissement, qui ont le `nom de société` qui commence ou qui ressemble à la valeur                   |
| &interlocutor | =Doe                    | Renvois un tableau filtré des différentes entreprises de mon établissement, qui possèdent un(e) interlocuteur(rice) dont le `nom` commence ou ressemble à la valeur |
| &sort         | date-desc \|\| date-asc | Renvois un tableau filtré des différentes entreprises de mon établissement, du plus récemment modifié vers le plus ancien et `vise versa`                           |

</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/entreprise/update/<ID_DE_L'ENTREPRISE_A_MODIFIER>,{
            requesterId: "Id de l'utilisateur qui apporte les modifications"
            society: String,
            currentName: String,
            siret: Number,
            activityarea: String,
            administratifStateOpen: Boolean,
            headquartersSociety: String,
            numberOfEmployed: Number,
            codeNAF: Number,
            details: String,
            comments: String
    },
    ||
    {
            requesterId: "Id de l'utilisateur qui apporte les modifications"
            logo: req.files,
    },
    ||
    {
            requesterId: "Id de l'utilisateur qui apporte les modifications"
            adress: String,
            zip: Number,
            city: String,
    }

</p>
</details>

<details><summary>FETCH ENTREPRISE BY SIRET</summary>
<p>

    Methode: `POST`
    https://geade.herokuapp.com/entreprise/fetch/siret/<SIRET_DE_L'ENTREPRISE_A_RECHERCHER>;

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/entreprise/delete/<ID_DE_LA_L'ENTREPRISE_À_SUPPRIMER>,{
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
            };
        };
    };

</p>
</details>

### Pour les call API `INTERLOCUTOR`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/interlocutor/create/<ID_DE_L'ENTREPRISE>,{
        requesterId: `(obligatoire)`String "id du l'utilisateur",
        male: Boolean, (obligatoire)
        name: String, (obligatoire)
        firstname: String, (obligatoire)
        positionHead: String,
        mobileNum: Number,
        landlineNum: Number,
        email: String,
        workSpot: String,
        password: String,
        passwordConfirmed: String (les MDP doivent etre similaires)
    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/interlocutor/get/<ID_DE_L'INTERLOCUTEUR'_À_CONSULTER>,{
            headers: {
                requesterId: <Id de l'utilisateur qui fait la requete>,
                }
        });,

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/interlocutor/getAll/<ID_DE_L'ENTREPRISE_DES_INTERLOCUTEURS_À_CONSULTER>;

</p>
</details>

<details><summary>UPDATE OU Y AJOUTER UNE NOUVELLE ENTREPRISE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/interlocutor/update/<ID_DE_L'INTERLOCUTEUR_A_MODIFIER>,{
            requesterId: `(obligatoire)` "Id de l'utilisateur qui apporte les modifications"
            civility: {
                female: { type: Boolean, default: false },
                male: { type: Boolean, default: false }
            },
            name: String,
            firstname: String,
            positionHeld: String,
            mobileNum: Number,
            landlineNum: Number,
            email: String,
            workSpot: String,
        ||
        <!-- Il peut aussi modifier uniquement son MDP -->
        {
            requesterId: "Id de l'utilisateur qui apporte les modifications"
            password: String,
            passwordConfirmed: String,
        },
        ||
        <!-- Afin d'ajouter une entreprise et en meme temps ajouter l'interlocuteur à l'entrerprise -->
         {
            requesterId: "Id de l'utilisateur qui apporte les modifications"
            entrepriseIdToAdded: String
        },
        ||
        <!-- Afin de supprimer une entreprise et en meme temps supprimer l'interlocuteur à l'entrerprise -->
         {
            requesterId: "Id de l'utilisateur qui apporte les modifications"
            entrepriseIdToRemove: String
        },
    },

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/interlocutor/delete/<ID_DE_LA_L'INTERLOCUTEUR_À_SUPPRIMER>,{
        requesterId: "Id de l'utilisateur qui apporte les modifications",
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
            };
        };
    };

</p>
</details>

### Pour les call API `CONTACT`

<details><summary>CREATE</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/contact/create/<ID_DU_CONTACT_DE_L'USAGER_OU_DE_L'ENTREPRISE>`, {
        requesterId: String, `(obligatoire)` id de l'utilisateur qui crée le contact,
        dateContact: Date,
        typeContact: String,
        natureContact: String,
        contenuContact: String,
        participantsArray: [String] (inclure les Ids des participants du contact)
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/contact/get/<ID_DU_CONTACT_À_CONSULTER>,{
        headers: {
                requesterId: <Id de l'utilisateur qui fait la requete>,
                }
        });;

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/contact/getAll/<ID_DE_L'USAGER_OU_DU_PARTENAIRE_OU_DE_L'INTERLOCUTEUR_À_CONSULTER>;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/contact/update/<ID_DU_CONTACT_A_MODIFIER>,{
        requesterId: String, `(obligatoire)` "id de l'utilisateur qui modifie le contact",
        typeContact: String, ||
        natureContact:String, ||
        contenuContact:String

    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/contact/delete/<ID_DU_CONTACT_À_SUPPRIMER>,{
        {
            headers: {
            Authorization: "Bearer " + <TOKEN_DE_L'ADMIN>,
            };
        };
    };

</p>
</details>

### Pour les call API `POSTE_DE_TRAVAIL`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`.
    `https://geade.herokuapp.com/workstation/create/<ID_DE_L'ENTREPRISE>`, {
            requesterId: "id de l'utilisateur (afin de retrouver l'établissement)", `(obligatoire)`
            codeRome: String,
            etablissementFrom: String, (id de l'etablissement)
            comments: String,
            definition: String,
            jobAccess: String, ,
            descriptionJobContext: String,
            precisionKnowHow: String,
            jobContext: [],
            skillsRequired: [],
            knowHowRequired: [],
            precisionSkills: String
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/workstation/get/<ID_DU_POSTE_DE_TRAVAIL_À_CONSULTER>,{
        headers: {
                requesterId: <Id de l'utilisateur qui fait la requete>,
            }
        });;

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/workstation/getAll/<ID_DE_L'ENTREPRISE>;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/workstation/update/<ID_DU_POSTE_DE_TRAVAIL_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie le poste de travail", `(obligatoire)
            workname: String, || / &&
            workPosition: String, || / &&
            knowHowRequired: Array[String], || / &&
            skillsRequired: Array[String], || / &&
            comments: String
    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/workstation/delete/<ID_DU_POTSE_DE_TRAVAIL_À_SUPPRIMER>,{
         requesterId: "id de l'utilisateur qui supprime le poste de travail", `(obligatoire)`
    };

</p>
</details>

### Pour les call API `OFFRE_D_EMPLOI`

<details><summary>CREATE</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/offerjob/create/<ID_DU_POSTE_DE_TRAVAIL>`, {
        requesterId: `(obligatoire)` "id de l'utilisateur qui crée l'offre d'emploi",
        contractType: String,
        numberHoursPerWeek: Number,
        salary: Number,
        offerName: String,
        comment : String,
        // --- Crée afin de pouvoir ajouter ou supprimer une compétences du poste de travail uniquement pour cette offre --- //
        skillsAddedFromWorkStation: [Object],
        knowHowAddedFromWorkStation: [Object]
        skillsRemovedFromWorkStation: [String]
        knowHowRemovedFromWorkStation: [String]
        // ---  --- //
        <!-- Afin d'attribuer l'offre directement -->
        usagerId: `(non obligatoire)` id de l'usager pour lui attribuer l'offre d'emploi
       }

</p>
</details>

<details><summary>CREATE SPONTANEOUS</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/offerjob/createSpontaneous`, {
        requesterId: `(obligatoire)` "id de l'utilisateur qui crée l'offre d'emploi",
        usagerId: `(obligatoire)` id de l'usager pour lui attribuer l'offre d'emploi
        contractType: String,
        numberHoursPerWeek: Number,
        salary: Number,
        offerName: String,
        comment : String,
        // --- Crée afin de pouvoir ajouter ou supprimer une compétences du poste de travail uniquement pour cette offre --- //
        skillsAddedFromWorkStation: [Object],
        knowHowAddedFromWorkStation: [Object]
        skillsRemovedFromWorkStation: [String]
        knowHowRemovedFromWorkStation: [String]
        // ---  --- //
        <!-- Afin d'attribuer l'offre directement -->
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/offerjob/get/<ID_DE_L'OFFRE_D_'EMPLOI_À_CONSULTER>,{
          headers: {
                     requesterId: <Id de l'utilisateur || de l'usager || de l'interlocuteur || du parteniare qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ ALL BY WORSTATION</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/offerjob/getAll/,{
    headers: {
            workstationid: String (Id du poste de travail)
        }

}

</p>
</details>

<details><summary>READ ALL SPONTANEOUS</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/offerjob/getAll

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/offerjob/update/<ID_DE_L'OFFRE_D'EMPLOI_A_MODIFIER>,{
            contractType: String, || / &&
            numberHoursPerWeek: Number, || / &&
            offerName: String, || / &&
            status: String,
            <!-- Afin de laisser un commentaire dans l'historique -->
            comment : String,

            {
                headers:{
                    requesterId: "id de l'utilisateur qui modifie l'offre d'emploi", `(obligatoire)`
                }
            }

    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/offerjob/delete/<ID_DE_L'OFFRE_D'EMPLOI_À_SUPPRIMER>,{

        <!-- ON NE PEUX PAS ARCHIVER, L'OFFRE SI UN USAGER EST ENCORE POSITIONNÉ DESSUS -->

         requesterId: String,  `(obligatoire)`  "id de l'utilisateur qui supprime l'offre d'emploi",
         dateAboutOfferJobAlreadyTaken: Date,  `(non obligatoire)`  "seulement si l'utilisateur souhaite une date différente" ,
         hasBeenTakenByOurServices: Boolean,  `(obligatoire)` "true -> pourvu par nos services, false -> pourvu par l'employeur",

        <!-- Afin de laisser un commentaire dans l'historique -->
        comment : String
    };

</p>
</details>

### Pour les call API `PROCESSUS_OFFRE_D_EMPLOI`

<details><summary>ÉTAPE 1 UTILISATEUR</summary>
<p>
    Afin d'attribuer une offre d'emploi, à un(e) Usager(e).
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerId: String, `(obligatoire)` "id de l'usager à positionner sur l'offre d'emploi (pendant 24H)",
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 1 USAGER</summary>
<p>
    Afin de se positionner sur une offre d'emploi.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'usager(e)` qui souhaite se positionner",
        usagerIsInterested: Boolean `(obligatoire)` ,
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 2 UTILISATEUR</summary>
<p>
    Afin de stopper le timer de 24H et de bloquer une date de RDV.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        dateOfAppointment: Date, `(non obligatoire)` "soit inclure la date et l'heure du rdv s'il/elle est toujours intéressé(e)",
        ||
        usagerIsInterested: false `(non obligatoire)` "soit uniquement false si l'usager(e) n'est plus intéressé(e),
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 3 UTILISATEUR</summary>
<p>
    Après le RDV, afin de donner l'issue du retour de l'usager.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` ,
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 4 UTILISATEUR SANS AVOIR DE DATE</summary>
<p>
    Après la proposition de l'usager à l'entreprise, mais nous n'avons toujours pas de date de prochaine étape.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>

<details><summary>ÉTAPE 4 UTILISATEUR AVEC UNE DATE</summary>
<p>
    Après la proposition de l'usager à l'entreprise avec une date pour soit `un entretien d'embauche` soit `une découverte` soit `un contrat de travail`.
</p>
</details>

<details><summary>Entretien d'embauche</summary>
<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        dateOfJobInterview: Date `(obligatoire)` "Inclure la date et l'heure du RDV"
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>

<details><summary>Période de découverte`</summary>
<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        startingDateOfDecouverte: Date `(obligatoire)` "Inclure la date de début de découverte",
        endingDateOfDecouverte: Date `(obligatoire)` "Inclure la date de fin de découverte"
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>

<details><summary>Contrat de travail</summary>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        contractType: String,
        startingDateEmploymentContract: Date `(obligatoire)` "Inclure la date de début du contrat de travail",
        endingDateEmploymentContract: Date `(non obligatoire)` "Inclure la date de fin du contrat de travail uniquement en cas de non CDI"
        endingTryPeriodeDate:2023-05-01T17:30:00,
        numberHourPerWeek:35,
        tasksList:[String],
        skillsList:[String],
        continuityOfThepreviousContract: Boolean, (obligatoire) si oui on est obliger de mettre l'id du contract dans `previousContractId`.
        previousContractId: String (non obligatoire)
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>

### Pour les call API `OFFRE_D_EMPLOI_EVENEMENTIEL`

<details><summary>CREATE</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/eventOfferjob/create/<ID_DU_POSTE_DE_TRAVAIL>`, {
        requesterId: `(obligatoire)` "id de l'utilisateur qui crée l'offre d'emploi",
        contractType: String,
        numberHoursPerWeek: Number,
        offerName: String,
        comment : String

        <!-- Afin d'attribuer l'offre directement -->
        usagerId: `(non obligatoire)` id de l'usager pour lui attribuer l'offre d'emploi
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/eventOfferjob/get/<ID_DE_L'OFFRE_D_'EMPLOI_EVENEMENTIEL_À_CONSULTER>,{
          headers: {
                     requesterId: <Id de l'utilisateur || de l'usager || de l'interlocuteur || du parteniare qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/eventOfferjob/getAll/<ID_DU_POSTE_DE_TRAVAIL_OU_SE_TROUVE_LES_OFFRES_D_'EMPLOI_EVENEMENTIEL_À_CONSULTER>;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/eventOfferjob/update/<ID_DE_L'OFFRE_D'EMPLOI_EVENEMENTIEL_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie l'offre d'emploi", `(obligatoire)`
            contractType: String, || / &&
            numberHoursPerWeek: Number, || / &&
            offerName: String, || / &&
            status: String,

            <!-- Afin de laisser un commentaire dans l'historique -->
            comment : String

    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/eventOfferjob/delete/<ID_DE_L'OFFRE_D'EMPLOI_EVENEMENTIEL_À_SUPPRIMER>,{

        <!-- ON NE PEUX PAS ARCHIVER, L'OFFRE SI UN USAGER EST ENCORE POSITIONNÉ DESSUS -->

         requesterId: String,  `(obligatoire)`  "id de l'utilisateur qui supprime l'offre d'emploi",
         dateAboutOfferJobAlreadyTaken: Date,  `(non obligatoire)`  "seulement si l'utilisateur souhaite une date différente" ,
         hasBeenTakenByOurServices: Boolean,  `(obligatoire)` "true -> pourvu par nos services, false -> pourvu par l'employeur",

        <!-- Afin de laisser un commentaire dans l'historique -->
        comment : String
    };

</p>
</details>

### Pour les call API `ENTRETIEN_D_EMBAUCHE`

<details><summary>CREATE</summary>
<h4>Uniquement pour les offres d'emploi avec le status "Usager(e) accepté(e) par l'entreprise sans dates définies"</h4>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/jobinterview/create/<ID_DE_L'OFFRE_D'EMPLOI>`, {
        requesterId: `(obligatoire)` "id de l'utilisateur qui crée l'entretien d'embauche",
        datePlanned: Date (obligatoire)
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/jobInterview/get/<ID_DE_L'ENTRETIEN_D'EMBAUCHE_À_CONSULTER>,{
          headers: {
                     requesterId: <Id de l'utilisateur || de l'usager || de l'interlocuteur qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>UPDATE (la date de RDV)</summary>

<h4>Afin de repousser la date de RDV</h4>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/workstation/update/<ID_DE_L'ENTRETIEN_D'EMBAUCHE_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie le poste de travail", `(obligatoire)`
            datePlanned: Date (obligatoire)
    }

</p>
</details>

<details><summary>UPDATE (les 2 sont intéressés)</summary>

<h4>Pour un deuxieme entretien d'embauche</h4>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/workstation/update/<ID_DE_L'ENTRETIEN_D'EMBAUCHE_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie le poste de travail", `(obligatoire)`
            dateOfAppointment: Date (obligatoire),
            usagerInterested:  `true`, (obligatoire)
            entrepriseInterested:  `true`, (obligatoire)
            interestedAboutDecouverte: `false`, (obligatoire)
            interestedAboutEmploymentContract: `false`, (obligatoire)
            dateOfTheNextJobInterview: Date , (obligatoire)
            usagerComment: String, (non obligatoire)
            entrepriseComment:, String (non obligatoire)
            offerJobComment: String (non obligatoire)
    }

</p>

<h4>Pour une decouverte</h4>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/workstation/update/<ID_DE_L'ENTRETIEN_D'EMBAUCHE_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie le poste de travail", `(obligatoire)`
            dateOfAppointment: Date (obligatoire),
            usagerInterested:  `true`, (obligatoire)
            entrepriseInterested:  `true`, (obligatoire)
            interestedAboutDecouverte: `true`, (obligatoire)
            interestedAboutEmploymentContract: `false`, (obligatoire)
            startingDateOfDecouverte: Date , (obligatoire)
            endingDateOfDecouverte: Date , (obligatoire)
            usagerComment: String, (non obligatoire)
            entrepriseComment:, String (non obligatoire)
            offerJobComment: String (non obligatoire)
    }

</p>

<h4>Pour un contrat de travail</h4>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/workstation/update/<ID_DE_L'ENTRETIEN_D'EMBAUCHE_A_MODIFIER>,{
            requesterId: String, "id de l'utilisateur" (obligatoire)
            dateOfAppointment: Date, (obligatoire)
            usagerInterested: `true`, (obligatoire)
            entrepriseInterested: `true`, (obligatoire)
            interestedAboutDecouverte: `false`, (obligatoire)
            interestedAboutEmploymentContract: `true`, (obligatoire)
            startingDateEmploymentContract: Date, (obligatoire)
            endingDateEmploymentContract: Date, (obligatoire)
            tasksList:[String], "afin d'en ajouter a liste" (non obligatoire)
            skillsList:[String], "afin d'en ajouter a liste" (non obligatoire)
            contractType: String, (obligatoire)
            numberHourPerWeek: Number,(obligatoire)
            endingTryPeriodeDate: Date, (obligatoire)
            continuityOfThepreviousContract: false || true "si le contrat en suit un autre" (obligatoire)
            usagerComment: String, (non obligatoire)
            entrepriseComment: String, (non obligatoire)
            offerJobComment: String, (non obligatoire)

            <!-- Si continuityOfThepreviousContract est egal a true -->

            previousContractId: String "l'id du precedent contrat de travail" (obligatoire)
    }

</p>
</details>

<details><summary>UPDATE (si l'un des 2 n'est plus intéressé || les 2 ne le sont plus)</summary>

<h4>Afin d'updater et de repasser l'offre 'Disponible</h4>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/workstation/update/<ID_DE_L'ENTRETIEN_D'EMBAUCHE_A_MODIFIER>,{
            requesterId: String, "id de l'utilisateur" (obligatoire)
            dateOfAppointment: Date, (obligatoire)
            usagerInterested: `false || true`, (obligatoire)
            entrepriseInterested: `false || true`, (obligatoire)
            offerJobComment: String, (non obligatoire)
    }

</p>
</details>

<details><summary>DELETE</summary>

<h4>Afin de mofifier le statut de l'offre si l'offre est toujours d'actualité ou on arichive l'offre d'emploi.</h4>
<p>

    Methode: `DELETE`
    https://geade.herokuapp.com/workstation/delete/<ID_DE_L'ENTRETIEN_D'EMBAUCHE_A_MODIFIER>,{
            requesterId: String, "id de l'utilisateur" (obligatoire)
            usagerInterested: Boolean, "afin de savoir qui n'est plus motivé" (obligatoire)
            entrepriseInterested: Boolean, "afin de savoir qui n'est plus motivé" (obligatoire)
            offerJobAlreadyTaken: Boolean, "Si l'offre n'est plus d'actualité parce qu'elle a été attribué en interne" (obligatoire)
            dateAboutOfferJobAlreadyTaken: Date, "date de l'attribution de l'offre en cas d'offre pourvue", (non obligatoire)
            usagerComment: String, (non obligatoire)
            entrepriseComment: String (non obligatoire)
    }

</p>
</details>

### Pour les call API `DECOUVERTE`

<h4>Uniquement pour les offres d'emploi avec le status "Usager(e) accepté(e) par l'entreprise sans dates définies"</h4>

<details><summary>CREATE</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/decouverte/create/<ID_DE_L'OFFRE_D'EMPLOI>`, {
        requesterId: `(obligatoire)` "id de l'utilisateur qui crée l'entretien d'embauche",
        isFromAnEvent: Boolean, (obligatoire uniquement si c'est true)
        startingDate: Date, (obligatoire)
        endingDate: Date, (obligatoire)
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/decouverte/get/<ID_DE_LA_DECOUVERTE_À_CONSULTER>,{
          headers: {
                     requesterId: <Id de l'utilisateur || de l'usager || de l'interlocuteur || du parteniare qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/decouverte/update/<ID_DE_LA_DECOUVERTE_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie l'offre d'emploi et la découverte", `(obligatoire)`
            newStartingDate: Date, "afin de modifier les dates de découverte"
            newEndingDate: Date, "afin de modifier les dates de découverte"
            usagerComment: String, "si on souhaite uniquement mettre un commentaire ne pas mettre les dates"
            entrepriseComment: String "si on souhaite uniquement mettre un commentaire ne pas mettre les dates"
    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/employmentcontract/delete/<ID_DU_CONTRAT_DE_TRAVAIL_A_ARCHIVER>,{

        requesterId: String,  `(obligatoire)`  "id de l'utilisateur qui supprime l'offre,
        validatedByUsager : Boolean, `(obligatoire)`
        validatedByEntreprise: Boolean, `(obligatoire)`
        stillAvailable: Boolean, `(obligatoire)`
        usagerComment: String, `(non obligatoire)`
        entrepriseComment: String, `(non obligatoire)`
        offerJobComment: String `(non obligatoire)`
    };

</p>
</details>

### Pour les call API `CONTRAT_DE_TRAVAIL`

<details><summary>CREATE</summary>
<h4>Uniquement pour les offres d'emploi avec le status "Usager(e) accepté(e) par l'entreprise sans dates définies"</h4>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/employmentcontract/create/<ID_DE_L'OFFRE_D'EMPLOI>`, {
        requesterId: `(obligatoire)` "id de l'utilisateur qui crée l'entretien d'embauche",
        datePlanned: Date (obligatoire)
        startingDate: Date, (obligatoire)
        endingTryPeriodeDate, (obligatoire)
        continuityOfThepreviousContract, (non obligatoire) "uniquement si c'est un continuité d'un précedent contrat"
        previousContractId: (obligatoire uniquement si continuityOfThepreviousContract est a 'true') "indiquer l'Id du precedent contrat"
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/employmentcontract/get/<ID_DU_CONTRAT_DE_TRAVAIL_À_CONSULTER>,{
          headers: {
                     requesterId: <Id de l'utilisateur || de l'usager || de l'interlocuteur || du parteniare qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/employmentcontract/getAll/<ID_DE_L'OFFRE_D'EMPLOI_DES_CONTRATS>,{
          headers: {
                     requesterId: <Id de l'utilisateur qui fait la requete>,
                 }
             })

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/employmentcontract/update/<ID_DU_CONTRAT_DE_TRAVAIL_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie le contrat", `(obligatoire)`
            <!-- Afin de modifier la liste des taches a réaliser ou des compétences -->
           taskList: Array,
           skillsList: Array,

            <!-- Afin de modifier tous les || un autre(s) élément(s) de l'objet "employmentContract" -->
            contractType
            workName : String,
            numberOfHour: Number,
            startingDate : Date,
            endingDate : Date,
            endingTryPeriodeDate: Date,
            comment : String,

    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/employmentcontract/delete/<ID_DU_CONTRAT_DE_TRAVAIL_A_ARCHIVER>,{

        requesterId: String,  `(obligatoire)`  "id de l'utilisateur qui supprime l'offre d'emploi",
        offerJobStillAvailable: Boolean,  `(obligatoire)`  "afin de savoir si l'offre est encore disponible" ,
        endingDate: Date,  `(obligatoire)` "afin de connaitre la date de fin de contrat",
        hasBeenCloseByUsager: Boolean , "Pour savoir si c'est l'Usager ou l'Entreprise qui met fin au contrat
        comment : String
    };

</p>
</details>

### Pour les call API `OFFRE_D_EMPLOI_INTERMEDIAIRE`

<details><summary>CREATE</summary>
<p>

    Methode: `POST` .
    `https://geade.herokuapp.com/offerjob/create/<ID_DE_LA_MISSION>`, {
        requesterId: `(obligatoire)` "id de l'utilisateur qui crée l'offre d'emploi",
        contractType: String,
        numberHoursPerWeek: Number,
        offerName: String,
        comment : String

        <!-- Afin d'attribuer l'offre directement -->
        usagerId: `(non obligatoire)` id de l'usager pour lui attribuer l'offre d'emploi
       }

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/offerjob/get/<ID_DE_L'OFFRE_D_'EMPLOI_À_CONSULTER>,{
          headers: {
                     requesterId: <Id de l'utilisateur || de l'usager || de l'interlocuteur || du parteniare qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/offerjob/getAll/<ID_DU_POSTE_DE_TRAVAIL_OU_SE_TROUVE_LES_OFFRES_À_CONSULTER>;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/offerjob/update/<ID_DE_L'OFFRE_D'EMPLOI_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie l'offre d'emploi", `(obligatoire)`
            contractType: String, || / &&
            numberHoursPerWeek: Number, || / &&
            offerName: String, || / &&
            status: String,

            <!-- Afin de laisser un commentaire dans l'historique -->
            comment : String
        }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE`
    https://geade.herokuapp.com/decouverte/delete/<ID_DE_LA_DECOUVERTE_A_CLOTURER>,{
            requesterId: "id de l'utilisateur qui modifie l'offre d'emploi et la découverte", `(obligatoire)`
            validatedByUsager: Boolean, "afin de savoir si elle/lui souhaite continuer"
            validatedByEntreprise: Boolean, "afin de savoir si l'entreprise souhaite continuer"
            stillAvailable: Boolean , "Afin de savoir si l'offre d'emploi est toujours d'actualité"
            usagerComment: String, "si on souhaite uniquement mettre un commentaire ne pas mettre les dates"
            entrepriseComment: String, "si on souhaite uniquement mettre un commentaire ne pas mettre les dates"
            offerJobComment: String, "Pour mettre un commentaire dans l'offre d'emploi

    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/offerjob/delete/<ID_DE_L'OFFRE_D'EMPLOI_À_SUPPRIMER>,{

        <!-- ON NE PEUX PAS ARCHIVER, L'OFFRE SI UN USAGER EST ENCORE POSITIONNÉ DESSUS -->

         requesterId: String,  `(obligatoire)`  "id de l'utilisateur qui supprime l'offre d'emploi",
         dateAboutOfferJobAlreadyTaken: Date,  `(non obligatoire)`  "seulement si l'utilisateur souhaite une date différente" ,
         hasBeenTakenByOurServices: Boolean,  `(obligatoire)` "true -> pourvu par nos services, false -> pourvu par l'employeur",

        <!-- Afin de laisser un commentaire dans l'historique -->
        comment : String
    };

</p>
</details>

### Pour les call API `PROCESSUS_OFFRE_D_EMPLOI_INTERMEDIAIRE`

<details><summary>ÉTAPE 1 UTILISATEUR</summary>
<p>
    Afin d'attribuer une offre d'emploi, à un(e) Usager(e).
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerId: String, `(obligatoire)` "id de l'usager à positionner sur l'offre d'emploi (pendant 24H)",
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 1 USAGER</summary>
<p>
    Afin de se positionner sur une offre d'emploi.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'usager(e)` qui souhaite se positionner",
        usagerIsInterested: Boolean `(obligatoire)` ,
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 2 UTILISATEUR</summary>
<p>
    Afin de stopper le timer de 24H et de bloquer une date de RDV.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        dateOfAppointment: Date, `(non obligatoire)` "soit inclure la date et l'heure du rdv s'il/elle est toujours intéressé(e)",
        ||
        usagerIsInterested: false `(non obligatoire)` "soit uniquement false si l'usager(e) n'est plus intéressé(e),
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 3 UTILISATEUR</summary>
<p>
    Après le RDV, afin de donner l'issue du retour de l'usager.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` ,
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi
    };

</p>
</details>

<details><summary>ÉTAPE 4 UTILISATEUR SANS AVOIR DE DATE</summary>
<p>
    Après la proposition de l'usager à l'entreprise, mais nous n'avons toujours pas de date de prochaine étape.
</p>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>

<details><summary>ÉTAPE 4 UTILISATEUR AVEC UNE DATE</summary>
<p>
    Après la proposition de l'usager à l'entreprise avec une date pour soit `un entretien d'embauche` soit `une découverte` soit `un contrat de travail`.
</p>

<details><summary>Entretien d'embauche</summary>
<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        dateOfJobInterview: Date `(obligatoire)` "Inclure la date et l'heure du RDV"
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>

<details><summary>Période de découverte</summary>

<p>
    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        startingDateOfDecouverte: Date `(obligatoire)` "Inclure la date de début de découverte",
        endingDateOfDecouverte: Date `(obligatoire)` "Inclure la date de fin de découverte"
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>

<details><summary>Contrat de travail</summary>

<p>

    Methode: `POST` .
    https://geade.herokuapp.com/offerjob/processing/<ID_DE_L'OFFRE_D'EMPLOI_À_TRAITER>,{
        requesterId: String,  `(obligatoire)`  "id de `l'utilisateur` qui traite l'offre d'emploi",
        usagerIsInterested: Boolean `(obligatoire)` "Afin de valider que l'usager(e) est encore intéressé(e)",
        entrepriseIsInterested: Boolean `(obligatoire)` "Pour donner la réponse de l'entreprise",
        contractType: String,
        startingDateEmploymentContract: Date `(obligatoire)` "Inclure la date de début du contrat de travail",
        endingDateEmploymentContract: Date `(non obligatoire)` "Inclure la date de fin du contrat de travail uniquement en cas de non CDI"
        endingTryPeriodeDate:2023-05-01T17:30:00,
        numberHourPerWeek:35,
        tasksList:[String],
        skillsList:[String],
        continuityOfThepreviousContract: Boolean, (obligatoire) si oui on est obliger de mettre l'id du contract dans `previousContractId`.
        previousContractId: String (non obligatoire)
        comment: String `(non obligatoire)` pour l'historique de l'offre d'emploi,
    };

</p>
</details>
</details>

### Pour les call API `COLLECTIVITE`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/collectivity/create/<ID_DE_L'ETABLISSEMENT,{
            requesterId: String, `(obligatoire)`
            name: String, `(obligatoire)`
            zip: Number, `(non obligatoire)`
            city: String, `(non obligatoire)`
    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/collectivity/get/<id_de_la_collectivite>,{
            headers: {
                     requesterId: <Id de l'utilisateur || de l'interlocuteur fait la requete>,
                 }
             });
    };

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/collectivity/getAll/<id_de_l'etablissement>;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/collectivity/update/<ID_DE_LA_COLLECTIVITE_A_MODIFIER>,{
            requesterId: "id de l'utilisateur qui modifie la collectivité", `(obligatoire)`
            <!-- Afin d'ajouter des partenaires -->
                male: Boolean, `(obligatoire)`
                email: String `(non obligatoire)`
                name: String, `(obligatoire)`
                firstname: String, `(obligatoire)`
                password: String, `(obligatoire)`
                passwordConfirmed : String `(obligatoire)`
                mobileNum: Number `(non obligatoire)`
                landlineNum: Number `(non obligatoire)`

            <!-- Afin de modifier la collectivité entrer uniquement la clé et sa valeur-->
            name : String, || &&
            address: String, || &&
            zip: Number, || &&
            city: String || &&

</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/collectivity/delete/<ID_DE_LA_COLLECTIVITÉ_A_ARCHIVER>,{
        requesterId: String,  `(obligatoire)`  "id de l'utilisateur qui supprime l'offre,
    };

</p>
</details>

### Pour les call API `PARTENAIRE`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/partenaire/create,{
        "requesterId": String, (obligatoire)
        "collectivityId": String, (obligatoire) "Id de la collectivité"
        "email": String,
        "civility": String", (obligatoire)
        "male": Boolean, (obligatoire)
        "name": String, (obligatoire)
        "firstname": String, (obligatoire)
        "usagerId": [String], (non obligatoire) "uniquement pour affilier des Usagers deja existant dans la collectivité"
        "password": String, (obligatoire)
        "passwordConfirmed": String, (obligatoire)
    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/partenaire/get/<ID_DU_PARTENAIRE_A_CONSULTER>,
            {
                 headers: {
                     'requesterId': <Id de l'utilisateur qui fait la requete>,
                 }
             });

</p>
</details>

<details><summary>READ All</summary>
<p>

    Methode: `GET`
    (https://geade.herokuapp.com/partenaire/getAll,

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`
    https://geade.herokuapp.com/partenaire/update/<ID_DU_PARTENAIRE_A_MODIFIER>,{
           <!-- Afin de modifier des informations du partenaire selectionné -->

           email: String,
           ||
           name: String,
           ||
           firstname:  String,
           ||
           collectivite: String,
           ||
           newArrayAutorisations: Array (ATTENTION remplace l'ancien tableau par le nouveau)
           ||
           newUsagersAttribuated: Array (ATTENTION remplace l'ancien tableau par le nouveau)
           ||
           newUsagersCretead: Array (ATTENTION remplace l'ancien tableau par le nouveau)

           <!-- Afin de modifier le MDP -->

           newPassword: String,(obligatoire)
           newPasswordConfirmed: String (obligatoire)
    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE` .
    https://geade.herokuapp.com/partenaire/delete/<ID_DU_PARTENAIRE_A_ARCHIVER>,{
        requesterId: String,  `(obligatoire)`  "id de l'utilisateur qui supprime le partenaire",
    };

</p>
</details>

### Pour les call API `EVENT`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/event/create/<ID_DE_L'ENTREPRISE_A_UPDATER>,{
        requesterId: `(obligatoire)`String "id du l'utilisateur",
        type: String --> 'visit' || 'halfDay' || 'jobCoffe
        nameOfEvent: String,
        dateAndHourOfEvent: Date,
        maxNumOfPartenaire: Number,
        poster: Array[Picture]
    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `GET`,
    https://geade.herokuapp.com/event/get/<id_de_l'evenement_a_consulter'>,{
            headers: {
                     requesterId: <Id de l'utilisateur || de l'interlocuteur fait la requete>,
                 }
             });
    };

</p>
</details>

<details><summary>READ ALL</summary>
<p>

    Methode: `GET`
    https://geade.herokuapp.com/event/getAll;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`,
    https://geade.herokuapp.com/event/update/<id_de_l'evenement_a_modifier'>,{
        usagerToAdd: [String], inclure dans le tableau le ou les id du ou des usager(e)(s) a pusher dans l'évènement
        ||
        usagerToRemove: [String], inclure dans le tableau le ou les id du ou des usager(e)(s) a retire de l'évènement
        ||


    };

</p>
</details>

### Pour les call API `COMPÉTENCES_ET_SAVOIRS_FAIRE`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/skills/create/<ID_DE_L'USAGER_UPDATER>,{
        requesterId: `(obligatoire)`String "id du l'utilisateur",
        codeJob: String, (obligatoire), est le metier d'ou vient la compétence ou le savoir faire
        codeSkills:[
                {code: string (obligatoire),libelleACOR: string (non obligatoire),levelSkill: number (obligatoire)}
            ],
            || "ne pas envoyer la requete avec des cométences et des savoirs faire dans la meme requete (pour les datas)"
        codeKnowHows:[
                {code: string (obligatoire), libelleACOR: string (non obligatoire), levelSkill: number (obligatoire)}
            ] || "ne pas envoyer la requete avec des cométences et des savoirs faire dans la meme requete (pour les datas)"
            cette requete est afin de creer et d'actualiser les contextes d'emploi
        codeJobsContext:[
                {code: string (obligatoire), levelSkill: number (obligatoire, comment: String (non obligatoire))}
            ]

    };

</p>
</details>

<details><summary>READ ONE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/skills/get/<id_de_l'usager_a_consulter'>,{
            headers: {
                     requesterId: <Id de l'utilisateur || de l'interlocuteur fait la requete>,
                 }
             });
    };

</p>
</details>

<details><summary>READ ALL</summary>

<p>Afin de consulter la liste complète de pole emploi</p>

<p>

    Methode: `GET`
    https://geade.herokuapp.com/skills/getAll;

</p>
</details>

<details><summary>UPDATE</summary>
<p>

    Methode: `PUT`,
    https://geade.herokuapp.com/skills/update/<'skillsAndKnowHowsId'>,{
        requesterId: String, (obligatoire),
        <----- Doit avoir obligatoirement la compétence ou le savoir faire dans ses données ----->
        codeSkillToUpdate: {"code":String (obligatoire) "code de la compétence,"libelleACOR":String (non obligatoire),"levelSkill": 0.25 || 0.50 || 0.75 || 1
        (obligatoire)} || codeKnowHowToUpdate: {"code":String (obligatoire) "code du savoir faire, "libelleACOR":String (non obligatoire),"levelSkill": 0.25
        || 0.50 || 0.75 || 1 (obligatoire)}

};

</p>
</details>

### Pour les call API `SPOUSE`

<details><summary>CREATE</summary>
<p>

    Methode: `POST`,
    https://geade.herokuapp.com/spouse/create/<'usagerId'>,{
        spouseId: String de l'ID de l'usager conjoint
    }

</p>
</details>

<details><summary>DELETE</summary>
<p>

    Methode: `DELETE`,
    https://geade.herokuapp.com/skills/update/<'skillsAndKnowHowsId'>,{
        <----- Attention ----->
        Cela ne supprime pas l'usager, seulement le lien qui unis deux usager

};

</p>
</details>
