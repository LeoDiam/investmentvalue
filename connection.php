<?php

    $servername="localhost";
    $username="u503457546_admin123";
    $password="12345678lL";
    $dbname="u503457546_project123";
    
   

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if(!$conn){
        die("Connection failed: ".mysqli_connect_error());
    }

 ?>