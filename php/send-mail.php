<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize inputs
    $name = htmlspecialchars(strip_tags($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(strip_tags($_POST["subject"]));
    $message = htmlspecialchars(strip_tags($_POST["message"]));

    // Validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }

    // 👉 RECEIVER MAIL ID (YOUR MAIL)
    $to = "tulasitiles@gmail.com";

    $email_subject = "Contact Form: " . $subject;

    $email_body = "
    Name: $name\n
    Email: $email\n
    Subject: $subject\n\n
    Message:\n$message
    ";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send mail
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Mail sending failed."]);
    }
}
