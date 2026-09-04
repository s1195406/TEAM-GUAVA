<!DOCTYPE html> 
<html lang="en">
<head>
  <title>The Chez Bon Apartments Apartments Tenant Sign Up</title>
  <meta charset="utf-8">
<style>
form  { min-width: 80em; }
input { margin-bottom: 1em; }
label { width: 5em;
		padding-right: 1em;
        text-align: centered; }
#submit { margin-middle: 5em; }	
.error { font-family: Arial, sans-serif;
			  font-size: .90em;
              color: #FF0000;  
			  margin-centered: 1em; }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.js"></script>
<script>
$(document).ready(function(){
 $('form').validate();
 });
</script>
</head>
<body>
>form>
<h1>Chez Bon Tenant Sign Up</h1>
<form method="post" id="newsForm"
      action="https://chezbenapartments.net/scripts/demo.php">
<div>
<label for="userName">Name:</label>
<input type="text" name="userName" id="userName" class="required">
</div>
<div>
<label for="userEmail">E-mail:</label>
<input type="text" name="userEmail" id="userEmail" class="required email">
</div>
<div>
<label for="userPassword">Password:</label>
<input type="text" password="userPassword" id="userPassword" class="required password">
</div>
<input type="submit" value="Sign Up" id="submit">
</form>
</body>
</html>




