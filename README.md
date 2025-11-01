# Portfolio numérique – Introduction aux SI (S5 MIAGE)

> Hébergement gratuit conseillé : **GitHub Pages** (ou Netlify, Vercel).  
> Code 100% HTML/CSS/JS — **pas de CMS**.

## Structure
```
.
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/main.js
└── contenu/
    ├── travaux/
    ├── notes-de-cours/
    ├── documents-si/
    ├── certifications/
    ├── projet-final/
    ├── diaporama/
    └── autres-ressources/
```

Place tes fichiers (PDF, DOCX, images) dans le dossier **contenu/** correspondant, puis mets à jour les liens dans `index.html`.

## Démarrage rapide (Git & GitHub)
```bash
# 1) Initialiser le dépôt
git init
git add .
git commit -m "feat: portfolio SI - structure initiale"

# 2) Créer le repo sur GitHub (depuis l'interface web) puis :
git remote add origin https://github.com/<ton-compte>/<nom-du-repo>.git
git branch -M main
git push -u origin main

# 3) Activer GitHub Pages
# Repo > Settings > Pages > Build and deployment:
#   - Source: Deploy from a branch
#   - Branch: main / root
# L'URL sera: https://<ton-compte>.github.io/<nom-du-repo>/
```

## Bonnes pratiques
- Commits **fréquents** et **clairs** (`feat:`, `fix:`, `docs:`…).
- Noms de fichiers **lisibles**, sans espace (ex: `TD_MCD.pdf`).
- Respect des standards **HTML5**, **CSS3**, **accessibilité**.
- Vérifie sur mobile (responsive).

## Personnalisation
- Modifie la **palette** dans `:root` (fichier CSS).
- Ajoute des cartes “Travaux” et des **liens** vers tes fichiers.
- Si besoin, crée des pages supplémentaires et relie-les depuis la nav.
