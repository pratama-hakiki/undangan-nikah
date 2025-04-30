export const data = {
  bride: {
    P: {
      id: 1,
      name: "Pratama Aji Prisadi, S.Tr.Kom",
      child: "Putra ke satu",
      father: "Saepul Apandi",
      mother: "Minarni",
      image: "./src/assets/images/cowo.png",
    },
    L: {
      id: 2,
      name: "Hakiki Widya Ningrum, S.Tr.Kom",
      child: "Putri ke dua",
      father: "Raden Mohammed Soekarno",
      mother: "Yusniar",
      image: "./src/assets/images/cewe.png",
    },

    couple: "./src/assets/images/couple.png",
  },

  time: {
    marriage: {
      year: "2025",
      month: "Mei",
      date: "17",
      day: "Sabtu",
      hours: {
        start: "09.00",
        finish: "Selesai",
      },
    },
    reception: {
      year: "2025",
      month: "Mei",
      date: "17",
      day: "Sabtu",
      hours: {
        start: "11.00",
        finish: "14.00 WIB",
      },
    },
    address:
      "Masjid Raya Puri Teluk Jambe, Sirnabaya, Telukjambe Timur, Karawang, West Java 41361",
  },

  link: {
    calendar: "https://calendar.app.google/ibwoBW7YTjKYKi2F8",
    map: "https://maps.app.goo.gl/r6QKvq4b8YRUPdUd8",
  },

  galeri: [
    {
      id: 1,
      image: "./src/assets/images/photo_1_2025-03-30_16-44-29.jpg",
    },
    // {
    //   id: 2,
    //   image: "./src/assets/images/photo_2_2025-03-30_16-44-29.jpg",
    // },
    {
      id: 3,
      image: "./src/assets/images/photo_3_2025-03-30_16-44-29.jpg",
    },
    {
      id: 4,
      image: "./src/assets/images/photo_4_2025-03-30_16-44-29.jpg",
    },
    // {
    //   id: 5,
    //   image: "./src/assets/images/photo_5_2025-03-30_16-44-29.jpg",
    // },
  ],

  bank: [
    {
      id: 1,
      name: "Hakiki Widya Ningrum",
      icon: "./src/assets/images/mandiri.png",
      rekening: "1730014990783",
    },
    {
      id: 2,
      name: "Pratama Aji Prisadi",
      icon: "./src/assets/images/bri.png",
      rekening: "051001051139500",
    },
  ],

  audio: "./src/assets/audio/wedding.mp3",

  api: "https://script.google.com/macros/s/AKfycbzojOOgPXl_ufTNVik-vK7Eds6fE-jGRKVcN-MFA5m81U5tZIZaiUJLVimOWLZfu8VeJA/exec",

  navbar: [
    {
      id: 1,
      teks: "Home",
      icon: "bx bxs-home-heart",
      path: "#home",
    },
    {
      id: 2,
      teks: "Mempelai",
      icon: "bx bxs-group",
      path: "#bride",
    },
    {
      id: 3,
      teks: "Tanggal",
      icon: "bx bxs-calendar-check",
      path: "#time",
    },
    {
      id: 4,
      teks: "Galeri",
      icon: "bx bxs-photo-album",
      path: "#galeri",
    },
    {
      id: 5,
      teks: "Ucapan",
      icon: "bx bxs-message-rounded-dots",
      path: "#wishas",
    },
  ],
};
