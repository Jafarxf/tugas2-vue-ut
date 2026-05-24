new Vue({

    // Menghubungkan Vue dengan elemen id="app"
    el: '#app',

    data: {

        // Mengambil data
        upbjjList: dataBahanAjar.upbjjList,
        kategoriList: dataBahanAjar.kategoriList,
        stok: dataBahanAjar.stok,

        // Data filter
        filterUpbjj: "",
        filterKategori: "",
        hanyaWarning: false,

        // Data sorting
        sortBy: "",

        // Form tambah/edit data
        form: {

            kode: "",
            judul: "",
            kategori: "",
            upbjj: "",
            lokasiRak: "",
            qty: "",
            safety: "",
            harga: "",
            catatanHTML: ""

        },

        // Menyimpan index data yang diedit
        editIndex: -1

    },

    computed: {

        // Menampilkan data stok yang sudah difilter
        filteredStok() {

            // Menyalin data stok
            let hasil = [...this.stok];

            // Filter berdasarkan UPBJJ
            if (this.filterUpbjj != "") {

                hasil = hasil.filter(item =>
                    item.upbjj == this.filterUpbjj
                );

            }

            // Filter berdasarkan kategori
            if (this.filterKategori != "") {

                hasil = hasil.filter(item =>
                    item.kategori == this.filterKategori
                );

            }

            // Filter stok warning atau kosong
            if (this.hanyaWarning) {

                hasil = hasil.filter(item =>
                    item.qty < item.safety || item.qty == 0
                );

            }

            // Sorting berdasarkan judul
            if (this.sortBy == "judul") {

                hasil.sort((a, b) =>
                    a.judul.localeCompare(b.judul)
                );

            }

            // Sorting berdasarkan qty
            else if (this.sortBy == "qty") {

                hasil.sort((a, b) =>
                    a.qty - b.qty
                );

            }

            // Sorting berdasarkan harga
            else if (this.sortBy == "harga") {

                hasil.sort((a, b) =>
                    a.harga - b.harga
                );

            }

            // Mengembalikan hasil filter
            return hasil;

        }

    },

    methods: {

        // Reset semua filter
        resetFilter() {

            this.filterUpbjj = "";
            this.filterKategori = "";
            this.hanyaWarning = false;
            this.sortBy = "";

        },

        // Menyimpan data stok
        simpanData() {

            // Validasi form kosong
            if (
                this.form.kode == "" ||
                this.form.judul == "" ||
                this.form.kategori == "" ||
                this.form.upbjj == "" ||
                this.form.lokasiRak == "" ||
                this.form.qty === "" ||
                this.form.safety === "" ||
                this.form.harga === ""
            ) {

                alert("Semua data wajib diisi");

                return;

            }

            // Jika edit data
            if (this.editIndex != -1) {

                // Update data stok
                Vue.set(this.stok, this.editIndex, {

                    ...this.form,

                    qty: Number(this.form.qty),

                    safety: Number(this.form.safety),

                    harga: Number(this.form.harga)

                });

                alert("Data berhasil diupdate");

            }

            // Jika tambah data baru
            else {

                // Menambahkan data ke array stok
                this.stok.push({

                    ...this.form,

                    qty: Number(this.form.qty),

                    safety: Number(this.form.safety),

                    harga: Number(this.form.harga)

                });

                alert("Data berhasil ditambahkan");

            }

            // Reset form
            this.resetForm();

        },

        // Mengambil data untuk diedit
        editData(kode) {

            // Mencari index berdasarkan kode
            this.editIndex = this.stok.findIndex(item =>
                item.kode == kode
            );

            // Menampilkan data ke form
            this.form = {

                ...this.stok[this.editIndex]

            };

        },

        // Menghapus data stok
        hapusData(kode) {

            // Konfirmasi hapus
            let konfirmasi = confirm(
                "Yakin ingin menghapus data?"
            );

            if (konfirmasi) {

                // Mencari index data
                let index = this.stok.findIndex(item =>
                    item.kode == kode
                );

                // Menghapus data dari array
                this.stok.splice(index, 1);

            }

        },

        // Reset form input
        resetForm() {

            // Mengosongkan form
            this.form = {

                kode: "",
                judul: "",
                kategori: "",
                upbjj: "",
                lokasiRak: "",
                qty: "",
                safety: "",
                harga: "",
                catatanHTML: ""

            };

            // Reset index edit
            this.editIndex = -1;

        }

    }

});