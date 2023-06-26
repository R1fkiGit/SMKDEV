   namabarang = document.formInput.barang;
   hargasatuan = document.formInput.harga.value;
   document.formInput.txtDisplay.value = hargasatuan;
   jumlah = document.formInput.jumlah.value;
   document.formInput.txtDisplay.value = jumlah;
   function Perhitungan(value){
     hargasatuan = document.formInput.harga.value;
     jumlah = document.formInput.jumlah.value;
     total = hargasatuan * jumlah;
     if (jumlah == 3)
     {
        total = ((hargasatuan * jumlah) / 3) * 2;
     }
     document.formInput.txtDisplay.value = total;
   }

   function tekan() {
    alert("Pesanan anda sedang diproses");
    alert("Nama Produk: ", namabarang);
    alert("Total harga: ", total);
   }