# 🌐 Dev Web AI - Madagascar

![Statut du projet](https://img.shields.io/badge/statut-en%20développement-yellow)
![Licence](https://img.shields.io/badge/licence-CC%20BY--NC--SA%204.0-blue)
![Langage](https://img.shields.io/badge/langue-Français-blue)

> **Partagez l'aventure à travers le développement web et l'intelligence artificielle**

Une plateforme d'apprentissage interactive destinée aux débutants et intermédiaires francophones qui souhaitent maîtriser le développement web de zéro à héros.

🔗 **[Voir le site en ligne](https://devwebaimadagascar.github.io/officialwebsite/)**

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Contenu des leçons](#-contenu-des-leçons)
- [Roadmap](#-roadmap)
- [Contribuer](#-contribuer)
- [Licence](#-licence)
- [Contact](#-contact)

---

## 🎯 À propos

**Dev Web AI - Madagascar** est une plateforme pédagogique gratuite conçue pour accompagner les apprenants francophones dans leur parcours d'apprentissage du développement web et de l'intelligence artificielle.

### Public cible
- 🎓 Débutants complets sans aucune expérience en programmation
- 💡 Apprenants intermédiaires souhaitant consolider leurs bases
- 🔄 Personnes en reconversion professionnelle vers le développement web

### Philosophie pédagogique
Une approche progressive "de zéro à héros" avec :
- Des leçons structurées et recommandées dans un ordre précis
- Un système de suivi de progression automatique
- Des quiz interactifs après chaque module (à venir)
- Une interface claire avec mode sombre/clair

---

## ✨ Fonctionnalités

- ✅ **Suivi de progression** : Votre avancement est automatiquement sauvegardé dans votre navigateur
- 🌓 **Thème clair/sombre** : Changez l'apparence selon vos préférences
- 📚 **Leçons structurées** : Parcours progressif avec ordre recommandé
- 🎯 **Quiz interactifs** : Validation des acquis (en cours de développement)
- 📱 **Design responsive** : Accessible sur ordinateur, tablette et mobile
- 🆓 **100% gratuit** : Contenu éducatif libre d'accès

---

## 🛠 Technologies utilisées

Ce projet est construit avec des technologies web fondamentales :

- **HTML5** : Structure et contenu sémantique
- **CSS3** : Mise en forme et design responsive
- **JavaScript vanilla** : Interactivité et gestion de la progression

Aucun framework ou bibliothèque externe requis ! Parfait pour apprendre les bases solides du développement web.

---

## 🚀 Installation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Un éditeur de code (recommandé : VS Code)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/DevWebAiMadagascar/officialwebsite.git
   ```

2. **Accéder au dossier du projet**
   ```bash
   cd officialwebsite
   ```

3. **Lancer le site**
   - Ouvrez simplement le fichier `index.html` dans votre navigateur
   - Ou utilisez l'extension "Live Server" dans VS Code pour un rechargement automatique

**C'est tout !** Aucune installation de dépendances n'est nécessaire. 🎉

---

## 📂 Structure du projet

```
DWA-madagascar/
│
├── index.html                          # Page d'accueil
├── assets/
│   ├── css/
│   │   ├── reset-variable.css         # Variables et reset CSS
│   │   ├── public-styles.css          # Styles des pages publiques
│   │   ├── lesson-styles.css          # Styles des leçons
│   │   └── sommaire-style.css         # Styles des sommaires
│   ├── js/
│   │   ├── theme-toggle.js            # Gestion du thème clair/sombre
│   │   └── lesson-progress.js         # Sauvegarde de la progression
│   └── img/
│       └── logo-devweb-ai.svg         # Logo du site
│
└── pages/
    └── public/
        ├── about.html                  # À propos
        ├── contact.html                # Contact
        ├── lessons.html                # Liste des cours
        ├── lesson/
        │   ├── html/
        │   │   ├── sommaire-html.html # Sommaire des leçons HTML
        │   │   └── bases-html/        # 9 leçons HTML
        │   └── css/
        │       ├── sommaire-css.html  # Sommaire des leçons CSS
        │       └── bases-css/         # 3 leçons CSS (9 prévues)
        └── quiz/
            └── bases-html.html         # Quiz HTML (en développement)
```

---

## 📖 Contenu des leçons

### Module HTML (9 leçons)
Les bases essentielles du langage de balisage :
1. Introduction au HTML
2. Structure d'une page HTML
3. Les balises de texte
4. Les liens et images
5. Les listes
6. Les tableaux
7. Les formulaires
8. Les éléments sémantiques
9. Bonnes pratiques HTML

### Module CSS (9 leçons prévues)
Actuellement 3 leçons disponibles, 6 à venir :
1. HTML + CSS : connexion
2. Les sélecteurs CSS
3. Propriété de texte
4. Box Model
5. Couleur et unités
6. Display et positionnement
7. Flexbox (bases)

### Module JavaScript (planifié)
Les bases de la programmation web interactive (contenu à venir)

---

## 🗺 Roadmap

### Version actuelle (v0.6)
- [x] 9 leçons HTML complètes
- [x] 7 leçons CSS de base
- [x] Système de progression avec localStorage
- [x] Thème clair/sombre fonctionnel
- [x] Design responsive
- [x] Documentation complète du projet
- [x] Pages principales mises à jour

### Prochaines étapes
- [ ] Implémenter les quiz interactifs après chaque module
- [ ] Ajouter le module JavaScript
- [ ] Créer des exercices pratiques
- [ ] Ajouter des leçons avancées (CSS Grid, animations, etc.)
- [ ] Intégrer une section sur l'IA pour les développeurs web

---

## 🤝 Contribuer

Ce projet est actuellement développé en solo par Herimampionona ANDRIANARIMBOLA.

### Vous souhaitez contribuer ?

Si vous avez des suggestions, des corrections ou souhaitez participer au développement :

1. **Signalez un bug** : Ouvrez une [issue sur GitHub](https://github.com/DevWebAiMadagascar/officialwebsite/issues)
2. **Proposez une amélioration** : Créez une issue avec le label "enhancement"
3. **Contactez-moi directement** : Voir la section [Contact](#-contact) ci-dessous

### Utilisation du contenu

Vous êtes libre d'utiliser ce contenu pour apprendre, mais pour toute utilisation commerciale ou modification substantielle, merci de me contacter au préalable.

---

## 📜 Licence

Ce projet est sous licence **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**.

Cela signifie que vous pouvez :
- ✅ Partager le contenu
- ✅ Adapter et modifier le contenu
- ✅ Utiliser pour l'apprentissage personnel

À condition de :
- 📝 Créditer l'auteur original
- 🚫 Ne pas utiliser à des fins commerciales
- 🔄 Partager vos modifications sous la même licence

Pour plus de détails : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

## 📧 Contact

**Herimampionona ANDRIANARIMBOLA**

- 📧 Email : [heryandrianarimbola@gmail.com](mailto:heryandrianarimbola@gmail.com)
- 💼 LinkedIn : [Herimampionona Andrianarimbola](https://www.linkedin.com/in/herimampionona-andrianarimbola-a6110b398)
- 🐙 GitHub : [@DevWebAiMadagascar](https://github.com/DevWebAiMadagascar)

Pour toute question, suggestion ou collaboration, n'hésitez pas à me contacter !

---

<div align="center">

**⭐ Si ce projet vous aide dans votre apprentissage, n'hésitez pas à lui donner une étoile sur GitHub ! ⭐**

</div>
