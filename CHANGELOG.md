# 📜 Changelog - Dev Web AI Madagascar

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Versioning Sémantique](https://semver.org/lang/fr/).

---

## [Non publié] - À venir

### Prévu

- Ajout des leçons JavaScript bases
- Ajout d'une page pour faire des quiz

## [0.6.0] - en Developpement
- Optimiser l'apparence de barre de navigateur header
- Lien vers les pages principal dans les pages leçons
- Optimiser l'enregistrement des progression
- Formulaires de contact



## [0.6.0] - 2026-01-08 (Lancée)

### Ajouté
- Mise à jour complète des pages principales du site:
 - index.html : Statistique réels (16 leçons, 2 modules)
 - about.html : Historique du projet, présentation de l'auteur, roadmap
 - Contact.html : coordonnée complète.
 - lessons.html : Liens vers sommaires (au lieu de leçons directes), statuts réels.
- Informations de contact personnalisées :
 - Email : heryandrianarimbola@gmail.com
 - LinkedIn : Herimampionona ANDRIANARMBOLA
 - GitHub : DevWebAiMadagascar
 - Facebook : Page DEV WEB - AI - Madagascar
- Nom officiel du projet : "Dev Web AI Madagascar"
- Slogan : "Partage l'aventure à travers le développement web et l'intelligence artificielle"

### Modifié
-Toutes les pages publiques avec contenus réalistes et à jour
- Navigation cohérente entre toutes les pages 
- Footer avec liens sociaux corrects
- Ajustement des 3 premiéres leçons + ajout des 4 nouveaux leçons

## [0.5.0] - 2026-01-07

### Ajouté
- 3 premières leçons CSS du module "Bases CSS"
  - Leçon 1 : Introduction au CSS
  - Leçon 2 : Les sélecteurs CSS
  - Leçon 3 : Le modèle de boîte
- Page sommaire CSS (`sommaire-css.html`)
- Mise en ligne du site sur GitHub Pages : https://devwebaimadagascar.github.io/officialwebsite/
- Documentation complète du projet
 - README.md : Documentation principale avec présentation, installation et roadmap
 - CONTRIBUTING.md : Guide de contribution avec standards de code
 - CHANGELOG.md : Historique des versions
 - .gitignore : Fichiers à exclure de Git
- Documentation techniqe
 - docs\public\STRUCTURE.md : Architecture complète du projet
 - docs\public\css\RESET-VARIABLE-GUIDES.md : Guide des variables
 - docs\public\css\LESSON-STYLES-GUIDES.md : Guide des styles lesson
 - docs\public\css\PUBLIC-STYLES-GUIDES.md : Guide des styles public
 - docs\public\css\SOMMAIRE-STYLES-GUIDES.md : Guide des styles sommaire

### Modifié
- Amélioration de la navigation entre les leçons HTML et CSS
- Optimisation du responsive design pour les tablettes
- Mise à jour de la page d'accueil avec lien vers le module CSS
- Organisation de la documentation dans docs\public\

---

## [0.4.0] - 2026-01-06

### Ajouté
- Système de suivi de progression avec `localStorage`
  - Sauvegarde automatique de l'avancement de l'apprenant
  - Marquage des leçons visitées et terminées
  - Fichier `lesson-progress.js` réutilisable
- Attribut `data-lesson-id` sur toutes les pages de leçons
- Console logs pour debug du système de progression

### Modifié
- Refonte de la structure des scripts JavaScript
- Amélioration de la documentation du code JavaScript

---

## [0.3.0] - 2026-01-05

### Ajouté
- Fonctionnalité de thème clair/sombre
  - Bouton toggle sur toutes les pages
  - Sauvegarde de la préférence utilisateur
  - Fichier `theme-toggle.js`
  - Variables CSS pour les deux thèmes dans `reset-variable.css`
- Emojis ☀️ et 🌙 pour le bouton de thème

### Modifié
- Adaptation de tous les styles CSS pour supporter les deux thèmes
- Amélioration du contraste en mode sombre pour l'accessibilité

---

## [0.2.0] - 2026-01-01

### Ajouté
- 9 leçons HTML complètes du module "Bases HTML"
  - Leçon 1 : Comprendre le HTML et le WEB
  - Leçon 2 : Structure d'une page HTML
  - Leçon 3 : Les balises de texte
  - Leçon 4 : Les liens et images
  - Leçon 5 : Les listes
  - Leçon 6 : Les tableaux
  - Leçon 7 : Les formulaires
  - Leçon 8 : Les éléments sémantiques
  - Leçon 9 : Bonnes pratiques HTML
- Page sommaire HTML (`sommaire-html.html`)
- Navigation entre leçons avec boutons Précédent/Suivant
- Section "Mini pratique" avec questions/réponses dans chaque leçon
- Footer avec résumé et message de motivation

### Modifié
- Standardisation de la structure de toutes les leçons
- Uniformisation du ton pédagogique (tutoiement)

---

## [0.1.0] - 2025-12-25

### Ajouté
- Architecture de base du projet
  - Structure des dossiers (`assets`, `pages`, `lesson`)
  - Fichiers CSS de base :
    - `reset-variable.css` : Variables globales et reset CSS
    - `lesson-styles.css` : Styles des pages de leçons
    - `public-styles.css` : Styles des pages publiques
    - `sommaire-style.css` : Styles des pages sommaire
  - Fichier `index.html` (page d'accueil)
  - Logo DevWeb AI Madagascar (`logo-devweb-ai.svg`)
- Pages publiques :
  - `about.html` : Page À propos
  - `contact.html` : Page Contact
  - `lessons.html` : Liste des cours disponibles
- Design responsive mobile-first
- Système de navigation principal

### Décisions de design
- Utilisation de HTML/CSS/JavaScript vanilla (sans frameworks)
- Approche pédagogique "de zéro à héros"
- Public cible : débutants et intermédiaires francophones
- Palette de couleurs professionnelle avec accent bleu/violet

---

## [0.0.1] - 2025-12-20

### Ajouté
- Initialisation du projet Dev Web AI - Madagascar
- Création du repository GitHub
- Définition de la vision et des objectifs du projet
- Choix de la licence CC BY-NC-SA 4.0

---

## 📝 Notes sur le versioning

Ce projet utilise le **Versioning Sémantique** :
- **MAJEUR** (1.0.0) : Changements incompatibles avec les versions précédentes
- **MINEUR** (0.X.0) : Ajout de fonctionnalités rétro-compatibles
- **CORRECTIF** (0.0.X) : Corrections de bugs rétro-compatibles

### Version actuelle : 0.5.0
Le projet est en phase de **développement actif**. La version 1.0.0 sera publiée lorsque :
- ✅ Tous les modules HTML, CSS et JavaScript de base seront complétés
- ✅ Le système de quiz sera fonctionnel
- ✅ Le site aura été testé par plusieurs utilisateurs beta
- ✅ La documentation sera complète

---

## 🔗 Liens utiles

- **Repository GitHub** : https://github.com/DevWebAiMadagascar/officialwebsite
- **Site en ligne** : https://devwebaimadagascar.github.io/officialwebsite/
- **Contacter l'auteur** : heryandrianarimbola@gmail.com

---

<div align="center">

Dernière mise à jour : **07 janvier 2026**

</div>