head.load(
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
    , "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.1/angular.min.js"
    , "/Scripts/app/Welcome.js"
    , "/Scripts/app/Application.js"
    , "/Scripts/app/Bootloader.js"
    );
head.ready(document, function () {
    head.load(
        "https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.8.0/loading-bar.min.js"
        );
});