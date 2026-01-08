# 🔄 Guide de mise à jour de la documentation

> **Guide personnel** pour savoir quand et comment mettre à jour tous les fichiers Markdown du projet.

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [CHANGELOG.md](#-changelogmd)
- [README.md](#-readmemd)
- [CONTRIBUTING.md](#-contributingmd)
- [STRUCTURE.md](#-structuremd)
- [Guides CSS](#-guides-css)
- [Workflow Git](#-workflow-git)
- [Checklist rapide](#-checklist-rapide)

---

## 🎯 Vue d'ensemble

### Principe de base

**Si vous modifiez le code, mettez à jour la documentation !**

La documentation n'est pas optionnelle, c'est une partie intégrante du projet.

### Fréquence de mise à jour

| Document | Fréquence | Quand ? |
|----------|-----------|---------|
| CHANGELOG.md | **Quotidien** | Après chaque modification |
| Guides CSS | Hebdomadaire | Après modification CSS |
| README.md | Mensuel | Nouvelles fonctionnalités |
| CONTRIBUTING.md | Rarement | Nouvelles règles |
| STRUCTURE.md | Rarement | Changement d'arborescence |

---

## 📜 CHANGELOG.md

### 🕐 Quand le mettre à jour ?

**SYSTÉMATIQUEMENT après chaque modification :**
- ✅ Ajout d'une nouvelle leçon
- ✅ Modification du CSS
- ✅ Correction d'un bug
- ✅ Ajout d'une fonctionnalité
- ✅ Amélioration du design
- ✅ Mise à jour de la documentation

### 📝 Comment ?

#### Pendant le développement (section [Non publié])

```markdown
## [Non publié]

### Ajouté
- Leçon CSS 4 : Le positionnement
- Nouveau composant warning-box dans lesson-styles.css

### Modifié
- Amélioration de la barre de progression
- Optimisation du responsive sur mobile

### Corrigé
- Bug : Navigation cassée sur lesson3.html
- Typo dans lesson1.html
```

#### Lors d'une release (nouvelle version)

Quand vous êtes satisfait de vos modifications, créez une nouvelle version :

```markdown
## [Non publié]
<!-- Vide, prêt pour les prochaines modifications -->

## [0.6.0] - 2026-01-15

### Ajouté
- Leçon CSS 4 : Le positionnement
<!-- Tout ce qui était dans [Non publié] -->
```

### 🔢 Numérotation des versions

**Format : MAJEUR.MINEUR.CORRECTIF**

- **MAJEUR** (1.0.0) : Changements incompatibles, refonte complète
- **MINEUR** (0.X.0) : Nouvelles fonctionnalités, nouveaux modules
- **CORRECTIF** (0.0.X) : Corrections de bugs, petites améliorations

**Exemples :**
- Ajout de 3 leçons CSS → **v0.6.0** (mineur)
- Correction d'un bug CSS → **v0.5.1** (correctif)
- Lancement officiel du site complet → **v1.0.0** (majeur)

### 💡 Workflow quotidien

```bash
# 1. Vous codez quelque chose
# 2. Vous testez
# 3. IMMÉDIATEMENT, ouvrez CHANGELOG.md et notez le changement
# 4. Commitez code + changelog ensemble

git add .
git commit -m "feat: Ajout leçon CSS 4 + documentation"
git push
```

---

## 📖 README.md

### 🕐 Quand le mettre à jour ?

- ✅ Ajout d'un nouveau module complet (JavaScript, etc.)
- ✅ Nouvelle fonctionnalité majeure (quiz, certificats)
- ✅ Changement de la roadmap
- ✅ Mise à jour des liens (nouveau site, nouveau repo)
- ✅ Modification des informations de contact

### 📝 Comment ?

#### Section "Contenu des leçons"

Quand vous complétez un module :

```markdown
### Module CSS (9 leçons) ✅ COMPLET
1. Introduction au CSS
2. Les sélecteurs CSS
<!-- ... -->
9. Bonnes pratiques CSS
```

#### Section "Roadmap"

Déplacez les éléments de "Prochaines étapes" vers "Version actuelle" :

```markdown
### Version actuelle (v0.6)
- [x] 9 leçons HTML complètes
- [x] 9 leçons CSS complètes ✨ NOUVEAU
- [x] Système de progression
```

#### Section "À propos"

Si le projet évolue (nouveau public cible, nouvelle mission) :

```markdown
### Public cible
- 🎓 Débutants complets
- 💡 Intermédiaires
- 🏢 Professionnels en reconversion ✨ NOUVEAU
```

### 💡 Règle simple

**Mettez à jour README.md une fois par mois** ou lors d'une release majeure (v0.6, v0.7, v1.0).

---

## 🤝 CONTRIBUTING.md

### 🕐 Quand le mettre à jour ?

**Rarement, uniquement si :**
- ✅ Changement des standards de code (indentation, nommage)
- ✅ Nouvelle règle de contribution
- ✅ Modification du template de leçon obligatoire
- ✅ Ajout d'un nouvel outil requis
- ✅ Changement du processus de validation

### 📝 Comment ?

#### Ajout d'une nouvelle règle

```markdown
### Nouvelles règles (ajoutées le 15/01/2026)

#### Accessibilité
- ✅ Tous les formulaires doivent avoir des labels
- ✅ Ratio de contraste minimum 4.5:1
- ✅ Navigation au clavier fonctionnelle
```

#### Modification du template de leçon

Si vous ajoutez une section obligatoire dans les leçons :

```markdown
### Template de base

<!-- Ajouter la nouvelle section -->
<section class="prerequisites">
    <h2>🎯 Prérequis</h2>
    <p>Avant de commencer cette leçon...</p>
</section>
```

### 💡 Règle simple

Ne modifiez CONTRIBUTING.md que si vous changez **les règles du jeu** pour les contributeurs.

---

## 🏗️ STRUCTURE.md

### 🕐 Quand le mettre à jour ?

**Uniquement si :**
- ✅ Ajout d'un nouveau dossier principal
- ✅ Changement de l'arborescence
- ✅ Nouveau type de fichier structurel
- ✅ Changement de convention de nommage
- ✅ Nouvelle section majeure du site

### 📝 Comment ?

#### Ajout d'un nouveau module

```markdown
lesson/
├── html/
├── css/
└── javascript/          # ✨ NOUVEAU
    ├── sommaire-js.html
    └── bases-js/
        ├── lesson1.html
        └── ...
```

#### Ajout d'un nouveau niveau

```markdown
lesson/html/
├── sommaire-html.html
├── bases-html/          # Débutant
└── avance-html/         # ✨ NOUVEAU - Intermédiaire
    ├── lesson1.html
    └── ...
```

### 💡 Règle simple

Mettez à jour STRUCTURE.md **uniquement** quand vous créez/supprimez des dossiers ou changez l'organisation.

---

## 🎨 Guides CSS

### 🕐 Quand les mettre à jour ?

#### docs/perso/guides/css/RESET-VARIABLE-GUIDE.md
- ✅ Ajout d'une nouvelle variable CSS
- ✅ Modification d'une valeur par défaut
- ✅ Changement d'une couleur du thème

#### docs/perso/guides/css/LESSON-STYLES-GUIDE.md
- ✅ Ajout d'un nouveau composant (.warning-box, .tip-box)
- ✅ Modification d'un style existant
- ✅ Ajout d'une nouvelle classe

#### docs/perso/guides/css/PUBLIC-STYLES-GUIDE.md
- ✅ Nouveau composant pour pages publiques
- ✅ Modification du header/navigation
- ✅ Changement du footer

#### docs/perso/guides/css/SOMMAIRE-STYLES-GUIDE.md
- ✅ Nouveau statut de leçon
- ✅ Modification de la barre de progression
- ✅ Changement des états de cartes

### 📝 Comment ?

#### Ajout d'une nouvelle variable

Dans `RESET-VARIABLE-GUIDE.md` :

```markdown
### Variables d'espacement

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 2.5rem;
--spacing-xxl: 3rem;      /* ✨ NOUVEAU */
```
```

#### Ajout d'un nouveau composant

Dans `LESSON-STYLES-GUIDE.md` :

```markdown
### 12. Warning-box (Nouveau composant)

```css
.warning-box {
    background: #fff9e6;
    border-left: 4px solid var(--warning-dark);
    padding: var(--spacing-sm) var(--spacing-md);
    margin: var(--spacing-md) 0;
    border-radius: var(--radius-sm);
}
```

**Utilisation :**
```html
<div class="warning-box">
    <p><strong>⚠️ Attention</strong></p>
    <p>Cette technique est obsolète en HTML5.</p>
</div>
```
```

### 💡 Workflow recommandé

```bash
# 1. Vous modifiez un CSS
# 2. Testez votre modification
# 3. IMMÉDIATEMENT après, documentez-la dans le guide correspondant
# 4. Commitez CSS + guide ensemble

git add assets/css/lesson-styles.css
git add docs/perso/guides/css/LESSON-STYLES-GUIDE.md
git commit -m "feat: Ajout composant warning-box + documentation"
```

---

## 🚀 Workflow Git

### Workflow quotidien (développement)

```bash
# 1. Vous codez une modification
# Exemple : Ajout de lesson4.html

# 2. Testez la modification
# Ouvrez lesson4.html dans le navigateur

# 3. Mettez à jour CHANGELOG.md
# Ajoutez dans [Non publié] :
## [Non publié]
### Ajouté
- Leçon CSS 4 : Le positionnement

# 4. Si CSS modifié, mettez à jour le guide correspondant
# Exemple : docs/perso/guides/css/LESSON-STYLES-GUIDE.md

# 5. Commitez tout ensemble
git add .
git commit -m "feat: Ajout leçon CSS 4 sur le positionnement"
git push origin main
```

### Workflow hebdomadaire/mensuel (release)

```bash
# 1. Vous êtes satisfait de vos modifications accumulées
# 2. Décidez du numéro de version (0.6.0, 0.5.1, etc.)

# 3. Mettez à jour CHANGELOG.md
# Créez une nouvelle version :
## [0.6.0] - 2026-01-15
(Déplacez tout de [Non publié] ici)

# 4. Mettez à jour README.md si nécessaire
# Ajoutez les nouvelles fonctionnalités dans la roadmap

# 5. Commitez
git add CHANGELOG.md README.md
git commit -m "chore: Release v0.6.0"

# 6. Créez un tag
git tag -a v0.6.0 -m "Release v0.6.0 - Module CSS complet"

# 7. Poussez tout
git push origin main --tags
```

### Messages de commit

**Format recommandé :**

```bash
# Nouvelle fonctionnalité
git commit -m "feat: Ajout leçon CSS 4"

# Correction de bug
git commit -m "fix: Navigation cassée sur lesson3"

# Amélioration
git commit -m "refactor: Optimisation du CSS responsive"

# Documentation
git commit -m "docs: Mise à jour guide CSS"

# Configuration
git commit -m "chore: Mise à jour .gitignore"
```

---

## ✅ Checklist rapide

### Après chaque modification de code

- [ ] Code testé et fonctionnel
- [ ] CHANGELOG.md mis à jour (section [Non publié])
- [ ] Si CSS modifié → Guide CSS correspondant mis à jour
- [ ] Commit avec message clair
- [ ] Push vers GitHub

### Avant chaque release (hebdo/mensuel)

- [ ] Créer nouvelle version dans CHANGELOG.md
- [ ] Déplacer tout de [Non publié] vers la nouvelle version
- [ ] Mettre à jour README.md (roadmap, fonctionnalités)
- [ ] Vérifier que CONTRIBUTING.md est à jour
- [ ] Commit de release
- [ ] Créer un tag Git (v0.X.0)
- [ ] Push avec tags

### Maintenance mensuelle

- [ ] Relire tous les guides CSS
- [ ] Vérifier STRUCTURE.md vs arborescence réelle
- [ ] Nettoyer CHANGELOG.md si trop long (archiver anciennes versions)
- [ ] Vérifier les liens dans README.md

---

## 🎯 Exemples concrets

### Exemple 1 : Ajout d'une nouvelle leçon

```bash
# 1. Créer lesson10.html
# 2. Tester la leçon

# 3. Ouvrir CHANGELOG.md
## [Non publié]
### Ajouté
- Leçon HTML 10 : Formulaires avancés

# 4. Commit
git add pages/public/lesson/html/bases-html/lesson10.html
git add CHANGELOG.md
git commit -m "feat: Ajout leçon HTML 10 sur formulaires avancés"
git push
```

### Exemple 2 : Modification d'un composant CSS

```bash
# 1. Modifier .info-box dans lesson-styles.css
# 2. Tester sur plusieurs leçons

# 3. Ouvrir CHANGELOG.md
## [Non publié]
### Modifié
- Amélioration du style .info-box (bordure plus épaisse)

# 4. Ouvrir LESSON-STYLES-GUIDE.md
# Mettre à jour la section "Info-box"

# 5. Commit
git add assets/css/lesson-styles.css
git add docs/perso/guides/css/LESSON-STYLES-GUIDE.md
git add CHANGELOG.md
git commit -m "refactor: Amélioration style info-box + doc"
git push
```

### Exemple 3 : Correction d'un bug

```bash
# 1. Corriger le bug dans lesson3.html
# 2. Vérifier que c'est résolu

# 3. Ouvrir CHANGELOG.md
## [Non publié]
### Corrigé
- Bug : Lien cassé vers sommaire dans lesson3.html

# 4. Commit
git add pages/public/lesson/html/bases-html/lesson3.html
git add CHANGELOG.md
git commit -m "fix: Lien cassé vers sommaire dans lesson3"
git push
```

### Exemple 4 : Release d'une nouvelle version

```bash
# Situation : Vous avez ajouté 3 leçons CSS cette semaine

# 1. Ouvrir CHANGELOG.md
## [Non publié]
<!-- Vider cette section -->

## [0.6.0] - 2026-01-15

### Ajouté
- Leçon CSS 4 : Le positionnement
- Leçon CSS 5 : Flexbox
- Leçon CSS 6 : Grid Layout

# 2. Ouvrir README.md
# Mettre à jour la roadmap :
- [x] 6 leçons CSS complètes (au lieu de 3)

# 3. Commit de release
git add CHANGELOG.md README.md
git commit -m "chore: Release v0.6.0 - 3 nouvelles leçons CSS"

# 4. Créer le tag
git tag -a v0.6.0 -m "Release v0.6.0"

# 5. Push
git push origin main --tags
```

---

## 💡 Conseils et astuces

### 1. Gardez CHANGELOG.md ouvert

Pendant que vous codez, laissez `CHANGELOG.md` ouvert dans un onglet de votre éditeur. Dès que vous terminez quelque chose, notez-le immédiatement.

### 2. Documentation = partie du code

Ne séparez JAMAIS code et documentation dans des commits différents. Si vous modifiez un CSS, modifiez son guide dans le même commit.

### 3. Utilisez des TODO

Si vous n'avez pas le temps de documenter immédiatement :

```markdown
<!-- TODO: Documenter le nouveau composant stats-card -->
```

Puis créez une issue ou un rappel pour le faire plus tard.

### 4. Relecture mensuelle

Une fois par mois, relisez **tous** vos guides pour vérifier qu'ils sont à jour. Ça prend 30 minutes et évite les incohérences.

### 5. Commits atomiques

Faites des commits petits et fréquents plutôt qu'un gros commit à la fin :

**❌ Mauvais :**
```bash
git commit -m "Ajout de plein de trucs"
```

**✅ Bon :**
```bash
git commit -m "feat: Ajout leçon CSS 4"
git commit -m "feat: Ajout leçon CSS 5"
git commit -m "docs: Mise à jour guides CSS"
```

---

## 🚨 Erreurs courantes à éviter

### ❌ Erreur 1 : Oublier de documenter

**Problème :** Vous codez pendant 3 jours, puis vous oubliez ce que vous avez fait.

**Solution :** Documentez **immédiatement** après chaque modification.

### ❌ Erreur 2 : Documentation incohérente

**Problème :** Vous ajoutez `.warning-box` dans le CSS mais oubliez de le documenter.

**Solution :** Code + doc = 1 seul commit.

### ❌ Erreur 3 : CHANGELOG vide

**Problème :** Vous faites plein de commits sans mettre à jour CHANGELOG.md.

**Solution :** CHANGELOG.md doit être modifié dans **presque tous les commits**.

### ❌ Erreur 4 : README obsolète

**Problème :** Votre README dit "3 leçons CSS" alors que vous en avez 9.

**Solution :** Mettez à jour README.md lors des releases.

### ❌ Erreur 5 : Guides CSS non synchronisés

**Problème :** Vous modifiez une variable dans reset-variable.css mais pas dans le guide.

**Solution :** Ouvrez les deux fichiers en même temps.

---

## 📚 Résumé ultra-rapide

| Action | Documentation à mettre à jour | Fréquence |
|--------|------------------------------|-----------|
| Ajout leçon | CHANGELOG.md | Immédiat |
| Modification CSS | CHANGELOG.md + Guide CSS | Immédiat |
| Bug fix | CHANGELOG.md | Immédiat |
| Nouvelle fonctionnalité | CHANGELOG.md (+ README si majeure) | Immédiat |
| Release | CHANGELOG.md + README.md | Hebdo/Mensuel |
| Nouveau dossier | STRUCTURE.md | Rare |
| Nouvelle règle | CONTRIBUTING.md | Très rare |

---

## 🎓 En conclusion

**Règle d'or :**
> Si vous vous demandez "dois-je documenter ça ?", la réponse est **OUI** !

Votre futur vous (dans 6 mois) vous remerciera. 🙏

---

<div align="center">

**Dernière mise à jour :** 08 janvier 2026  
**Créé par :** Herimampionona ANDRIANARIMBOLA

</div>