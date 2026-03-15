# Convertisseur d'Unités

Un convertisseur d'unités simple et intuitif développé en HTML, CSS et JavaScript. Permet de convertir des unités de longueur, masse, température et vitesse de manière rapide et précise.

## Fonctionnalités

- **Conversion de longueur** : mètres (m), kilomètres (km), centimètres (cm), miles (mi)
- **Conversion de masse** : grammes (g), kilogrammes (kg)
- **Conversion de température** : Celsius (°C), Fahrenheit (°F)
- **Conversion de vitesse** : mètres par seconde (m/s), kilomètres par heure (km/h), miles par heure (mph)
- Interface utilisateur simple et responsive
- Calculs précis avec gestion des erreurs

## Utilisation

1. Ouvrez le fichier `index.html` dans votre navigateur web préféré.
2. Sélectionnez le type d'unité que vous souhaitez convertir (longueur, masse, température ou vitesse).
3. Choisissez l'unité de départ et l'unité d'arrivée dans les menus déroulants.
4. Entrez la valeur à convertir dans le champ numérique.
5. Cliquez sur le bouton "Convertir" pour obtenir le résultat.

## Structure du projet

- `index.html` : Structure principale de la page web
- `style.css` : Styles CSS pour l'interface utilisateur
- `script.js` : Logique JavaScript pour les conversions et l'interactivité

## Technologies utilisées

- **HTML5** : Structure de la page
- **CSS3** : Mise en page et design
- **JavaScript (ES6)** : Logique de conversion et manipulation du DOM

## Comment ça marche

Le convertisseur utilise des formules mathématiques simples pour effectuer les conversions :

- **Température** : Conversion entre Celsius et Fahrenheit
- **Longueur** : Conversions entre mètres, kilomètres et centimètres
- **Masse** : Conversions entre grammes et kilogrammes
- **Vitesse** : Conversions entre m/s et km/h

Toutes les conversions sont effectuées en temps réel côté client, sans nécessiter de serveur ou de connexion internet.

## Personnalisation

Pour ajouter de nouvelles unités ou types de conversion, modifiez l'objet `UNITS` dans `script.js` et ajoutez les formules correspondantes dans la fonction `convertValue`.


