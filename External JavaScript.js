//External JavaScript
//Scripts can also be Placed in External files:

//forexample make a file called: myScript.js

function myFunction ()  {
  document . getElementById("demo") . innerHTML = "Paragraph changed.";
  }

  //External scripts are practical when the same code is used in many different web pages.

//JavaScript files have the file extension .js.

//To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

<!DOCTYPE html>
<html>
<body>

<script src="myScript.js"></script>

</body>
</html>

//You can place an external script reference in <head> or <body> as you like.

//The script will behave as if it was located exactly where the <script> tag is located.
