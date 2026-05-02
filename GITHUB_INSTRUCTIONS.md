# 📋 Guide GitHub — AfriTalent
## Les 10 commits EXACTS à faire dans l'ordre

> ⚠️ Les timestamps seront vérifiés. Fais 1 commit par semaine, dans l'ordre.

---

## 🛠️ Installation Git (si pas encore fait)

```bash
# Configurer ton identité Git
git config --global user.name "Ton Prénom NOM"
git config --global user.email "ton@email.com"
```

---

## 📦 Créer le dépôt GitHub

1. Va sur **github.com** → "New repository"
2. Nom : `NOM-Prenom-AfriTalent` (remplace avec ton vrai nom)
3. Visibilité : **Public**
4. Ne pas initialiser avec README (tu l'as déjà)
5. Cliquer "Create repository"

---

## 🚀 Commandes de départ (une seule fois)

```bash
# Dans le dossier de ton projet
cd NOM-Prenom-AfriTalent

# Initialiser Git
git init

# Lier à GitHub
git remote add origin https://github.com/TON-USERNAME/NOM-Prenom-AfriTalent.git

# Branche principale
git branch -M main
```

---

## 📝 LES 10 COMMITS — Messages EXACTS

### COMMIT 1 — Semaine 1
```bash
# Ce que tu dois avoir fait :
# - Créé tous les fichiers vides (index.html, freelances.html, tarifs.html, about.html, contact.html, css/style.css, js/main.js)
# - Structure HTML minimale dans chaque page
# - Bootstrap 5 lié via CDN

git add .
git commit -m "Init : création du dépôt, arborescence des fichiers et structure HTML de base"
git push -u origin main
```

---

### COMMIT 2
```bash
# Ce que tu dois avoir fait :
# - Toutes les balises sémantiques en place (<header>, <nav>, <main>, <section>, <footer>)
# - Contenu textuel rédigé dans toutes les sections
# - Navbar Bootstrap dans toutes les pages avec 6 liens
# - Images placées

git add .
git commit -m "HTML : structure complète des 5 pages avec sections et contenu texte"
git push origin main
```

---

### COMMIT 3
```bash
# Ce que tu dois avoir fait :
# - 15+ variables CSS dans :root (couleurs, polices, espacements)
# - 2 Google Fonts importées et appliquées (Syne + DM Sans)
# - Palette de couleurs cohérente (vert émeraude + or + noir)
# - Reset CSS, styles de base, navbar stylisée

git add .
git commit -m "CSS : variables, typographie, layout général et styles de base"
git push origin main
```

---

### COMMIT 4
```bash
# Ce que tu dois avoir fait :
# - Section Hero (disposition asymétrique, badges flottants)
# - Section "Comment ça marche" en Bento Grid
# - Section catégories avec effets hover CSS
# - Carousel Bootstrap témoignages fonctionnel

git add .
git commit -m "CSS : Bento Grid, sections hero et catégories, effets hover"
git push origin main
```

---

### COMMIT 5
```bash
# Ce que tu dois avoir fait :
# - Toutes les pages testées sur mobile (375px), tablette (768px), desktop (1200px+)
# - Media queries rédigées dans style.css
# - Grille Bootstrap configurée (col-12, col-md-6, col-lg-4)
# - Navbar responsive (hamburger sur mobile)

git add .
git commit -m "CSS : responsive design mobile et tablette, media queries"
git push origin main
```

---

### COMMIT 6
```bash
# Ce que tu dois avoir fait :
# - Toggle Dark/Light Mode fonctionnel depuis la navbar
# - Thème sauvegardé dans localStorage (persiste entre les pages)
# - Navbar qui change de style au scroll (effet shrink)
# - Bouton "Retour en haut" qui apparaît au scroll

git add .
git commit -m "JS : dark mode avec localStorage, navbar dynamique au scroll"
git push origin main
```

---

### COMMIT 7
```bash
# Ce que tu dois avoir fait :
# - Compteurs animés de 0 à valeur cible au scroll (IntersectionObserver)
# - Sections en fondu (fade-in) à l'entrée dans le viewport
# - Animations testées sur index.html et about.html
# - Effet 3D tilt sur les cartes

git add .
git commit -m "JS : compteurs animés au scroll et animations fade-in des sections"
git push origin main
```

---

### COMMIT 8
```bash
# Ce que tu dois avoir fait :
# - Filtrage par catégorie sur freelances.html (sans rechargement)
# - Validation JS formulaire contact :
#   ✓ Tous les champs requis vérifiés
#   ✓ Format email vérifié par regex
#   ✓ Message minimum 20 caractères
#   ✓ Messages d'erreur sous chaque champ
#   ✓ Message de succès après soumission

git add .
git commit -m "JS : filtrage dynamique des freelances et validation du formulaire de contact"
git push origin main
```

---

### COMMIT 9
```bash
# Ce que tu dois avoir fait :
# - Tous les bugs visuels corrigés sur les 5 pages
# - Code HTML, CSS, JS entièrement commenté
# - HTML validé sur validator.w3.org (0 erreur bloquante)
# - Attributs alt vérifiés sur toutes les images
# - Indentation propre

git add .
git commit -m "Finalisation : corrections responsive, optimisation du code et commentaires"
git push origin main
```

---

### COMMIT 10 — Final
```bash
# Ce que tu dois avoir fait :
# - GitHub Pages activé et lien fonctionnel
# - README.md complet avec capture d'écran du site
# - Fichier docs/NOM_Prenom_Presentation.pptx ajouté
# - Vérification finale : toutes les pages OK, images chargées, JS fonctionnel

git add .
git commit -m "Déploiement : GitHub Pages activé, README finalisé et présentation PowerPoint ajoutée"
git push origin main
```

---

## 🌐 Activer GitHub Pages

1. Sur GitHub → ton dépôt → **Settings**
2. Menu gauche → **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main** → dossier **/ (root)**
5. Cliquer **Save**
6. URL générée : `https://TON-USERNAME.github.io/NOM-Prenom-AfriTalent/`

---

## ✅ Vérification finale avant soutenance

```bash
# Voir l'historique de tes commits
git log --oneline

# Tu dois voir exactement ceci (du plus récent au plus ancien) :
# abc1234 Déploiement : GitHub Pages activé, README finalisé et présentation PowerPoint ajoutée
# def5678 Finalisation : corrections responsive, optimisation du code et commentaires
# ghi9012 JS : filtrage dynamique des freelances et validation du formulaire de contact
# jkl3456 JS : compteurs animés au scroll et animations fade-in des sections
# mno7890 JS : dark mode avec localStorage, navbar dynamique au scroll
# pqr1234 CSS : responsive design mobile et tablette, media queries
# stu5678 CSS : Bento Grid, sections hero et catégories, effets hover
# vwx9012 CSS : variables, typographie, layout général et styles de base
# yza3456 HTML : structure complète des 5 pages avec sections et contenu texte
# bcd7890 Init : création du dépôt, arborescence des fichiers et structure HTML de base
```
