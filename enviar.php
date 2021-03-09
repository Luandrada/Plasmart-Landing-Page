<?php
    //// para notificacion de errores
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    ////

    ///llamando a los campus
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    /// Datos para el correo
    // $destinatario ="mantovanimariano@transfil.com.ar";
    $destinatario ="luandrada12@live.com";

    $asunto ="Contacto desde pagina web";
    $from = "ventas@wantfrom.es";
    $headers = "From:" . $from;

    $carta = "De: $nombre \n";
    $carta .= "Email: $email \n";
    $carta .= "Mensaje: $mensaje \n";

    ///// Enviando mensaje
    mail($destinatario, $asunto, $carta, $headers);
    header('Location: msje-envio.html');
    die();
    // echo "The email message was sent.";
    

?>