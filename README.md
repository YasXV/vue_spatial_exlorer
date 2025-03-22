# Rick and Morty Explorer

## À propos du projet

Rick and Morty Explorer est une application web développée avec Vue.js qui permet aux utilisateurs d'explorer l'univers de la série animée "Rick and Morty". L'application offre aux fans de la série une interface interactive pour découvrir et rechercher des informations sur les personnages, les lieux et les épisodes de la série.

## Fonctionnalités principales

- **Recherche globale** : Recherchez facilement des personnages, des lieux et des épisodes
- **Navigation par catégorie** : Explorez séparément les personnages, lieux et épisodes
- **Pagination** : Navigation facile à travers les multiples pages de résultats
- **Fiches détaillées** : Information complète sur chaque élément de l'univers Rick et Morty
- **Interface responsive** : Expérience utilisateur optimisée sur différents appareils
- **Section jeux** : Mini-jeux éducatifs sur l'univers Rick et Morty (en développement)

## Structure du projet

### Composants principaux

1. **Home.vue** : Page d'accueil avec barre de recherche globale et navigation
2. **Characters.vue** : Liste paginée des personnages
3. **Locations.vue** : Liste paginée des lieux
4. **Episodes.vue** : Liste paginée des épisodes
5. **SearchBar.vue** : Composant réutilisable pour la recherche
6. **SearchResults.vue** : Affichage des résultats de recherche
7. **About.vue** : Informations sur le projet
8. **Games.vue** : Mini-jeux sur l'univers Rick et Morty

### Sous-composants

- **OneCharacter.vue** : Carte d'un personnage
- **OneLocation.vue** : Carte d'un lieu
- **OneEpisode.vue** : Carte d'un épisode

### Système de gestion d'état et routage

- **store.js** : Store Pinia pour la gestion centralisée des données
- **router.js** : Configuration des routes Vue Router
- **apicall.js** : Services d'API pour les appels à l'API Rick and Morty

## Technologies utilisées

- **Vue.js 3** : Framework JavaScript progressif
- **Vue Router** : Routage officiel pour Vue.js
- **Pinia** : Gestionnaire d'état pour Vue.js
- **API Rick and Morty** : Source de données externe

## Répartition des tâches

### Yasmina
1. **Frontend - Interface utilisateur**
   - Conception et implémentation de l'interface utilisateur principale
   - Développement des composants Home, SearchBar et SearchResults
   - Stylisation CSS et animations
   - Interface de jeux

2. **Fonctionnalités de recherche**
   - Implémentation de la fonctionnalité de recherche globale
   - Filtrage des résultats en temps réel
   - Optimisation des performances de recherche

3. **Documentation**
   - Rédaction de la documentation technique
   - Commentaires explicatifs dans le code
   - README et guides d'utilisation

### Amir
1. **Gestion des données**
   - Configuration du store Pinia
   - Développement des services d'API
   - Configuration des appels API et gestion des réponses
   - Mise en cache des données pour améliorer les performances

2. **Composants spécifiques**
   - Développement des composants Characters, Locations et Episodes
   - Création des sous-composants OneCharacter, OneLocation et OneEpisode
   - Implémentation de la pagination

3. **Routage et navigation**
   - Configuration de Vue Router
   - Gestion des transitions entre pages
   - Navigation inter-composants

## Installation et démarrage

```bash
# Cloner le dépôt
git clone [URL-du-dépôt]

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm run dev

# Compiler pour la production
npm run build
```
## Problèmes rencontrés 
 - Pas d'images dans l'api pour locations et episodes donc changement de logique d'affichage 
 - pobléme de synchro des async functions 
 - problème de deuxiéme animation aprés hover sur les cartes episodes 
 - difficulté à savoir quoi mettre dans le store ou en emit/props 

## Prochaines étapes

- Ajout de nouvelles fonctionnalités de recherche avancée
- Implémentation complète de la section jeux
- Amélioration de l'interface utilisateur mobile
- Ajout d'animations supplémentaires
- Développement d'une API de statistiques sur la série

---

Ce projet est un hommage à la série "Rick and Morty" et utilise l'API publique Rick and Morty pour fournir des données actualisées aux fans.
