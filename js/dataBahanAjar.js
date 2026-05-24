const dataBahanAjar = {

    upbjjList: [
        "Jakarta",
        "Surabaya",
        "Makassar",
        "Padang",
        "Denpasar"
    ],

    kategoriList: [
        "MK Wajib",
        "MK Pilihan",
        "Praktikum",
        "Problem-Based"
    ],

    pengirimanList: [
        {
            kode: "REG",
            nama: "JNE Regular",
            durasi: "(3-4 Hari)"
        },
        {
            kode: "EXP",
            nama: "JNE Express",
            durasi: "(1-2 Hari)"
        }
    ],

    paket: [
        {
            kode: "PAKET-UT-001",
            nama: "IPS Dasar",
            isi: [
                "EKMA4116 - Pengantar Manajemen",
                "EKMA4115 - Pengantar Akuntansi"
            ],
            harga: 120000
        },
        {
            kode: "PAKET-UT-002",
            nama: "IPA Dasar",
            isi: [
                "BIOL4201 - Biologi Umum (Praktikum)",
                "FISIP4001 - Dasar-Dasar Sosiologi"
            ],
            harga: 140000
        }
    ],

    stok: [

        {
            kode: "EKMA4116",
            judul: "Pengantar Manajemen",
            kategori: "MK Wajib",
            upbjj: "Jakarta",
            lokasiRak: "R1-A3",
            qty: 28,
            safety: 20,
            harga: 65000,
            catatanHTML: "<em>Edisi 2024, cetak ulang</em>"
        },

        {
            kode: "EKMA4115",
            judul: "Pengantar Akuntansi",
            kategori: "MK Wajib",
            upbjj: "Jakarta",
            lokasiRak: "R1-A4",
            qty: 7,
            safety: 15,
            harga: 60000,
            catatanHTML: "<strong>Cover baru</strong>"
        },

        {
            kode: "BIOL4201",
            judul: "Biologi Umum (Praktikum)",
            kategori: "Praktikum",
            upbjj: "Surabaya",
            lokasiRak: "R3-B2",
            qty: 12,
            safety: 10,
            harga: 80000,
            catatanHTML: "Butuh <u>pendingin</u> untuk kit basah"
        },

        {
            kode: "FISIP4001",
            judul: "Dasar-Dasar Sosiologi",
            kategori: "MK Pilihan",
            upbjj: "Makassar",
            lokasiRak: "R2-C1",
            qty: 0,
            safety: 8,
            harga: 55000,
            catatanHTML: "Stok <i>kosong</i>, segera reorder"
        }

    ],

    tracking: {

        "DO2026-001": {
            nomorDO: "DO2026-001",
            nim: "123456789",
            nama: "Rina Wulandari",
            status: "Dikirim",
            ekspedisi: "JNE Regular",
            tanggalKirim: "2026-02-25",
            paket: "PAKET-UT-001",
            total: 120000,

            perjalanan: [
                {
                    waktu: "2026-02-25 10:12",
                    keterangan: "Penerimaan di Loket"
                },
                {
                    waktu: "2026-02-25 14:07",
                    keterangan: "Tiba di Hub Jakarta"
                },
                {
                    waktu: "2026-02-26 08:44",
                    keterangan: "Dikirim ke alamat tujuan"
                }
            ]
        },

        "DO2026-002": {
            nomorDO: "DO2026-002",
            nim: "987654321",
            nama: "Bambang Wiroguno",
            status: "Dalam Perjalanan",
            ekspedisi: "JNE Express",
            tanggalKirim: "2026-03-12",
            paket: "PAKET-UT-002",
            total: 150000,

            perjalanan: [
                {
                    waktu: "2026-03-12 11:01",
                    keterangan: "Penerimaan di Loket"
                },
                {
                    waktu: "2026-03-12 22:35",
                    keterangan: "Tiba di Hub Jakarta"
                },
                {
                    waktu: "2026-03-13 01:44",
                    keterangan: "Keluar dari Hub Jakarta menuju ke Hub Solo"
                },
                {
                    waktu: "2026-03-13 09:12",
                    keterangan: "Tiba di Hub Solo"
                }
            ]
        }

    }

};