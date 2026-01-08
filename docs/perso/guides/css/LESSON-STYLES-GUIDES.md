# 📚 Guide de modification - lesson-styles.css

> **Fichier pour les pages de leçons individuelles** : Styles spécifiques à `lesson1.html`, `lesson2.html`, etc.

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Composants disponibles](#-composants-disponibles)
- [Exemples de modifications courantes](#-exemples-de-modifications-courantes)
- [Ajouter de nouveaux composants](#-ajouter-de-nouveaux-composants)
- [Erreurs à éviter](#-erreurs-à-éviter)
- [Référence des classes](#-référence-des-classes)

---

## 🎯 Vue d'ensemble

### Rôle du fichier

`lesson-styles.css` contient **tous les styles** des pages de leçons individuelles. Il style :

1. **Header** : Titre de la leçon avec fond coloré
2. **Main** : Conteneur principal du contenu
3. **Sections** : Blocs de contenu numérotés
4. **Boîtes spéciales** : Info-box, quiz-section
5. **Navigation** : Boutons Précédent/Sommaire/Suivant
6. **Footer** : Résumé + motivation

### ⚠️ Dépendance

Ce fichier **DÉPEND TOTALEMENT** de `reset-variable.css` :

```html
<!-- Ordre OBLIGATOIRE -->
<link rel="stylesheet" href="../../../../../assets/css/reset-variable.css">
<link rel="stylesheet" href="../../../../../assets/css/lesson-styles.css">
```

---

## 🧩 Composants disponibles

### 1. Header (En-tête de la leçon)

```css
header {
    background: var(--header-bg);
    color: var(--text-white);
    text-align: center;
    padding: var(--spacing-xl) var(--spacing-sm);
    box-shadow: var(--shadow-md);
}
```

**Utilisation dans HTML :**
```html
<header>
    <h1>📚 Leçon 1 - Comprendre le HTML</h1>
</header>
```

---

### 2. Main (Conteneur principal)

```css
main {
    max-width: 900px;
    margin: var(--spacing-lg) auto;
    background: var(--bg-card);
    padding: var(--spacing-xl);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
}
```

**Caractéristiques :**
- Largeur maximale : **900px**
- Centré automatiquement
- Fond blanc (mode clair) / sombre (mode sombre)
- Ombre portée pour effet de carte

---

### 3. Sections de contenu

```css
section {
    margin-bottom: var(--spacing-xl);
    padding-bottom: var(--spacing-lg);
    border-bottom: 2px solid var(--border-light);
}
```

**Utilisation :**
```html
<section>
    <h2>🎯 Objectif de la leçon</h2>
    <p>Contenu...</p>
</section>
```

---

### 4. Titres (h2 et h3)

```css
h2 {
    color: var(--primary-dark);
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-sm);
    padding-left: var(--spacing-xs);
    border-left: 4px solid var(--primary-light);
}
```

**Effet visuel :** Barre verticale colorée à gauche du titre

---

### 5. Info-box (Boîte d'information)

```css
.info-box {
    background: var(--bg-info-box);
    border-left: 4px solid var(--border-info);
    padding: var(--spacing-sm) var(--spacing-md);
    margin: var(--spacing-md) 0;
    border-radius: var(--radius-sm);
}
```

**Utilisation :**
```html
<div class="info-box">
    <p><strong>💡 Qu'est-ce qu'une balise ?</strong></p>
    <p>Une balise est un marqueur...</p>
</div>
```

**Apparence :** Fond bleu clair avec bordure bleue à gauche

---

### 6. Quiz-section (Section pratique)

```css
.quiz-section {
    background: var(--bg-quiz);
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    border: 2px solid var(--border-warning);
}
```

**Utilisation :**
```html
<section class="quiz-section">
    <h2>✍️ Mini pratique</h2>
    <p>Réponds sans tricher...</p>
    
    <details class="reponses">
        <summary>🔍 Voir les réponses</summary>
        <p><strong>Réponses :</strong> 1-b, 2-a</p>
    </details>
</section>
```

**Apparence :** Fond jaune très clair avec bordure orange

---

### 7. Navigation entre leçons

#### Conteneur de navigation

```css
.nav-lecons {
    background: var(--bg-card);
    padding: var(--spacing-lg);
    margin: var(--spacing-lg) auto;
    max-width: 900px;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
}
```

#### Boutons de navigation

```css
/* Bouton Précédent - Gris */
.btn-nav.precedent {
    background: var(--text-muted);
    color: var(--text-white);
}

/* Bouton Sommaire - Bleu */
.btn-sommaire {
    background: var(--primary-light);
    color: var(--text-white);
}

/* Bouton Suivant - Vert */
.btn-nav.suivant {
    background: var(--success-color);
    color: var(--text-white);
}

/* Bouton désactivé */
.btn-nav.desactive {
    background: #e9ecef;
    color: #adb5bd;
    cursor: not-allowed;
    opacity: 0.6;
}
```

**Utilisation :**
```html
<nav class="nav-lecons">
    <div class="conteneur-nav-lecons">
        <a href="lesson1.html" class="btn-nav precedent">
            <span class="fleche">←</span>
            <div class="info-nav">
                <span class="label">Précédent</span>
                <span class="titre-lecon">Introduction</span>
            </div>
        </a>
        
        <a href="../sommaire-html.html" class="btn-sommaire">
            📋 Sommaire
        </a>
        
        <a href="lesson3.html" class="btn-nav suivant">
            <div class="info-nav">
                <span class="label">Suivant</span>
                <span class="titre-lecon">Les balises</span>
            </div>
            <span class="fleche">→</span>
        </a>
    </div>
</nav>
```

---

### 8. Footer (Résumé et motivation)

```css
footer {
    background: var(--bg-card);
    max-width: 900px;
    margin: var(--spacing-lg) auto;
    padding: var(--spacing-xl);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
}

.footer-motivation {
    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-color) 100%);
    color: var(--text-white);
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    text-align: center;
}
```

**Utilisation :**
```html
<footer>
    <div class="footer-content">
        <h2>📝 Résumé rapide</h2>
        <ul>
            <li>Point clé 1</li>
            <li>Point clé 2</li>
        </ul>
        
        <div class="footer-motivation">
            <p>🎉 <strong>Bravo !</strong> Tu as terminé cette leçon.</p>
            <p>Continue, tu es sur la bonne voie ! 💪</p>
        </div>
    </div>
</footer>
```

---

## 💡 Exemples de modifications courantes

### 1. Changer la largeur maximale du contenu

**Par défaut :** 900px

```css
main {
    max-width: 1100px;  /* Plus large */
}

/* N'oubliez pas d'adapter aussi : */
.nav-lecons {
    max-width: 1100px;
}

footer {
    max-width: 1100px;
}
```

---

### 2. Modifier la couleur de la barre latérale des h2

```css
h2 {
    border-left: 4px solid var(--success-color);  /* Vert au lieu de bleu */
}
```

---

### 3. Changer l'apparence de l'info-box

**Exemple : Info-box verte (pour des conseils positifs)**

```css
.info-box.success {
    background: #e6f7f0;
    border-left-color: var(--success-light);
}
```

**HTML :**
```html
<div class="info-box success">
    <p><strong>✅ Astuce Pro</strong></p>
    <p>Utilisez toujours des noms de classes descriptifs.</p>
</div>
```

---

### 4. Ajouter un style pour les avertissements

```css
.warning-box {
    background: #fff9e6;
    border-left: 4px solid var(--warning-dark);
    padding: var(--spacing-sm) var(--spacing-md);
    margin: var(--spacing-md) 0;
    border-radius: var(--radius-sm);
}
```

**HTML :**
```html
<div class="warning-box">
    <p><strong>⚠️ Attention</strong></p>
    <p>Cette technique est obsolète en HTML5.</p>
</div>
```

---

### 5. Personnaliser les boutons de navigation

**Exemple : Tous les boutons de même couleur**

```css
.btn-nav.precedent,
.btn-sommaire,
.btn-nav.suivant {
    background: var(--primary-color);
}
```

**Exemple : Boutons plus grands**

```css
.btn-nav, 
.btn-sommaire {
    padding: var(--spacing-md) var(--spacing-lg);  /* Plus de padding */
    font-size: 1.2rem;  /* Texte plus gros */
}
```

---

### 6. Modifier le footer de motivation

**Exemple : Dégradé différent**

```css
.footer-motivation {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);  /* Vert */
}
```

**Exemple : Sans dégradé**

```css
.footer-motivation {
    background: var(--success-color);
}
```

---

### 7. Ajouter des icônes aux sections

```css
section::before {
    content: "📌";
    margin-right: var(--spacing-xs);
}
```

---

## 🆕 Ajouter de nouveaux composants

### Exemple : Créer une "tip-box" (encadré astuce)

```css
.tip-box {
    background: linear-gradient(to right, #fef3c7, transparent);
    border-left: 4px solid #f59e0b;
    padding: var(--spacing-sm) var(--spacing-md);
    margin: var(--spacing-md) 0;
    border-radius: var(--radius-sm);
    position: relative;
}

.tip-box::before {
    content: "💡";
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    background: var(--bg-card);
    padding: 5px;
    border-radius: 50%;
}
```

**HTML :**
```html
<div class="tip-box">
    <p><strong>Astuce</strong> : Utilisez Ctrl+S pour sauvegarder rapidement.</p>
</div>
```

---

### Exemple : Créer un bouton "Exercice pratique"

```css
.btn-exercice {
    display: inline-block;
    background: var(--info-color);
    color: var(--text-white);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    margin: var(--spacing-md) 0;
}

.btn-exercice:hover {
    background: #1976D2;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn-exercice::before {
    content: "✏️ ";
}
```

**HTML :**
```html
<a href="exercice1.html" class="btn-exercice">Faire l'exercice</a>
```

---

### Exemple : Badge de difficulté

```css
.difficulty-badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: var(--font-size-sm);
    font-weight: 600;
    margin-left: var(--spacing-xs);
}

.difficulty-badge.easy {
    background: #d1fae5;
    color: #065f46;
}

.difficulty-badge.medium {
    background: #fef3c7;
    color: #92400e;
}

.difficulty-badge.hard {
    background: #fee2e2;
    color: #991b1b;
}
```

**HTML :**
```html
<h2>🎯 Objectif <span class="difficulty-badge easy">Facile</span></h2>
```

---

## ⚠️ Erreurs à éviter

### ❌ Erreur 1 : Oublier la classe sur la section quiz

**Problème :**
```html
<section>  <!-- Manque la classe quiz-section -->
    <h2>✍️ Mini pratique</h2>
</section>
```

**Résultat :** Pas de fond jaune, apparence standard

**Solution :**
```html
<section class="quiz-section">
    <h2>✍️ Mini pratique</h2>
</section>
```

---

### ❌ Erreur 2 : Mauvaise classe sur le bouton désactivé

**Problème :**
```html
<a href="#" class="btn-nav precedent disabled">  <!-- Mauvais nom -->
```

**Solution :**
```html
<a href="#" class="btn-nav precedent desactive">  <!-- Bon nom en français -->
```

---

### ❌ Erreur 3 : Modifier directement les balises sans classes

**Problème :**
```css
p {
    color: red;  /* Affecte TOUS les paragraphes */
}
```

**Résultat :** Tous les paragraphes du site deviennent rouges.

**Solution :** Utiliser des classes spécifiques :
```css
.important-text {
    color: red;
}
```

---

### ❌ Erreur 4 : Dupliquer les styles de reset-variable.css

**Problème :**
```css
/* Dans lesson-styles.css - NE PAS FAIRE */
* {
    margin: 0;
    padding: 0;
}
```

**Raison :** C'est déjà dans `reset-variable.css`

---

### ❌ Erreur 5 : Ne pas adapter pour le mode responsive

**Problème :** Ajouter un nouveau composant sans media queries

**Solution :** Toujours ajouter les adaptations mobile :
```css
/* Desktop */
.mon-composant {
    display: flex;
    gap: var(--spacing-lg);
}

/* Mobile */
@media (max-width: 768px) {
    .mon-composant {
        flex-direction: column;
        gap: var(--spacing-sm);
    }
}
```

---

## 📱 Responsive Design

Le fichier contient déjà des media queries pour :

### Tablettes (max-width: 768px)

```css
@media (max-width: 768px) {
    header h1 {
        font-size: 1.5rem;  /* Plus petit */
    }

    main {
        padding: var(--spacing-md);
        margin: var(--spacing-sm);
    }

    .conteneur-nav-lecons {
        flex-direction: column;  /* Boutons empilés */
    }

    .btn-nav, 
    .btn-sommaire {
        width: 100%;
        justify-content: center;
    }
}
```

### Mobiles (max-width: 480px)

```css
@media (max-width: 480px) {
    header h1 {
        font-size: 1.2rem;
    }

    main {
        padding: var(--spacing-sm);
    }

    h2 {
        font-size: 1.3rem;
    }
}
```

---

## 📚 Référence des classes

### Classes de structure
| Classe | Usage | Élément HTML |
|--------|-------|--------------|
| `.info-box` | Boîte d'information bleue | `<div>` |
| `.quiz-section` | Section pratique jaune | `<section>` |
| `.definition` | Texte de définition centré | `<p>` |

### Classes de navigation
| Classe | Usage | Couleur |
|--------|-------|---------|
| `.btn-nav.precedent` | Bouton précédent | Gris |
| `.btn-sommaire` | Bouton sommaire | Bleu |
| `.btn-nav.suivant` | Bouton suivant | Vert |
| `.btn-nav.desactive` | Bouton désactivé | Gris clair |

### Classes de contenu
| Classe | Usage |
|--------|-------|
| `.conteneur-nav-lecons` | Container flex des boutons de navigation |
| `.info-nav` | Infos dans un bouton (label + titre) |
| `.fleche` | Flèches ← et → |
| `.footer-content` | Contenu du footer |
| `.footer-motivation` | Bloc de motivation avec dégradé |
| `.footer-credits` | Crédits en bas de page |

---

## 🔧 Workflow de modification

### Pour modifier un composant existant :

1. **Identifier** le sélecteur CSS (ex: `.info-box`)
2. **Modifier** les propriétés souhaitées
3. **Tester** sur une page de leçon
4. **Vérifier** en mode responsive (F12 > Toggle device toolbar)
5. **Tester** en mode clair ET sombre

### Pour ajouter un nouveau composant :

1. **Créer** le CSS en fin de fichier (avant les media queries)
2. **Utiliser** les variables de `reset-variable.css`
3. **Ajouter** les adaptations responsive dans les media queries
4. **Documenter** dans ce guide si c'est réutilisable
5. **Tester** sur plusieurs pages

---

## 🎓 Conseils pro

1. **Restez cohérent** avec les styles existants
2. **Utilisez les variables CSS** plutôt que des valeurs en dur
3. **Pensez mobile-first** : testez toujours sur petit écran
4. **Gardez la simplicité** : moins de code = plus maintenable
5. **Commentez** vos ajouts pour vous y retrouver plus tard

---

## 🔗 Fichiers liés

- `reset-variable.css` : Variables et base (DÉPENDANCE)
- `lesson1.html` à `lesson9.html` : Utilisent ce CSS
- `theme-toggle.js` : Gère le thème clair/sombre

---

<div align="center">

**Dernière mise à jour :** 08 janvier 2026

</div>