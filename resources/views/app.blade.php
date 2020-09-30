<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel Vue</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">


        <style>
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s
            }
            .fade-enter, .fade-leave-active {
                opacity: 0
            }
        </style>
    </head>
    <body>
        <div id="app">

                <header-component></header-component>
                <router-view></router-view>


        </div>
        <script type="text/javascript"  src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
