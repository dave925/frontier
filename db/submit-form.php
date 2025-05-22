<?php
// submit-form.php
require_once 'db/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    try {
        $stmt = $conn->prepare("INSERT INTO contacts (name, email, phone, message) VALUES (:name, :email, :phone, :message)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':message', $message);
        $stmt->execute();

        // Send email notification
        $to = "info@frontier Mining co.se";
        $subject = "New Contact Form Submission";
        $emailMessage = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
        mail($to, $subject, $emailMessage);

        // Redirect with success message
        header('Location: contact.html?status=success');
        exit();
    } catch(PDOException $e) {
        // Redirect with error message
        header('Location: contact.html?status=error');
        exit();
    }
}
?>
