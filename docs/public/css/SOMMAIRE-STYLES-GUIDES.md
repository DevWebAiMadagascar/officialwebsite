# 📋 Guide de modification - sommaire-style.css

> **Fichier pour les pages sommaire** : Styles pour `sommaire-html.html`, `sommaire-css.html`, etc.

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Composants disponibles](#-composants-disponibles)
- [Système de progression](#-système-de-progression)
- [États des cartes](#-états-des-cartes)
- [Exemples de modifications courantes](#-exemples-de-modifications-courantes)
- [Ajouter de nouveaux composants](#-ajouter-de-nouveaux-composants)
- [Erreurs à éviter](#-erreurs-à-éviter)
- [Référence des classes](#-référence-des-classes)

---

## 🎯 Vue d'ensemble

### Rôle du fichier

`sommaire-style.css` contient **tous les styles** des pages sommaire (index des modules). Il style :

1. **Header** : Titre du module avec sous-titre
2. **Barre de progression** : Visualisation de l'avancement
3. **Grille de leçons** : Cartes cliquables pour chaque leçon
4. **États visuels** : Non commencée / Visitée / Complétée
5. **Section "À venir"** : Leçons futures
6. **Footer** : Informations et crédits

### ⚠️ Dépendance

Ce fichier **DÉPEND TOTALEMENT** de `reset-variable.css` :

```html
<!-- Ordre OBLIGATOIRE -->
<link rel="stylesheet" href="../../../assets/css/reset-variable.css">
<link rel="stylesheet" href="../../../assets/css/sommaire-style.css">
```

### 🔗 Interaction JavaScript

Ce CSS est conçu pour fonctionner avec `lesson-progress.js` qui :
- Lit le `localStorage` pour connaître les leçons visitées/complétées
- Ajoute dynamiquement les classes `.visited` et `.completed` aux cartes
- Met à jour la barre de progression

---

## 🧩 Composants disponibles

### 1. Conteneur principal

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-lg) var(--spacing-sm);
}
```

**Caractéristique :** Largeur maximale de 1200px, plus large que les pages de leçons (900px)

---

### 2. Header de la page sommaire

```css
.header {
    background: var(--bg-card);
    padding: var(--spacing-xl) var(--spacing-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    margin-bottom: var(--spacing-lg);
    text-align: center;
}

.header h1 {
    font-size: var(--font-size-4xl);
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
    font-weight: 700;
}

.subtitle {
    color: var(--text-light);
    font-size: 1.1rem;
    margin-bottom: var(--spacing-lg);
}
```

**Utilisation :**
```html
<div class="header">
    <h1>📚 Module HTML</h1>
    <p class="subtitle">Les bases du langage de balisage</p>
    <!-- Barre de progression ici -->
</div>
```

---

### 3. Barre de progression

```css
.progress-container {
    max-width: 600px;
    margin: 0 auto;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: var(--text-primary);
}

.progress-bar {
    height: 12px;
    background: var(--border-color);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--success-light));
    border-radius: 20px;
    transition: width 0.5s ease;
    width: 0%;  /* JavaScript modifie cette valeur */
}
```

**Utilisation :**
```html
<div class="progress-container">
    <div class="progress-info">
        <span>Progression</span>
        <span id="progress-text">0/9</span>
    </div>
    <div class="progress-bar">
        <div class="progress-fill" id="progress-fill"></div>
    </div>
</div>
```

**JavaScript modifie :**
- `#progress-text` : Affiche "3/9" par exemple
- `style.width` de `.progress-fill` : "33%" par exemple

---

### 4. Section des leçons

```css
.lessons-section {
    background: var(--bg-card);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    margin-bottom: var(--spacing-lg);
}

.section-title {
    font-size: var(--font-size-2xl);
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
    font-weight: 700;
}

.section-description {
    color: var(--text-light);
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-base);
}
```

**Utilisation :**
```html
<section class="lessons-section">
    <h2 class="section-title">Leçons disponibles</h2>
    <p class="section-description">9 leçons pour maîtriser les bases du HTML</p>
    <!-- Grille de cartes ici -->
</section>
```

---

### 5. Grille de cartes de leçons

```css
.lessons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--spacing-md);
}
```

**Comportement :** Grille responsive qui s'adapte automatiquement :
- Large écran : 3 colonnes
- Moyen écran : 2 colonnes
- Petit écran : 1 colonne

---

### 6. Carte de leçon (état par défaut)

```css
.lesson-card {
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
    position: relative;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.lesson-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}
```

**Structure interne de la carte :**

```html
<div class="lesson-card" data-lesson-id="html-lesson-1">
    <div class="lesson-number">1</div>
    
    <div class="lesson-content">
        <h3 class="lesson-title">Comprendre le HTML</h3>
        <p class="lesson-description">
            Découvrez ce qu'est le HTML et comment fonctionne une page web.
        </p>
    </div>
    
    <div class="lesson-meta">
        <span>⏱️ 15 min</span>
        <span>📖 Débutant</span>
    </div>
    
    <div class="lesson-status">
        <span class="status-badge">Non commencée</span>
    </div>
    
    <a href="bases-html/lesson1.html" class="lesson-link">
        Commencer la leçon →
    </a>
</div>
```

---

### 7. Numéro de la leçon (badge)

```css
.lesson-number {
    position: absolute;
    top: -10px;
    left: 15px;
    background: var(--primary-color);
    color: var(--text-white);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: var(--font-size-base);
    box-shadow: var(--shadow-md);
}
```

**Effet :** Badge circulaire bleu qui dépasse en haut de la carte

---

### 8. Contenu de la carte

```css
.lesson-title {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
    font-weight: 600;
}

.lesson-description {
    color: var(--text-light);
    font-size: 0.95rem;
    margin-bottom: var(--spacing-sm);
    line-height: 1.5;
}

.lesson-meta {
    display: flex;
    gap: var(--spacing-sm);
    font-size: var(--font-size-sm);
    color: var(--text-light);
    margin-bottom: var(--spacing-sm);
}
```

---

### 9. Badge de statut

```css
.status-badge {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background: var(--border-color);
    color: var(--text-light);
    border-radius: 20px;
    font-size: var(--font-size-sm);
    font-weight: 600;
}

.status-badge.completed {
    background: var(--success-light);
    color: var(--text-white);
}

.status-badge.visited {
    background: var(--warning-dark);
    color: var(--text-white);
}
```

**États possibles :**
- **Par défaut** : Gris "Non commencée"
- **`.visited`** : Orange "En cours"
- **`.completed`** : Vert "Terminée"

---

### 10. Lien vers la leçon

```css
.lesson-link {
    display: inline-block;
    padding: 0.75rem var(--spacing-md);
    background: var(--primary-color);
    color: var(--text-white);
    text-decoration: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
}

.lesson-link:hover {
    background: var(--primary-dark);
    transform: translateX(5px);
}

.lesson-card.completed .lesson-link {
    background: var(--success-light);
}
```

---

## 🎨 Système de progression

### Comment ça fonctionne ?

Le JavaScript (`lesson-progress.js`) lit le `localStorage` et ajoute dynamiquement des classes aux cartes :

```javascript
// Exemple de logique (simplifié)
const lessonId = card.getAttribute('data-lesson-id');
const isVisited = localStorage.getItem(lessonId + '-visited');
const isCompleted = localStorage.getItem(lessonId + '-completed');

if (isCompleted) {
    card.classList.add('completed');
} else if (isVisited) {
    card.classList.add('visited');
}
```

---

## 🟢 États des cartes

### État 1 : Non commencée (par défaut)

**Apparence :**
- Bordure grise
- Fond blanc
- Badge numéro bleu
- Statut "Non commencée" gris

```html
<div class="lesson-card">
    <!-- Pas de classe supplémentaire -->
</div>
```

---

### État 2 : Visitée (en cours)

**Apparence :**
- Bordure orange
- Fond avec dégradé jaune très léger à gauche
- Badge numéro orange
- Statut "En cours" orange

```css
.lesson-card.visited {
    border-color: var(--warning-color);
    background: linear-gradient(to right, #fff9e6 0%, var(--bg-card) 20%);
}

.lesson-card.visited .lesson-number {
    background: var(--warning-dark);
}
```

**Mode sombre :** Dégradé adapté

```css
[data-theme="dark"] .lesson-card.visited {
    background: linear-gradient(to right, #3d3520 0%, var(--bg-card) 20%);
}
```

**Ajout automatique par JavaScript :**
```javascript
card.classList.add('visited');
```

---

### État 3 : Complétée

**Apparence :**
- Bordure verte
- Fond avec dégradé vert très léger à gauche
- Badge numéro vert
- Statut "Terminée" vert
- Bouton vert

```css
.lesson-card.completed {
    border-color: var(--success-light);
    background: linear-gradient(to right, #e6f7f0 0%, var(--bg-card) 20%);
}

.lesson-card.completed .lesson-number {
    background: var(--success-light);
}

.lesson-card.completed .lesson-link {
    background: var(--success-light);
}
```

**Mode sombre :** Dégradé adapté

```css
[data-theme="dark"] .lesson-card.completed {
    background: linear-gradient(to right, #1a3329 0%, var(--bg-card) 20%);
}
```

**Ajout automatique par JavaScript :**
```javascript
card.classList.add('completed');
```

---

## 💡 Exemples de modifications courantes

### 1. Changer les couleurs des états

**Exemple : Rouge pour "non commencée", bleu pour "visitée"**

```css
/* Non commencée = Rouge */
.lesson-card {
    border-color: #fee2e2;
}

.lesson-number {
    background: #dc2626;
}

/* Visitée = Bleu */
.lesson-card.visited {
    border-color: var(--info-color);
    background: linear-gradient(to right, #e7f3ff 0%, var(--bg-card) 20%);
}

.lesson-card.visited .lesson-number {
    background: var(--info-color);
}
```

---

### 2. Modifier le nombre de colonnes

**3 colonnes minimum :**

```css
.lessons-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
```

**Toujours 2 colonnes (fixe) :**

```css
.lessons-grid {
    grid-template-columns: repeat(2, 1fr);
}
```

---

### 3. Changer la hauteur de la barre de progression

```css
.progress-bar {
    height: 20px;  /* Plus épais */
}
```

---

### 4. Modifier le dégradé de la progression

**Vert à bleu :**

```css
.progress-fill {
    background: linear-gradient(90deg, #10b981, #06b6d4);
}
```

**Couleur unie :**

```css
.progress-fill {
    background: var(--success-color);
}
```

---

### 5. Badge de numéro plus grand

```css
.lesson-number {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
}
```

---

### 6. Supprimer l'effet hover

```css
.lesson-card:hover {
    transform: none;  /* Pas de mouvement */
    box-shadow: var(--shadow-md);  /* Ombre normale */
}
```

---

### 7. Ajouter une icône de checkmark pour les leçons complétées

```css
.lesson-card.completed .lesson-number::after {
    content: "✓";
    position: absolute;
    bottom: -5px;
    right: -5px;
    background: var(--text-white);
    color: var(--success-light);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: bold;
}
```

---

## 🆕 Ajouter de nouveaux composants

### Exemple : Créer une "milestone-card" (carte étape majeure)

```css
.milestone-card {
    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-color) 100%);
    color: var(--text-white);
    padding: var(--spacing-xl);
    border-radius: var(--radius-xl);
    text-align: center;
    margin: var(--spacing-lg) 0;
    box-shadow: var(--shadow-lg);
}

.milestone-card h3 {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-sm);
}

.milestone-icon {
    font-size: 4rem;
    margin-bottom: var(--spacing-md);
}

.milestone-description {
    font-size: var(--font-size-lg);
    opacity: 0.9;
}
```

**HTML :**
```html
<div class="milestone-card">
    <div class="milestone-icon">🏆</div>
    <h3>Félicitations !</h3>
    <p class="milestone-description">
        Vous avez complété 50% du module HTML
    </p>
</div>
```

---

### Exemple : Créer un "module-summary" (résumé de module)

```css
.module-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-md);
    background: var(--bg-section);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-lg);
}

.summary-stat {
    text-align: center;
    padding: var(--spacing-md);
}

.summary-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-light);
}

.summary-label {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}
```

**HTML :**
```html
<div class="module-summary">
    <div class="summary-stat">
        <div class="summary-number">9</div>
        <div class="summary-label">Leçons</div>
    </div>
    
    <div class="summary-stat">
        <div class="summary-number">3</div>
        <div class="summary-label">Complétées</div>
    </div>
    
    <div class="summary-stat">
        <div class="summary-number">33%</div>
        <div class="summary-label">Progression</div>
    </div>
</div>
```

---

### Exemple : Créer un "difficulty-indicator" (indicateur de difficulté)

```css
.difficulty-stars {
    display: flex;
    gap: 0.2rem;
    margin-top: var(--spacing-xs);
}

.difficulty-stars .star {
    color: var(--warning-color);
    font-size: 1rem;
}

.difficulty-stars .star.empty {
    color: var(--border-color);
}
```

**HTML :**
```html
<div class="difficulty-stars">
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star empty">★</span>
    <span class="star empty">★</span>
    <span class="star empty">★</span>
</div>
```

**Intégration dans une carte :**
```html
<div class="lesson-meta">
    <span>⏱️ 15 min</span>
    <div class="difficulty-stars">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star empty">★</span>
    </div>
</div>
```

---

## ⚠️ Erreurs à éviter

### ❌ Erreur 1 : Oublier l'attribut data-lesson-id

**Problème :**
```html
<div class="lesson-card">  <!-- Manque data-lesson-id -->
    <!-- ... -->
</div>
```

**Résultat :** JavaScript ne peut pas détecter la progression

**Solution :**
```html
<div class="lesson-card" data-lesson-id="html-lesson-1">
    <!-- ... -->
</div>
```

---

### ❌ Erreur 2 : Mauvais ID de leçon

**Problème :**
```html
<div class="lesson-card" data-lesson-id="lesson1">  <!-- Trop simple -->
```

**Convention correcte :**
```html
<div class="lesson-card" data-lesson-id="html-lesson-1">  <!-- module-lesson-X -->
```

---

### ❌ Erreur 3 : Classes CSS ajoutées manuellement

**Problème :**
```html
<div class="lesson-card completed">  <!-- Ne pas faire ça ! -->
```

**Raison :** Les classes `.visited` et `.completed` doivent être ajoutées **uniquement par JavaScript**, pas dans le HTML statique.

---

### ❌ Erreur 4 : Mauvaise largeur min dans la grille

**Problème :**
```css
.lessons-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));  /* Trop petit */
}
```

**Résultat :** Cartes trop serrées, contenu illisible

**Solution :**
```css
.lessons-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));  /* Minimum 320px */
}
```

---

### ❌ Erreur 5 : Oublier les styles mode sombre pour les dégradés

**Problème :**
```css
.lesson-card.visited {
    background: linear-gradient(to right, #fff9e6 0%, white 20%);
    /* Pas de version mode sombre */
}
```

**Résultat :** En mode sombre, le dégradé est trop clair

**Solution :**
```css
.lesson-card.visited {
    background: linear-gradient(to right, #fff9e6 0%, var(--bg-card) 20%);
}

[data-theme="dark"] .lesson-card.visited {
    background: linear-gradient(to right, #3d3520 0%, var(--bg-card) 20%);
}
```

---

## 📱 Responsive Design

### Tablettes (max-width: 768px)

```css
@media (max-width: 768px) {
    .header h1 {
        font-size: var(--font-size-3xl);
    }
    
    .lessons-grid {
        grid-template-columns: 1fr;  /* Une seule colonne */
    }
    
    .container {
        padding: var(--spacing-sm) var(--spacing-xs);
    }
}
```

### Mobiles (max-width: 480px)

```css
@media (max-width: 480px) {
    .header h1 {
        font-size: 1.75rem;
    }
    
    .lesson-title {
        font-size: 1.1rem;
    }
    
    .lesson-meta {
        flex-direction: column;
        gap: var(--spacing-xs);
    }
}
```

---

## 📚 Référence des classes

### Classes de structure
| Classe | Usage | Élément HTML |
|--------|-------|--------------|
| `.container` | Conteneur principal | `<div>` |
| `.header` | En-tête du sommaire | `<div>` |
| `.subtitle` | Sous-titre descriptif | `<p>` |
| `.lessons-section` | Section contenant les leçons | `<section>` |
| `.section-title` | Titre de section | `<h2>` |

### Classes de progression
| Classe | Usage |
|--------|-------|
| `.progress-container` | Conteneur de la barre |
| `.progress-info` | Texte au-dessus de la barre |
| `.progress-bar` | Barre de fond |
| `.progress-fill` | Remplissage coloré (JS) |

### Classes de cartes
| Classe | Usage |
|--------|-------|
| `.lessons-grid` | Grille de cartes |
| `.lesson-card` | Carte individuelle |
| `.lesson-card.visited` | État "visitée" (JS) |
| `.lesson-card.completed` | État "complétée" (JS) |
| `.lesson-number` | Badge numéro |
| `.lesson-content` | Contenu de la carte |
| `.lesson-title` | Titre de la leçon |
| `.lesson-description` | Description |
| `.lesson-meta` | Métadonnées (temps, difficulté) |
| `.lesson-status` | Conteneur du badge de statut |
| `.status-badge` | Badge de statut |
| `.lesson-link` | Lien vers la leçon |

### Classes spéciales
| Classe | Usage |
|--------|-------|
| `.upcoming-section` | Section "À venir" |
| `.coming-soon` | Texte "Bientôt disponible" |
| `.footer` | Footer du sommaire |

---

## 🎓 Conseils pro

1. **Testez avec JavaScript** : Simulez différents états de progression
2. **Cohérence visuelle** : Les 3 états doivent être clairement distincts
3. **Accessibilité** : Assurez-vous que les couleurs ont assez de contraste
4. **Performance** : Optimisez les dégradés pour mobile
5. **Documentation** : Notez les data-lesson-id utilisés

---

## 🔗 Fichiers liés

- `reset-variable.css` : Variables et base (DÉPENDANCE)
- `lesson-progress.js` : Gère les classes `.visited` et `.completed`
- `sommaire-html.html` : Sommaire du module HTML
- `sommaire-css.html` : Sommaire du module CSS

---

## 🧪 Tester les états

### Simuler les états en dev

Pour tester visuellement sans JavaScript, ajoutez temporairement les classes dans le HTML :

```html
<!-- Test état "visitée" -->
<div class="lesson-card visited" data-lesson-id="html-lesson-2">
    <!-- ... -->
</div>

<!-- Test état "complétée" -->
<div class="lesson-card completed" data-lesson-id="html-lesson-1">
    <!-- ... -->
</div>
```

⚠️ **N'oubliez pas de retirer** ces classes avant de commit !

---

<div align="center">

**Dernière mise à jour :** 08 janvier 2026

</div>