# Développement Web : Javascript, web, api fetch
liens utile:

https://developer.mozilla.org/fr/

structure de Markdown:
```
#### #=H1
#### ##=H2
ect...
```

# Git
```
git  init
```
pour ajouter un fichier au suivi git :
```
git add <nom du fichier>
```
Pour valider les modifications et les ajouter à l'historique : 
```
git commit -m "Message de validation"
```
Pour verifier l'état du dépot : 
```
git status
```

# Déclaration variable JS
le <;> n'est pas obligatoire en JS

### var, let et const
```
const = n'ont modifiable

let = 

var = variable
```

# Selectionner des éléments

Par Id : 
```
let element = document.getElementById("monId");
```
Par Classe :
```
let elements = document.getElementByClassName("maClasse");
```
Par balise : 
```
let elements = document.getElementByTagName("tag");
```

# Modifier des éléments

Changer le texte : 
```
document.getElementById("monId").textContent = "Nouveau texte";
```

# Modifier les Styles

Changer


# Ecouter et Réagir aux événements 

Ajouter un écouteur d'évenements : 
```
document.getElementById("monBouton").addEventListener("click", function(){
    alert("Bouton cliqué !");
});
```
callback = fonction qui passe en paramètre un autre fonction


# Tableau en JS

