<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Plugin</title>
    <link rel="stylesheet" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"/>
    <link rel="stylesheet" href="css/plugin.css"/>

    <script type="text/css">
        .modal-dialog {
            max-width: 90% !important;
        }
    </script>


</head>
<body>
<div class="container">
    <div class="row">
        <div class="col">
            <label for="shopperId">ShopperId</label>
            <input type="text" class="form-control" name="shopperId" value="130" placeholder="order"/>
        </div>
    </div>

    <a id="gift-card" class="btn btn-success" href="/plugin/gift-cards-list/130">Gift Card</a>
    <a id="logout" class="btn btn-danger" href="/" style="display: none">Logout</a>
</div>
<div id="root" class="container"></div>
<div id="root1" class="container"></div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<script>
    (function($){
        $('document').ready(function () {
           const token = window.localStorage.getItem('token');

           if (token) {
               $('#logout').css('display', 'inline');
               $('#logout').click(e  => {
                   e.preventDefault();
                   window.localStorage.removeItem('token');
                   window.location.reload();
               });
           }

           $('#gift-card').click(function (e) {
               e.preventDefault();
               var shopperId = $('[name="shopperId"]').val();
               $(this).attr('href', '/plugin/gift-cards-list/' + shopperId);
               window.location = '/plugin/gift-cards-list/' + shopperId;
           });
        });
    })(jQuery);
</script>
</body>
</html>