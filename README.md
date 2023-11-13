# Pivot Recorder

Ce serveur, écrit en TypeScript et utilisant Express.js basé sur une base de donnée PostgreSQL et l'ORM Prisma.

## Endpoints

- Health Check : Endpoint `GET /` pour vérifier l'état du serveur.
- Gestion des Utilisateurs : Endpoint `POST /users` pour créer de nouveaux utilisateurs.

## Installation development

1. Cloner le repository
2. Utiliser la version de Node spécifiée dans le fichier `.nvmrc`
3. Installer les dépendances avec `npm install`
4. Copier le fichier `.env.example` en `.env` et remplir les variables d'environnement
5. (Optional) Lancer une base de données PostgreSQL avec docker-compose : `docker-compose up -d`
6. Lancer le serveur avec `npm run dev`

Le serveur s'exécute sur le port 4000.

## Migrations

### En developpement

1. Modifier le schéma de la base de données dans le fichier `prisma/schema.prisma`
2. Générer les migrations avec `npx prisma migrate dev --name NOM_DE_LA_MIGRATION`
3. Vérifier les warnings dans le fichier de migration, principalement concernant les pertes de données.
4. Commit les fichiers générés dans le dossier `prisma/migrations`

### En production

Scalingo exécute automatiquement les migrations à chaque déploiement via l'entrée `postdeploy` dans le Procfile.
