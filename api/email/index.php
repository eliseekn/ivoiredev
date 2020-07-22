<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if (
    isset($_POST['name']) &&
    isset($_POST['email']) &&
    isset($_POST['subject']) &&
    isset($_POST['message'])
) {
    if (
        !empty($_POST['name']) &&
        !empty($_POST['email']) &&
        !empty($_POST['subject']) &&
        !empty($_POST['message'])
    ) {

        if (
            mail(
                'contact@ivoiredev.ci',
                $_POST['subject'],
                $_POST['message'],
                ['reply-to' => $_POST['email']]
            )
        ) {
            echo json_encode([
                'message' => 'Votre message a bien été envoyé. Vous serez recontacté dans les brefs délais.'
            ]);
        } else {
            echo json_encode([
                'message' => 'Une erreur est survenue lors de l\'envoie de votre message. <br> Si le problème persiste, veuillez contacter nous contacter au +225 59434291/43403398.'
            ]);
        }
    }
}
