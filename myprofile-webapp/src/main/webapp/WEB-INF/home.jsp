<%--
  Created by IntelliJ IDEA.
  User: backupnikhilghadge
  Date: 7/9/15
  Time: 8:57 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Bootstrap 101 Template</title>

  <!-- Bootstrap -->
  <link href="css/bootstrap.min.css" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body>
<h1>Hello, world!</h1>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/lib/bootstrap.min.js"></script>
<!--script data-main="js/main" src="js/lib/require.js">
  require.config || (require.config = {});
  require.config['config'] = {
    el: '.backbone-container'
  };
</script!-->


<!-- ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="js/lib/require.js"></script>
<script type="text/javascript">
  // Load common code that includes config,
  // then load the app logic for this page.
  require(['js/main'], function (main) {
    // ./js/main.js sets the baseUrl to be ./js/
    // You can ask for 'home/home' here instead
    // of './js/app/main-about'
    require(['home/home'], function(App) {
      require.config || (require.config = {});
      require.config['config'] = {
        el: '.backbone-container'
      };
      console.log("I m here 1.1");
      App.initialize();
    });
  });
</script>
</body>
</html>