new Vue({

    // Menghubungkan Vue dengan elemen id="app"
    el: '#app',

    data: {

        // Mengambil data tracking
        tracking: dataBahanAjar.tracking,

        pengirimanList: dataBahanAjar.pengirimanList,

        paketList: dataBahanAjar.paket,

        // Input pencarian nomor DO
        cariNomor: "",

        // Menyimpan hasil tracking
        hasilTracking: null,

        // Form Tambah DO
        form: {

            nim: "",
            nama: "",
            ekspedisi: "",
            paket: "",
            tanggalKirim: ""

        }

    },

    computed: {

        // Generate Nomor DO Otomatis
        nomorDOBaru() {
            // Menghitung jumlah data DO
            let jumlahDO = Object.keys(this.tracking).length + 1;

            let tahun = new Date().getFullYear();

            let nomor = String(jumlahDO).padStart(3, '0');

            return `DO${tahun}-${nomor}`;

        },

        // Ambil Detail Paket
        selectedPaket() {

            return this.paketList.find(item =>
                item.kode == this.form.paket
            );

        },

        // Total Harga
        totalHarga() {

            if (!this.selectedPaket) {

                return 0;

            }

            return this.selectedPaket.harga;

        }

    },

    methods: {

        // Mencari Delivery Order
        cariDO() {

            if (this.cariNomor == "") {

                alert("Masukkan nomor DO");

                return;

            }

            let data = this.tracking[this.cariNomor];

            if (!data) {

                alert("Data tidak ditemukan");

                this.hasilTracking = null;

                return;

            }

            this.hasilTracking = data;

        },

        // Tambah Delivery Order
        tambahDO() {

            // Validasi
            if (
                this.form.nim == "" ||
                this.form.nama == "" ||
                this.form.ekspedisi == "" ||
                this.form.paket == "" ||
                this.form.tanggalKirim == ""
            ) {

                alert("Semua data wajib diisi");

                return;

            }

            // Menambah Data Baru
            Vue.set(this.tracking, this.nomorDOBaru, {

                nomorDO: this.nomorDOBaru,

                nim: this.form.nim,

                nama: this.form.nama,

                status: "Diproses",

                ekspedisi: this.form.ekspedisi,

                tanggalKirim: this.form.tanggalKirim,

                paket: this.form.paket,

                total: this.totalHarga,

                perjalanan: [

                    {
                        waktu: new Date().toLocaleString(),

                        keterangan: "Delivery Order berhasil dibuat"
                    }

                ]

            });

            alert("Delivery Order berhasil ditambahkan");

            // Tombol Reset
            this.resetForm();

        },

        // Reset Form
        resetForm() {

            this.form = {

                nim: "",
                nama: "",
                ekspedisi: "",
                paket: "",
                tanggalKirim: ""

            };

        }

    }

});