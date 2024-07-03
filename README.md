# React Portfolio

Ce projet est un portfolio personnel construit avec React et Vite. Il permet de montrer compétences, expériences et projets de manière interactive et moderne.

## Informations sur le projet

```json
{
  "name": "react-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fontsource/outfit": "^5.0.8",
    "@fontsource/roboto": "^5.0.8",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",h
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "vite": "^4.4.5"
  }
}
```
## Installation
### Clonez ce dépôt sur votre machine locale :

```
git clone https://github.com/votre_nom_utilisateur/react-portfolio.git
```

### Accédez au répertoire du projet :
```
cd react-portfolio
```
### Installez les dépendances :

```
npm install
```

## Scripts
### dev : Démarre le serveur de développement.

```
npm run dev
```

### build : Génère la version de production du site.

```
npm run build
```

## Modification des données

Les données affichées dans le portfolio peuvent être modifiées en éditant les fichiers JSON suivants dans le répertoire src :

history.json : Ce fichier contient les informations sur votre parcours professionnel. Mettez à jour ce fichier avec vos propres expériences.

projects.json : Ce fichier contient les informations sur vos projets. Ajoutez vos projets personnels pour les afficher dans le portfolio.

skills.json : Ce fichier contient les informations sur vos compétences. Mettez à jour ce fichier avec vos propres compétences.

## Modification des images
Pour utiliser vos propres images, remplacez celles dans le répertoire assets par les vôtres. Assurez-vous que les nouvelles images ont des noms correspondants ou mettez à jour les références aux images dans le code si les noms diffèrent.

## Contribution
Les contributions sont les bienvenues ! Si vous avez des idées d'amélioration ou trouvez des bugs, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## License
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
