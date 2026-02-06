**Task API**
API REST NestJS – TP Final Web Services & REST API (M2 LFD – École PMN)

**Installation**

npm install

Configuration

Créer un fichier .env : pour le cas de examen, jai versionne deja un fichier env qui comprend le token pour les tests

PORT\=3000

ACCESS_TOKEN\=VOTRE_TOKEN

Lancer l’API

npm run start:dev

**Authentification**
Header requis :
api-auth-token: VOTRE_TOKEN
Swagger

👉 http://localhost:3000/docs

(Utiliser le bouton Authorize et coller le token)

**Endpoints**

## Endpoints

- **GET /health**  
  Vérifie que l’API est bien en fonctionnement.

- **GET /tasks**  
  Récupère la liste de toutes les tâches.

- **GET /tasks/by-title/:title**  
  Récupère une tâche à partir de son titre.

- **POST /tasks**  
  Crée une nouvelle tâche.

- **PATCH /tasks/:id**  
  Modifie partiellement une tâche existante.

- **DELETE /tasks/:id**  
  Supprime une tâche à partir de son identifiant.

**Auteur**

NGUETCHEU KUINSI Dominique
dnguetcheu@gmail.com
