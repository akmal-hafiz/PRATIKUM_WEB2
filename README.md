MUHAMMAD AKMAL HAFIZ TUGAS PRATIKUM PEMROGRAMAN WEB2



# Praktikum 1

<br>

# 1.1 Instalasi Codelgniter 4

• Unduh Codeigniter dari website `https://codelgniter.com/download`<br>
• Extrak file zip Codeigniter ke direktori `htdocs/lab11_ci.`<br>
• Ubah nama direktory `framework-4.x.xx` menjadi `ci4.`<br>
• Buka browser dengan alamat `http://localhost/lab11_ci/ci4/public/`<br>

<img src="/IMAGE/1.1.png" img>

# 1.2 Menjalankan CLI (Command Line Interface)

arahkan lokasi direktori sesuai dengan direktori kerja project dibuat `(xampp/htdocs/lab11_ci/p3web2/)`<br>

<img src="/IMAGE/1.2.png" img>

# 1.3 Menjalankan perintah

Perintah yang dapat dijalankan untuk memanggil CLI Codelgniter:

```bash
php spark
```

<br>
<img src="/IMAGE/1.3.png" img>

# 1.4 Ubah nama file

Ubah nama file 'env' menjadi '.env' kemudian buka file tersebut dan ubah nilai variabel
'CI_ENVIRINMENT' menjadi 'development'.<br>
<img src="/IMAGE/1.4.png" img>

# 1.5 Contoh error

<br>
<img src="/IMAGE/1.5.png" img>
<br>

# 1.6 Uji coba error

Contoh error yang terjadi. Untuk mencoba error tersebut, ubah kode pada file
'app/Controller/Home.php' hilangkan titik koma '(;)' pada akhir kode.<br>
<br>
<img src="/IMAGE/1.6.png" img>

# 1.7 Struktur direktori

<br>
<img src="/IMAGE/1.7.png" img>

# 1.8 Letak route

Pada file `app/Config/Routes.php`. Tambahkan kode berikut:<br>

```bash
$routes->get('/about', 'Page::about');
$routes->get('/contact', 'Page::contact');
$routes->get('/faqs', 'Page::faqs');
```

<br>
<img src="/IMAGE/1.8.png" img>

# 1.9 Buka cmd

Untuk mengetahui route yang ditambahkan sudah benar, buka CLI dan ikuti langkah
berikut:<br>
masuk directory `C:\xampp\htdocs\lab11_ci\ci4>` terlebih dahulu lalu jalankan

```bash
php spark routes
```

<br>
<img src="/IMAGE/1.9.png" img>

# 1.10 Ubah Method About

Selanjutnya coba akses route yang telah dibuat dengan mengakses alamat url
`http://localhost:8080/about`
<br>
<img src="/IMAGE/1.10.png" img>

# 1.11 Membuat controller

Buat file baru dengan nama `Page.php` pada direktori `Controllers` dan isi kodenya:

```bash
<?php
namespace App\Controllers;
class Page extends BaseController
{
   public function about()
   {
      echo "Ini halaman About";
   }
   public function contact()
   {
      echo "Ini halaman Contact";
   }
   public function faqs()
   {
      echo "Ini halaman FAQ";
   }
}
```

<br>
<img src="/IMAGE/1.11.png" img>

# 1.12 Akses kembali

Refresh kembali browser nya maka tampilannya akan seperti berikut:<br>
<br>
<img src="/IMAGE/1.12.png" img>

# 1.13 Method baru

Pada `app/Controllers/Page.php` tambahkan kode berikut:

```bash
public function tos()
{
   echo "ini halaman Term of Services";
}
```

<br>
<img src="/IMAGE/1.13.png" img>

# 1.14 Akses method baru

Akses dengan alamat http://localhost:8080/lab11_ci/ci4/public/tos
<br>
<img src="/IMAGE/1.14.png" img>

# 1.15 Membuat view

Pada direktori `app/Views` buat file baru dengan nama `about.php` dan tambahkan kode berikut:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title><?= $title; ?></title>
</head>
<body>
   <h1><?= $title; ?></h1>
   <hr>
   <p><?= $content; ?></p>
</body>
</html>
```

<br>
<img src="/IMAGE/1.15.png" img>

# 1.16 Ubah Method About

Pada `app/Controllers/Page.php` ubah:

```bash
public function about()
{
   echo "Ini halaman About";
}
```

Menjadi:

```bash
public function about()
{
   return view('about', [
      'title' => 'Halaman About',
      'content' => 'Ini adalah halaman abaut yang menjelaskan tentang isi halaman ini.'
   ]);
}
```

<img src="/IMAGE/1.16.png" img>

# 1.17 Refresh Halaman

<br>
<img src="/IMAGE/1.17.png" img>

# 1.18 Membuat Layout Web dengan CSS

Buat file css pada direktori `public` dengan nama `style.css` (copy file dari praktikum
`lab4_layout`). Kita akan gunakan layout yang pernah dibuat pada praktikum 4.<br>
<br>
<img src="/IMAGE/1.18.png" img>

# 1.19 Buat Folder Template

Pada direktori `Views` buat folder `template`. Kemudian buat file `header.php`:

```bash
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?= $title; ?></title>
    <link rel="stylesheet" href="<?= base_url('/style.css'); ?>">
</head>

<body>
    <div id="container">
        <header>
            <h1>Layout Sederhana</h1>
        </header>
        <nav>
            <a href="<?= base_url('/'); ?>" class="active">Home</a>
            <a href="<?= base_url('/artikel'); ?>">Artikel</a>
            <a href="<?= base_url('/about'); ?>">About</a>
            <a href="<?= base_url('/contact'); ?>">Kontak</a>
        </nav>
        <section id="wrapper">
            <section id="main">
```

dan `footer.php`:

```bash
 </section>
            <aside id="sidebar">
                <div class="widget-box">
                    <h3 class="title">Widget Header</h3>
                    <ul>
                        <li><a href="#">Widget Link</a></li>
                        <li><a href="#">Widget Link</a></li>
                    </ul>
                </div>
                <div class="widget-box">
                    <h3 class="title">Widget Text</h3>
                    <p>
                        Vestibulum lorem elit, iaculis in nisl volutpat, malesuada tincidunt arcu. Proin in leo fringilla, vestibulum mi porta,faucibus felis. Integer pharetra est nunc, nec pretium nunc pretium ac.
                    </p>
                </div>
            </aside>
        </section>
        <footer>
            <p>&copy; 2021 - Universitas Pelita Bangsa</p>
        </footer>
    </div>
</body>

</html>
```

<br>
<img src="/IMAGE/1.19.png" img>

# 1.20 Ubah File About

Ubah file `app/Views/about.php` dari:

```bash
<h1><?= $title; ?></h1>
<hr>
<p><?= $content; ?></p>
```

Menjadi:

```bash
<?= $this->include('template/header'); ?>

<h1><?= $title; ?></h1>
<hr>
<p><?= $content; ?></p>

<?= $this->include('template/footer'); ?>
```

<br>
<img src="/IMAGE/1.20.png" img>

# 1.21 Refresh Halaman About

Harus refresh Tamoilan about `http://localhost:8080/lab11_ci/ci4/public/about`
<br>
<img src="/IMAGE/1.21.png" img>

**[⬆️](#daftar-isi-praktikum)**

<br>

# Praktikum 2

<br>

# 2.1 Buka Cmd

Buka cmd dan Pastikan MySQL Server sudah dapat dijalankan melalui
XAMPP. Lalu jalankan perintah berikut:
<br>
<img src="/IMAGE/2.1.png" img>

# 2.2 Membuat Database dan Tabel

Membuat Database:

```bash
CREATE DATABASE lab_ci4;
```

Membuat Tabel:

```bash
CREATE TABLE artikel (
id INT(11) auto_increment,
judul VARCHAR(200) NOT NULL,
isi TEXT,
gambar VARCHAR(200),
status TINYINT(1) DEFAULT 0,
slug VARCHAR(200),
PRIMARY KEY(id)
);
```

<br>
<img src="/IMAGE/2.2.png" img>

# 2.3 Konfigurasi koneksi database

Selanjutnya kita membuat konfigurasi untuk menghubungkan dengan database server
pada file .env
<img src="/IMAGE/2.3.png" img>

# 2.4 Membuat Model

Selanjutnya adalah membuat Model untuk memproses data Artikel. Buat file baru pada direktori `app/Models` dengan nama `ArtikelModel.php`<br>
<img src="/IMAGE/2.4.png" img>

# 2.5 Membuat Controller

Buat Controller baru dengan nama `Artikel.php` pada direktori `app/Controllers`.

```bash
<?php

namespace App\Controllers;

use App\Models\ArtikelModel;

class Artikel extends BaseController
{
    public function index()
    {
        $title = 'Daftar Artikel';
        $model = new ArtikelModel();
        $artikel = $model->findAll();
        return view('artikel/index', compact('artikel', 'title'));
    }
}
```

<img src="/IMAGE/2.5.png" img>

# 2.6 Membuat view

Buat direktori baru dengan nama `artikel` pada direktori `app/views`, kemudian buat file baru dengan nama `index.php`.

```bash
<?= $this->include('template/header'); ?>

<?php if($artikel): foreach($artikel as $row): ?>
<article class="entry">
    <h2><a href="<?= base_url('/artikel/' . $row['slug']);?>"class="subjudul"><?=
$row['judul']; ?></a>
</h2>
    <p><?= substr($row['isi'], 0, 200); ?></p>
</article>
<hr class="divider" />
<?php  endforeach; else: ?>
<article class="entry">
    <h2>Belum ada data.</h2>
</article>
<?php endif; ?>

<?= $this->include('template/footer'); ?>
```

<img src="/IMAGE/2.6.png" img>

# 2.7 Buka Browser

Buka browser kembali, dengan mengakses url `http://localhost:8080/artikel`.
<br>
<img src="/IMAGE/2.7.png" img>

# 2.8 Penambahan Data Dalam Database

Karna belum ada data yang diampilkan. Kemudian coba tambahkan beberapa data pada database agar dapat ditampilkan datanya.

```bash
INSERT INTO artikel (judul, isi, slug) VALUE
('Artikel pertama', 'Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak
yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk
menjadi sebuah buku contoh huruf.', 'artikel-pertama'),
('Artikel kedua', 'Tidak seperti anggapan banyak orang, Lorem Ipsum
bukanlah teks-teks yang diacak. Ia berakar dari sebuah naskah sastra latin
klasik dari era 45 sebelum masehi, hingga bisa dipastikan usianya telah
mencapai lebih dari 2000 tahun.', 'artikel-kedua');
```

<br>
<img src="/IMAGE/2.8.png" img>

# 2.9 Refresh Browser

Refresh kembali browser, sehingga akan ditampilkan hasilnya.
<br>
<img src="/IMAGE/2.9.png" img>

# 2.10 Membuat Tampilan Detail Artikel

Untuk saat ini judul berita di klik maka akan diarahkan ke halaman yang berbeda. Tambahkan fungsi baru pada `Controller Artikel` dengan nama `view()`.

```bash
 public function view($slug)
    {
        $model = new ArtikelModel();
        $artikel = $model->where([
            'slug' => $slug
        ])->first();

        // Menampilkan error apabila data tidak ada.
        if (!$artikel)
        {
            throw PageNotFoundException::forPageNotFound();
        }

        $title = $artikel['judul'];
        return view('artikel/detail', compact('artikel', 'title'));
    }
```

<br>
<img src="/IMAGE/2.10.png" img>

# 2.11 Membuat View Detail

Buatlah view baru untuk halaman detail dengan nama `app/views/artikel/detail.php`.

```bash
<?= $this->include('template/header'); ?>

<article class="entry">
    <h2><?= $artikel['judul']; ?></h2>
    <img src="<?= base_url('/gambar/' . $artikel['gambar']);?>" alt="<?=
$artikel['judul']; ?>">
    <p><?= $artikel['isi']; ?></p>

</article>

<?= $this->include('template/footer'); ?>
```

<br>
<img src="/IMAGE/2.11.png" img>

# 2.12 Membuat Routing untuk artikel detail

Lalu kita buat Kembali file `app/config/Routes.php`, kemudian tambahkan routing untuk artikel detail.

```bash
$routes->get('/artikel/(:any)', 'Artikel::view/$1');
```

<br>
<img src="/IMAGE/2.12.png" img>

# 2.13 Membuat Menu Admin

Menu admin adalah untuk proses CRUD data artikel. Lalu kita buat method baru pada `Controller Artikel` dengan nama `admin_index()`.

```bash
public function admin_index()
{
   $title = 'Daftar Artikel';
   $model = new ArtikelModel();
   $artikel = $model->findAll();
   return view('artikel/admin_index', compact('artikel', 'title'));
}
```

<br>
<img src="/IMAGE/2.13.png" img>

# 2.14 Buat View Admin

Selanjutnya kita  akan buat view untuk tampilan admin dengan nama `admin_index.php`.

```bash
<?= $this->include('template/admin_header'); ?>

<table class="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Status</th>
            <th>AKsi</th>
        </tr>
    </thead>
    <tbody>
    <?php if($artikel): foreach($artikel as $row): ?>
    <tr>
        <td><?= $row['id']; ?></td>
        <td>
            <b><?= $row['judul']; ?></b>
            <p><small><?= substr($row['isi'], 0, 50); ?></small></p>
        </td>
        <td><?= $row['status']; ?></td>
        <td>
            <a class="btn" href="<?= base_url('/admin/artikel/edit/' .
$row['id']);?>">Ubah</a>
            <a class="btn btn-danger" onclick="return confirm('Yakin
menghapus data?');" href="<?= base_url('/admin/artikel/delete/' .
$row['id']);?>">Hapus</a>
        </td>
    </tr>
    <?php  endforeach; else: ?>
    <tr>
        <td colspan="4">Belum ada data.</td>
    </tr>
    <?php endif; ?>
    </tbody>
    <tfoot>
        <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Status</th>
            <th>AKsi</th>
        </tr>
    </tfoot>
</table>

<?= $this->include('template/admin_footer'); ?>
```

<br>
<img src="/IMAGE/2.14.png" img>

# 2.15 Tambahkan Routing

Penambahan routing untuk menu admin seperti berikut:

```bash
$routes->group('admin', function($routes) {
   $routes->get('artikel', 'Artikel::admin_index');
   $routes->add('artikel/add', 'Artikel::add');
   $routes->add('artikel/edit/(:any)', 'Artikel::edit/$1');
   $routes->get('artikel/delete/(:any)', 'Artikel::delete/$1');
});
```

<br>
<img src="/IMAGE/2.15.png" img>

# 2.16 Akses Menu Admin

Dengan url `http://localhost:8080/admin/artikel`.
<br>
<img src="/IMAGE/2.16.png" img>

# 2.17 Menambah Data Artikel

Tambahkan fungsi/method baru pada `Controller Artikel` dengan nama `add()`.

```bash
public function add()
    {
        // validasi data.
        $validation =  \Config\Services::validation();
        $validation->setRules(['judul' => 'required']);
        $isDataValid = $validation->withRequest($this->request)->run();

        if ($isDataValid)
        {
            $artikel = new ArtikelModel();
            $artikel->insert([
                'judul' => $this->request->getPost('judul'),
                'isi' => $this->request->getPost('isi'),
                'slug' => url_title($this->request->getPost('judul')),
            ]);
            return redirect('admin/artikel');
        }
        $title = "Tambah Artikel";
        return view('artikel/form_add', compact('title'));
    }
```

<br>
<img src="/IMAGE/2.17.png" img>

# 2.18 Buat View Untuk Form Add

Buat dengan nama misalkan seperti ini `form_add.php`.

```bash
<?= $this->include('template/admin_header'); ?>
<h2><?= $title; ?></h2>
<form action="" method="post">
    <p>
        <input type="text" name="judul">
    </p>
    <p>
        <textarea name="isi" cols="50" rows="10"></textarea>
    </p>
    <p><input type="submit" value="Kirim" class="btn btn-large"></p>
</form>

<?= $this->include('template/admin_footer'); ?>
```

<br>
<img src="/IMAGE/2.18.png" img> 
Maka hasilnya:
<br>
<img src="/IMAGE/2.19.png" img>

# 2.19 Mengubah Data

Tambahkan fungsi/method baru pada `Controller Artikel` dengan nama `edit()`.

```bash
  public function edit($id)
    {
        $artikel = new ArtikelModel();

        // validasi data.
        $validation =  \Config\Services::validation();
        $validation->setRules(['judul' => 'required']);
        $isDataValid = $validation->withRequest($this->request)->run();

        if ($isDataValid)
        {
            $artikel->update($id, [
                'judul' => $this->request->getPost('judul'),
                'isi' => $this->request->getPost('isi'),
            ]);
            return redirect('admin/artikel');
        }

        // ambil data lama
        $data = $artikel->where('id', $id)->first();
        $title = "Edit Artikel";
        return view('artikel/form_edit', compact('title', 'data'));
    }
```

<br>
<img src="/IMAGE/2.20.png" img>

# 2.20 Buat View Untuk Form Edit

Buat dengan nama `form_edit.php`.

```bash
<?= $this->include('template/admin_header'); ?>

<h2><?= $title; ?></h2>
<form action="" method="post">
    <p>
        <input type="text" name="judul" value="<?= $data['judul'];?>" >
    </p>
    <p>
        <textarea name="isi" cols="50" rows="10"><?=
$data['isi'];?></textarea>
    </p>
    <p><input type="submit" value="Kirim" class="btn btn-large"></p>
</form>

<?= $this->include('template/admin_footer'); ?>
```

<br>
<img src="/IMAGE/2.21.png" img>
<img src="/IMAGE/2.22.png" img>

# 2.21 Menghapus Data

Tambahkan fungsi/method baru pada `Controller Artikel` dengan nama `delete()`.

```bash
public function delete($id)
{
   $artikel = new ArtikelModel();
   $artikel->delete($id);
   return redirect('admin/artikel');
}
```

<br>
<img src="/IMAGE/2.23.png" img>
<br>

# Praktikum 3

<br>

# 3.1 Membuat Layout Utama

Buat folder layout di dalam `app/Views/`
Buat file `main.php` di dalam folder `layout` dengan kode berikut:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $title ?? 'My Website' ?></title>
    <link rel="stylesheet" href="<?= base_url('/style.css');?>">
</head>
<body>
    <div id="container">
        <header>
            <h1>Layout Sederhana</h1>
        </header>
        <nav>
            <a href="<?= base_url('/');?>" class="active">Home</a>
            <a href="<?= base_url('/artikel');?>">Artikel</a>
            <a href="<?= base_url('/about');?>">About</a>
            <a href="<?= base_url('/contact');?>">Kontak</a>
        </nav>
        <section id="wrapper">
            <section id="main">
                  <?= $this->renderSection('content') ?>
            </section>
            <aside id="sidebar">
                <?= view_cell('App\\Cells\\ArtikelTerkini::render') ?>
                <div class="widget-box">
                    <h3 class="title">Widget Header</h3>
                    <ul>
                        <li><a href="#">Widget Link</a></li>
                        <li><a href="#">Widget Link</a></li>
                    </ul>
                </div>
                <div class="widget-box">
                    <h3 class="title">Widget Text</h3>
                    <p>Vestibulum lorem elit, iaculis in nisl volutpat,
                        malesuada tincidunt arcu. Proin in leo fringilla,
vestibulum mi porta,
                        faucibus felis. Integer pharetra est nunc, nec pretium
nunc pretium ac.</p>
                </div>
            </aside>
        </section>
        <footer>
            <p>&copy; 2021 - Universitas Pelita Bangsa</p>
        </footer>
    </div>
</body>
</html>
```

<img src="/IMAGE/3.1.png" img>
<br>

# 3.2 Modifikasi File View

Ubah `app/Views/home.php` agar sesuai dengan layout baru:

```bash
<?= $this->extend('layout/main') ?>

<?= $this->section('content') ?>

<h1><?= $title; ?></h1>
<hr>
<p><?= $content; ?></p>

<?= $this->endSection() ?>
```

<img src="/IMAGE/3.2.png" img> <br>
Sesuaikan juga untuk halaman lainnya yang ingin menggunakan format layout yang baru.
<br>

# 3.3 Membuat Class View Cell

Buat folder `Cells` di dalam `app/`
Buat `file ArtikelTerkini.php` di dalam `app/Cells/` dengan kode berikut:

```bash
<?php

namespace App\Cells;

use CodeIgniter\View\Cell;
use App\Models\ArtikelModel;

class ArtikelTerkini extends Cell
{
    public function render()
    {
        $model = new ArtikelModel();
        $artikel = $model->orderBy('created_at', 'DESC')->limit(5)->findAll();

        return view('components/artikel_terkini', ['artikel' => $artikel]);
    }
}
```

<img src="/IMAGE/3.3.png" img>
<br>

# 3.4 Membuat View untuk View Cell

Buat folder `components` di dalam `app/Views/`
Buat file `artikel_terkini.php` di dalam `app/Views/components/` dengan kode berikut:

```bash
<h3>Artikel Terkini</h3>
<ul>
    <?php foreach ($artikel as $row): ?>
    <li><a href="<?= base_url('/artikel/' . $row['slug']) ?>"><?=
$row['judul'] ?></a></li>
    <?php endforeach; ?>
</ul>
```

<img src="/IMAGE/3.4.png" img>
<br>

# Pertanyaan dan Tugas 3

1.  Sesuaikan data dengan praktikum sebelumnya, perlu melakukan perubahan `field` pada
    database dengan menambahkan tanggal agar dapat mengambil data artikel terbaru.<br>
    **Jawab:** <br>
    Untuk mengambil artikel terbaru,perlu menambahkan field `created_at` di tabel `artikel` pada cmd.

    ```bash
    ALTER TABLE artikel ADD created_at DATETIME DEFAULT CURRENT_TIMESTAMP;
    ```

    <img src="/IMAGE/3.5.1.png" img><br>

    field `created_at` berhasil di tambahkan pada tabel `artikel` yang akan terisi otomatis saat data ditambahkan. Field ini digunakan untuk menampilkan artikel terbaru menggunakan fitur `View Cell`.

    ```bash
    SELECT * FROM artikel;
    ```

    <img src="/IMAGE/3.5.2.png" img><br>

    Tampilan data yang sudah ada isi kolom created_at:

    ```bash
    SELECT id, judul, created_at FROM artikel ORDER BY created_at DESC LIMIT 5;
    ```

    <img src="/IMAGE/3.5.3.png" img><br>

2.  Selesaikan programnya sesuai Langkah-langkah yang ada. Anda boleh melakukan
    improvisasi.<br>
    **Jawab:** <br>
    DONE!<br>
3.  Apa manfaat utama dari penggunaan `View Layout` dalam pengembangan aplikasi?<br>
    **Jawab:** <br>
    Struktur layout (header, footer, sidebar) cukup ditulis sekali,<br>
    Halaman hanya fokus pada kontennya,<br>
    Memudahkan perawatan dan pengembangan desain antarmuka.<br>

4.  Jelaskan perbedaan antara `View Cell` dan `View` biasa.<br>
    **Jawab:** <br>
    **View Biasa** dipakai untuk halaman utama, seperti home.php, artikel.php, dll.<br>
    Kita perlu kirim data dari controller ke view.<br>
    **View Cell** itu seperti komponen kecil dan mandiri, mirip seperti "widget" atau "partial".<br>
    Cocok banget untuk hal-hal seperti:<br>
    Sidebar “Artikel Terkini”:<br>
    Menu navigasi kecil:<br>
    Komentar terbaru:<br>
    Komponen yang bisa dipakai ulang di banyak halaman<br>

5.  Ubah `View Cell` agar hanya menampilkan post dengan kategori tertentu.<br>
    **Jawab:** <br>

    **5.1. Tambahkan Kolom kategori di Tabel `artikel`**<br>
    Jika belum ada, tambahkan kolom `kategori` pada tabel `artikel`:

    ```bash
    ALTER TABLE artikel ADD kategori VARCHAR(100) DEFAULT 'umum';
    ```

    Lalu isi nilainya secara manual (bisa via phpMyAdmin):

    ```bash
    UPDATE artikel SET kategori = 'teknologi' WHERE id = 3;
    UPDATE artikel SET kategori = 'umum' WHERE id IN (1, 2);
    ```

    **5.2. Modifikasi `View Cell Class` `ArtikelTerkini.php`**<br>
    File: `app/Cells/ArtikelTerkini.php`:<br>
    Tambahkan:
    ```bash
    <?php
    namespace App\Cells;

          use App\Models\ArtikelModel;

          class ArtikelTerkini
          {
              public function show()
              {
                  $model = new ArtikelModel();

                  // Ambil artikel dari 2 kategori: teknologi & umum
                  $artikel = $model
                      ->whereIn('kategori', ['teknologi', 'umum'])
                      ->orderBy('created_at', 'DESC')
                      ->limit(5)
                      ->findAll();

                  return view('components/artikel_terkini', ['artikel' => $artikel]);
              }
          }
          ```

    **5.3 Ubah View `artikel_terkini.php`**<br>
    File: `app/Views/components/artikel_terkini.php`<br>
    Tambahkan:
    `bash
      <div class="widget-box">
          <h3 class="title">Artikel Terkini</h3>
          <ul>
              <?php foreach ($artikel as $row): ?>
                  <li>
                      <a href="<?= base_url('/artikel/' . $row['slug']) ?>">
                           <?= esc($row['judul']) ?> <small>(<?= esc($row['kategori']) ?>)</small>
                      </a>
                  </li>
              <?php endforeach; ?>
          </ul>
      </div>
      `
    **5.4. Ubah File Layout `main.php` untuk Panggil `View Cell` dengan Kategori**<br>
    File: `app/Views/layout/main.php`<br>
    Tambahkan ini di `<aside id="sidebar">`:
    `bash:
      <?= view_cell('App\\Cells\\ArtikelTerkini::show') ?>
      `
    Ini akan menampilkan dua daftar: artikel teknologi dan artikel umum.<br>

    **5.5. Pastikan Halaman `/artikel` Extend Layout**<br>
    File: `app/Views/artikel/index.php`<br>
    Tambahkan:
    ```bash
    <?= $this->extend('layout/main') ?>

          <?= $this->section('content') ?>
          <h1><?= $title; ?></h1>

          <?php foreach ($artikel as $row): ?>
              <div class="artikel-box">
                  <h2><?= esc($row['judul']) ?></h2>
                  <p><?= esc(substr($row['isi'], 0, 120)) ?>...</p>
                  <a href="<?= base_url('/artikel/' . $row['slug']) ?>">Baca selengkapnya</a>
              </div>
          <?php endforeach; ?>

          <?= $this->endSection() ?>
          ```

    **5.6. Penambahan dan Perubahan Pada File `css`**<br>
    File: `public/style.css`<br>
    Tambahkan:
    ```bash
    .widget-box {
    background-color: #e0f0ff;
    border: 1px solid #b0d4f1;
    padding: 10px;
    margin-bottom: 20px;
    }

          .widget-box .title {
              background-color: #2a6ebd;
              color: white;
              padding: 5px;
              font-weight: bold;
          }

          .widget-box ul {
              list-style-type: none;
              padding-left: 0;
          }

          .widget-box ul li {
              margin-bottom: 5px;
          }

          .artikel-box {
              background-color: #f9f9f9;
              border: 1px solid #ddd;
              padding: 15px;
              margin-bottom: 20px;
              border-radius: 5px;
          }

          ```
          Hasil Akhir :

    <img src="/IMAGE/3.5.0.png" img> <br>
    <br>

# Praktikum 4

<br>

# 4.1 Membuat Tabel: User Login

Untuk memulai membuat modul Login, yang perlu disiapkan adalah database server<br>
menggunakan MySQL. Pastikan MySQL Server sudah dapat dijalankan melalui XAMPP.

```bash
CREATE TABLE user (
  id INT(11) auto_increment,
  username VARCHAR(200) NOT NULL,
  useremail VARCHAR(200),
  userpassword VARCHAR(200),
  PRIMARY KEY(id)
);
```

# 4.2 Membuat Model User

Selanjutnya adalah membuat Model untuk memproses data Login. Buat file baru pada direktori
`app/Models` dengan nama `UserModel.php`<br>
Tambahkan:

```bash
<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = 'user';
    protected $primaryKey = 'id';

    protected $useAutoIncrement = true;
    protected $allowedFields = ['username', 'useremail', 'userpassword'];
}
```

# 4.3 Membuat Controller User

Buat `Controller` baru dengan nama `User.php` pada direktori `app/Controllers`. Kemudian
tambahkan method `index()` untuk menampilkan daftar user, dan method `login()` untuk proses
login.

```bash
<?php

namespace App\Controllers;

use App\Models\UserModel;

class User extends BaseController
{
    public function index()
    {
        $title = 'Daftar User';
        $model = new UserModel();
        $users = $model->findAll();
        return view('user/index', compact('users', 'title'));
    }

    public function login()
    {
        helper(['form']);
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');
        if (!$email)
        {
            return view('user/login');
        }

        $session = session();
        $model = new UserModel();
        $login = $model->where('useremail', $email)->first();
        if ($login)
        {
            $pass = $login['userpassword'];
            if (password_verify($password, $pass))
            {
                $login_data = [
                    'user_id' => $login['id'],
                    'user_name' => $login['username'],
                    'user_email' => $login['useremail'],
                    'logged_in' => TRUE,
                ];
                    $session->set($login_data);
                return redirect('admin/artikel');
            }
            else
            {
                $session->setFlashdata("flash_msg", "Password salah.");
                return redirect()->to('/user/login');
            }
        }
        else
        {
            $session->setFlashdata("flash_msg", "email tidak terdaftar.");
            return redirect()->to('/user/login');
        }
    }
}
```

# 4.4 Membuat View Login

Buat direktori baru dengan nama `user` pada direktori `app/views`, kemudian buat file baru
dengan nama `login.php`.<br>
Tambahkan:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="<?= base_url('/style.css');?>">
</head>
<body>
    <div id="login-wrapper">
            <h1>Sign In</h1>
            <?php if(session()->getFlashdata('flash_msg')):?>
                <div class="alert alert-danger"><?= session()
>getFlashdata('flash_msg') ?></div>
            <?php endif;?>
            <form action="" method="post">
                <div class="mb-3">
                    <label for="InputForEmail" class="form-label">Email
address</label>
                    <input type="email" name="email" class="form-control"
id="InputForEmail" value="<?= set_value('email') ?>">
                </div>
                <div class="mb-3">
                    <label for="InputForPassword" class="form
label">Password</label>
                    <input type="password" name="password" class="form
control" id="InputForPassword">
                </div>
                <button type="submit" class="btn btn-
primary">Login</button>
            </form>
    </div>
</body>
</html>
```

# 4.5 Membuat Database Seeder

Database seeder digunakan untuk membuat data dummy. Untuk keperluan ujicoba modul<br>
login, kita perlu memasukkan `data user` dan `password` kedaalam database. Untuk itu buat<br>
database `seeder` untuk tabel `user`. Buka CLI, kemudian tulis perintah berikut:

```bash
php spark make:seeder UserSeeder
```

Selanjutnya, buka file `UserSeeder.php` yang berada di lokasi direktori<br>
`/app/Database/Seeds/UserSeeder.php` kemudian isi dengan kode berikut:

```bash
<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $model = model('UserModel');
        $model->insert([
            'username' => 'admin',
            'useremail' => 'admin@email.com',
            'userpassword' => password_hash('admin123', PASSWORD_DEFAULT),
        ]);
    }
}
```

Selanjutnya buka kembali `CLI` dan ketik perintah berikut:

```bash
php spark db:seed UserSeeder
```

# 4.6 Uji Coba Login

Selanjutnya buka url `http://localhost:8080/user/login` seperti berikut:<br>
<img src="/IMAGE/4.6.png" img> <br>

# 4.7 Menambahkan Auth Filter

Selanjutnya membuat filer untuk halaman `admin`. Buat file baru dengan nama `Auth.php` pada<br>
direktori `app/Filters`.<br>
Tambahkan:

```bash
<?php namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class Auth implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // jika user belum login
        if(! session()->get('logged_in')){
            // maka redirct ke halaman login
            return redirect()->to('/user/login');
        }
    }

    public function after(RequestInterface $request, ResponseInterface
$response, $arguments = null)
    {
        // Do something here
    }
}
```

Selanjutnya buka file `app/Config/Filters.php` tambahkan kode berikut:

```bash
'auth' => Auth::class,
```

<img src="/IMAGE/4.7.png" img> <br>

Selanjutnya buka `file app/Config/Routes.php` dan sesuaikan kodenya.
<img src="/IMAGE/4.7'2.png" img> <br>

# 4.8 Percobaan Akses Menu Admin

Buka url dengan alamat `http://localhost:8080/admin/artikel` ketika alamat tersebut diakses
maka, akan dimuculkan halaman `login`.<br>
<img src="/IMAGE/4.8.png" img> <br>

Jika berhasil masuk maka tampilan nya akan seperti ini:<br>
<img src="/IMAGE/4.8'2.png" img> <br>

# 4.9 Fungsi Logout

Tambahkan method `logout` pada `Controller User` seperti berikut:

```bash
 public function logout()
    {
        session()->destroy();
        return redirect()->to('/user/login');
    }
```

<br>

# Praktikum 5

<br>

# 5.1 Membuat Pagination

Pagination merupakan proses yang digunakan untuk membatasi tampilan yang panjang<br>
dari data yang banyak pada sebuah website. Fungsi pagination adalah memecah tampilan<br>
menjadi beberapa halaman tergantung banyaknya data yang akan ditampilkan pada setiap halaman.
<br>

Pada Codeigniter 4, fungsi pagination sudah tersedia pada Library sehingga cukup mudah<br>
menggunakannya.
<br>

Untuk membuat pagination, buka Kembali `Controller Artikel`, kemudian modifikasi kode
pada method `admin_index`.
<br>
Dari:

```bash
public function admin_index()
    {
        $title = 'Daftar Artikel';
        $model = new ArtikelModel();
        $artikel = $model->findAll();
        return view('artikel/admin_index', compact('artikel', 'title'));
    }
```

<br>

Menjadi:

```bash
public function admin_index()
    {
        $title = 'Daftar Artikel';
        $model = new ArtikelModel();
        $data = [
            'title'   => $title,
            'artikel' => $model->paginate(10), #data dibatasi 10 record per halaman
            'pager'   => $model->pager,
            ];
        return view('artikel/admin_index', $data);
    }
```

<br>

Kemudian buka file `views/artikel/admin_index.php` dan tambahkan kode berikut<br>
dibawah deklarasi tabel data.

```bash
<?= $pager->links(); ?>
```

<br>
Selanjutnya buka kembali menu daftar artikel, tambahkan data lagi untuk melihat hasilnya.<br>
<img src="/IMAGE/5.1.png" img> <br>

# 5.2 Membuat Pencarian

Pencarian data digunakan untuk memfilter data.
<br>
Untuk membuat pencarian data, buka kembali `Controller Artikel`, pada method
`admin_index` ubah kodenya seperti berikut.

```bash
 public function admin_index()
    {
        $title = 'Daftar Artikel';
        $q = $this->request->getVar('q') ?? '';
        $model = new ArtikelModel();
        $data = [
            'title'   => $title,
            'q'       => $q,
            'artikel' => $model->like('judul', $q)->paginate(10),
            'pager'   => $model->pager,
        ];
        return view('artikel/admin_index', $data);
    }
```

Kemudian buka kembali file `views/artikel/admin_index.php` dan tambahkan form pencarian sebelum deklarasi tabel seperti berikut:

```bash
<form method="get" class="form-search">
    <input type="text" name="q" value="<?= $q; ?>" placeholder="Cari data">
    <input type="submit" value="Cari" class="btn btn-primary">
</form>
```

Dan pada link pager ubah seperti berikut.<br>
Ganti:

```bash
<?= $pager->links(); ?>
```

Menjadi:

```bash
<?= $pager->only(['q'])->links(); ?>
```

<img src="/IMAGE/5.2.png" img> 
<br>

# Praktikum 6

<br>

# 6.1 Upload Gambar pada Artikel

Menambahkan fungsi unggah gambar pada tambah artikel.<br>  
Buka kembali `Controller Artikel` pada project sebelumnya, sesuaikan kode pada `method`<br>
`add` seperti berikut:

```bash
  public function add()
    {
        // validasi data.
        $validation =  \Config\Services::validation();
        $validation->setRules(['judul' => 'required']);
        $isDataValid = $validation->withRequest($this->request)->run();

        if ($isDataValid)
        {
            $file = $this->request->getFile('gambar');
            $file->move(ROOTPATH . 'public/gambar');

            $artikel = new ArtikelModel();
            $artikel->insert([
                'judul'  => $this->request->getPost('judul'),
                'isi'    => $this->request->getPost('isi'),
                'slug'   => url_title($this->request->getPost('judul')),
                'gambar' => $file->getName(),
            ]);
            return redirect('admin/artikel');
        }
        $title = "Tambah Artikel";
        return view('artikel/form_add', compact('title'));
    }
```

<br>

Kemudian pada file `views/artikel/form_add.php` tambahkan field input file seperti berikut:

```bash
 <p>
        <input type="file" name="gambar">
</p>
```

<br>

Dan sesuaikan tag form dengan menambahkan `ecrypt type` seperti berikut.

```bash
<form action="" method="post" enctype="multipart/form-data">
```

Ujicoba file `upload` dengan mengakses menu `tambah artikel`.
<br>

<img src="/IMAGE/6.1.png" img> 
<br>

Isi Artikel :<br>

<img src="/IMAGE/6.1.2.png" img> 
<br>

# Praktikum 7

<br>

# 7.1 Membuat Tabel Kategori

Pastikan MySQL Server sudah berjalan, dan buka database `lab_ci4`<br>
Kita akan membuat tabel baru bernama `kategori` untuk mengkategorikan artikel. Struktur Tabel `kategori`<br>
Jalankan query berikut: <br>

```bash
CREATE TABLE kategori (
   id_kategori INT(11) AUTO_INCREMENT,
   nama_kategori VARCHAR(100) NOT NULL,
   slug_kategori VARCHAR(100),
   PRIMARY KEY (id_kategori)
);
```

# 7.2 Mengubah Tabel Artikel

Tambahkan foreign key `id_kategori` pada tabel `artikel` untuk membuat relasi dengan tabel `kategori`.<br>  
Query untuk menambahkan `foreign key`:<br>

```bash
ALTER TABLE artikel
ADD COLUMN id_kategori INT(11),
ADD CONSTRAINT fk_kategori_artikel
FOREIGN KEY (id_kategori) REFERENCES kategori(id_kategori);
```

# 7.3 Membuat Model Kategori

Buat file model baru di `app/Models` dengan nama `KategoriModel.php`:<br>

```bash
<?php

namespace App\Models;

use CodeIgniter\Model;

class KategoriModel extends Model
{
    protected $table = 'kategori';
    protected $primaryKey = 'id_kategori';
    protected $useAutoIncrement = true;
    protected $allowedFields = [nama_kategori', 'slug_kategori'];
}
```

# 7.4 Memodifikasi Model Artikel

Modifikasi `ArtikelModel.php` untuk mendefinisikan relasi dengan `KategoriModel`:<br>

```bash
<?php

namespace App\Models;

use CodeIgniter\Model;

class ArtikelModel extends Model
{
   protected $table = 'artikel';
   protected $primaryKey = 'id';
   protected $useAutoIncrement = true;
   protected $allowedFields = ['judul', 'isi', 'status', 'slug', 'gambar',
'id_kategori'];

   public function getArtikelDenganKategori()
   {
      return $this->db->table('artikel')
                  ->select('artikel.*, kategori.nama_kategori')
                  ->join('kategori', 'kategori.id_kategori = artikel.id_kategori')
                  ->get()
                  ->getResultArray();
   }
}
```

Menambahkan method `getArtikelDenganKategori()` untuk mengambil data artikel beserta
nama kategorinya menggunakan join.<br>

# 7.5 Memodifikasi Controller Artikel

Modifikasi `Artikel.php` untuk menggunakan model baru dan menampilkan data relasi:<br>

```bash
<?php

namespace App\Controllers;

use App\Models\ArtikelModel;
use App\Models\KategoriModel;

class Artikel extends BaseController
{
    public function index()
    {
        $title = 'Daftar Artikel';
        $model = new ArtikelModel();
        $artikel = $model->getArtikelDenganKategori(); // Use the new method

        return view('artikel/index', compact('artikel', 'title'));
    }

    public function admin_index()
    {
        $title = 'Daftar Artikel (Admin)';
        $model = new ArtikelModel();

        // Get search keyword
        $q = $this->request->getVar('q') ?? '';
        // Get category filter
        $kategori_id = $this->request->getVar('kategori_id') ?? '';

        $data = [
            'title' => $title,
            'q' => $q,
            'kategori_id' => $kategori_id,
        ];

        // Building the query
        $builder = $model->table('artikel')
 ->select('artikel.*, kategori.nama_kategori')
                        ->join('kategori', 'kategori.id_kategori =
artikel.id_kategori');

        // Apply search filter if keyword is provided
        if ($q != '') {
            $builder->like('artikel.judul', $q);
        }

        // Apply category filter if category_id is provided
        if ($kategori_id != '') {
            $builder->where('artikel.id_kategori', $kategori_id);
        }

        // Apply pagination
        $data['artikel'] = $builder->paginate(10);
        $data['pager'] = $model->pager;

        // Fetch all categories for the filter dropdown
        $kategoriModel = new KategoriModel();
        $data['kategori'] = $kategoriModel->findAll();

        return view('artikel/admin_index', $data);
    }

    // ... (methods add, edit, delete remain largely the same, but update to
handle id_kategori)

    public function add()
    {
        // Validation...
        if ($this->request->getMethod() == 'post' && $this->validate([
            'judul' => 'required',
            'id_kategori' => 'required|integer' // Ensure id_kategori is
required and an integer
        ])) {
            $model = new ArtikelModel();
            $model->insert([
                'judul' => $this->request->getPost('judul'),
                'isi' => $this->request->getPost('isi'),
                'slug' => url_title($this->request->getPost('judul')),
                'id_kategori' => $this->request->getPost('id_kategori')
            ]);
            return redirect()->to('/admin/artikel');
        } else {
            $kategoriModel = new KategoriModel();
            $data['kategori'] = $kategoriModel->findAll(); // Fetch categories
for the form
            $data['title'] = "Tambah Artikel";
  return view('artikel/form_add', $data);
        }
    }

    public function edit($id)
    {
        $model = new ArtikelModel();
        if ($this->request->getMethod() == 'post' && $this->validate([
            'judul' => 'required',
            'id_kategori' => 'required|integer'
        ])) {
            $model->update($id, [
                'judul' => $this->request->getPost('judul'),
                'isi' => $this->request->getPost('isi'),
                'id_kategori' => $this->request->getPost('id_kategori')
            ]);
            return redirect()->to('/admin/artikel');
        } else {
            $data['artikel'] = $model->find($id);
            $kategoriModel = new KategoriModel();
            $data['kategori'] = $kategoriModel->findAll(); // Fetch categories
for the form
            $data['title'] = "Edit Artikel";
            return view('artikel/form_edit', $data);
        }
    }

    public function delete($id)
    {
        $model = new ArtikelModel();
        $model->delete($id);
        return redirect()->to('/admin/artikel');
    }

    public function view($slug)
    {
        $model = new ArtikelModel();
        $data['artikel'] = $model->where('slug', $slug)->first();
        if (empty($data['artikel'])) {
            throw new \CodeIgniter\Exceptions\PageNotFoundException('Cannot
find the article.');
        }
        $data['title'] = $data['artikel']['judul'];
        return view('artikel/detail', $data);
    }
}
```

# 7.6 Memodifikasi View

Buka folder `view/artikel` sesuaikan masing-masing view.<br>
`index.php`:

```php
<?= $this->include('template/header'); ?>

<?php if ($artikel): foreach ($artikel as $row): ?>
    <article class="entry">
        <h2><a href="<?= base_url('/artikel/' . $row['slug']); ?>"><?=
$row['judul']; ?></a></h2>
        <p>Kategori: <?= $row['nama_kategori'] ?></p>
        <img src="<?= base_url('/gambar/' . $row['gambar']); ?>" alt="<?=
$row['judul']; ?>">
        <p><?= substr($row['isi'], 0, 200); ?></p>
    </article>
    <hr class="divider" />
<?php endforeach; else: ?>
    <article class="entry">
        <h2>Belum ada data.</h2>
    </article>
<?php endif; ?>

<?= $this->include('template/footer'); ?>
```

`admin_index.php`:

```php
<?= $this->include('template/admin_header'); ?>

<h2><?= $title; ?></h2>

<div class="row mb-3">
    <div class="col-md-6">
        <form method="get" class="form-inline">
            <input type="text" name="q" value="<?= $q; ?>" placeholder="Cari
judul artikel" class="form-control mr-2">
            <select name="kategori_id" class="form-control mr-2">
                <option value="">Semua Kategori</option>
                <?php foreach ($kategori as $k): ?>
                    <option value="<?= $k['id_kategori']; ?>" <?= ($kategori_id
== $k['id_kategori']) ? 'selected' : ''; ?>><?= $k['nama_kategori'];
?></option>
                <?php endforeach; ?>
            </select>
            <input type="submit" value="Cari" class="btn btn-primary">
        </form>
    </div>
</div>

<table class="table">
    <thead>
 <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Status</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        <?php if (count($artikel) > 0): ?>
            <?php foreach ($artikel as $row): ?>
                <tr>
                    <td><?= $row->id; ?></td>
                    <td>
                        <b><?= $row->judul; ?></b>
                        <p><small><?= substr($row->isi, 0, 50); ?></small></p>
                    </td>
                    <td><?= $row->nama_kategori; ?></td>
                    <td><?= $row->status; ?></td>
                    <td>
                        <a class="btn btn-sm btn-info" href="<?= base_url('/admin/artikel/edit/' . $row->id); ?>">Ubah</a>
                        <a class="btn btn-sm btn-danger" onclick="return confirm('Yakin menghapus data?');" href="<?= base_url('/admin/artikel/delete/' . $row->id);>
                        ">Hapus</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        <?php else: ?>
            <tr>
                <td colspan="5">Tidak ada data.</td>
            </tr>
        <?php endif; ?>
    </tbody>
</table>

<?= $pager->only(['q', 'kategori_id'])->links(); ?>

<?= $this->include('template/admin_footer'); ?>
```

`form_add.php`:

```php
<?= $this->include('template/admin_header'); ?>

<h2><?= $title; ?></h2>

<form action="" method="post">
    <p>
        <label for="judul">Judul</label>
<input type="text" name="judul" id="judul" required>
    </p>
    <p>
        <label for="isi">Isi</label>
        <textarea name="isi" id="isi" cols="50" rows="10"></textarea>
    </p>
    <p>
        <label for="id_kategori">Kategori</label>
        <select name="id_kategori" id="id_kategori" required>
            <?php foreach($kategori as $k): ?>
                <option value="<?= $k['id_kategori']; ?>"><?=
$k['nama_kategori']; ?></option>
            <?php endforeach; ?>
        </select>
    </p>
    <p><input type="submit" value="Kirim" class="btn btn-large"></p>
</form>

<?= $this->include('template/admin_footer'); ?>
```

`form_edit.php`:

```php
<?= $this->include('template/admin_header'); ?>

<h2><?= $title; ?></h2>

<form action="" method="post">
    <p>
        <label for="judul">Judul</label>
        <input type="text" name="judul" value="<?= $artikel['judul']; ?>"
id="judul" required>
    </p>
    <p>
        <label for="isi">Isi</label>
        <textarea name="isi" id="isi" cols="50" rows="10"><?= $artikel['isi'];
?></textarea>
    </p>
    <p>
        <label for="id_kategori">Kategori</label>
        <select name="id_kategori" id="id_kategori" required>
            <?php foreach($kategori as $k): ?>
                <option value="<?= $k['id_kategori']; ?>" <?=
($artikel['id_kategori'] == $k['id_kategori']) ? 'selected' : ''; ?>><?=
$k['nama_kategori']; ?></option>
            <?php endforeach; ?>
        </select>
    </p>
    <p><input type="submit" value="Kirim" class="btn btn-large"></p>
</form>
<?= $this->include('template/admin_footer'); ?>
```

# 7.7 Testing

Lakukan uji coba untuk memastikan semua fungsi berjalan dengan baik:<br>

**• Menampilkan daftar artikel dengan nama kategori.** <br>
Dibawah masing-masing judul `Artikel` nama `Kategori` berhasil ditampilkan sesuai kategori nya.<br>

<img src="/IMAGE/7.7.1.png" img> <br>

Hasil dari halaman Admin Portal Berita:<br>

<img src="/IMAGE/7.7.1'2.png" img> <br>

**• Menambah artikel baru dengan memilih kategori.** <br>

<img src="/IMAGE/7.7.2.png" img> <br>

Artikel baru berhasil ditambahkan:<br>

<img src="/IMAGE/7.7.2'2.png" img> <br>

**• Mengedit artikel dan mengubah kategorinya**. <br>
Pada artikel `Tes Tambah Artikel` kita ubah kategori nya dari `umum` manjadi `teknologi`:<br>

<img src="/IMAGE/7.7.3.png" img> <br>

Maka hasilnya:<br>

<img src="/IMAGE/7.7.3'2.png" img> <br>

**• Menghapus artikel.** <br>
Sebagai contoh kita akan hapus artikel `Tes Tambah Artikel`. Saat button `Hapus` diklik maka web akan mengkonfirmasi kembali:

<img src="/IMAGE/7.7.4.png" img> <br>

Maka artikel `Tes Tambah Artikel` berhasil dihapus:<br>

<img src="/IMAGE/7.7.4'2.png" img> <br>

# Pertanyaan dan Tugas 7

**1. Selesaikan semua langkah praktikum di atas.** <br>
**Jawab:** <br>
DONE!!

**2. Modifikasi tampilan detail artikel (artikel/detail.php) untuk menampilkan nama kategori artikel.** <br>
**Jawab:** <br>

**• Di `app/Controllers/Artikel.php`, method `view()` ubah menjadi:**

```php
public function view($slug)
 {
     $model = new \App\Models\ArtikelModel();

     // Gunakan getArtikelDenganKategori() untuk ambil info kategori juga
     $artikel = $model->select('artikel.*, kategori.nama_kategori')
                     ->join('kategori', 'kategori.id_kategori = artikel.id_kategori', 'left')
                     ->where('slug', $slug)
                     ->first();

     if (!$artikel) {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
     }

     $title = $artikel['judul'];
     return view('artikel/detail', compact('artikel', 'title'));
 }
```

**• Edit Tampilan `app/Views/artikel/detail.php`**

update file `detail.php` menjadi:<br>

```php
   <?= $this->include('template/header'); ?>

<article class="entry">
    <h2><?= esc($artikel['judul']); ?></h2>

    <!-- Menampilkan nama kategori -->
    <?php if (!empty($artikel['nama_kategori'])): ?>
        <p class="kategori-label">Kategori: <?= esc($artikel['nama_kategori']); ?></p>
    <?php endif; ?>

    <!-- Gambar Artikel -->
    <?php if (!empty($artikel['gambar'])): ?>
        <img src="<?= base_url('/gambar/' . $artikel['gambar']); ?>" alt="<?= esc($artikel['judul']); ?>">
    <?php endif; ?>

    <!-- Isi Artikel -->
    <p><?= esc($artikel['isi']); ?></p>
</article>

<?= $this->include('template/footer'); ?>
```

**• Tambahkan CSS**

Di `style.css`:

```css
.kategori-label {
  display: inline-block;
  background-color: #e8f0fe;
  color: #2a6ebd;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 10px 0 20px 0;
}
```

**Maka hasil halaman detail artikel (misalnya: `localhost:8080/artikel/artikel-pertama`):**

<img src="/IMAGE/tugas7.2.png" img> <br>

**3. Tambahkan fitur untuk menampilkan daftar kategori di halaman depan (opsional).** <br>
**Jawab:** <br>
Menambahkan fitur pengelompokkan artikel berdasarkan kategori agar pengguna lebih mudah menelusuri konten sesuai minatnya.<br>
Menampilkan daftar kategori (seperti "Umum", "Teknologi") di sidebar halaman utama sebagai navigasi cepat.<br>

**Langkah Implementasi**

**1. Buat Model Kategori**
File: `app/Models/KategoriModel.php`

```php
namespace App\Models;

use CodeIgniter\Model;

class KategoriModel extends Model
{
    protected $table = 'kategori';
    protected $primaryKey = 'id_kategori';
    protected $allowedFields = ['nama_kategori', 'slug_kategori'];
}
```

**2. Ambil Data di Controller**

Misalnya di Home atau lewat `View Cell`:

```php
$kategoriModel = new \App\Models\KategoriModel();
$data['kategori'] = $kategoriModel->findAll();
return view('home/index', $data);
```

**3. Tampilkan di Sidebar `View`**
Di: `view layout/sidebar.php`

```php

<div class="widget-box">
    <h3 class="title">Daftar Kategori</h3>
    <ul>
        <?php foreach ($kategori as $k): ?>
            <li><a href="<?= base_url('kategori/' . $k['slug_kategori']) ?>">
                <?= esc($k['nama_kategori']); ?>
            </a></li>
        <?php endforeach; ?>
    </ul>
</div>
```

Sidebar kategori dengan nama `Artikel Terkini` berhasil di Buat:

<img src="/IMAGE/tugas7.3.png" img> <br>

**4. Buat fungsi untuk menampilkan artikel berdasarkan kategori tertentu (opsional).** <br>
**Jawab:** <br>
Saat user klik salah satu kategori, halaman akan menampilkan artikel milik kategori tersebut saja.

**Langkah Implementasi**

**1. Tambahkan Route di `app/Config/Routes.php`**

```php
$routes->get('/kategori/(:segment)', 'Artikel::kategori/$1');
```

**2. Controller `Artikel::kategori()`**
File : `Artikel.php`:

```php
public function kategori($slugKategori)
{
    $title = 'Artikel ' . ucfirst($slugKategori);
    $model = new \App\Models\ArtikelModel();
    $artikel = $model->getArtikelDenganKategori(false, $slugKategori);

    $pager = \Config\Services::pager();

    return view('artikel/index', [
        'title' => $title,
        'artikel' => $artikel,
        'pager' => $pager
    ]);
}
```

**3. Update Method di `ArtikelModel`**

```php
public function getArtikelDenganKategori($paginate = false, $slugKategori = null)
{
    $this->select('artikel.*, kategori.nama_kategori, kategori.slug_kategori');
    $this->join('kategori', 'kategori.id_kategori = artikel.id_kategori', 'left');

    if ($slugKategori) {
        $this->where('kategori.slug_kategori', $slugKategori);
    }

    return $paginate ? $this->paginate(10) : $this->findAll();
}
```

Artikel akan difilter sesuai `kategori` saat diklik.

- URL akses: <br>
- `/kategori/umum`

  <img src="/IMAGE/tugas7.4.png" img> <br>

- `/kategori/teknologi`

  <img src="/IMAGE/tugas7.4'2.png" img> <br>

<br>

# Praktikum 8

<br>

# 8.1 Menambahkan Pustaka jQuery.

Kita akan menggunakan pustaka `jQuery` untuk mempermudah proses `AJAX`. Download
pustaka jQuery versi terbaru dari `https://jquery.com` dan ekstrak filenya.
Salin file `jquery-3.6.0.min.js` ke folder `public/assets/js`.

- Buka link ini di browser:
  ```bash
  https://code.jquery.com/jquery-3.6.0.js
  ```
- Tekan `Ctrl + A` (select all), lalu `Ctrl + C` (copy).<br>
- Buka text editor (`Notepad`, `VS Code`,`Sublime`, dll).<br>
- Taruh file itu ke:
  ```swift
  /public/assets/js/
  ```
- Buat file `jquery-3.6.0.min.js` didalam `/js` <br>
- Paste (`Ctrl + V`) kode tadi difile `jquery-3.6.0.min.js`.


    <img src="/IMAGE/8.1.png" img> <br>

# 8.2 Membuat AJAX Controller.

Pada modul sebelumnya sudah dibuat `ArtikelModel`, pada modul ini kita akan<br>
memanfaatkan model tersebut agar dapat diakses melalui `AJAX`. <br>
Buat Controller Baru: `AjaxController.php`. Buat didalam `app/Controllers/AjaxController.php`:<br>

```php
<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use App\Models\ArtikelModel;

class AjaxController extends Controller
{

    public function index()
   {
       $title = 'Daftar Artikel (AJAX)';
       return view('ajax/index', compact('title'));
   }


    public function getData()
    {
        $model = new ArtikelModel();
        $data = $model->select('artikel.*, kategori.nama_kategori')
                      ->join('kategori', 'kategori.id_kategori = artikel.id_kategori', 'left')
                      ->findAll();

        return $this->response->setJSON($data);
    }

    public function delete($id)
    {
        $model = new ArtikelModel();
        $model->delete($id);

        return $this->response->setJSON(['status' => 'OK']);
    }
}
```

# 8.3 Buat View: `app/Views/ajax/index.php`

Buat folder baru didalam `Views` dengan nama `ajax` dan tambahkan file `index.php` <br>
lalu isi:

```php
<?= $this->include('template/admin_header'); ?>

<h2 class="sub-judul">Daftar Artikel (AJAX)</h2>
<hr>

<table class="table" id="artikelTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<script src="<?= base_url('assets/js/jquery-3.6.0.min.js') ?>"></script>
<script>
    $(document).ready(function () {
        function loadData() {
            $('#artikelTable tbody').html('<tr><td colspan="4">Loading...</td></tr>');
            $.ajax({
                url: "<?= base_url('ajax/getData') ?>",
                method: "GET",
                dataType: "json",
                success: function (data) {
                    let html = '';
                    data.forEach(function (row) {
                        html += '<tr>';
                        html += '<td>' + row.id + '</td>';
                        html += '<td>' + row.judul + '</td>';
                        html += '<td>' + (row.nama_kategori || '-') + '</td>';
                        html += '<td>';
                        html += '<a href="<?= base_url('admin/artikel/edit/') ?>' + row.id + '" class="btn btn-primary">Edit</a> ';
                        html += '<a href="#" class="btn btn-danger btn-delete" data-id="' + row.id + '">Hapus</a>';
                        html += '</td></tr>';
                    });
                    $('#artikelTable tbody').html(html);
                }
            });
        }

        loadData();

        $(document).on('click', '.btn-delete', function (e) {
            e.preventDefault();
            const id = $(this).data('id');
            if (confirm('Yakin ingin menghapus artikel ini?')) {
                $.ajax({
                    url: "<?= base_url('ajax/delete/') ?>" + id,
                    method: "DELETE",
                    success: function () {
                        loadData();
                    },
                    error: function () {
                        alert('Gagal menghapus artikel.');
                    }
                });
            }
        });
    });
</script>

<?= $this->include('template/admin_footer'); ?>
```

# 8.4 Tambah Route di `app/Config/Routes.php`

Tambah:

```php
$routes->get('ajax', 'AjaxController::index');
$routes->get('ajax/getData', 'AjaxController::getData');
$routes->delete('ajax/delete/(:num)', 'AjaxController::delete/$1');
```

# Pertanyaan dan Tugas 8

Selesaikan programnya sesuai Langkah-langkah yang ada. Tambahkan fungsi untuk <br>
`tambah` dan `ubah data`. Anda boleh melakukan improvisasi.

**Ubah Artikel via AJAX:**

**1. Ubah `app/Views/ajax/index.php`** <br>
Tambahkan form tambah artikel di atas `<table>` sebelum `<table class="table" id="artikelTable">`.<br>
Update `index.php`:

```php
   // Form Tambah Artikel
   <div class="form-container">
       <h3 class="form-title-inside">Tambah Artikel</h3>
       <form id="form-tambah">
           <div class="form-group">
               <input type="text" name="judul" placeholder="Judul Artikel" required>
           </div>
           <div class="form-group">
               <textarea name="isi" placeholder="Isi Artikel" required></textarea>
           </div>
           <div class="form-group">
               <select name="id_kategori" required>
                   <option value="">-- Pilih Kategori --</option>
                   <option value="1">Umum</option>
                   <option value="2">Teknologi</option>
               </select>
           </div>
           <button type="submit" class="btn-primary">Tambah</button>
       </form>
   </div>

   // Tabel Artikel
   <table class="table" id="artikelTable">
       <thead>
           <tr>
               <th>ID</th>
               <th>Judul</th>
               <th>Kategori</th>
               <th>Aksi</th>
           </tr>
       </thead>
       <tbody></tbody>
   </table>
```

**2. Tambah Script AJAX POST di bawah `loadData()`** <br>
Masih di file yang sama `ajax/index.php`, tambahkan ini setelah `loadData();`:

```php
         public function tambah()
         {
             $artikel = new \App\Models\ArtikelModel();
             $slug = url_title($this->request->getPost('judul'), '-', true);

             $artikel->insert([
                 'judul'       => $this->request->getPost('judul'),
                 'isi'         => $this->request->getPost('isi'),
                 'slug'        => $slug,
                 'id_kategori' => $this->request->getPost('id_kategori')
             ]);

             return $this->response->setJSON(['status' => 'OK']);
         }
```

**3. Tambah Fungsi `tambah()` di `AjaxController.php`**<br>
Buka `app/Controllers/AjaxController.php`, tambahkan fungsi ini:

```php
   public function tambah()
   {
       $artikel = new \App\Models\ArtikelModel();
       $slug = url_title($this->request->getPost('judul'), '-', true);

       $artikel->insert([
           'judul'       => $this->request->getPost('judul'),
           'isi'         => $this->request->getPost('isi'),
           'slug'        => $slug,
           'id_kategori' => $this->request->getPost('id_kategori')
       ]);

       return $this->response->setJSON(['status' => 'OK']);
   }
```

**4. Tambah Route di `app/Config/Routes.php`**<br>
Tambahkan baris ini:

```php
   $routes->post('ajax/tambah', 'AjaxController::tambah');
```

**Lalu Buka:** <br>

      `http://localhost:8080/index.php/ajax`<br>
      Isi form `tambah artikel`: <br>
      <img src="/IMAGE/tugas8.1.png" img>  <br>

      Klik Tambah<br>
      Artikel baru langsung muncul di tabel bawahnya tanpa reload:<br>
      <img src="/IMAGE/tugas8.2.png" img>

**Edit Artikel via AJAX:** <br>

**1. Tambah Input Hidden & Tombol Simpan ke Form** <br>
Masih di `app/Views/ajax/index.php`, ubah form `#form-tambah` jadi siap juga buat edit artikel.<br>
Ganti Form-nya jadi:

```html
<form id="form-artikel">
  <input type="hidden" name="id" id="artikel_id" />

  <div class="form-group">
    <input
      type="text"
      name="judul"
      id="judul"
      placeholder="Judul Artikel"
      required
    />
  </div>

  <div class="form-group">
    <textarea name="isi" id="isi" placeholder="Isi Artikel" required></textarea>
  </div>

  <div class="form-group">
    <select name="id_kategori" id="id_kategori" required>
      <option value="">-- Pilih Kategori --</option>
      <option value="1">Umum</option>
      <option value="2">Teknologi</option>
    </select>
  </div>

  <button type="submit" class="btn-primary" id="submitBtn">Tambah</button>
</form>
```

**2. Update JavaScript-nya di bawah `<script>`** <br>
Masih di file `ajax/index.php`, update scriptnya menjadi:

```js
// Menambahkan artikel atau update jika id tersedia
$("#form-artikel").on("submit", function (e) {
  e.preventDefault();
  const id = $("#artikel_id").val();
  const url = id
    ? "<?= base_url('ajax/update') ?>"
    : "<?= base_url('ajax/tambah') ?>";
  $.ajax({
    url: url,
    method: "POST",
    data: $(this).serialize(),
    success: function (res) {
      if (res.status === "OK") {
        $("#form-artikel")[0].reset();
        $("#artikel_id").val("");
        $("#submitBtn").text("Tambah");
        loadData();
      } else {
        alert("Gagal menyimpan data");
      }
    },
  });
});

// Handle tombol Edit
$(document).on("click", ".btn-edit", function () {
  const id = $(this).data("id");
  $.get("<?= base_url('ajax/getArtikel/') ?>" + id, function (data) {
    $("#artikel_id").val(data.id);
    $("#judul").val(data.judul);
    $("#isi").val(data.isi);
    $("#id_kategori").val(data.id_kategori);
    $("#submitBtn").text("Update");
  });
});
```

**3. Update Tabel `HTML` agar tombol `Edit` bisa jalan** <br>
Masih di fungsi `loadData()` `ajax/index.php` : <br>
Ganti tombol ini:

```php
   html += '<a href="<?= base_url('admin/artikel/edit/') ?>' + row.id + '" class="btn btn-primary">Edit</a>';
```

Jadi:

```php
   html += '<a href="#" class="btn btn-primary btn-edit" data-id="' + row.id + '">Edit</a>';
```

Full kode file `ajax/index.php`:

```php
<?= $this->include('template/admin_header'); ?>

<h2 class="sub-judul">Daftar Artikel (AJAX)</h2>
<hr>

<!--  Form Tambah/Edit Artikel -->
<div class="form-container">
    <h3 class="form-title-inside" id="formTitle">Tambah Artikel</h3>

    <form id="form-artikel">
        <input type="hidden" name="id" id="artikel_id">

        <div class="form-group">
            <label for="judul">Judul Artikel</label>
            <input type="text" name="judul" id="judul" required>
        </div>

        <div class="form-group">
            <label for="isi">Isi Artikel</label>
            <textarea name="isi" id="isi" rows="5" required></textarea>
        </div>

        <div class="form-group">
            <label for="id_kategori">Kategori</label>
            <select name="id_kategori" id="id_kategori" required>
                <option value="">-- Pilih Kategori --</option>
                <option value="1">Umum</option>
                <option value="2">Teknologi</option>
            </select>
        </div>

        <button type="submit" class="btn-primary" id="submitBtn">Tambah</button>
    </form>
</div>

<br>

<!--  Tabel Artikel -->
<table class="table" id="artikelTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<!--  jQuery -->
<script src="<?= base_url('assets/js/jquery-3.6.0.min.js') ?>"></script>
<script>
    $(document).ready(function () {
        function loadData() {
            $('#artikelTable tbody').html('<tr><td colspan="4">Loading...</td></tr>');
            $.ajax({
                url: "<?= base_url('ajax/getData') ?>",
                method: "GET",
                dataType: "json",
                success: function (data) {
                    let html = '';
                    data.forEach(function (row) {
                        html += '<tr>';
                        html += '<td>' + row.id + '</td>';
                        html += '<td>' + row.judul + '</td>';
                        html += '<td>' + (row.nama_kategori ?? '-') + '</td>';
                        html += '<td>';
                        html += '<a href="#" class="btn btn-primary btn-edit" data-id="' + row.id + '">Edit</a> ';
                        html += '<a href="#" class="btn btn-danger btn-delete" data-id="' + row.id + '">Hapus</a>';
                        html += '</td></tr>';
                    });
                    $('#artikelTable tbody').html(html);
                }
            });
        }

        loadData();

        //  Tambah/Update
        $('#form-artikel').on('submit', function (e) {
            e.preventDefault();
            const id = $('#artikel_id').val();
            const url = id ? "<?= base_url('ajax/update') ?>" : "<?= base_url('ajax/tambah') ?>";
            $.ajax({
                url: url,
                method: "POST",
                data: $(this).serialize(),
                dataType: 'json',
                success: function (res) {
                    if (res.status === 'OK') {
                        $('#form-artikel')[0].reset();
                        $('#artikel_id').val('');
                        $('#submitBtn').text('Tambah');
                        $('#formTitle').text('Tambah Artikel');
                        loadData();
                    } else {
                        alert('Gagal menyimpan data');
                    }
                }
            });
        });

        //  Edit
        $(document).on('click', '.btn-edit', function () {
            const id = $(this).data('id');
            $.get("<?= base_url('ajax/getArtikel/') ?>" + id, function (data) {
                $('#artikel_id').val(data.id);
                $('#judul').val(data.judul);
                $('#isi').val(data.isi);
                $('#id_kategori').val(data.id_kategori);
                $('#submitBtn').text('Update');
                $('#formTitle').text('Edit Artikel');
            });
        });

        //  Hapus
        $(document).on('click', '.btn-delete', function (e) {
            e.preventDefault();
            const id = $(this).data('id');
            if (confirm('Yakin ingin menghapus artikel ini?')) {
                $.ajax({
                    url: "<?= base_url('ajax/delete/') ?>" + id,
                    method: "DELETE",
                    success: function () {
                        loadData();
                    }
                });
            }
        });
    });
</script>

<?= $this->include('template/admin_footer'); ?>
```

**4. Tambah Route Baru di `app/Config/Routes.php`** <br>
Tambahkan:

```php
   $routes->get('ajax/getArtikel/(:num)', 'AjaxController::getArtikel/$1');
   $routes->post('ajax/update', 'AjaxController::update');
```

**5. Tambahkan 2 Method Baru di AjaxController.php**
Tambahkan ini:

```php
   public function getArtikel($id)
   {
       $model = new \App\Models\ArtikelModel();
       $data = $model->find($id);
       return $this->response->setJSON($data);
   }

   public function update()
   {
       $model = new \App\Models\ArtikelModel();
       $id = $this->request->getPost('id');

       $model->update($id, [
           'judul'       => $this->request->getPost('judul'),
           'isi'         => $this->request->getPost('isi'),
           'id_kategori' => $this->request->getPost('id_kategori')
       ]);

       return $this->response->setJSON(['status' => 'OK']);
   }
```

**Tes Fungsi:** <br>

- Akses:
  ```bash
  http://localhost:8080/index.php/ajax
  ```
  Hasilnya :
  <img src="/IMAGE/tugas8.3.png" img> <br>
- Klik tombol `Edit` <br>
- Data artikel langsung muncul di form <br>
  Sebagai contoh saya akan edit artikel dengan judul `Ajax Test Tambah Artikel` beserta kategori nya:

  <img src="/IMAGE/tugas8.4.png" img> <br>

- Ubah lalu klik `Update` <br>
- `Artikel` berhasil terupdate langsung di `tabel`

   <img src="/IMAGE/tugas8.5.png" img>
   <br>

# Praktikum 9

<br>

# 9.1 Modifikasi Controller Artikel

Ubah method `admin_index()` di `Artikel.php` untuk mengembalikan data dalam format<br>
JSON jika request adalah `AJAX`. (Sama seperti modul sebelumnya)<br>
Pada file: `app/Controllers/Artikel.php`<br>
Ganti method `admin_index()`:

```php
public function admin_index()
{
    $title = 'Daftar Artikel (Admin)';
    $model = new \App\Models\ArtikelModel();

    $q = $this->request->getVar('q') ?? '';
    $kategori_id = $this->request->getVar('kategori_id') ?? '';
    $page = $this->request->getVar('page') ?? 1;

    $builder = $model->table('artikel')
        ->select('artikel.*, kategori.nama_kategori')
        ->join('kategori', 'kategori.id_kategori = artikel.id_kategori');

    if ($q != '') {
        $builder->like('artikel.judul', $q);
    }

    if ($kategori_id != '') {
        $builder->where('artikel.id_kategori', $kategori_id);
    }

    $artikel = $builder->paginate(10, 'default', $page);
    $pager = $model->pager;

    $data = [
        'title' => $title,
        'q' => $q,
        'kategori_id' => $kategori_id,
        'artikel' => $artikel,
        'pager' => $pager
    ];

    if ($this->request->isAJAX()) {
        return $this->response->setJSON($data);
    } else {
        $kategoriModel = new \App\Models\KategoriModel();
        $data['kategori'] = $kategoriModel->findAll();
        return view('artikel/admin_index', $data);
    }
}
```

# 9.2 Modifikasi View `admin_index.php`

- Ubah view `admin_index.php` untuk menggunakan jQuery.<br>
- Hapus kode yang menampilkan tabel artikel dan pagination secara langsung.<br>
- Tambahkan elemen untuk menampilkan data artikel dan pagination dari AJAX.<br>
- Tambahkan kode jQuery untuk melakukan request AJAX.<br>

Pada file: `app/Views/artikel/admin_index.php`<br>
Ganti seluruh isinya dengan:<br>

```php
<?= $this->include('template/admin_header'); ?>

<h2><?= $title; ?></h2>

<!-- Toolbar Pencarian dan Tambah -->
<div class="container">
  <div class="toolbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
    <form id="search-form" style="display: flex; gap: 10px;">
      <input type="text" name="q" id="search-box" class="form-control" placeholder="Cari judul artikel" />

      <select name="kategori_id" id="category-filter" class="form-control">
        <option value="">Semua Kategori</option>
        <?php foreach ($kategori as $k): ?>
          <option value="<?= $k['id_kategori']; ?>" <?= ($kategori_id == $k['id_kategori']) ? 'selected' : ''; ?>>
            <?= $k['nama_kategori']; ?>
          </option>
        <?php endforeach; ?>
      </select>

      <button type="submit" class="btn btn-primary">Cari</button>
    </form>

    <a href="<?= base_url('admin/artikel/add') ?>" class="btn btn-primary">+ Artikel (AJAX)</a>
  </div>
</div>

<!-- Loader -->
<div id="loading" style="display: none; text-align: center; margin-top: 20px;">
  <div class="spinner"></div>
  <p>Mencari artikel...</p>
</div>

<!-- Tabel Artikel akan dirender di sini -->
<div id="article-container"></div>

<!-- Pagination akan dirender di sini -->
<div id="pagination-container" class="pagination-container" style="margin-top: 20px;"></div>

<!-- jQuery -->
<script src="<?= base_url('assets/js/jquery-3.6.0.min.js'); ?>"></script>
<script>
  $(document).ready(function () {
    const articleContainer = $('#article-container');
    const paginationContainer = $('#pagination-container');
    const searchForm = $('#search-form');
    const searchBox = $('#search-box');
    const categoryFilter = $('#category-filter');
    const loading = $('#loading');

    const fetchData = (url, showLoading = false) => {
      if (showLoading) loading.show();

      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        success: function (data) {
          renderArticles(data.artikel);
          renderPagination(data.pager, data.q, data.kategori_id);
          if (showLoading) setTimeout(() => loading.hide(), 800);
        },
        error: function () {
          articleContainer.html('<p style="color:red;">Gagal mengambil data.</p>');
          loading.hide();
        }
      });
    };

    const renderArticles = (articles) => {
      let html = '<table class="table">';
      html += '<thead><tr><th>ID</th><th>Judul</th><th>Kategori</th><th>Status</th><th>Aksi</th></tr></thead><tbody>';
      if (articles.length > 0) {
        articles.forEach(article => {
          html += `
            <tr>
              <td>${article.id}</td>
              <td>
                <strong>${article.judul}</strong><br>
                <small>${article.isi.substring(0, 50)}...</small>
              </td>
              <td>${article.nama_kategori}</td>
              <td>${article.status}</td>
              <td>
                <a class="btn btn-sm btn-info" href="/admin/artikel/edit/${article.id}">Ubah</a>
                <a class="btn btn-sm btn-danger" onclick="return confirm('Yakin menghapus data?');" href="/admin/artikel/delete/${article.id}">Hapus</a>
              </td>
            </tr>
          `;
        });
      } else {
        html += '<tr><td colspan="5">Tidak ada data.</td></tr>';
      }
      html += '</tbody></table>';
      articleContainer.html(html);
    };

    const renderPagination = (pager, q, kategori_id) => {
      if (!pager || !pager.links) return;
      let html = '<nav><ul class="pagination">';
      pager.links.forEach(link => {
        const url = link.url ? `${link.url}&q=${q}&kategori_id=${kategori_id}` : '#';
        html += `<li class="page-item ${link.active ? 'active' : ''}">
                    <a class="page-link pagination-link" href="${url}">${link.title}</a>
                 </li>`;
      });
      html += '</ul></nav>';
      paginationContainer.html(html);
    };

    // Saat form cari dikirim
    searchForm.on('submit', function (e) {
      e.preventDefault();
      const q = searchBox.val();
      const kategori_id = categoryFilter.val();
      fetchData(`/admin/artikel?q=${q}&kategori_id=${kategori_id}`, true);
    });

    // Saat ganti kategori
    categoryFilter.on('change', function () {
      searchForm.trigger('submit');
    });

    // Handler pagination diklik
    $(document).on('click', '.pagination-link', function (e) {
      e.preventDefault();
      const href = $(this).attr('href');
      if (href && href !== '#') {
        fetchData(href, true);
      }
    });

    // Load awal
    fetchData('/admin/artikel', false);
  });
</script>

<?= $this->include('template/admin_footer'); ?>
```

Tampilan dari halaman `http://localhost:8080/index.php/admin/artikel`

<img src="/IMAGE/9.1.png" img>

# Pertanyaan dan Tugas 9

**1. Selesaikan semua langkah praktikum di atas.** <br>
**Jawab:**
DONE!!

**2. Modifikasi tampilan data artikel dan pagination sesuai kebutuhan desain.** <br>
**Jawab:**

**Mengubah tampilan daftar artikel di halaman admin `admin_index.php` agar:** <br>

- Setiap baris artikel tampil lebih rapi (misal: bold judul, isi ringkasan ditampilkan kecil).<br>
- Menggunakan class `Bootstrap` / `CSS` untuk `table` dan tombol.<br>

**Pada `admin_index.php` ubah baris:**

```php
<td>
   <b>${article.judul}</b>
   <p><small>${article.isi.substring(0, 50)}...</small></p>
</td>
```

Menjadi:

```php
<td>
  <strong>${article.judul}</strong><br>
  <small>${article.isi.substring(0, 50)}...</small>
</td>
```

**Dan pada bagian `pagination` dari:**

```php
<div id="pagination-container" style="margin-top: 20px;"></div>
```

Menjadi:

```php
<div class="pagination-container" style="margin-top: 20px;">
  <?= $pager->links() ?>
</div>
```

<img src="/IMAGE/tugas9.2.png" img>
  
**3. Tambahkan indikator loading saat data sedang diambil dari server.** <br>
**Jawab:**

**Update full `admin_index.php` menjadi:**

```php
<?= $this->include('template/admin_header'); ?>

<h2><?= $title; ?></h2>

<!-- Form Search + Filter Kategori -->
<div class="form-container">
    <form id="search-form" class="form-inline">
        <input type="text" name="q" id="search-box" value="<?= esc($q); ?>" placeholder="Cari judul artikel" class="form-control" style="margin-right: 10px; padding: 8px;">

        <select name="kategori_id" id="category-filter" class="form-control" style="margin-right: 10px;">
            <option value="">Semua Kategori</option>
            <?php foreach ($kategori as $k): ?>
                <option value="<?= $k['id_kategori']; ?>" <?= ($kategori_id == $k['id_kategori']) ? 'selected' : ''; ?>>
                    <?= $k['nama_kategori']; ?>
                </option>
            <?php endforeach; ?>
        </select>

        <input type="submit" value="Cari" class="btn btn-primary">
    </form>
</div>

<!-- Loader -->
<div id="loading" style="display: none; text-align: center; margin-top: 20px;">
    <div class="spinner"></div>
    <p>Mencari artikel..</p>
</div>

<!-- Artikel Table -->
<div id="article-container" style="margin-top: 20px;"></div>

<!-- Pagination -->
<div class="pagination-container" style="margin-top: 20px;"></div>

<hr>

<!-- Form Tambah/Update Artikel -->
<div class="form-container" style="margin-top: 40px;">
    <h3 class="form-title-inside" id="formTitle">Tambah Artikel</h3>
    <form id="form-artikel">

        <!-- Hidden ID untuk edit -->
        <input type="hidden" name="artikel_id" id="artikel_id">

        <div class="form-group">
            <input type="text" name="judul" id="judul" placeholder="Judul Artikel" required>
        </div>

        <div class="form-group">
            <textarea name="isi" id="isi" placeholder="Isi Artikel" required></textarea>
        </div>

        <div class="form-group">
            <select name="id_kategori" id="id_kategori" required>
                <option value="">-- Pilih Kategori --</option>
                <option value="1">Umum</option>
                <option value="2">Teknologi</option>
            </select>
        </div>

        <button type="submit" class="btn-primary" id="submitBtn">Tambah</button>
    </form>
</div>

<!-- jQuery + AJAX -->
<script src="<?= base_url('assets/js/jquery-3.6.0.min.js'); ?>"></script>
<script>
    $(document).ready(function () {
        const articleContainer = $('#article-container');
        const paginationContainer = $('.pagination-container');
        const searchForm = $('#search-form');
        const searchBox = $('#search-box');
        const categoryFilter = $('#category-filter');
        const loading = $('#loading');

        const fetchData = (url, showLoading = false) => {
            if (showLoading) loading.show();

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (data) {
                    renderArticles(data.artikel);
                    renderPagination(data.pager, data.q, data.kategori_id);

                    // Delay hide loading biar kelihatan efeknya
                    if (showLoading) {
                        setTimeout(() => {
                            loading.hide();
                        }, 1000); // <-- 1000 ms = 1 detik
                    }
                },
                error: function () {
                    articleContainer.html('<p style="color:red;">Gagal mengambil data.</p>');
                    if (showLoading) loading.hide();
                }
            });
        };


        const renderArticles = (articles) => {
            let html = '<table class="table">';
            html += '<thead><tr><th>ID</th><th>Judul</th><th>Kategori</th><th>Status</th><th>Aksi</th></tr></thead><tbody>';
            if (articles.length > 0) {
                articles.forEach(article => {
                    html += `
                        <tr>
                            <td>${article.id}</td>
                            <td>
                                <strong>${article.judul}</strong><br>
                                <small>${article.isi.substring(0, 50)}...</small>
                            </td>
                            <td>${article.nama_kategori}</td>
                            <td>${article.status}</td>
                            <td>
                                <a class="btn btn-sm btn-info" href="/admin/artikel/edit/${article.id}">Ubah</a>
                                <a class="btn btn-sm btn-danger" onclick="return confirm('Yakin menghapus data?');" href="/admin/artikel/delete/${article.id}">Hapus</a>
                            </td>
                        </tr>
                    `;
                });
            } else {
                html += '<tr><td colspan="5">Tidak ada data.</td></tr>';
            }
            html += '</tbody></table>';
            articleContainer.html(html);
        };

        const renderPagination = (pager, q, kategori_id) => {
            if (!pager || !pager.links) return;
            let html = '<nav><ul class="pagination">';
            pager.links.forEach(link => {
                const url = link.url ? `${link.url}&q=${q}&kategori_id=${kategori_id}` : '#';
                html += `<li class="page-item ${link.active ? 'active' : ''}"><a class="page-link" href="${url}">${link.title}</a></li>`;
            });
            html += '</ul></nav>';
            paginationContainer.html(html);
        };

        // Ketika form pencarian dikirim
        searchForm.on('submit', function (e) {
            e.preventDefault();
            const q = searchBox.val();
            const kategori_id = categoryFilter.val();
            const url = `/admin/artikel?q=${q}&kategori_id=${kategori_id}`;
            fetchData(url, true);
        });

        categoryFilter.on('change', function () {
            searchForm.trigger('submit');
        });

        fetchData('/admin/artikel', false); // Load awal (tanpa loading)
    });
</script>

<?= $this->include('template/admin_footer'); ?>
```

Sekarang indikator loading tampil saat user sedang mencari artikel:

<img src="/IMAGE/tugas9.3.png" img>

**4. Implementasikan fitur sorting (mengurutkan artikel berdasarkan judul, dll.) dengan `AJAX`.** <br>
**Jawab:**

Sorting berdasarkan `judul`<br>
<img src="/IMAGE/tugas9.4.1.png" img>

Sorting berdasarkan Kategori `(Umum)`<br>
<img src="/IMAGE/tugas9.4.2.png" img>

Sorting berdasarkan Kategori `(Teknologi)`<br>
<img src="/IMAGE/tugas9.4.3.png" img>
<br>

# Praktikum 10

<br>

# 10.1 Membuat REST Controller

Pada tahap ini, kita akan membuat file REST Controller yang berisi fungsi untuk menampilkan, <br>
menambah, mengubah dan menghapus data. Masuklah ke direktori `app\Controllers` dan buatlah file <br>
baru bernama `Post.php`. Kemudian, salin kode di bawah ini ke dalam file tersebut:<br>

```php
<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\ArtikelModel;

class Post extends ResourceController
{
    use ResponseTrait;

    // Menampilkan semua data artikel
    public function index()
    {
        $model = new ArtikelModel();
        $data['artikel'] = $model->orderBy('id', 'DESC')->findAll();
        return $this->respond($data);
    }

    // Menambahkan data baru
    public function create()
    {
        $model = new ArtikelModel();
        $data = [
            'judul' => $this->request->getVar('judul'),
            'isi'   => $this->request->getVar('isi')
        ];
        $model->insert($data);

        return $this->respondCreated([
            'status' => 201,
            'messages' => ['success' => 'Data artikel berhasil ditambahkan.']
        ]);
    }

    // Menampilkan 1 data
    public function show($id = null)
    {
        $model = new ArtikelModel();
        $data = $model->where('id', $id)->first();
        return $data
            ? $this->respond($data)
            : $this->failNotFound('Data tidak ditemukan.');
    }

    // Mengupdate data
    public function update($id = null)
    {
        $model = new ArtikelModel();
        $data = [
            'judul' => $this->request->getVar('judul'),
            'isi'   => $this->request->getVar('isi')
        ];
        $model->update($id, $data);

        return $this->respond([
            'status' => 200,
            'messages' => ['success' => 'Data artikel berhasil diubah.']
        ]);
    }

    // Menghapus data
    public function delete($id = null)
    {
        $model = new ArtikelModel();
        $data = $model->where('id', $id)->first();

        if (!$data) return $this->failNotFound('Data tidak ditemukan.');

        $model->delete($id);

        return $this->respondDeleted([
            'status' => 200,
            'messages' => ['success' => 'Data artikel berhasil dihapus.']
        ]);
    }
}
```

**Kode diatas berisi 5 method, yaitu:** <br>
• index() – Berfungsi untuk menampilkan seluruh data pada database. <br>
• create() – Berfungsi untuk menambahkan data baru ke database. <br>
• show() – Berfungsi untuk menampilkan suatu data spesifik dari database. <br>
• update() – Berfungsi untuk mengubah suatu data pada database. <br>
• delete() – Berfungsi untuk menghapus data dari database. <br>

# 10.2 Membuat Routing REST API

masuklah ke direktori `app/Config` dan bukalah file `Routes.php`. Tambahkan kode di bawah ini: <br>

```php
$routes->resource('post');
```

Untuk mengecek route nya jalankan perintah berikut:

```bash
php spark routes
```

Selanjutnya akan muncul daftar route yang telah dibuat.<br>
<img src="/IMAGE/10.2.png" img>

Seperti yang terlihat, satu baris kode routes yang di tambahkan akan menghasilkan banyak Endpoint.

# 10.3 Testing REST API CodeIgniter

Buka aplikasi `postman` dan pilih `create new` → `HTTP` Request <br>
<img src="/IMAGE/10.3.png" img>

# 10.4 Menampilkan Semua Data

Pilih method GET dan masukkan URL berikut:

```bash
http://localhost:8080/post
```

Lalu, klik Send. Jika hasil test menampilkan semua data artikel dari database, maka pengujian berhasil.

<img src="/IMAGE/10.4.png" img>

# 10.5 Menampilkan Data Spesifik <br>

Masih menggunakan method `GET`, hanya perlu menambahkan ID artikel di belakang URL <br>
seperti ini:

```php
http://localhost:8080/post/14
```

Selanjutnya, klik `Send`. Request tersebut akan menampilkan data artikel yang memiliki ID
nomor 14 di database.

<img src="/IMAGE/10.5.png" img>

# 10.6 Mengubah Data <br>

Untuk mengubah data, silakan ganti method menjadi `PUT`. Kemudian, masukkan URL artikel <br>
yang ingin diubah. Misalnya, ingin mengubah data artikel dengan ID nomor 14, maka masukkan ,<br>
URL berikut: <br>
`http://localhost:8080/post/14`

- Ganti Body menjadi Raw JSON <br>
- Klik tab Body
- Pilih opsi `raw`
- Ubah dropdown di kanan menjadi `JSON` (bukan Text)
- Isi dengan format JSON valid <br>
  Misalnya:

```php
{
  "judul": "Artikel Update dari API",
  "isi": "Isi artikel ini telah diperbarui melalui API menggunakan JSON"
}
```

<img src="/IMAGE/10.6.png" img>

# 10.7 Menambahkan Data

Anda perlu menggunakan method `POST` untuk menambahkan data baru ke database. <br>
Kemudian, masukkan URL berikut:

```php
http://localhost:8080/post
```

Pilih tab `Body`, lalu pilih `x-www-form-uriencoded`. Masukkan atribut tabel pada kolom `KEY` <br>
dan nilai data baru di kolom `VALUE`. Jangan lupa, klik `Send`.

<img src="/IMAGE/10.7.png" img>

# 10.8 Menghapus Data

Pilih method `DELETE` untuk menghapus data. Lalu, masukkan URL spesifik data mana yang
ingin di hapus. Misalnya, ingin menghapus data nomor 5, maka URL-nya seperti ini:

```php
http://localhost:8080/post/5
```

klik `Send`, maka akan mendapatkan pesan bahwa data telah berhasil dihapus dari
database.

<img src="/IMAGE/10.8.png" img>

# Praktikum 11

# 11.1 Memulai penggunaan framework Vuejs

Axios untuk melakukan call `API REST` Menggunakan `CDN`. <br>

Library VueJS

```bash
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Library Axios

```bash
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

# 11.2 Struktur Direktory

Buat Project baru dengan struktur file dan directory seperti berikut:

```bash
│   index.html
└───assets
    ├───css
    │       style.css
    └───js
            app.js
```

# 11.3 Menampilkan data

File `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Daftar Artikel</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
  <div id="app">
    <!-- Toolbar Header dan Tombol Tambah -->
<div class="header-bar" style="display: flex; align-items: center; margin-bottom: 20px; gap: 20px;">
  <h1 style="margin: 0;">Daftar Artikel</h1>

</div>

    <!-- Modal Form -->
    <div class="modal" v-if="showForm">
      <div class="modal-content">
        <span class="close" @click="showForm = false">&times;</span>
        <form id="form-data" @submit.prevent="saveData">
          <h3 id="form-title">{{ formTitle }}</h3>
          <div><input type="text" v-model="formData.judul" placeholder="Judul" required /></div>
          <div><textarea v-model="formData.isi" placeholder="Isi Artikel" rows="8"></textarea></div>
          <div>

            <select v-model="formData.status">
            <option value="0">Draft</option>
            <option value="1">Publish</option>
            </select>


          <input type="hidden" v-model="formData.id" />
          <button type="submit" id="btnSimpan">Simpan</button>
          <button type="button" @click="showForm = false">Batal</button>
        </form>
      </div>
    </div>
  </div>

  <script src="assets/js/app.js"></script>
</body>
</html>

```

File `apps.js`:

```js
const { createApp } = Vue;

// tentukan lokasi API REST End Point
const apiUrl = "http://localhost/labci4/public";

createApp({
  data() {
    return {
      artikel: "",
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get(apiUrl + "/post")
        .then((response) => {
          this.artikel = response.data.artikel;
        })
        .catch((error) => console.log(error));
    },
    statusText(status) {
      if (!status) return "";
      return status == 1 ? "Publish" : "Draft";
    },
  },
}).mount("#app");
```

Hasil outpunya:

<img src="/IMAGE/11.3.png" img>

# 11.4 Form Tambah dan Ubah Data

Pada file `index.html` sisipkan kode berikut sebelum table data:

```html
<button id="btn-tambah" @click="tambah">Tambah Data</button>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Judul</th>
      <th>Status</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(row, index) in artikel" :key="row.id">
      <td class="center-text">{{ row.id }}</td>
      <td>{{ row.judul }}</td>
      <td class="center-text">{{ statusText(row.status) }}</td>
      <td class="center-text">
        <a href="#" @click.prevent="edit(row)">Edit</a>
        <a href="#" @click.prevent="hapus(index, row.id)">Hapus</a>
      </td>
    </tr>
  </tbody>
</table>
```

File `app.js` lengkapi kodenya:

```js
const { createApp } = Vue;
const apiUrl = "http://localhost/lab11_ci/ci4/public";

createApp({
  data() {
    return {
      artikel: [],
      formData: {
        id: null,
        judul: "",
        isi: "",
        status: 0,
      },
      showForm: false,
      formTitle: "Tambah Data",
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get(`${apiUrl}/post`)
        .then((response) => {
          this.artikel = response.data.artikel;
        })
        .catch((error) => console.log(error));
    },
    statusText(status) {
      return status == 1 ? "Publish" : "Draft";
    },
    tambah() {
      this.formTitle = "Tambah Data";
      this.formData = {
        id: null,
        judul: "",
        isi: "",
        status: 0,
      };
      this.showForm = true;
    },
    edit(data) {
      this.formTitle = "Ubah Data";
      this.formData = { ...data };
      this.showForm = true;
    },
    hapus(index, id) {
      if (confirm("Yakin ingin menghapus?")) {
        axios
          .delete(`${apiUrl}/post/${id}`)
          .then(() => {
            this.artikel.splice(index, 1);
          })
          .catch((error) => console.log(error));
      }
    },
    saveData() {
      if (this.formData.id) {
        // UPDATE
        axios
          .put(`${apiUrl}/post/${this.formData.id}`, this.formData)
          .then(() => {
            this.loadData();
            this.showForm = false;
          })
          .catch((error) => console.log(error));
      } else {
        // CREATE
        axios
          .post(`${apiUrl}/post`, this.formData)
          .then(() => {
            this.loadData();
            this.showForm = false;
          })
          .catch((error) => console.log(error));
      }
    },
  },
}).mount("#app");
```

File `style.css`:

```css
#app {
  margin: 0 auto;
  width: 900px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

#btn-tambah {
  margin-bottom: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #3152d6;
  color: #fff;
  border: none;
  border-radius: 4px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

th {
  padding: 12px;
  background-color: #5778ff;
  color: white;
  text-align: center;
}

td {
  padding: 10px;
  text-align: left;
}

.center-text {
  text-align: center;
}

tr:nth-child(even) {
  background-color: #f4f7ff;
}

td a {
  margin: 0 8px;
  text-decoration: none;
  color: #3152d6;
  font-weight: bold;
}

td a:hover {
  text-decoration: underline;
}

.modal {
  display: block;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fff;
  margin: 5% auto;
  padding: 20px;
  width: 600px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
}

.close {
  position: absolute;
  right: 16px;
  top: 10px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

#form-data input,
#form-data textarea,
#form-data select {
  width: 100%;
  margin-bottom: 12px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#form-data button {
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
}

#btnSimpan {
  background-color: #3152d6;
  color: #fff;
  border: none;
}

.header-bar {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.header-bar h1 {
  margin: 0;
}
```

# 11.5 Hasil Outputnya.

<img src="/IMAGE/11.5.png" img>
>>>>>>> 419eb5b0e9e69e7fd9b8433dcef406eb86c347ad
