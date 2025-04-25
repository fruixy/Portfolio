<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sécurisation des entrées
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Vérification
    if (empty($name) || empty($email) || empty($message)) {
        echo "Veuillez remplir tous les champs.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse email invalide.";
        exit;
    }

    // Destinataire & contenu
    $to = "lemonnier@et.esiea.fr"; 
    $subject = "Nouveau message de $name via le portfolio";
    $body = "Nom : $name\nEmail : $email\n\nMessage :\n$message";
    $headers = "From: $email";

    // Envoi
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi. Veuillez réessayer.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
