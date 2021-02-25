<?php

if(isset($_POST['yourName'])){

    //echo $_POST['yourName'];

    $yesName='';
    $noName='';

    if($_POST['yourName']!=''){
        $yesName='<div class="alert alert-info" role="alert">Good morning '.$_POST['yourName'].'. I hope you have a nice day.</div>';
    } else {
        $noName='<div class="alert alert-warning" role="alert">You didn´t give me your name and I don\'t talk to strangers.</div>';
    }

    $message['yesName']= $yesName;
    $message['noName']= $noName;

    echo json_encode($message);


}


?>