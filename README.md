# PRATIKUM_WEB2
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praktikum 1 - Pemrograman Web 2</title>
</head>
<body>
    <h1>Praktikum 1 - Pemasangan CodeIgniter 4</h1>
    <h2>1.1 Pemasangan CodeIgniter 4</h2>
    <p>Unduh dari <code>https://codeigniter.com/download</code>, ekstrak ke <code>htdocs/lab11_ci</code>, ganti nama menjadi <code>ci4</code>, lalu akses <code>http://localhost/lab11_ci/ci4/public/</code>.</p>
    <img src="/IMAGE/1.1.png" alt="Langkah 1.1">

    <h2>1.2 Mengakses CLI</h2>
    <p>Pindah ke direktori <code>xampp/htdocs/lab11_ci/p3web2/</code> dan jalankan CLI.</p>
    <img src="/IMAGE/1.2.png" alt="Langkah 1.2">

    <h2>1.3 Menjalankan CLI</h2>
    <pre><code>php spark</code></pre>
    <img src="/IMAGE/1.3.png" alt="Langkah 1.3">

    <h2>1.4 Ubah File .env</h2>
    <p>Ganti nama <code>env</code> menjadi <code>.env</code> lalu ubah <code>CI_ENVIRONMENT</code> menjadi <code>development</code>.</p>
    <img src="/IMAGE/1.4.png" alt="Langkah 1.4">

    <h2>1.5 Contoh Error</h2>
    <img src="/IMAGE/1.5.png" alt="Langkah 1.5">

    <h2>1.6 Percobaan Error</h2>
    <p>Hapus titik koma pada akhir baris di <code>app/Controller/Home.php</code>.</p>
    <img src="/IMAGE/1.6.png" alt="Langkah 1.6">

    <h2>1.7 Struktur Folder</h2>
    <img src="/IMAGE/1.7.png" alt="Struktur Folder">

    <h2>1.8 Penambahan Route</h2>
    <pre><code>$routes->get('/about', 'Page::about');
$routes->get('/contact', 'Page::contact');
$routes->get('/faqs', 'Page::faqs');</code></pre>
    <img src="/IMAGE/1.8.png" alt="Penambahan Route">

    <h2>1.9 Mengecek Route pada CMD</h2>
    <pre><code>php spark routes</code></pre>
    <img src="/IMAGE/1.9.png" alt="Mengecek Route">

    <h2>1.10 Mengakses Route About</h2>
    <p>Akses <code>http://localhost:8080/about</code>.</p>
    <img src="/IMAGE/1.10.png" alt="Mengakses About">

    <h2>1.11 Membuat Controller Page</h2>
    <pre><code>&lt;?php
namespace App\Controllers;
class Page extends BaseController {
    public function about() { echo "Ini halaman About"; }
    public function contact() { echo "Ini halaman Contact"; }
    public function faqs() { echo "Ini halaman FAQ"; }
}</code></pre>
    <img src="/IMAGE/1.11.png" alt="Controller Page">

    <h2>1.12 Refresh Browser</h2>
    <img src="/IMAGE/1.12.png" alt="Refresh Browser">

    <h2>1.13 Tambahkan Method Baru</h2>
    <pre><code>public function tos() { echo "Ini halaman Term of Services"; }</code></pre>
    <img src="/IMAGE/1.13.png" alt="Method Baru">

    <h2>1.14 Akses Method Baru</h2>
    <p>Akses <code>http://localhost:8080/tos</code>.</p>
    <img src="/IMAGE/1.14.png" alt="Akses TOS">

    <h2>1.15 Membuat View About</h2>
    <pre><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;title>&lt;?= $title; ?>&lt;/title>
&lt;/head>
&lt;body>
    &lt;h1>&lt;?= $title; ?>&lt;/h1>
    &lt;hr>
    &lt;p>&lt;?= $content; ?>&lt;/p>
&lt;/body>
&lt;/html></code></pre>
    <img src="/IMAGE/1.15.png" alt="View About">

    <h2>1.16 Update Method About</h2>
    <pre><code>public function about() {
    return view('about', [
        'title' => 'Halaman About',
        'content' => 'Ini adalah halaman About yang berisi penjelasan tentang halaman ini.'
    ]);
}</code></pre>
    <img src="/IMAGE/1.16.png" alt="Update Method About">

    <h2>1.17 Refresh Tampilan</h2>
    <img src="/IMAGE/1.17.png" alt="Refresh Tampilan">

    <h2>1.18 Membuat CSS</h2>
    <p>Buat file <code>style.css</code> di folder <code>public</code> untuk styling tampilan.</p>
    <img src="/IMAGE/1.18.png" alt="CSS">

    <h2>1.19 Membuat Folder Template</h2>
    <p>Buat <code>header.php</code> dan <code>footer.php</code> di folder <code>template</code>.</p>
    <img src="/IMAGE/1.19.png" alt="Template">

    <h2>1.20 Update View About dengan Template</h2>
    <p>Tambahkan include header dan footer pada file <code>about.php</code>.</p>
    <img src="/IMAGE/1.20.png" alt="Update View About">

    <h2>1.21 Refresh About</h2>
    <img src="/IMAGE/1.21.png" alt="Refresh About">
</body>
</html>
