# 📦 Guide Personnel - Versioning du projet

> **Guide personnel** pour gérer les versions du projet DWA-Madagascar

---

## 🎯 Système de versioning actuel

### Format : v MAJEUR.MINEUR.CORRECTIF

```
v 1 . 2 . 3
  │   │   │
  │   │   └─ CORRECTIF : Bugs, typos, petites corrections
  │   └───── MINEUR : Nouvelles leçons, fonctionnalités
  └───────── MAJEUR : Lancement officiel, refonte complète
```

---

## 📊 Historique des versions

### v0.0.1 - 01 décembre 2025
**Initialisation**
- Création du repository
- Structure de base

### v0.1.0 - 20 décembre 2025
**Architecture de base**
- Dossiers assets/, pages/, docs/
- Fichiers CSS de base
- Logo et design initial
- Pages publiques (about, contact, lessons)

### v0.2.0 - 03 janvier 2026
**Module HTML complet**
- 9 leçons HTML dans bases-html/
- Navigation entre leçons
- Sommaire HTML

### v0.3.0 - 04 janvier 2026
**Thème clair/sombre**
- Bouton toggle thème
- Variables CSS pour deux modes
- Sauvegarde de préférence

### v0.4.0 - 06 janvier 2026
**Système de progression**
- lesson-progress.js
- Sauvegarde localStorage
- Attribut data-lesson-id

### v0.5.0 - 07 janvier 2026
**Début module CSS**
- 3 premières leçons CSS
- Sommaire CSS
- Mise en ligne GitHub Pages

### v0.5.1 - 08 janvier 2026
**Documentation complète**
- README.md
- CONTRIBUTING.md
- CHANGELOG.md
- STRUCTURE.md
- 4 guides CSS personnels
- .gitignore

---

## 🎯 Versions prévues (Roadmap)

### v0.6.0 - Mi-janvier 2026
**Module CSS complet**
- [ ] Leçons CSS 4 à 9
- [ ] Sommaire CSS complet
- [ ] Quiz CSS (bases)

### v0.7.0 - Fin janvier 2026
**Quiz interactifs**
- [ ] Quiz après module HTML
- [ ] Quiz après module CSS
- [ ] Système de validation
- [ ] Badges de réussite

### v0.8.0 - Février 2026
**Module JavaScript**
- [ ] 9 leçons JavaScript de base
- [ ] Sommaire JS
- [ ] Exercices interactifs

### v0.9.0 - Février 2026
**Fonctionnalités avancées**
- [ ] Dashboard de progression
- [ ] Statistiques personnelles
- [ ] Système de certificats

### v1.0.0 - Mars 2026 🎉
**Lancement officiel**
- [ ] Tous les modules HTML, CSS, JS complets
- [ ] Tous les quiz fonctionnels
- [ ] Documentation complète
- [ ] Tests utilisateurs validés
- [ ] Site optimisé et stable

---

## 🔄 Workflow hebdomadaire

### Lundi → Jeudi : Développement

```bash
# Chaque modification
git add .
git commit -m "feat: Description"
git push

# Notez dans CHANGELOG.md [Non publié]
```

### Vendredi : Release hebdomadaire

```bash
# 1. Mettre à jour CHANGELOG.md
## [0.X.0] - 2026-XX-XX
(Déplacer tout de [Non publié])

# 2. Commit de release
git add CHANGELOG.md README.md
git commit -m "chore: Release v0.X.0"

# 3. Créer le tag
git tag -a v0.X.0 -m "Release v0.X.0 - Description"

# 4. Pousser tout
git push origin main --tags
```

### Fin du mois : GitHub Release

1. Aller sur GitHub → Releases
2. Draft new release
3. Sélectionner le dernier tag
4. Rédiger description complète
5. Publish release

---

## 📋 Checklist avant chaque version

### Avant de tagger

- [ ] ✅ Tous les fichiers sont commitées
- [ ] ✅ Tout fonctionne (tests manuels)
- [ ] ✅ Aucune console error
- [ ] ✅ Responsive OK (mobile, tablette, desktop)
- [ ] ✅ Mode clair ET sombre OK
- [ ] ✅ CHANGELOG.md à jour
- [ ] ✅ README.md à jour (si nécessaire)

### Pendant le tag

- [ ] ✅ Bon numéro de version (0.X.0)
- [ ] ✅ Message descriptif dans le tag
- [ ] ✅ Tag depuis la branche `main`

### Après le push

- [ ] ✅ Vérifier sur GitHub que le tag est visible
- [ ] ✅ Vérifier que le site fonctionne en ligne
- [ ] ✅ Créer GitHub Release (mensuel)

---

## 🎯 Règles de numérotation

### Incrémenter CORRECTIF (0.5.X)

**Quand ?**
- Correction de bug
- Correction de typo
- Petit ajustement CSS
- Amélioration de doc

**Exemples :**
- v0.5.1 → v0.5.2 : Correction lien cassé
- v0.5.2 → v0.5.3 : Fix bug navigation

### Incrémenter MINEUR (0.X.0)

**Quand ?**
- Ajout de nouvelles leçons (1+)
- Nouvelle fonctionnalité
- Nouveau module
- Amélioration majeure

**Exemples :**
- v0.5.1 → v0.6.0 : 6 nouvelles leçons CSS
- v0.6.0 → v0.7.0 : Quiz interactifs

### Incrémenter MAJEUR (X.0.0)

**Quand ?**
- Lancement officiel (v1.0.0)
- Refonte complète
- Changements incompatibles

**Exemple :**
- v0.9.0 → v1.0.0 : Site officiellement lancé

---

## 💾 Commandes Git essentielles

### Créer une version

```bash
# Tag annoté (TOUJOURS utiliser ça)
git tag -a v0.6.0 -m "Release v0.6.0 - Description courte"

# Pousser le tag
git push origin v0.6.0
# OU pousser tous les tags
git push --tags
```

### Lister les versions

```bash
# Liste simple
git tag

# Liste avec messages
git tag -n

# Historique graphique
git log --oneline --decorate --graph
```

### Voir une version spécifique

```bash
# Voir le code d'une version
git checkout v0.5.0

# Revenir à la version actuelle
git checkout main
```

### Supprimer un tag (si erreur)

```bash
# Supprimer localement
git tag -d v0.6.0

# Supprimer sur GitHub
git push origin :refs/tags/v0.6.0
```

### Comparer deux versions

```bash
# Différences entre versions
git diff v0.5.0 v0.6.0

# Fichiers modifiés
git diff v0.5.0 v0.6.0 --name-only

# Commits entre deux versions
git log v0.5.0..v0.6.0 --oneline
```

---

## 🚨 Erreurs à éviter

### ❌ Tag sans message

```bash
git tag v0.6.0  # PAS BON
```

✅ **Toujours utiliser -a et -m :**
```bash
git tag -a v0.6.0 -m "Description"
```

### ❌ Oublier de pousser les tags

```bash
git push  # Les tags ne sont PAS poussés !
```

✅ **Pousser explicitement :**
```bash
git push --tags
```

### ❌ Tag avant commit de CHANGELOG

```bash
git tag v0.6.0  # CHANGELOG pas encore mis à jour
```

✅ **Ordre correct :**
```bash
git commit -m "chore: Release v0.6.0"
git tag -a v0.6.0 -m "Release"
```

### ❌ Sauter des versions

```bash
v0.5.0 → v0.7.0  # On a sauté v0.6.0 !
```

✅ **Ordre séquentiel :**
```bash
v0.5.0 → v0.6.0 → v0.7.0
```

---

## 📊 Tableau de décision rapide

| Changement | Version | Exemple |
|-----------|---------|---------|
| Correction typo | +0.0.1 | v0.5.1 → v0.5.2 |
| Fix bug CSS | +0.0.1 | v0.5.2 → v0.5.3 |
| 1-2 nouvelles leçons | +0.1.0 | v0.5.3 → v0.6.0 |
| 3+ nouvelles leçons | +0.1.0 | v0.6.0 → v0.7.0 |
| Nouvelle fonctionnalité majeure | +0.1.0 | v0.7.0 → v0.8.0 |
| Module complet terminé | +0.1.0 | v0.8.0 → v0.9.0 |
| Lancement officiel | +1.0.0 | v0.9.0 → v1.0.0 |

---

## 🎯 Exemples concrets

### Scénario 1 : Ajout de 3 leçons CSS

```bash
# Lundi : lesson4.html
git commit -m "feat: Ajout leçon CSS 4"

# Mercredi : lesson5.html
git commit -m "feat: Ajout leçon CSS 5"

# Jeudi : lesson6.html
git commit -m "feat: Ajout leçon CSS 6"

# Vendredi : Release
# CHANGELOG : v0.6.0
git commit -m "chore: Release v0.6.0"
git tag -a v0.6.0 -m "Release v0.6.0 - 3 nouvelles leçons CSS"
git push --tags
```

**Résultat :** v0.5.1 → v0.6.0

---

### Scénario 2 : Correction d'un bug

```bash
# Correction bug navigation
git commit -m "fix: Navigation cassée sur lesson3"

# CHANGELOG : v0.6.1
git commit -m "chore: Release v0.6.1"
git tag -a v0.6.1 -m "Fix navigation bug"
git push --tags
```

**Résultat :** v0.6.0 → v0.6.1

---

### Scénario 3 : Module complet terminé

```bash
# Toutes les 9 leçons CSS terminées
# CHANGELOG : v0.7.0
git commit -m "chore: Release v0.7.0 - Module CSS complet"
git tag -a v0.7.0 -m "Module CSS complet (9 leçons)"
git push --tags

# GitHub Release
# Aller sur GitHub et créer une belle release
```

**Résultat :** v0.6.1 → v0.7.0

---

## 📅 Calendrier prévisionnel 2026

| Semaine | Date | Version | Objectif |
|---------|------|---------|----------|
| S2 | 08-12 Jan | v0.6.0 | CSS 4-6 |
| S3 | 13-19 Jan | v0.7.0 | CSS 7-9 + Quiz CSS |
| S4 | 20-26 Jan | v0.8.0 | Quiz HTML + Badges |
| S5 | 27 Jan - 02 Fév | v0.9.0 | JS 1-3 |
| S6-8 | Février | v0.10-0.12 | JS 4-9 |
| S9 | Mars | v1.0.0 | **LANCEMENT** 🚀 |

---

## 🎓 Conseils personnels

### 1. Restez régulier

Ne laissez pas passer plus de 2 semaines sans release. Ça aide à garder l'historique clair.

### 2. Messages descriptifs

Prenez 10 secondes pour écrire un bon message de tag :
```bash
# ❌ Mauvais
git tag -a v0.6.0 -m "update"

# ✅ Bon
git tag -a v0.6.0 -m "Release v0.6.0 - 3 nouvelles leçons CSS (positionnement, flexbox, grid)"
```

### 3. Testez avant de tagger

**Checklist rapide :**
- Ouvrir 3-4 pages au hasard
- Basculer entre thèmes
- Tester sur mobile
- Vérifier la console (F12)

### 4. Documentez immédiatement

Dès qu'une version est créée, notez-la dans ce fichier (section "Historique").

### 5. GitHub Releases = Marketing

Utilisez les GitHub Releases pour communiquer avec vos utilisateurs. Mettez-y des emojis, des screenshots, du storytelling !

---

## 🔗 Liens utiles

- **Repository :** https://github.com/DevWebAiMadagascar/officialwebsite
- **Site en ligne :** https://devwebaimadagascar.github.io/officialwebsite/
- **Releases :** https://github.com/DevWebAiMadagascar/officialwebsite/releases
- **Tags :** https://github.com/DevWebAiMadagascar/officialwebsite/tags

---

## 📝 Notes personnelles

<!-- Zone libre pour vos notes -->

### Prochaine release prévue
- **Version :** v0.6.0
- **Date cible :** 12 janvier 2026
- **Contenu :**
  - [ ] Leçon CSS 4 : Positionnement
  - [ ] Leçon CSS 5 : Flexbox
  - [ ] Leçon CSS 6 : Grid Layout

### Idées pour v1.0.0
- Système de certificats téléchargeables
- Mode offline (PWA)
- Communauté d'apprenants
- Forum ou chat

---

<div align="center">

**Dernière mise à jour :** 08 janvier 2026  
**Version actuelle du projet :** v0.5.1

</div>