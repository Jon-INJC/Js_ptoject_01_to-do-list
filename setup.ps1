$folders = @(
    "src",
    "src/js",
    "src/js/pages",
    "src/css",
    "src/components",
    "public"
)

$files = @(
    "index.html",
    "src/js/app.js",
    "src/js/router.js",
    "src/js/pages/home.js",
    "src/js/pages/about.js",
    "src/css/style.css",
    "src/components/navbar.js"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder
}

foreach ($file in $files) {
    New-Item -ItemType File -Force -Path $file
}