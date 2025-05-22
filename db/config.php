<?php
// db/config.php
$host = 'localhost';
$dbname = 'nordic_minerals';
$username = 'nordic_web';
$password = 'your_secure_password'; // Replace with your actual password

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $conn->exec("SET NAMES utf8mb4");
} catch(PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    die("Database connection error. Please try again later.");
}
?>