# 🌐 Guide de modification - public-styles.css

> **Fichier pour les pages publiques** : Styles pour `about.html`, `contact.html`, `lessons.html` et page d'accueil.

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

`public-styles.css` contient **tous les styles** des pages publiques du site. Il style :

1. **Header avec navigation** : Menu principal du site
2. **Hero Section** : Bannière d'accueil avec appel à l'action
3. **Content Sections** : Sections de contenu (à propos, etc.)
4. **Cards Grid** : Grille de cartes pour présenter les modules
5. **Formulaire de contact** : Champs et boutons
6. **Footer** : Pied de page avec liens et infos

### ⚠️ Dépendance

Ce fichier **DÉPEND TOTALEMENT** de `reset-variable.css` :

```html
<!-- Ordre OBLIGATOIRE -->
<link rel="stylesheet" href="../../assets/css/reset-variable.css">
<link rel="stylesheet" href="../../assets/css/public-styles.css">
```

---

## 🧩 Composants disponibles

### 1. Header avec navigation principale

```css
header {
    background: var(--header-bg);
    color: var(--text-white);
    box-shadow: var(--shadow-md);
    position: sticky;
    top: 0;
    z-index: 1000;
}
```

**Caractéristiques :**
- Position sticky : reste en haut lors du scroll
- Fond avec dégradé bleu
- Z-index élevé pour rester au-dessus du contenu

**Utilisation :**
```html
<header>
    <div class="header-content">
        <h1 class="site-title">
            <a href="index.html">Dev Web AI - Madagascar</a>
        </h1>
        
        <nav class="main-nav">
            <a href="index.html" class="active">Accueil</a>
            <a href="lessons.html">Cours</a>
            <a href="about.html">À propos</a>
            <a href="contact.html">Contact</a>
        </nav>
    </div>
</header>
```

---

### 2. Navigation principale

```css
nav.main-nav {
    display: flex;
    justify-content: center;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
}

nav.main-nav a {
    color: var(--text-white);
    padding: 0.7rem var(--spacing-md);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.1);
}

nav.main-nav a.active {
    background: var(--primary-light);
    box-shadow: var(--shadow-md);
}
```

**Effet :** Liens semi-transparents, lien actif surligné en bleu

---

### 3. Hero Section (Bannière d'accueil)

```css
.hero-section {
    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-color) 100%);
    color: var(--text-white);
    padding: 4rem var(--spacing-lg);
    border-radius: var(--radius-xl);
    text-align: center;
    margin-bottom: 3rem;
    box-shadow: var(--shadow-lg);
}
```

**Utilisation :**
```html
<section class="hero-section">
    <h1>Bienvenue sur Dev Web AI</h1>
    <p>Apprenez le développement web de zéro à héros</p>
    <a href="lessons.html" class="btn-primary">Commencer maintenant</a>
</section>
```

**Apparence :** Grande bannière avec dégradé violet-bleu

---

### 4. Bouton principal (CTA)

```css
.btn-primary {
    display: inline-block;
    background: var(--bg-card);
    color: var(--primary-light);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
```

**Utilisation :**
```html
<a href="lessons.html" class="btn-primary">Commencer maintenant</a>
```

---

### 5. Content Section (Section de contenu)

```css
.content-section {
    background: var(--bg-card);
    padding: var(--spacing-xl);
    border-radius: var(--radius-xl);
    margin-bottom: var(--spacing-lg);
    box-shadow: var(--shadow-md);
}

.content-section h2 {
    color: var(--primary-dark);
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-md);
    padding-left: var(--spacing-xs);
    border-left: 4px solid var(--primary-light);
}
```

**Utilisation :**
```html
<section class="content-section">
    <h2>À propos du projet</h2>
    <p>Dev Web AI Madagascar est une plateforme...</p>
</section>
```

---

### 6. Grille de cartes

```css
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
    margin: var(--spacing-lg) 0;
}

.card {
    background: var(--bg-card);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    text-align: center;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
```

**Utilisation :**
```html
<div class="cards-grid">
    <div class="card">
        <div class="card-icon">📚</div>
        <h3>Module HTML</h3>
        <p>Apprenez les bases du HTML en 9 leçons</p>
        <a href="lesson/html/sommaire-html.html">Commencer →</a>
    </div>
    
    <div class="card">
        <div class="card-icon">🎨</div>
        <h3>Module CSS</h3>
        <p>Maîtrisez les styles avec CSS</p>
        <a href="lesson/css/sommaire-css.html">Commencer →</a>
    </div>
</div>
```

**Apparence :** Grille responsive qui s'adapte automatiquement

---

### 7. Formulaire de contact

```css
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: var(--spacing-md);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #e0e0e0;
    border-radius: var(--radius-sm);
    font-size: var(--font-size-base);
    background: var(--bg-card);
    color: var(--text-primary);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-light);
}
```

**Utilisation :**
```html
<form class="contact-form">
    <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit" class="btn-submit">Envoyer</button>
</form>
```

---

### 8. Bouton de soumission

```css
.btn-submit {
    background: var(--primary-light);
    color: var(--text-white);
    padding: var(--spacing-sm) var(--spacing-lg);
    border: none;
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.btn-submit:hover {
    background: #5568d3;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}
```

---

### 9. Liste des leçons

```css
.lessons-list {
    list-style: none;
    padding: 0;
}

.lessons-list li {
    background: var(--bg-section);
    margin-bottom: var(--spacing-sm);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--primary-light);
    transition: all 0.3s ease;
}

.lessons-list li:hover {
    background: #e9ecef;
    transform: translateX(5px);
}
```

**Utilisation :**
```html
<ul class="lessons-list">
    <li><a href="lesson/html/sommaire-html.html">Module HTML</a></li>
    <li><a href="lesson/css/sommaire-css.html">Module CSS</a></li>
    <li><a href="lesson/js/sommaire-js.html">Module JavaScript</a></li>
</ul>
```

---

### 10. Footer (Pied de page)

```css
footer {
    background: var(--header-bg);
    color: var(--text-white);
    padding: var(--spacing-lg) 0;
    margin-top: auto;
}

.footer-nav {
    display: flex;
    justify-content: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
    flex-wrap: wrap;
}

.footer-info {
    text-align: center;
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}
```

**Utilisation :**
```html
<footer>
    <div class="footer-content">
        <nav class="footer-nav">
            <a href="index.html">Accueil</a>
            <a href="lessons.html">Cours</a>
            <a href="about.html">À propos</a>
            <a href="contact.html">Contact</a>
        </nav>
        
        <div class="footer-info">
            <p>© 2026 Dev Web AI Madagascar</p>
            <p>Créé avec ❤️ à Madagascar</p>
        </div>
        
        <div class="social-links">
            <a href="#">📧</a>
            <a href="#">💼</a>
            <a href="#">🐙</a>
        </div>
    </div>
</footer>
```

---

### 11. Liens sociaux

```css
.social-links {
    display: flex;
    justify-content: center;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-sm);
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--text-white);
    font-size: var(--font-size-lg);
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
}
```

---

## 💡 Exemples de modifications courantes

### 1. Changer le dégradé du Hero Section

**De violet-bleu à vert-turquoise :**

```css
.hero-section {
    background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
}
```

**Uni au lieu de dégradé :**

```css
.hero-section {
    background: var(--primary-color);
}
```

---

### 2. Modifier le nombre de colonnes de la grille de cartes

**3 colonnes minimum :**

```css
.cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
```

**2 colonnes fixes :**

```css
.cards-grid {
    grid-template-columns: repeat(2, 1fr);
}
```

---

### 3. Changer la hauteur du header

**Header plus compact :**

```css
.header-content {
    padding: var(--spacing-xs) var(--spacing-lg);
}

.site-title {
    font-size: var(--font-size-xl);  /* Plus petit */
    margin-bottom: var(--spacing-xs);
}
```

---

### 4. Désactiver le sticky header

**Header normal (non collant) :**

```css
header {
    position: relative;  /* Au lieu de sticky */
}
```

---

### 5. Modifier le style des cartes au survol

**Rotation + zoom :**

```css
.card:hover {
    transform: translateY(-5px) scale(1.05) rotate(2deg);
}
```

**Juste une bordure colorée :**

```css
.card:hover {
    transform: none;
    border: 2px solid var(--primary-light);
}
```

---

### 6. Changer l'apparence des boutons

**Boutons arrondis (pilules) :**

```css
.btn-primary,
.btn-submit {
    border-radius: 50px;  /* Très arrondi */
}
```

**Boutons carrés :**

```css
.btn-primary,
.btn-submit {
    border-radius: 0;
}
```

---

### 7. Personnaliser les inputs du formulaire

**Bordures plus épaisses :**

```css
.form-group input,
.form-group textarea {
    border: 3px solid var(--border-color);
}

.form-group input:focus,
.form-group textarea:focus {
    border: 3px solid var(--primary-color);
}
```

---

## 🆕 Ajouter de nouveaux composants

### Exemple : Créer un "feature-box" (encadré fonctionnalité)

```css
.feature-box {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    background: var(--bg-section);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-md);
    transition: all 0.3s ease;
}

.feature-box:hover {
    background: var(--bg-card);
    box-shadow: var(--shadow-md);
}

.feature-icon {
    font-size: 3rem;
    min-width: 80px;
    text-align: center;
}

.feature-content h3 {
    color: var(--primary-dark);
    margin-bottom: var(--spacing-xs);
}

.feature-content p {
    color: var(--text-secondary);
}
```

**HTML :**
```html
<div class="feature-box">
    <div class="feature-icon">🚀</div>
    <div class="feature-content">
        <h3>Apprentissage rapide</h3>
        <p>Des leçons courtes et efficaces pour progresser rapidement.</p>
    </div>
</div>
```

---

### Exemple : Créer un "stats-counter" (compteur de statistiques)

```css
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    margin: var(--spacing-xl) 0;
}

.stat-box {
    text-align: center;
    padding: var(--spacing-lg);
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary-light);
    margin-bottom: var(--spacing-xs);
}

.stat-label {
    color: var(--text-secondary);
    font-size: var(--font-size-base);
}
```

**HTML :**
```html
<div class="stats-grid">
    <div class="stat-box">
        <div class="stat-number">18</div>
        <div class="stat-label">Leçons disponibles</div>
    </div>
    
    <div class="stat-box">
        <div class="stat-number">100+</div>
        <div class="stat-label">Apprenants</div>
    </div>
    
    <div class="stat-box">
        <div class="stat-number">3</div>
        <div class="stat-label">Modules</div>
    </div>
</div>
```

---

### Exemple : Créer un "testimonial" (témoignage)

```css
.testimonial {
    background: var(--bg-section);
    padding: var(--spacing-xl);
    border-radius: var(--radius-xl);
    border-left: 4px solid var(--primary-light);
    margin: var(--spacing-lg) 0;
    position: relative;
}

.testimonial::before {
    content: """;
    font-size: 5rem;
    position: absolute;
    top: 10px;
    left: 20px;
    color: var(--primary-light);
    opacity: 0.2;
}

.testimonial-text {
    font-size: var(--font-size-lg);
    font-style: italic;
    margin-bottom: var(--spacing-md);
    color: var(--text-secondary);
}

.testimonial-author {
    font-weight: 600;
    color: var(--primary-dark);
}

.testimonial-role {
    color: var(--text-light);
    font-size: var(--font-size-sm);
}
```

**HTML :**
```html
<div class="testimonial">
    <p class="testimonial-text">
        "Les leçons sont claires et progressives. J'ai appris plus en une semaine 
        qu'en un mois tout seul !"
    </p>
    <div class="testimonial-author">Jean Rakoto</div>
    <div class="testimonial-role">Étudiant</div>
</div>
```

---

## ⚠️ Erreurs à éviter

### ❌ Erreur 1 : Oublier la classe sur le nav

**Problème :**
```html
<nav>  <!-- Manque .main-nav -->
    <a href="#">Accueil</a>
</nav>
```

**Résultat :** Styles non appliqués

**Solution :**
```html
<nav class="main-nav">
    <a href="#">Accueil</a>
</nav>
```

---

### ❌ Erreur 2 : Confondre btn-primary et btn-submit

**Différence :**
- `.btn-primary` : Pour liens `<a>` (navigation)
- `.btn-submit` : Pour boutons `<button>` (formulaires)

**Bon usage :**
```html
<a href="lessons.html" class="btn-primary">Voir les cours</a>
<button type="submit" class="btn-submit">Envoyer</button>
```

---

### ❌ Erreur 3 : Ne pas adapter les grilles en mobile

**Problème :** Grille trop serrée sur mobile

**Solution :** Vérifier les media queries :
```css
@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: 1fr;  /* Une seule colonne */
    }
}
```

---

### ❌ Erreur 4 : Header qui cache le contenu

**Problème :** Header sticky trop haut (z-index trop élevé)

**Solution :** Ajuster le padding du body :
```css
body {
    padding-top: 100px;  /* Hauteur du header */
}
```

Ou ajuster le z-index si conflit :
```css
header {
    z-index: 100;  /* Au lieu de 1000 */
}
```

---

### ❌ Erreur 5 : Formulaire non accessible

**Problème :**
```html
<input type="text">  <!-- Pas de label -->
```

**Solution :**
```html
<label for="name">Nom</label>
<input type="text" id="name" name="name">
```

---

## 📱 Responsive Design

Le fichier contient des media queries complètes :

### Tablettes (max-width: 768px)

```css
@media (max-width: 768px) {
    .site-title {
        font-size: 1.4rem;
    }

    nav.main-nav {
        flex-direction: column;
    }

    .hero-section h1 {
        font-size: var(--font-size-2xl);
    }

    .cards-grid {
        grid-template-columns: 1fr;
    }

    .footer-nav {
        flex-direction: column;
        text-align: center;
    }
}
```

**Adaptations :**
- Navigation verticale
- Hero plus petit
- Cartes en colonne unique
- Footer centré

---

## 📚 Référence des classes

### Classes de structure
| Classe | Usage | Élément HTML |
|--------|-------|--------------|
| `.header-content` | Conteneur du header | `<div>` |
| `.site-title` | Titre principal du site | `<h1>` |
| `.main-nav` | Navigation principale | `<nav>` |
| `.hero-section` | Bannière d'accueil | `<section>` |
| `.content-section` | Section de contenu | `<section>` |

### Classes de composants
| Classe | Usage |
|--------|-------|
| `.btn-primary` | Bouton principal (lien) |
| `.btn-submit` | Bouton de soumission (formulaire) |
| `.cards-grid` | Grille de cartes |
| `.card` | Carte individuelle |
| `.card-icon` | Icône dans une carte |

### Classes de formulaire
| Classe | Usage |
|--------|-------|
| `.contact-form` | Conteneur du formulaire |
| `.form-group` | Groupe label + input |

### Classes de footer
| Classe | Usage |
|--------|-------|
| `.footer-content` | Conteneur du footer |
| `.footer-nav` | Navigation du footer |
| `.footer-info` | Informations du footer |
| `.social-links` | Liens réseaux sociaux |

### Classes utilitaires
| Classe | Usage |
|--------|-------|
| `.lessons-list` | Liste stylisée de leçons |
| `.highlight` | Texte surligné en couleur |

---

## 🎓 Conseils pro

1. **Header sticky** : Testez le défilement sur mobile
2. **Hero section** : Utilisez des images de fond si souhaité
3. **Formulaires** : Toujours ajouter validation HTML5
4. **Cartes** : Gardez un ratio hauteur/largeur cohérent
5. **Footer** : Doit être visible sans scroll excessif

---

## 🔗 Fichiers liés

- `reset-variable.css` : Variables et base (DÉPENDANCE)
- `index.html` : Page d'accueil
- `about.html` : Page à propos
- `contact.html` : Page contact
- `lessons.html` : Liste des cours

---

<div align="center">

**Dernière mise à jour :** 08 janvier 2026

</div>