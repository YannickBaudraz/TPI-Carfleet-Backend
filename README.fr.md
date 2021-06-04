# CarFleet backend v0.4.0

Voici la partie backend de l'application Carfleet.

## Prérequis

- Nodejs avec npm -> <https://nodejs.org/en/download>
- Yarn de façon globale -> `npm install --global yarn`
- MariaDb -> <https://mariadb.org/download>

## Installation

Lancer `yarn install`

## Pousser sur un serveur de production

Une fois que vous avez accès à votre serveur, faites ces tâches dans cet ordre.

1. Installer les prérequis
1. Lancer `yarn install`.
1. Lancer `yarn build`.
1. Déplacer manuellement le dossier _dist_ sur votre serveur.
1. Suivre la partie Utilisation et Usilitsation->Integration de cette page.

## Utilisation

- Démarrer le service MariaDb
- Lancer les scripts du dossier _sql_ dans cet ordre :
    1. _createModel.sql_
    2. _insertCompanies.sql_
    3. _insertDrivers.sql_
    4. _insertVehicles.sql_
    5. _insertUsers.sql_
    6. _createUser.sql_

_Dans un environnement Linux, vous aurez toujours besoin de recréer les utilisateurs après avoir créé la base de données, ou ils n’auront pas les droits pour interagir avec._

### Développement

Lancer `yarn start:dev` pour un serveur de développement.

Le serveur démarre sur `http://localhost:3000` et charge directement les fichiers typescript. L’application se recharge automatiquement si vous modifiez l’un des fichiers sources.

Le prefix de l'api est `/api`, ex. `http://localhost:3000/api/vehicles`.

### Intégration

Lancer `yarn start:integration` pour un serveur d'intégration. Supposez que cette commande sera toujours exécutée dans un environnement debian.

Le serveur démarre sur `http://localhost:3000` et a le même envirronement qu'une production, excepté que la base de données contient des données fictives.

La base de données d’intégration utilisée est en fait la même que la base de données de développement.

## Documentation

Lancer `yarn gerenate:doc` pour générer la documentation de l'API dans le dossier _documentation_.

La commande `yarn generate:doc:serve` démarre un serveur sur le port 51001 et ouvre la documentation dans le navigateur par défaut une fois la génération terminée.

_La documentation n'est pas prise en compte par git._

## Running Tests

### Automatic tests

- Démarrer le servire MariaDB
- Créer un utilisateur de test pour la base de données ave cle fichier _sql/test/createTestAdminUser.sql_.
- Lancer la commande `yarn test`.
