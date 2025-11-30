function verif() {
    // Récupération des champs
    let nom = document.getElementById("n").value.trim();
    let prenom = document.getElementById("p").value.trim();
    let mail = document.getElementById("mail").value.trim();

    // Vérification des champs vides
    if (nom === "") {
        alert("Veuillez saisir votre nom.");
        return false;
    }

    if (prenom === "") {
        alert("Veuillez saisir votre prénom.");
        return false;
    }

    if (mail === "") {
        alert("Veuillez saisir votre adresse e-mail.");
        return false;
    }

    // Vérification de l'email : format nom.prenom@gmail.com
    let regMail = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!regMail.test(mail)) {
        alert("Veuillez saisir une adresse Gmail valide.\nExemple : nom.prenom@gmail.com");
        return false;
    }

    // Message succès
    alert("Inscription réussie !");
    return true;
}
function verif1() {
    // Récupération des champs
    let mot1 = document.getElementById("mot1").value.trim();
    let mail1 = document.getElementById("mail1").value.trim();

    // Vérification champs vides
    if (mot1 === "") {
        alert("Veuillez saisir votre mot de passe.");
        return false;
    }

    if (mail1 === "") {
        alert("Veuillez saisir votre adresse e-mail.");
        return false;
    }

    // Vérification email (exemple : nom@gmail.com)
    let regMail1 = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!regMail1.test(mail1)) {
        alert("Veuillez saisir une adresse Gmail valide.\nExemple : nom@gmail.com");
        return false;
    }

    // Validation réussie
    alert("Connexion réussie !");
    return true;
}