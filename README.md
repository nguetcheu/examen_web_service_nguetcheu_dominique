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

GET /tasks
GET /tasks/by-title/:title
POST /tasks
PATCH /tasks/:id
DELETE /tasks/:id

**Auteur**

NGUETCHEU KUINSI Dominique
dnguetcheu@gmail.com
