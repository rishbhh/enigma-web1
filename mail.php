if ($_SERVER['REQUEST_METHOD'] == 'POST') {

//check if its an ajax request, exit if not
if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

    //exit script outputting json data
    $output = json_encode(
            array(
                'type' => 'error',
                'text' => 'Request must come from Ajax'
    ));

    die($output);
}

//check $_POST vars are set, exit if any missing
if (!isset($_POST["username"]) || !isset($_POST["useremail"]) || !isset($_POST["message"])) {
    $output = json_encode(array('type' => 'error', 'text' => 'Input fields are empty!'));
    die($output);
}

//Sanitize input data using PHP filter_var().
$username = filter_var(trim($_POST["username"]), FILTER_SANITIZE_STRING);
$useremail = filter_var(trim($_POST["useremail"]), FILTER_SANITIZE_EMAIL);
$message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

//additional php validation
if (strlen($username) < 4) { // If length is less than 4 it will throw an HTTP error.
    $output = json_encode(array('type' => 'error', 'text' => 'Name is too short!'));
    die($output);
}
if (!filter_var($useremail, FILTER_VALIDATE_EMAIL)) { //email validation
    $output = json_encode(array('type' => 'error', 'text' => 'Please enter a valid email!'));
    die($output);
}
if (strlen($message) < 5) { //check emtpy message
    $output = json_encode(array('type' => 'error', 'text' => 'Too short message!'));
    die($output);
}

$to = "rishabh@weareenigma.com"; //Replace with recipient email address
//proceed with PHP email.
$headers = 'From: ' . $useremail . '' . "\r\n" .
        'Reply-To: ' . $useremail . '' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

$sentMail = @mail($to, $subject, $message . '  -' . $username, $headers);
//$sentMail = true;
if (!$sentMail) {
    $output = json_encode(array('type' => 'error', 'text' => 'Could not send mail! Please contact administrator.'));
    die($output);
} else {
    $output = json_encode(array('type' => 'message', 'text' => 'Hi ' . $username . ' Thank you for your email'));
    die($output);
}