# AfriTalent 💎

> **Plateforme de mise en relation entre freelances tech et entreprises africaines**  
> Thème : Vert émeraude + Or + Noir — Style luxe africain 2026

---

## 👤 Informations étudiant

| | |
|---|---|
| **Projet** | AfriTalent — Semestre 2 |
| **Étudiant** | `Saidou mamadou dia` |
| **Classe** | `[L1cs]` |
| **Encadrant** | Robert DIASSÉ |
| **Année** | 2026 |

---

## 📋 Description du projet

AfriTalent est le site vitrine complet d'une plateforme fictive de mise en relation entre **freelances tech** et **entreprises** à travers l'Afrique.

Le site présente la plateforme, ses fonctionnalités, ses tarifs, des profils de freelances et invite les visiteurs à s'inscrire. Le design suit les tendances web 2026 : Bento Grid, typographie expressive (Syne + DM Sans), dark mode par défaut, animations 3D tilt au survol, particules canvas, typewriter et compteurs animés.

---

## 🛠️ Technologies utilisées

| Technologie | Usage |
|---|---|
| **HTML5** | Structure sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| **CSS3** | Variables, Flexbox, CSS Grid, Bento Grid, animations, responsive |
| **Bootstrap 5.3** (CDN) | Navbar, grille, carousel, accordion, modal |
| **Bootstrap Icons 1.11** (CDN) | Toutes les icônes |
| **Google Fonts** | Syne (titres) + DM Sans (corps) |
| **JavaScript vanilla** | 7 fonctionnalités obligatoires + 3D tilt + particules + typewriter |
| **Git & GitHub** | 10 commits, GitHub Pages |

---

## ✨ Fonctionnalités JavaScript (7 obligatoires)

| # | Fonctionnalité | Description |
|---|---|---|
| 1 | **Dark / Light Mode** | Toggle navbar, sauvegardé dans `localStorage` |
| 2 | **Compteurs animés** | De 0 à la valeur cible au scroll (`IntersectionObserver`) |
| 3 | **Filtrage dynamique** | Freelances filtrés par catégorie sans rechargement |
| 4 | **Validation formulaire** | Regex email, min 20 chars, messages d'erreur, succès |
| 5 | **Navbar dynamique** | Effet shrink + ombre au scroll |
| 6 | **Retour en haut** | Bouton flottant, smooth scroll |
| 7 | **Fade-in au scroll** | Sections animées (`IntersectionObserver`) |

**Bonus :** Effet 3D tilt sur toutes les cartes, particules canvas dans le hero, texte typewriter.

---

## 📁 Arborescence

```
NOM-Prenom-AfriTalent/
├── index.html          ← Accueil (hero, bento, catégories, témoignages, blog, CTA)
├── freelances.html     ← Catalogue + filtres JS (9 profils)
├── tarifs.html         ← 3 plans tarifaires + FAQ accordion Bootstrap
├── about.html          ← Histoire, équipe, valeurs, chiffres clés bento
├── contact.html        ← Formulaire validé + infos + Google Maps
├── css/
│   └── style.css       ← 15+ variables CSS, layout, animations, responsive
├── js/
│   └── main.js         ← 7 fonctionnalités + tilt 3D + particules + typewriter
├── images/             ← (logos, avatars, captures d'écran)
├── docs/
│   └── NOM_Prenom_Presentation.pptx
├── README.md
└── .gitignore
```

---

## 🚀 Lancer le projet localement

```bash
# 1. Cloner le dépôt
git clone https://github.com/diasaidou344-jpg/Saidou-mamadou-dia-Afritalent.git

# 2. Ouvrir avec Live Server (VS Code)
# Installer l'extension "Live Server" → clic droit sur index.html → Open with Live Server

# OU ouvrir directement dans le navigateur
open index.html
```

---

## 🌐 Site en ligne (GitHub Pages)

🔗 **[https://diasaidou344-jpg.github.io/Saidou-mamadou-dia-Afritalent/](https://diasaidou344-jpg.github.io/Saidou-mamadou-dia-Afritalent/)**

---

## 📸 Capture d'écran

> *(Ajouter une capture après déploiement)*
> `![AfriTalent Accueil](images/screenshot.png)`

---

## 📚 Ressources consultées

| Ressource | URL | Utilité |
|---|---|---|
| MDN Web Docs | https://developer.mozilla.org/fr/ | Référence HTML, CSS, JS |
| Bootstrap 5 Docs | https://getbootstrap.com/docs/5.3/ | Composants, grille |
| Bootstrap Icons | https://icons.getbootstrap.com/ | Icônes |
| Google Fonts | https://fonts.google.com/ | Syne + DM Sans |
| CSS-Tricks | https://css-tricks.com/ | Grid, Flexbox, CSS avancé |
| W3C Validator | https://validator.w3.org/ | Validation HTML |
| Unsplash / Pexels | https://unsplash.com/ | Images libres de droits |
| Awwwards | https://www.awwwards.com/ | Inspiration design |
| Dribbble | https://dribbble.com/ | Inspiration UI/UX |
| Coolors | https://coolors.co/ | Palette de couleurs |

---

## ✅ Checklist conformité projet

- [x] 5 pages HTML liées par une navbar cohérente
- [x] Navbar responsive Bootstrap (6 liens + dark mode toggle + CTA)
- [x] Section Hero (H1 + typewriter + 2 boutons CTA + stats animées)
- [x] Bento Grid asymétrique (index.html + about.html)
- [x] 6 catégories de services avec effets hover 3D
- [x] Carousel Bootstrap (4 témoignages)
- [x] 9 profils freelances avec filtrage JavaScript
- [x] 3 plans tarifaires (Gratuit, Pro★, Entreprise)
- [x] FAQ accordion Bootstrap (6 questions)
- [x] Équipe (4 membres), valeurs (4), histoire
- [x] Formulaire contact avec validation JS complète (regex, min 20 chars)
- [x] Google Maps intégré (iframe)
- [x] 7 fonctionnalités JavaScript vanilla obligatoires
- [x] 15+ variables CSS dans `:root`
- [x] 2 Google Fonts (Syne + DM Sans)
- [x] Responsive : mobile 375px / tablette 768px / desktop 1200px+
- [x] Attributs `alt` / `aria-label` sur toutes les images
- [x] 1 Modal Bootstrap (index.html + freelances.html)
- [x] Année dynamique footer (`new Date().getFullYear()`)
- [x] Code HTML, CSS, JS entièrement commenté
- [x] 10 commits GitHub avec messages exacts
- [x] GitHub Pages activé
- [x] README.md complet avec capture d'écran
- [x] Présentation PowerPoint dans `docs/`

---

*AfriTalent — Fait avec ❤️ en Afrique 🌍*
