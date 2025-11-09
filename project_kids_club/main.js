function isOnlyLetters(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!( (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') )) {
      return false;
    }
  }
  return true;
}
/*erreur effect*/
function applyErrorEffect(element) {
  element.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
  element.style.border = "1px solid red";
  element.classList.add("shake");
  setTimeout(() => {
    element.classList.remove("shake");
  }, 500);
  setTimeout(() => {
    element.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    element.style.border = "1px solid rgba(255, 255, 255, 0.3)";
  }, 5000);
}
/*erreur afficher */
function afficherErreur(msg){
  Er=document.getElementById("erreurstats");
  Er.classList.remove("fadeR");
  Er.classList.add("fadeR");
  setTimeout(() => {
    Er.innerHTML=msg;
    
  }, 600);
  setTimeout(() => {
    Er.innerHTML="";
    Er.classList.remove("fadeR");
    
  }, 5400);
  
  

}


function verifier() {
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const age = document.getElementById("age").value.trim();
  const motdepasse = document.getElementById("motdepasse").value.trim();
  


  if (!isOnlyLetters(nom)) {
    const enom=document.getElementById("nom");
    applyErrorEffect(enom);
    afficherErreur("Le nom doit contenir uniquement des lettres.");
    return false;
  }
  if (!isOnlyLetters(prenom)) {
    const eprenom = document.getElementById("prenom");
    applyErrorEffect(eprenom);
    afficherErreur("Le prénom doit contenir uniquement des lettres.");
  
    return false;
  }

  const ageNumber = parseInt(age);
  if (isNaN(ageNumber) || ageNumber < 5 || ageNumber > 18) {
    const eage = document.getElementById("age");
    applyErrorEffect(eage);
    afficherErreur("L'âge doit être un nombre entre 5 et 18.");
    return false;
  }

  if (motdepasse.length < 6) {
    const emotdepasse = document.getElementById("motdepasse");
    applyErrorEffect(emotdepasse);
    afficherErreur("Le mot de passe doit contenir au moins 6 caractères.");
    return false;
  }

  return true;
}





function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '10px';
  }
}




function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '10px';
  }
}
