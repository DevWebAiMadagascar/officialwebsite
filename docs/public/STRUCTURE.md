# 🏗️ Structure du projet - Dev Web AI Madagascar

Ce document explique l'architecture complète du projet, la logique derrière chaque dossier et fichier, et comment tout s'articule ensemble.

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Architecture globale](#-architecture-globale)
- [Dossier assets/](#-dossier-assets)
- [Dossier pages/](#-dossier-pages)
- [Système de navigation](#-système-de-navigation)
- [Chemins relatifs](#-chemins-relatifs)
- [Conventions de nommage](#-conventions-de-nommage)
- [Ajouter une nouvelle leçon](#-ajouter-une-nouvelle-leçon)

---

## 🎯 Vue d'ensemble

**Dev Web AI - Madagascar** est une plateforme d'apprentissage statique construite avec HTML/CSS/JavaScript vanilla. Aucun framework, aucun build system - juste des fichiers HTML qui s'ouvrent directement dans un navigateur.

### Principes de l'architecture

1. **Simplicité** : Structure claire et facile à comprendre
2. **Modularité** : CSS séparés par type de page
3. **Évolutivité** : Facile d'ajouter de nouvelles leçons sans tout casser
4. **Performance** : Pas de dépendances externes, chargement rapide

---

## 📂 Architecture globale

```
DWA-madagascar/
│
├── index.html                      # 🏠 Page d'accueil du site
├── .gitignore                      # 🚫 Fichiers à ignorer par Git
├── README.md                       # 📖 Documentation principale
├── CONTRIBUTING.md                 # 🤝 Guide de contribution
├── CHANGELOG.md                    # 📜 Historique des versions
│
├── docs/                           # 📚 Documentation technique
│   └── STRUCTURE.md               # 🏗️ Ce fichier
│
├── assets/                         # 🎨 Ressources statiques
│   ├── css/                       # Feuilles de style
│   ├── js/                        # Scripts JavaScript
│   └── img/                       # Images et logos
│
└── pages/                          # 📄 Toutes les pages du site
    └── public/                     # Pages accessibles publiquement
        ├── about.html
        ├── contact.html
        ├── lessons.html
        ├── lesson/                 # Leçons organisées par module
        └── quiz/                   # Quiz par module
```

---

## 🎨 Dossier `assets/`

Le dossier `assets/` contient toutes les ressources statiques réutilisables : styles, scripts et images.

### 📁 `assets/css/` - Feuilles de style

#### Structure

```
assets/css/
├── reset-variable.css      # 🎯 BASE - Variables globales + reset CSS
├── public-styles.css       # 🌐 Styles des pages publiques
├── lesson-styles.css       # 📚 Styles des pages de leçons
└── sommaire-style.css      # 📋 Styles des pages sommaire
```

#### Logique de séparation

Les fichiers CSS sont **complètement indépendants** les uns des autres, mais **tous dépendent de `reset-variable.css`**.

| Fichier | Utilisation | Dépendance |
|---------|-------------|------------|
| `reset-variable.css` | **BASE OBLIGATOIRE** - Variables CSS (couleurs, espacements, typographie) + reset CSS universel | Aucune |
| `public-styles.css` | Pages publiques (`about.html`, `contact.html`, `lessons.html`) | `reset-variable.css` |
| `lesson-styles.css` | Pages de leçons individuelles (`lesson1.html`, `lesson2.html`, etc.) | `reset-variable.css` |
| `sommaire-style.css` | Pages sommaire de modules (`sommaire-html.html`, `sommaire-css.html`) | `reset-variable.css` |

#### Pourquoi cette séparation ?

✅ **Avantages :**
- **Maintenabilité** : Modifier les styles d'un type de page sans affecter les autres
- **Performance** : Chaque page charge uniquement le CSS dont elle a besoin
- **Cohérence visuelle** : Tous utilisent les mêmes variables (couleurs, espacements)
- **Clarté** : On sait immédiatement quel CSS utiliser pour quel type de page

#### Ordre de chargement dans les pages

**Pour une page de leçon :**
```html
<link rel="stylesheet" href="../../../../../assets/css/reset-variable.css">
<link rel="stylesheet" href="../../../../../assets/css/lesson-styles.css">
```

**Pour une page publique :**
```html
<link rel="stylesheet" href="../../assets/css/reset-variable.css">
<link rel="stylesheet" href="../../assets/css/public-styles.css">
```

**Pour une page sommaire :**
```html
<link rel="stylesheet" href="../../../assets/css/reset-variable.css">
<link rel="stylesheet" href="../../../assets/css/sommaire-style.css">
```

⚠️ **Important** : `reset-variable.css` doit **TOUJOURS** être chargé en premier !

---

### 📁 `assets/js/` - Scripts JavaScript

```
assets/js/
├── lesson-progress.js      # 💾 Système de suivi de progression
└── theme-toggle.js         # 🌓 Gestion thème clair/sombre
```

#### `lesson-progress.js`
- **Rôle** : Sauvegarde la progression de l'apprenant dans `localStorage`
- **Utilisation** : Inclus sur TOUTES les pages de leçons
- **Fonctionnalités** :
  - Marque automatiquement une leçon comme "visitée" au chargement
  - Permet de marquer une leçon comme "terminée"
  - Sauvegarde persistante dans le navigateur

#### `theme-toggle.js`
- **Rôle** : Bascule entre mode clair et mode sombre
- **Utilisation** : Inclus sur TOUTES les pages (publiques, leçons, sommaires)
- **Fonctionnalités** :
  - Détecte et sauvegarde la préférence utilisateur
  - Applique le thème au chargement de la page
  - Bouton toggle avec emojis ☀️/🌙

---

### 📁 `assets/img/` - Images

```
assets/img/
└── logo-devweb-ai.svg      # Logo principal du site
```

Images, logos, icônes et autres ressources visuelles.

---

## 📄 Dossier `pages/`

### Structure actuelle : `pages/public/`

Actuellement, **toutes les pages sont publiques** et accessibles sans authentification.

```
pages/public/
├── about.html              # 📖 À propos du projet
├── contact.html            # 📧 Formulaire de contact
├── lessons.html            # 📚 Liste de tous les modules disponibles
├── lesson/                 # 🎓 Leçons organisées par module
└── quiz/                   # ✍️ Quiz de validation des acquis
```

#### Pourquoi un dossier `public/` ?

🔮 **Vision future** : Préparation pour d'éventuels contenus privés (communauté, espace membre, tableau de bord personnel, etc.)

```
pages/
├── public/             # Accessible à tous
└── private/            # (Futur) Nécessite authentification
    ├── dashboard.html
    ├── community.html
    └── profile.html
```

Pour le moment, seul `public/` existe, mais l'architecture est prête pour évoluer.

---

### 📁 `pages/public/lesson/` - Modules de leçons

#### Structure par module et niveau

```
lesson/
├── html/
│   ├── sommaire-html.html          # 📋 Index du module HTML
│   └── bases-html/                 # 🟢 Niveau débutant
│       ├── lesson1.html
│       ├── lesson2.html
│       └── ... (9 leçons)
│
└── css/
    ├── sommaire-css.html           # 📋 Index du module CSS
    └── bases-css/                  # 🟢 Niveau débutant
        ├── lesson1.html
        ├── lesson2.html
        └── lesson3.html (9 prévues)
```

#### Convention de nommage des sous-dossiers

Le préfixe **"bases-"** indique le **niveau de difficulté** :

| Préfixe | Niveau | Public cible | Statut |
|---------|--------|--------------|--------|
| `bases-` | 🟢 Débutant | Aucune connaissance préalable requise | ✅ En cours |
| `avance-` | 🟡 Intermédiaire | Maîtrise des bases requise | 🔜 Planifié |
| `expert-` | 🔴 Avancé | Pour développeurs expérimentés | 📅 Futur |

#### Structure future planifiée

```
lesson/
├── html/
│   ├── sommaire-html.html
│   ├── bases-html/              # ✅ 9 leçons (terminé)
│   └── avance-html/             # 🔜 À venir
│       ├── lesson1.html         # SEO et accessibilité
│       ├── lesson2.html         # HTML5 APIs
│       └── ...
│
├── css/
│   ├── sommaire-css.html
│   ├── bases-css/               # ⏳ 3/9 leçons
│   └── avance-css/              # 🔜 À venir
│       ├── lesson1.html         # Animations complexes
│       ├── lesson2.html         # CSS Grid avancé
│       └── ...
│
└── javascript/                   # 📅 Planifié
    ├── sommaire-js.html
    ├── bases-js/
    └── avance-js/
```

---

### 📋 Pages `sommaire-xxx.html`

Les pages sommaire sont des **index de navigation** pour chaque module.

#### Rôle

- **Lister toutes les leçons** d'un module (complètes + à venir)
- **Afficher la progression** de l'apprenant (via localStorage)
- **Indiquer le nombre total** de leçons disponibles
- **Fournir une navigation rapide** vers n'importe quelle leçon

#### Exemple de contenu

Une page `sommaire-html.html` affiche :
- ✅ Leçon 1 : Comprendre le HTML (Complétée)
- ✅ Leçon 2 : Structure HTML (Vue)
- ⬜ Leçon 3 : Les balises de texte (Non commencée)
- 🔒 Leçon 10 : HTML Avancé (Bientôt disponible)

#### Emplacement

Les sommaires sont au même niveau que les sous-dossiers de leçons :

```
lesson/html/
├── sommaire-html.html      # ← Sommaire
└── bases-html/             # ← Leçons
    └── lesson1.html
```

---

### ✍️ `pages/public/quiz/` - Quiz de validation

#### Structure actuelle

```
quiz/
└── bases-html.html         # Quiz pour valider le module HTML de base
```

#### Structure future (non définie)

Deux options envisagées :

**Option A - Un quiz par module complet :**
```
quiz/
├── bases-html.html         # Valide TOUTES les leçons HTML de base
├── bases-css.html          # Valide TOUTES les leçons CSS de base
└── bases-js.html
```

**Option B - Un quiz par leçon :**
```
quiz/
├── html/
│   ├── lesson1-quiz.html
│   ├── lesson2-quiz.html
│   └── ...
└── css/
    └── ...
```

**Option C - Les deux :**
```
quiz/
├── html/
│   ├── module-complet.html     # Quiz global
│   ├── lesson1-quiz.html       # Quiz individuels
│   └── lesson2-quiz.html
└── css/
    └── ...
```

💡 **Décision à prendre** : Selon la pédagogie souhaitée et le temps disponible.

---

## 🧭 Système de navigation

### Navigation globale

```
index.html (Accueil)
    ↓
lessons.html (Liste des modules)
    ↓
sommaire-html.html (Index module HTML)
    ↓
lesson1.html → lesson2.html → ... → lesson9.html
    ↓
quiz/bases-html.html (Validation)
```

### Navigation dans une leçon

Chaque page de leçon possède 3 boutons de navigation :

```
[← Précédent]  [📋 Sommaire]  [Suivant →]
```

- **Précédent** : Leçon précédente (désactivé si leçon 1)
- **Sommaire** : Retour à `sommaire-xxx.html`
- **Suivant** : Leçon suivante (désactivé si dernière leçon)

---

## 🔗 Chemins relatifs

### Pourquoi des chemins relatifs longs ?

Dans `lesson1.html` situé dans `pages/public/lesson/html/bases-html/`, on trouve :

```html
<link rel="stylesheet" href="../../../../../assets/css/reset-variable.css">
```

**Explication :**
```
lesson1.html
    ↑ ../ (bases-html)
    ↑ ../ (html)
    ↑ ../ (lesson)
    ↑ ../ (public)
    ↑ ../ (pages)
    ↑ ../ (racine du projet)
    → assets/css/reset-variable.css
```

### Pourquoi ne pas utiliser des chemins absolus ?

❌ **Chemins absolus** (`/assets/css/...`) :
- Ne fonctionnent PAS en local (double-clic sur `lesson1.html`)
- Nécessitent un serveur web
- Compliquent les tests rapides

✅ **Chemins relatifs** (`../../../../../assets/css/...`) :
- Fonctionnent partout : local, serveur, GitHub Pages
- Simplicité maximale pour les débutants
- Pas de configuration nécessaire

### Inconvénient

- Chemins longs et répétitifs
- Risque d'erreur si on déplace un fichier

### Solution adoptée

**Accepter la verbosité** pour gagner en simplicité et compatibilité universelle.

---

## 🏷️ Conventions de nommage

### Fichiers HTML

| Type | Convention | Exemple |
|------|-----------|---------|
| Pages publiques | `nom-page.html` | `about.html`, `contact.html` |
| Leçons | `lessonX.html` (X = numéro) | `lesson1.html`, `lesson2.html` |
| Sommaires | `sommaire-module.html` | `sommaire-html.html` |
| Quiz | `nom-module.html` | `bases-html.html` |

### Dossiers

| Type | Convention | Exemple |
|------|-----------|---------|
| Modules | Nom du langage en minuscules | `html/`, `css/`, `javascript/` |
| Niveaux | `niveau-module/` | `bases-html/`, `avance-css/` |

### Fichiers CSS

| Type | Convention | Exemple |
|------|-----------|---------|
| Variables globales | `reset-variable.css` | (unique) |
| Styles par type | `type-styles.css` | `lesson-styles.css` |

### Fichiers JavaScript

| Type | Convention | Exemple |
|------|-----------|---------|
| Fonctionnalités | `fonction-description.js` | `lesson-progress.js` |

### Classes CSS

- **Format** : kebab-case (tout en minuscules avec tirets)
- **Langue** : Français
- **Exemples** : `.btn-nav`, `.conteneur-nav-lecons`, `.info-box`

### IDs

- **Format** : kebab-case
- **Langue** : Anglais (pour compatibilité JavaScript)
- **Exemples** : `#theme-toggle`, `#complete-lesson-btn`

### Attributs data-*

- **Format** : kebab-case
- **Convention** : `data-lesson-id="module-lesson-X"`
- **Exemple** : `data-lesson-id="html-lesson-5"`

---

## ➕ Ajouter une nouvelle leçon

### Checklist rapide

1. **Créer le fichier HTML**
   - Emplacement : `pages/public/lesson/[module]/[niveau]/lessonX.html`
   - Template : Copier une leçon existante

2. **Modifier l'attribut data-lesson-id**
   ```html
   <body data-lesson-id="html-lesson-10">
   ```

3. **Adapter les chemins relatifs CSS/JS**
   - Compter les niveaux de profondeur
   - Ajuster le nombre de `../`

4. **Mettre à jour la navigation**
   - Bouton "Précédent" : lien vers leçon précédente
   - Bouton "Suivant" : lien vers leçon suivante
   - Bouton "Sommaire" : lien vers `sommaire-xxx.html`

5. **Ajouter au sommaire**
   - Éditer `sommaire-xxx.html`
   - Ajouter la nouvelle leçon dans la liste

6. **Tester**
   - Ouvrir le fichier en local
   - Vérifier : CSS charge, JS fonctionne, navigation OK
   - Tester sur mobile

### Exemple : Ajouter `lesson10.html` en HTML

```bash
# 1. Créer le fichier
pages/public/lesson/html/bases-html/lesson10.html

# 2. Copier le contenu de lesson9.html
# 3. Modifier :
#    - data-lesson-id="html-lesson-10"
#    - Titre de la leçon
#    - Contenu pédagogique
#    - Navigation : Précédent = lesson9.html, Suivant = (désactivé ou module suivant)

# 4. Mettre à jour sommaire-html.html
#    - Ajouter : <li><a href="bases-html/lesson10.html">Leçon 10 : ...</a></li>
```

---

## 📚 Résumé de l'architecture

| Composant | Rôle | Dépendances |
|-----------|------|-------------|
| `index.html` | Page d'accueil | `public-styles.css` |
| `reset-variable.css` | Variables + reset CSS | Aucune |
| `lesson-styles.css` | Styles des leçons | `reset-variable.css` |
| `lesson-progress.js` | Suivi progression | `localStorage` |
| `theme-toggle.js` | Thème clair/sombre | `localStorage` |
| `sommaire-xxx.html` | Index de module | `sommaire-style.css` |
| `lessonX.html` | Leçon individuelle | `lesson-styles.css` + 2 JS |

---

## 🔮 Évolution future

### Court terme (Janvier 2026)
- ✅ Compléter les 6 leçons CSS restantes
- ✅ Ajouter le module JavaScript de base
- ✅ Implémenter les quiz interactifs

### Moyen terme (Q1-Q2 2026)
- 📁 Créer `avance-html/` et `avance-css/`
- 🏆 Système de badges et récompenses
- 📊 Dashboard de progression

### Long terme (2026+)
- 🔐 Zone membre avec `pages/private/`
- 👥 Communauté d'apprentissage
- 🎓 Certificats de réussite

---

## 🤝 Besoin d'aide ?

Si cette documentation n'est pas claire ou si vous avez des questions :

📧 **Email** : heryandrianarimbola@gmail.com  
💼 **LinkedIn** : [Herimampionona Andrianarimbola](https://www.linkedin.com/in/herimampionona-andrianarimbola-a6110b398)

---

<div align="center">

**Dernière mise à jour** : 08 janvier 2026

</div>