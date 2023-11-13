# Pivot Recorder

Ce serveur, écrit en TypeScript et utilisant Express.js basé sur une base de donnée PostgreSQL et l'ORM Prisma.

## Endpoints

Health Check : Endpoint GET / pour vérifier l'état du serveur.
Gestion des Utilisateurs : Endpoint POST /users pour créer de nouveaux utilisateurs.

## Installation development

1. Cloner le repository
2. Utiliser la version de Node spécifiée dans le fichier .nvmrc
3. Installer les dépendances avec `npm install`
4. Copier le fichier .env.example en .env et remplir les variables d'environnement
5. (Optional) Lancer une base de données PostgreSQL avec docker-compose : `docker-compose up -d`
6. Lancer le serveur avec `npm run dev`

Le serveur s'exécute sur le port 4000.
