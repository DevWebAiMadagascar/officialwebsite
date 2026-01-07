# 🤝 Guide de Contribution - Dev Web AI Madagascar

Merci de votre intérêt pour contribuer à **Dev Web AI - Madagascar** ! 🎉

Ce projet vise à rendre l'apprentissage du développement web accessible à tous les francophones. Toute contribution qui améliore cette mission est la bienvenue.

---

## 📋 Table des matières

- [Types de contributions acceptées](#-types-de-contributions-acceptées)
- [Avant de contribuer](#-avant-de-contribuer)
- [Standards de code](#-standards-de-code)
- [Structure d'une leçon](#-structure-dune-leçon)
- [Process de contribution](#-process-de-contribution)
- [Liste de vérification](#-liste-de-vérification-avant-soumission)
- [Ressources utiles](#-ressources-utiles)

---

## ✅ Types de contributions acceptées

Nous acceptons les contributions suivantes :

### 1. 🐛 Corrections de bugs
- Erreurs d'affichage CSS
- JavaScript qui ne fonctionne pas correctement
- Liens cassés
- Problèmes de responsive design

### 2. 📝 Améliorations de leçons existantes
- Clarification d'explications
- Ajout d'exemples concrets
- Amélioration de la pédagogie
- Corrections orthographiques et grammaticales

### 3. 📚 Nouvelles leçons
- Complétion des modules HTML, CSS ou JavaScript
- Respect strict de la structure et du ton existant
- Progression logique par rapport aux leçons précédentes

### 4. ⚡ Nouvelles fonctionnalités
- Améliorations du système de progression
- Nouveaux types d'exercices interactifs
- Quiz interactifs
- Système de badges ou récompenses

### 5. 🌍 Traductions
- Traduction en anglais du contenu
- Adaptation culturelle si nécessaire

---

## 🚦 Avant de contribuer

### Pour toute contribution, vous devez :

1. **Me contacter par email** : [heryandrianarimbola@gmail.com](mailto:heryandrianarimbola@gmail.com)
   - Expliquez brièvement votre contribution
   - Attendez une réponse avant de commencer le travail
   - Cela évite les efforts inutiles si la contribution ne correspond pas à la vision du projet

2. **Respecter la licence CC BY-NC-SA 4.0**
   - Votre contribution sera sous la même licence
   - Pas d'utilisation commerciale
   - Attribution de l'auteur original

3. **Être patient et respectueux**
   - Ce projet est maintenu en solo
   - Les réponses peuvent prendre quelques jours

---

## 📐 Standards de code

Pour maintenir la cohérence du projet, veuillez respecter ces conventions :

### HTML

```html
<!-- ✅ BON : Indentation 4 espaces, structure claire -->
<section>
    <h2>🎯 Titre de la section</h2>
    <p>Contenu du paragraphe.</p>
    <ul>
        <li>Premier élément</li>
        <li>Deuxième élément</li>
    </ul>
</section>

<!-- ❌ MAUVAIS : Indentation inconsistante -->
<section>
<h2>Titre</h2>
  <p>Paragraphe</p>
    <ul>
<li>Item</li>
  </ul>
</section>
```

**Règles HTML :**
- ✅ Indentation : **4 espaces** (pas de tabs)
- ✅ Attributs entre guillemets doubles : `class="ma-classe"`
- ✅ Balises HTML5 sémantiques : `<section>`, `<article>`, `<nav>`
- ✅ Attribut `data-lesson-id` obligatoire sur `<body>` pour chaque leçon
- ✅ Inclure les deux scripts en fin de page :
  ```html
  <script src="../../../../../assets/js/lesson-progress.js"></script>
  <script src="../../../../../assets/js/theme-toggle.js"></script>
  ```

### CSS

```css
/* ✅ BON : Variables CSS, commentaires clairs, indentation 4 espaces */
.conteneur-nav-lecons {
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg);
}

/* ❌ MAUVAIS : Valeurs en dur, pas de commentaires */
.conteneur-nav-lecons{
display:flex;justify-content:space-between;
gap:10px;padding:20px;}
```

**Règles CSS :**
- ✅ Indentation : **4 espaces**
- ✅ **Utiliser les variables CSS** définies dans `reset-variable.css` :
  - Espacements : `var(--spacing-sm)`, `var(--spacing-md)`, etc.
  - Couleurs : `var(--primary-light)`, `var(--text-white)`, etc.
  - Typographie : `var(--font-size-lg)`, etc.
- ✅ Noms de classes **en français** : `.btn-nav`, `.info-box`, `.conteneur-principal`
- ✅ Un sélecteur par ligne pour plus de lisibilité
- ✅ Commentaires descriptifs avec `/* ===== SECTION ===== */`

### JavaScript

```javascript
// ✅ BON : Commentaires clairs, nommage explicite
function markAsCompleted() {
    if (lessonId) {
        localStorage.setItem(lessonId + '-completed', 'true');
        console.log(`Leçon ${lessonId} marquée comme terminée`);
    }
}

// ❌ MAUVAIS : Pas de commentaires, noms cryptiques
function m(){
if(l){localStorage.setItem(l+'-c','true');}
}
```

**Règles JavaScript :**
- ✅ Indentation : **4 espaces**
- ✅ Noms de variables **descriptifs** : `lessonId`, `completeBtn`
- ✅ Utiliser `const` et `let` (jamais `var`)
- ✅ Commentaires pour expliquer la logique
- ✅ Tester le code dans **Chrome, Firefox et Edge**

---

## 📖 Structure d'une leçon

Chaque fichier de leçon **DOIT** suivre cette structure obligatoire :

### Template de base

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leçon X - Titre de la leçon</title>
    <link rel="stylesheet" href="../../../../../assets/css/reset-variable.css">
    <link rel="stylesheet" href="../../../../../assets/css/lesson-styles.css">
</head>

<body data-lesson-id="module-lesson-X">

    <!-- Bouton toggle thème (obligatoire) -->
    <button id="theme-toggle" class="theme-toggle" aria-label="Changer de thème">
        <span class="icon-light">☀️</span>
        <span class="icon-dark">🌙</span>
    </button>

    <!-- EN-TÊTE -->
    <header>
        <h1>📚 Leçon X - Titre de la leçon</h1>
    </header>

    <!-- CONTENU PRINCIPAL -->
    <main>

        <!-- 1. OBJECTIFS (obligatoire) -->
        <section>
            <h2>🎯 Objectif de la leçon</h2>
            <p>À la fin de cette leçon, tu comprendras :</p>
            <ul>
                <li>Premier objectif</li>
                <li>Deuxième objectif</li>
            </ul>
        </section>

        <!-- 2. SECTIONS DE CONTENU (numérotées) -->
        <section>
            <h2>🔤 1. Premier concept</h2>
            <p>Explication claire et pédagogique...</p>
        </section>

        <section>
            <h2>💻 2. Deuxième concept</h2>
            <p>Suite de la progression...</p>
        </section>

        <!-- 3. MINI PRATIQUE / QUIZ (obligatoire) -->
        <section class="quiz-section">
            <h2>✍️ X. Mini pratique</h2>
            <p>Réponds <strong>sans tricher</strong> :</p>
            <ol>
                <li>Question 1 ?</li>
                <li>Question 2 ?</li>
            </ol>

            <details class="reponses">
                <summary>🔍 Voir les réponses</summary>
                <p><strong>Réponses :</strong> 1-a, 2-b</p>
            </details>
        </section>

    </main>

    <!-- NAVIGATION (obligatoire) -->
    <nav class="nav-lecons">
        <div class="conteneur-nav-lecons">
            <a href="lessonX-1.html" class="btn-nav precedent">
                <span class="fleche">←</span>
                <div class="info-nav">
                    <span class="label">Précédent</span>
                    <span class="titre-lecon">Titre leçon précédente</span>
                </div>
            </a>

            <a href="../sommaire-module.html" class="btn-sommaire">
                📋 Sommaire
            </a>

            <a href="lessonX+1.html" class="btn-nav suivant">
                <div class="info-nav">
                    <span class="label">Suivant</span>
                    <span class="titre-lecon">Titre leçon suivante</span>
                </div>
                <span class="fleche">→</span>
            </a>
        </div>
    </nav>

    <!-- FOOTER / RÉSUMÉ (obligatoire) -->
    <footer>
        <div class="footer-content">
            <h2>📝 Résumé rapide</h2>
            <ul>
                <li>Point clé 1</li>
                <li>Point clé 2</li>
            </ul>

            <div class="footer-motivation">
                <p>🎉 <strong>Bravo !</strong> Message de motivation.</p>
                <p>Continue, tu es sur la bonne voie ! 💪</p>
            </div>
        </div>

        <div class="footer-credits">
            <p>© 2026 - Dev Web AI Madagascar | Créé avec ❤️</p>
        </div>
    </footer>

    <!-- SCRIPTS (obligatoires) -->
    <script src="../../../../../assets/js/lesson-progress.js"></script>
    <script src="../../../../../assets/js/theme-toggle.js"></script>

</body>
</html>
```

### Éléments obligatoires

| Élément | Obligatoire ? | Description |
|---------|---------------|-------------|
| `data-lesson-id` | ✅ Oui | Format : `module-lesson-X` (ex: `html-lesson-5`) |
| Bouton thème | ✅ Oui | Pour basculer entre mode clair/sombre |
| Section Objectifs | ✅ Oui | Avec emoji 🎯 |
| Section Mini pratique | ✅ Oui | Questions + réponses avec `<details>` |
| Navigation | ✅ Oui | Précédent, Sommaire, Suivant |
| Footer résumé | ✅ Oui | Points clés + motivation |
| Scripts JS | ✅ Oui | `lesson-progress.js` et `theme-toggle.js` |

### Ton et style pédagogique

- ✅ **Tutoiement** : "À la fin de cette leçon, **tu** comprendras"
- ✅ **Emojis** pour rendre le contenu vivant : 🎯, 💻, 🔤, ✍️
- ✅ **Explications simples** : Partir du plus simple vers le plus complexe
- ✅ **Exemples concrets** : Utiliser des cas réels et compréhensibles
- ✅ **Encouragement** : Messages motivants dans le footer

---

## 🔄 Process de contribution

### Étape 1 : Contact préalable

📧 **Envoyez un email à** : [heryandrianarimbola@gmail.com](mailto:heryandrianarimbola@gmail.com)

Votre email doit contenir :
- **Objet** : `[Contribution DWA] Type de contribution`
- **Contenu** :
  - Votre nom/pseudo
  - Type de contribution (bug, nouvelle leçon, amélioration, etc.)
  - Description brève (2-3 phrases)
  - Estimation du temps nécessaire (si applicable)

**Exemple d'email :**
```
Objet : [Contribution DWA] Nouvelle leçon CSS Flexbox

Bonjour Herimampionona,

Je m'appelle Jean et je souhaite contribuer en créant une nouvelle 
leçon sur Flexbox pour le module CSS.

La leçon couvrira les bases de Flexbox avec des exemples visuels 
et un quiz interactif. Temps estimé : 1 semaine.

Cordialement,
Jean
```

### Étape 2 : Attendre la validation

- ⏳ Comptez **2-5 jours ouvrables** pour une réponse
- ✅ Si validé : Vous recevrez des instructions spécifiques
- ❌ Si refusé : Une explication sera fournie

### Étape 3 : Développement

Une fois validé :
1. Forkez le repository (si via GitHub)
2. Créez une branche : `git checkout -b contribution/nom-contribution`
3. Développez en respectant les standards
4. Testez sur **plusieurs navigateurs** (Chrome, Firefox, Edge minimum)

### Étape 4 : Tests obligatoires

Avant de soumettre, vérifiez :
- ✅ Mode clair/sombre fonctionne
- ✅ Navigation entre leçons fonctionne
- ✅ Progression est sauvegardée dans localStorage
- ✅ Responsive sur mobile, tablette, desktop
- ✅ Aucune erreur dans la console (F12)
- ✅ Orthographe et grammaire correctes

### Étape 5 : Soumission

- Envoyez votre code par email ou créez une Pull Request sur GitHub
- Incluez des captures d'écran si modification visuelle
- Listez les navigateurs testés

### Étape 6 : Review et intégration

- Je reviendrai vers vous avec des retours
- Des modifications peuvent être demandées
- Une fois validé, votre contribution sera intégrée ! 🎉

---

## ✅ Liste de vérification avant soumission

Cochez mentalement ces points avant de soumettre :

### Code
- [ ] Indentation 4 espaces partout
- [ ] Variables CSS utilisées (pas de valeurs en dur)
- [ ] Noms de classes en français
- [ ] Commentaires clairs et descriptifs
- [ ] Pas d'erreurs dans la console

### Fonctionnalités
- [ ] Thème clair/sombre fonctionne
- [ ] Navigation entre leçons opérationnelle
- [ ] Système de progression sauvegarde correctement
- [ ] Attribut `data-lesson-id` présent et unique

### Tests multi-navigateurs
- [ ] Chrome (ou Chromium)
- [ ] Firefox
- [ ] Edge
- [ ] Mobile (Chrome Android ou Safari iOS)

### Responsive Design
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablette (768px)
- [ ] Mobile (375px)

### Contenu (pour les leçons)
- [ ] Structure obligatoire respectée
- [ ] Objectifs clairement définis
- [ ] Mini pratique / Quiz présent
- [ ] Résumé dans le footer
- [ ] Ton pédagogique et encourageant
- [ ] Orthographe vérifiée

---

## 📚 Ressources utiles

### Fichiers à consulter avant de contribuer

- `reset-variable.css` : Toutes les variables CSS disponibles
- `lesson-styles.css` : Styles réutilisables pour les leçons
- `lesson1.html` : Exemple de structure parfaite
- `lesson-progress.js` : Fonctionnement du système de progression

### Documentation externe

- [Convention BEM](http://getbem.com/) : Pour nommage CSS (optionnel)
- [HTML MDN](https://developer.mozilla.org/fr/docs/Web/HTML) : Référence HTML
- [CSS MDN](https://developer.mozilla.org/fr/docs/Web/CSS) : Référence CSS
- [JavaScript MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript) : Référence JS

### Outils recommandés

- **VS Code** avec extensions :
  - Prettier (formatage automatique)
  - Live Server (test en temps réel)
  - HTML CSS Support
- **Navigateurs** : Chrome DevTools pour debug

---

## 🙏 Remerciements

Chaque contribution, petite ou grande, aide à rendre le développement web plus accessible. Merci de faire partie de cette aventure ! 🚀

Si vous avez des questions, n'hésitez pas à me contacter :
- 📧 Email : heryandrianarimbola@gmail.com
- 💼 LinkedIn : [Herimampionona Andrianarimbola](https://www.linkedin.com/in/herimampionona-andrianarimbola-a6110b398)

---

<div align="center">

**Ensemble, rendons le web accessible à tous ! 🌍**

</div>