# 🌿 Guide Personnel - Branches Git

> **Guide personnel** pour utiliser les branches Git efficacement sur le projet DWA-Madagascar

---

## 🎯 Qu'est-ce qu'une branche ?

### Analogie simple

Imaginez que vous écrivez un livre :

```
main (livre principal)
  │
  ├─ chapitre-3 (brouillon du chapitre 3)
  │
  └─ correction-typos (corrections sans toucher au texte principal)
```

**Une branche = une copie parallèle** où vous pouvez expérimenter sans casser le code principal.

---

## 🏗️ Structure des branches recommandée

### Pour un projet solo (VOUS actuellement)

```
main (branche principale, toujours stable)
  │
  ├─ feature/lesson-css-4 (nouvelle leçon)
  ├─ feature/quiz-system (nouveau système)
  ├─ fix/navigation-bug (correction bug)
  └─ experiment/new-design (test design)
```

### Convention de nommage

| Type | Préfixe | Exemple | Usage |
|------|---------|---------|-------|
| Nouvelle fonctionnalité | `feature/` | `feature/lesson-css-4` | Ajouter du contenu |
| Correction de bug | `fix/` | `fix/broken-link` | Réparer quelque chose |
| Expérimentation | `experiment/` | `experiment/dark-mode-v2` | Tester sans risque |
| Documentation | `docs/` | `docs/update-readme` | Mise à jour docs |
| Refactoring | `refactor/` | `refactor/clean-css` | Réorganiser code |

---

## 🔄 Workflow avec branches

### Workflow de base (recommandé pour vous)

```
1. Créer une branche
        ↓
2. Travailler sur la branche
        ↓
3. Tester
        ↓
4. Fusionner dans main
        ↓
5. Supprimer la branche
```

---

## 📝 Commandes essentielles

### 1. Voir les branches

```bash
# Liste des branches locales
git branch

# Liste avec la branche actuelle marquée *
git branch
# * main
#   feature/lesson-css-4

# Liste branches locales + distantes
git branch -a
```

---

### 2. Créer une branche

```bash
# Créer une branche (mais rester sur main)
git branch feature/lesson-css-4

# Créer ET basculer sur la nouvelle branche
git checkout -b feature/lesson-css-4

# OU avec la nouvelle syntaxe
git switch -c feature/lesson-css-4
```

---

### 3. Changer de branche

```bash
# Ancienne syntaxe
git checkout main

# Nouvelle syntaxe (recommandée)
git switch main
```

---

### 4. Fusionner une branche

```bash
# 1. Retourner sur main
git switch main

# 2. Fusionner la branche de fonctionnalité
git merge feature/lesson-css-4

# 3. Pousser vers GitHub
git push origin main
```

---

### 5. Supprimer une branche

```bash
# Supprimer localement (après fusion)
git branch -d feature/lesson-css-4

# Forcer la suppression (si pas fusionnée)
git branch -D feature/lesson-css-4

# Supprimer sur GitHub
git push origin --delete feature/lesson-css-4
```

---

## 🎯 Cas d'usage pratiques

### Cas 1 : Ajouter une nouvelle leçon

**Objectif :** Ajouter lesson4.html sans risquer de casser le site

```bash
# 1. S'assurer d'être sur main et à jour
git switch main
git pull origin main

# 2. Créer une branche
git switch -c feature/lesson-css-4

# 3. Créer le fichier lesson4.html
# (coder ici)

# 4. Commiter sur la branche
git add pages/public/lesson/css/bases-css/lesson4.html
git commit -m "feat: Ajout leçon CSS 4 sur le positionnement"

# 5. Pousser la branche sur GitHub
git push origin feature/lesson-css-4

# 6. Tester en ligne
# Visiter : https://devwebaimadagascar.github.io/officialwebsite/
# (GitHub ne déploie QUE la branche main par défaut)

# 7. Si tout est OK, fusionner dans main
git switch main
git merge feature/lesson-css-4

# 8. Pousser main
git push origin main

# 9. Supprimer la branche
git branch -d feature/lesson-css-4
git push origin --delete feature/lesson-css-4
```

**Avantages :**
- ✅ `main` reste propre pendant le développement
- ✅ Facile de revenir en arrière si problème
- ✅ Historique Git clair

---

### Cas 2 : Corriger un bug urgent

**Objectif :** Corriger un lien cassé rapidement

```bash
# 1. Créer une branche de correction
git switch -c fix/broken-link-lesson3

# 2. Corriger le bug dans lesson3.html

# 3. Commiter
git add pages/public/lesson/html/bases-html/lesson3.html
git commit -m "fix: Correction lien cassé vers sommaire"

# 4. Fusionner directement (bug simple)
git switch main
git merge fix/broken-link-lesson3

# 5. Pousser
git push origin main

# 6. Supprimer la branche
git branch -d fix/broken-link-lesson3
```

**Avantages :**
- ✅ Historique montre clairement que c'est un fix
- ✅ Possibilité de revenir en arrière si le fix cause un autre bug

---

### Cas 3 : Expérimenter un nouveau design

**Objectif :** Tester un nouveau thème sans casser l'existant

```bash
# 1. Créer une branche d'expérimentation
git switch -c experiment/new-theme

# 2. Modifier reset-variable.css
# (changer toutes les couleurs)

# 3. Commiter
git add assets/css/reset-variable.css
git commit -m "experiment: Test nouveau thème violet/or"

# 4. Tester localement
# Ouvrir index.html

# 5a. Si ça plaît → Fusionner
git switch main
git merge experiment/new-theme

# 5b. Si ça ne plaît pas → Abandonner
git switch main
git branch -D experiment/new-theme  # Force delete
```

**Avantages :**
- ✅ Liberté totale d'expérimenter
- ✅ Aucun risque pour le code principal
- ✅ Facile d'abandonner si ça ne marche pas

---

### Cas 4 : Travailler sur plusieurs fonctionnalités en parallèle

**Objectif :** Développer quiz ET leçon JS en même temps

```bash
# Branche 1 : Quiz
git switch -c feature/quiz-system
# (coder le système de quiz)
git commit -m "feat: Système de quiz - partie 1"

# Branche 2 : JavaScript (sans attendre que quiz soit fini)
git switch main
git switch -c feature/lesson-js-1
# (coder leçon JS)
git commit -m "feat: Ajout leçon JS 1"

# Plus tard : Fusionner quiz quand prêt
git switch main
git merge feature/quiz-system

# Encore plus tard : Fusionner JS
git switch main
git merge feature/lesson-js-1
```

**Avantages :**
- ✅ Pas besoin de finir une fonctionnalité avant de commencer l'autre
- ✅ Chaque fonctionnalité a son historique propre

---

## 🚀 Workflow recommandé pour vous

### Option 1 : Workflow simple (débutant)

**Tout sur `main`, branches uniquement pour gros changements**

```bash
# Modifications quotidiennes → direct sur main
git commit -m "feat: Ajout lesson4"
git push

# Grosse fonctionnalité → branche
git switch -c feature/quiz-system
# (développement)
git merge feature/quiz-system
```

**Avantages :**
- ✅ Simple, pas de complexité
- ✅ Adapté pour projet solo

**Inconvénients :**
- ❌ Risque de casser main
- ❌ Historique moins organisé

---

### Option 2 : Workflow intermédiaire (RECOMMANDÉ)

**Une branche par fonctionnalité, fusion fréquente**

```bash
# Nouvelle leçon → nouvelle branche
git switch -c feature/lesson-css-4
git commit -m "feat: Ajout lesson 4"
git switch main
git merge feature/lesson-css-4
git push

# Bug → branche rapide
git switch -c fix/typo-lesson3
git commit -m "fix: Typo"
git merge fix/typo-lesson3
```

**Avantages :**
- ✅ `main` toujours stable
- ✅ Historique organisé
- ✅ Facile de revenir en arrière

---

### Option 3 : Workflow avancé (pour plus tard)

**Branche `dev` intermédiaire + branches de fonctionnalités**

```
main (production, toujours stable)
  │
  └─ dev (développement)
      │
      ├─ feature/lesson-css-4
      ├─ feature/quiz-system
      └─ fix/navigation-bug
```

**Process :**
1. Créer branche depuis `dev`
2. Fusionner dans `dev` quand prêt
3. Tester sur `dev`
4. Fusionner `dev` dans `main` pour release

**Avantages :**
- ✅ `main` super stable (production)
- ✅ `dev` pour tester avant release

**Inconvénients :**
- ❌ Plus complexe
- ❌ Utile seulement si équipe ou grosse base utilisateurs

---

## 🎯 Ma recommandation pour vous

### Actuellement (projet solo, début)

**Option 2 : Workflow intermédiaire**

```bash
# Pour chaque nouvelle leçon
git switch -c feature/lesson-X
# (code + test)
git merge feature/lesson-X

# Pour chaque bug
git switch -c fix/description
# (correction)
git merge fix/description

# Pour expérimentations
git switch -c experiment/description
# (test)
# Garder ou abandonner
```

**Règle simple :**
- Leçon complète = 1 branche
- Bug = 1 branche
- Expérimentation = 1 branche

---

### Plus tard (quand utilisateurs actifs)

**Option 3 : Ajouter branche `dev`**

```bash
# Créer dev
git switch -c dev
git push origin dev

# Travailler sur dev
git switch dev
git switch -c feature/new-stuff
git merge feature/new-stuff

# Release : dev → main
git switch main
git merge dev
git tag v1.0.0
```

---

## 🔀 Fusion de branches (merge)

### Fast-forward merge (simple)

**Quand ?** Quand `main` n'a pas changé depuis la création de la branche

```bash
# Historique linéaire
main:     A---B
                \
feature:         C---D

# Après merge
main:     A---B---C---D
```

**Commande :**
```bash
git merge feature/lesson-css-4
```

---

### Merge avec commit de fusion

**Quand ?** Quand `main` a avancé pendant que vous travailliez sur la branche

```bash
# Historique avec divergence
main:     A---B---C
               \
feature:        D---E

# Après merge
main:     A---B---C---F (commit de fusion)
               \     /
feature:        D---E
```

**Commande :**
```bash
git merge feature/lesson-css-4 --no-ff
```

---

### Résolution de conflits

**Scénario :** Vous avez modifié le même fichier sur `main` ET sur votre branche

```bash
# Tentative de merge
git merge feature/lesson-css-4
# Auto-merging lesson-styles.css
# CONFLICT (content): Merge conflict in lesson-styles.css
```

**Résolution :**

1. **Ouvrir le fichier en conflit**
```css
<<<<<<< HEAD
.info-box {
    background: blue;  /* Version main */
}
=======
.info-box {
    background: green;  /* Version branche */
}
>>>>>>> feature/lesson-css-4
```

2. **Choisir la bonne version**
```css
.info-box {
    background: green;  /* Gardez celle que vous voulez */
}
```

3. **Marquer comme résolu**
```bash
git add lesson-styles.css
git commit -m "merge: Résolution conflit info-box"
```

**Conseil :** Pour éviter les conflits, fusionnez souvent !

---

## 🌐 Branches et GitHub

### Pousser une branche sur GitHub

```bash
# Créer branche localement
git switch -c feature/lesson-css-4

# Pousser sur GitHub
git push origin feature/lesson-css-4

# Maintenant visible sur GitHub :
# https://github.com/DevWebAiMadagascar/officialwebsite/branches
```

---

### Pull Request (PR) sur GitHub

**C'est quoi ?** Une demande pour fusionner une branche dans `main`

**Workflow :**

1. **Créer branche et pousser**
```bash
git switch -c feature/lesson-css-4
# (code)
git push origin feature/lesson-css-4
```

2. **Sur GitHub :**
- Aller sur votre repo
- Cliquer "Compare & pull request"
- Remplir description
- Cliquer "Create pull request"

3. **Review (vous-même pour l'instant)**
- Regarder les changements
- Vérifier que tout est OK
- Cliquer "Merge pull request"

4. **Nettoyer**
```bash
git switch main
git pull origin main
git branch -d feature/lesson-css-4
```

**Avantages des PR :**
- ✅ Vue d'ensemble des changements
- ✅ Possibilité de commenter
- ✅ Historique clair sur GitHub

**Pour vous (solo) :** Pas obligatoire, mais bon pour apprendre !

---

### GitHub Pages et branches

**Important :** GitHub Pages ne déploie QUE la branche configurée (par défaut `main`)

```
main → Déployé sur https://devwebaimadagascar.github.io/officialwebsite/
feature/test → PAS déployé (uniquement visible dans le code)
```

**Pour tester une branche en ligne :**

**Option A :** Fusionner temporairement dans `main` (risqué)

**Option B :** Configurer GitHub Pages pour déployer une autre branche
- Settings → Pages → Branch → Choisir votre branche

**Option C :** Utiliser un service de preview (Netlify, Vercel)

---

## 📋 Commandes de référence rapide

```bash
# === CRÉER & CHANGER ===
git branch                      # Lister branches
git switch -c feature/nom       # Créer + basculer
git switch main                 # Changer de branche

# === FUSIONNER ===
git merge feature/nom           # Fusionner dans branche actuelle
git merge --no-ff feature/nom   # Fusion avec commit

# === SUPPRIMER ===
git branch -d feature/nom       # Supprimer locale (safe)
git branch -D feature/nom       # Forcer suppression
git push origin --delete nom    # Supprimer sur GitHub

# === INFO ===
git branch -a                   # Toutes les branches
git log --graph --oneline       # Historique graphique
git diff main feature/nom       # Comparer branches

# === SYNCHRONISER ===
git push origin feature/nom     # Pousser branche
git pull origin main            # Mettre à jour main
```

---

## 🚨 Erreurs courantes

### ❌ Erreur 1 : Modifier main directement

**Problème :**
```bash
# Vous êtes sur main
git switch main
# (vous modifiez directement lesson4.html)
git commit -m "feat: lesson 4"
```

**Pourquoi c'est risqué :**
- Si vous cassez quelque chose, `main` est cassée
- Pas de "brouillon" séparé

**Solution :**
```bash
# Toujours créer une branche
git switch -c feature/lesson-4
# (modifications)
git commit
```

---

### ❌ Erreur 2 : Oublier sur quelle branche on est

**Problème :**
```bash
# Vous pensez être sur feature/lesson-4
# Mais vous êtes sur main !
git commit -m "test"  # Commit sur main par erreur
```

**Solution :**
```bash
# Toujours vérifier
git branch
# * main

# Ou configurer le prompt pour afficher la branche
```

---

### ❌ Erreur 3 : Fusionner la mauvaise branche

**Problème :**
```bash
git switch feature/lesson-4
git merge main  # INVERSÉ ! Vous fusionnez main dans feature
```

**Solution :**
```bash
# Ordre correct
git switch main  # Aller sur la branche de destination
git merge feature/lesson-4  # Fusionner la source
```

---

### ❌ Erreur 4 : Supprimer une branche non fusionnée

**Problème :**
```bash
git branch -d feature/lesson-4
# error: The branch 'feature/lesson-4' is not fully merged
```

**Solutions :**

**A) Fusionner d'abord**
```bash
git switch main
git merge feature/lesson-4
git branch -d feature/lesson-4
```

**B) Forcer la suppression (si vraiment inutile)**
```bash
git branch -D feature/lesson-4  # ATTENTION : Perte de code !
```

---

## 🎯 Exemples complets

### Exemple 1 : Développement d'une semaine

**Lundi : Leçon 4**
```bash
git switch -c feature/lesson-css-4
# (code lesson4.html)
git commit -m "feat: Ajout leçon CSS 4"
git switch main
git merge feature/lesson-css-4
git push
git branch -d feature/lesson-css-4
```

**Mercredi : Leçon 5**
```bash
git switch -c feature/lesson-css-5
# (code lesson5.html)
git commit -m "feat: Ajout leçon CSS 5"
git switch main
git merge feature/lesson-css-5
git push
git branch -d feature/lesson-css-5
```

**Jeudi : Bug découvert**
```bash
git switch -c fix/lesson3-typo
# (correction)
git commit -m "fix: Typo dans lesson3"
git switch main
git merge fix/lesson3-typo
git push
git branch -d fix/lesson3-typo
```

---

### Exemple 2 : Grosse fonctionnalité (quiz)

**Jour 1-3 : Développement**
```bash
git switch -c feature/quiz-system
# (code quiz)
git commit -m "feat: Quiz - structure de base"
# (plus de code)
git commit -m "feat: Quiz - validation réponses"
# (encore plus)
git commit -m "feat: Quiz - UI complète"
```

**Jour 4 : Tests**
```bash
# Tester localement
# Tester en poussant sur GitHub
git push origin feature/quiz-system
```

**Jour 5 : Fusion**
```bash
# Si tout est OK
git switch main
git merge feature/quiz-system
git push
git branch -d feature/quiz-system
git push origin --delete feature/quiz-system
```

---

## 🎓 Conseils personnels

### 1. Nommez bien vos branches

**❌ Mauvais :**
```bash
git switch -c test
git switch -c nouvelle-branche
git switch -c truc
```

**✅ Bon :**
```bash
git switch -c feature/lesson-css-4
git switch -c fix/navigation-broken
git switch -c experiment/new-color-scheme
```

### 2. Une branche = une fonctionnalité

Ne mélangez pas plusieurs choses dans une branche :

**❌ Mauvais :**
```bash
git switch -c feature/various-stuff
# lesson4.html + bug fix + new design
```

**✅ Bon :**
```bash
git switch -c feature/lesson-css-4  # Juste lesson4
# Plus tard
git switch -c fix/navigation-bug  # Juste le bug
```

### 3. Fusionnez souvent

Ne gardez pas une branche ouverte pendant 3 semaines. Fusionnez dès que c'est prêt.

### 4. Supprimez les branches fusionnées

Nettoyez régulièrement :
```bash
# Voir branches fusionnées
git branch --merged

# Supprimer toutes les branches fusionnées (sauf main)
git branch --merged | grep -v "main" | xargs git branch -d
```

### 5. Utilisez des PR pour apprendre

Même en solo, créez des Pull Requests sur GitHub pour vous habituer au workflow professionnel.

---

## 📚 Résumé ultra-rapide

| Action | Commande | Quand |
|--------|----------|-------|
| Créer branche | `git switch -c feature/nom` | Nouvelle fonctionnalité |
| Voir branches | `git branch` | Vérifier où on est |
| Changer branche | `git switch main` | Passer à une autre |
| Fusionner | `git merge feature/nom` | Intégrer dans main |
| Supprimer | `git branch -d feature/nom` | Après fusion |
| Pousser | `git push origin feature/nom` | Backup sur GitHub |

---

<div align="center">

**Dernière mise à jour :** 08 janvier 2026  
**Auteur :** Herimampionona ANDRIANARIMBOLA

</div>