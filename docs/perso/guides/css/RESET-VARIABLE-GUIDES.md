# 🎨 Guide de modification - reset-variable.css

> **Fichier FONDAMENTAL** : Toutes les autres feuilles de style dépendent de ce fichier.

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Variables de couleurs](#-variables-de-couleurs)
- [Variables d'espacement](#-variables-despacement)
- [Variables de typographie](#-variables-de-typographie)
- [Thème clair/sombre](#-thème-clairsombre)
- [Exemples de modifications courantes](#-exemples-de-modifications-courantes)
- [Erreurs à éviter](#-erreurs-à-éviter)

---

## 🎯 Vue d'ensemble

### Rôle du fichier

`reset-variable.css` est la **base de tout le design** du site. Il contient :

1. **Reset CSS universel** : Supprime les marges/paddings par défaut
2. **Variables CSS globales** : Couleurs, espacements, typographie
3. **Thème clair et sombre** : Définition des deux modes
4. **Styles de base** : HTML, body, liens, listes, code
5. **Bouton toggle thème** : Le bouton flottant ☀️/🌙

### ⚠️ RÈGLE D'OR

Ce fichier **DOIT TOUJOURS** être chargé en **PREMIER** dans toutes les pages HTML :

```html
<!-- ✅ BON ORDRE -->
<link rel="stylesheet" href="path/to/reset-variable.css">
<link rel="stylesheet" href="path/to/lesson-styles.css">

<!-- ❌ MAUVAIS ORDRE -->
<link rel="stylesheet" href="path/to/lesson-styles.css">
<link rel="stylesheet" href="path/to/reset-variable.css">
```

---

## 🎨 Variables de couleurs

### Couleurs principales

```css
:root {
    --primary-color: #2563eb;      /* Bleu principal */
    --primary-dark: #1e40af;       /* Bleu foncé */
    --primary-light: #667eea;      /* Bleu clair/violet */
    --secondary-color: #764ba2;    /* Violet secondaire */
}
```

#### 💡 Modification : Changer la couleur principale du site

**Exemple : Passer du bleu au vert**

```css
:root {
    --primary-color: #059669;      /* Vert émeraude */
    --primary-dark: #047857;       /* Vert foncé */
    --primary-light: #10b981;      /* Vert clair */
    --secondary-color: #0d9488;    /* Turquoise */
}
```

**Résultat :** Tous les boutons, liens, titres et accents utiliseront automatiquement cette nouvelle couleur.

---

### Couleurs d'état

```css
--success-color: #28a745;      /* Vert (succès, validation) */
--success-light: #10b981;      /* Vert clair */
--warning-color: #ffc107;      /* Jaune (avertissement) */
--warning-dark: #f59e0b;       /* Orange */
--danger-color: #dc3545;       /* Rouge (erreur) */
--info-color: #2196F3;         /* Bleu info */
```

#### 💡 Utilisation

Ces couleurs sont utilisées pour :
- **success** : Bouton "Suivant", messages de validation, badges complétés
- **warning** : Section quiz, leçons visitées
- **danger** : Messages d'erreur (futur)
- **info** : Boîtes d'information

---

### Couleurs de fond

```css
--bg-body: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* Fond body */
--bg-card: #ffffff;           /* Fond des cartes/conteneurs */
--bg-section: #f8f9fa;        /* Fond des sections internes */
--bg-code: #2d2d2d;           /* Fond des blocs de code */
--bg-info-box: #e7f3ff;       /* Fond des boîtes info */
--bg-quiz: #fff9e6;           /* Fond des sections quiz */
```

#### 💡 Modification : Changer le fond du body

**Exemple : Fond uni au lieu de dégradé**

```css
--bg-body: #f0f4f8;  /* Gris-bleu uni */
```

**Exemple : Dégradé personnalisé**

```css
--bg-body: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
```

---

### Couleurs de texte

```css
--text-primary: #333;          /* Texte principal (noir) */
--text-secondary: #555;        /* Texte secondaire (gris foncé) */
--text-tertiary: #666;         /* Texte tertiaire */
--text-muted: #6c757d;         /* Texte atténué */
--text-light: #64748b;         /* Texte clair */
--text-white: #ffffff;         /* Texte blanc */
```

---

### Bordures

```css
--border-color: #e2e8f0;       /* Bordure standard */
--border-light: #f0f0f0;       /* Bordure claire */
--border-info: #2196F3;        /* Bordure bleue (info) */
--border-warning: #ffc107;     /* Bordure jaune (warning) */
```

---

### Ombres

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);        /* Petite ombre */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);        /* Ombre moyenne */
--shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.2);      /* Grande ombre */
```

#### 💡 Modification : Ombres plus prononcées

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.15);
--shadow-md: 0 6px 12px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 15px 40px rgba(0, 0, 0, 0.25);
```

---

## 📏 Variables d'espacement

```css
--spacing-xs: 0.5rem;    /* 8px  - Très petit */
--spacing-sm: 1rem;      /* 16px - Petit */
--spacing-md: 1.5rem;    /* 24px - Moyen */
--spacing-lg: 2rem;      /* 32px - Grand */
--spacing-xl: 2.5rem;    /* 40px - Très grand */
```

### 💡 Où sont-ils utilisés ?

- **Padding** : `padding: var(--spacing-lg);`
- **Margin** : `margin: var(--spacing-md) 0;`
- **Gap** : `gap: var(--spacing-sm);`

### 💡 Modification : Espacements plus serrés

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
```

**Résultat :** Tout le site aura un design plus compact.

---

## 🔤 Variables de typographie

### Tailles de police

```css
--font-size-sm: 0.85rem;     /* 13.6px */
--font-size-base: 1rem;      /* 16px - Taille par défaut */
--font-size-md: 1.05rem;     /* 16.8px */
--font-size-lg: 1.2rem;      /* 19.2px */
--font-size-xl: 1.5rem;      /* 24px */
--font-size-2xl: 1.8rem;     /* 28.8px */
--font-size-3xl: 2rem;       /* 32px */
--font-size-4xl: 2.5rem;     /* 40px */
```

### 💡 Modification : Augmenter toutes les tailles de police

Pour un site avec du texte plus gros (accessibilité) :

```css
--font-size-base: 1.125rem;  /* 18px au lieu de 16px */
```

Toutes les autres tailles s'ajusteront proportionnellement si elles utilisent `rem`.

---

### Bordures arrondies

```css
--radius-sm: 5px;      /* Petit arrondi */
--radius-md: 8px;      /* Moyen arrondi */
--radius-lg: 12px;     /* Grand arrondi */
--radius-xl: 15px;     /* Très grand arrondi */
```

### 💡 Modification : Design plus carré

```css
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-xl: 5px;
```

### 💡 Modification : Design ultra-arrondi

```css
--radius-sm: 10px;
--radius-md: 15px;
--radius-lg: 20px;
--radius-xl: 25px;
```

---

## 🌓 Thème clair/sombre

### Comment ça fonctionne ?

Le thème est contrôlé par l'attribut `data-theme` sur la balise `<html>` :

```html
<!-- Thème clair (par défaut) -->
<html lang="fr">

<!-- Thème sombre -->
<html lang="fr" data-theme="dark">
```

Le JavaScript (`theme-toggle.js`) bascule cet attribut automatiquement.

---

### Variables du thème sombre

```css
[data-theme="dark"] {
    /* Fonds en mode sombre */
    --bg-body: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    --bg-card: #1e1e2e;
    --bg-section: #2a2a3e;
    --bg-code: #1a1a1a;
    --bg-info-box: #1e3a5f;
    --bg-quiz: #3d3520;
    
    /* Textes en mode sombre */
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
    --text-tertiary: #909090;
    --text-muted: #888888;
    --text-light: #a0a0a0;
    
    /* Bordures en mode sombre */
    --border-color: #404040;
    --border-light: #353535;
    
    /* En-tête en mode sombre */
    --header-bg: linear-gradient(135deg, #0f1c2e 0%, #1a2942 100%);
}
```

---

### 💡 Modification : Personnaliser le thème sombre

**Exemple : Thème sombre plus chaud (moins bleuté)**

```css
[data-theme="dark"] {
    --bg-body: linear-gradient(135deg, #2a2520 0%, #3a3020 100%);
    --bg-card: #2e2820;
    --bg-section: #3a3428;
}
```

**Exemple : Thème "OLED" (noir pur pour économie d'énergie)**

```css
[data-theme="dark"] {
    --bg-body: #000000;
    --bg-card: #0a0a0a;
    --bg-section: #1a1a1a;
}
```

---

## 💡 Exemples de modifications courantes

### 1. Changer la couleur d'accentuation globale

**De bleu à rouge :**

```css
:root {
    --primary-color: #dc2626;
    --primary-dark: #b91c1c;
    --primary-light: #ef4444;
    --secondary-color: #f97316;
}
```

---

### 2. Augmenter tous les espacements de 25%

```css
--spacing-xs: 0.625rem;   /* 10px */
--spacing-sm: 1.25rem;    /* 20px */
--spacing-md: 1.875rem;   /* 30px */
--spacing-lg: 2.5rem;     /* 40px */
--spacing-xl: 3.125rem;   /* 50px */
```

---

### 3. Changer la police par défaut

Dans la section `body` du fichier :

```css
body {
    font-family: 'Inter', 'Arial', sans-serif;  /* Au lieu de Segoe UI */
}
```

**Note :** Il faut importer la police si elle n'est pas système :

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

---

### 4. Modifier le header gradient

```css
:root {
    --header-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

[data-theme="dark"] {
    --header-bg: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}
```

---

### 5. Créer un thème "high contrast" pour accessibilité

```css
:root {
    --text-primary: #000000;
    --text-secondary: #000000;
    --bg-card: #ffffff;
    --border-color: #000000;
    --primary-color: #0000ff;
}
```

---

## ⚠️ Erreurs à éviter

### ❌ Erreur 1 : Nom de fichier incorrect

**Problème :**
```html
<link rel="stylesheet" href="reset-variables.css">  <!-- Mauvais nom -->
```

**Solution :**
```html
<link rel="stylesheet" href="reset-variable.css">  <!-- Sans 's' -->
```

Le nom correct est **`reset-variable.css`** (singulier), pas `reset-variables.css`.

---

### ❌ Erreur 2 : Modifier une variable qui n'existe pas

**Problème :**
```css
.mon-bouton {
    background: var(--btn-color);  /* Cette variable n'existe pas */
}
```

**Solution :**
Utilisez une variable existante :
```css
.mon-bouton {
    background: var(--primary-color);
}
```

Ou créez la variable dans `:root` :
```css
:root {
    --btn-color: #2563eb;
}
```

---

### ❌ Erreur 3 : Oublier de définir la variable pour le thème sombre

**Problème :**
```css
:root {
    --ma-nouvelle-couleur: #ff0000;
}

/* Oubli de la définir pour le mode sombre */
```

**Résultat :** En mode sombre, la variable garde la valeur du thème clair.

**Solution :**
```css
:root {
    --ma-nouvelle-couleur: #ff0000;
}

[data-theme="dark"] {
    --ma-nouvelle-couleur: #cc0000;  /* Version plus sombre */
}
```

---

### ❌ Erreur 4 : Utiliser des valeurs en dur au lieu de variables

**Problème :**
```css
.mon-element {
    padding: 20px;           /* Valeur en dur */
    color: #2563eb;          /* Valeur en dur */
}
```

**Solution :**
```css
.mon-element {
    padding: var(--spacing-lg);
    color: var(--primary-color);
}
```

**Avantage :** Si vous changez `--spacing-lg` ou `--primary-color`, tous les éléments s'ajustent automatiquement.

---

### ❌ Erreur 5 : Charger reset-variable.css après un autre CSS

**Problème :**
```html
<link rel="stylesheet" href="lesson-styles.css">
<link rel="stylesheet" href="reset-variable.css">  <!-- Trop tard ! -->
```

**Résultat :** Les variables ne seront pas disponibles pour `lesson-styles.css`.

**Solution :**
```html
<link rel="stylesheet" href="reset-variable.css">   <!-- TOUJOURS EN PREMIER -->
<link rel="stylesheet" href="lesson-styles.css">
```

---

## 🔧 Workflow de modification

### Étapes recommandées

1. **Identifier** la variable à modifier
2. **Modifier** dans `:root` (thème clair)
3. **Adapter** dans `[data-theme="dark"]` (thème sombre)
4. **Tester** en basculant entre les thèmes
5. **Vérifier** sur plusieurs pages (leçon, sommaire, publique)

### Exemple complet

**Objectif :** Passer du bleu au vert turquoise

```css
/* 1. Thème clair */
:root {
    --primary-color: #14b8a6;
    --primary-dark: #0f766e;
    --primary-light: #2dd4bf;
    --secondary-color: #06b6d4;
}

/* 2. Thème sombre (adapter si nécessaire) */
[data-theme="dark"] {
    /* Les couleurs primaires restent les mêmes en mode sombre généralement */
}

/* 3. Tester dans le navigateur avec F5 */
/* 4. Basculer entre ☀️ et 🌙 */
```

---

## 📚 Référence rapide des variables

### Couleurs principales
| Variable | Valeur par défaut | Usage |
|----------|-------------------|-------|
| `--primary-color` | #2563eb | Boutons, liens, accents |
| `--primary-dark` | #1e40af | Survol, hover states |
| `--primary-light` | #667eea | Textes accentués |
| `--secondary-color` | #764ba2 | Dégradés, accents secondaires |

### Espacements
| Variable | Valeur | Pixels |
|----------|--------|--------|
| `--spacing-xs` | 0.5rem | 8px |
| `--spacing-sm` | 1rem | 16px |
| `--spacing-md` | 1.5rem | 24px |
| `--spacing-lg` | 2rem | 32px |
| `--spacing-xl` | 2.5rem | 40px |

### Typographie
| Variable | Valeur | Pixels |
|----------|--------|--------|
| `--font-size-base` | 1rem | 16px |
| `--font-size-lg` | 1.2rem | 19.2px |
| `--font-size-2xl` | 1.8rem | 28.8px |
| `--font-size-4xl` | 2.5rem | 40px |

---

## 🎓 Conseils pro

1. **Testez toujours les deux thèmes** après modification
2. **Utilisez des couleurs contrastées** pour l'accessibilité
3. **Gardez une cohérence** dans les espacements
4. **Documentez vos changements** dans CHANGELOG.md
5. **Évitez les valeurs en dur**, utilisez toujours les variables

---

## 🔗 Fichiers liés

- `lesson-styles.css` : Dépend de ce fichier
- `public-styles.css` : Dépend de ce fichier
- `sommaire-style.css` : Dépend de ce fichier
- `theme-toggle.js` : Gère le basculement `data-theme`

---

<div align="center">

**Dernière mise à jour :** 08 janvier 2026

</div>