/* Met à jour l'image principale et son texte au survol ou au focus clavier */
function upDate(previewPic) {
  console.log("Événement déclenché sur :", previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

/* Réinitialise l'affichage lorsque la souris quitte l'image ou que le focus est perdu */
function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML =
    "Survolez ou sélectionnez une image ci-dessous pour l'afficher ici.";
}

/* Ajoute automatiquement tabindex="0" à toutes les images au chargement de la page */
function ajouterTabindex() {
  console.log("La page est chargée : ajout de l'attribut tabindex aux images.");

  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
