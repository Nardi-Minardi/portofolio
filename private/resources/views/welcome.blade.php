<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Minardi</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        {{-- fontawesome --}}
        <link href="{{asset('public/assets/fontawesome/css/all.css')}}" rel="stylesheet" >

        {{-- component react css --}}
        <link href="{{ asset('private/public/css/app.css') }}" rel="stylesheet">

        {{-- main app css --}}
        <link href="{{ asset('public/assets/css/style.css') }}" rel="stylesheet">

        {{-- scrollreveal --}}
        <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>

    </head>
    <body>
     
            <div id="mainApp"></div>
     

        {{-- fontawesome --}}
        <script href="{{asset('public/assets/fontawesome/js/fontawesome.all.js')}}"></script>

        {{-- component react js --}}
        <script src="{{ asset('private/public/js/app.js') }}"></script>

        {{-- main app js --}}
        <script src="{{ asset('public/assets/js/main.min.js') }}"></script>
    </body>
</html>
