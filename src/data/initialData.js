export const initialMembers = [
  {
    id: 1,
    name: "Muhammad Fikri Pratama",
    nim: "1301223045",
    angkatan: "2022",
    level: "Senior",
    division: "Koor Protokol Utama",
    eventsCount: 4,
    status: "Aktif",
    phone: "0812-3456-7890"
  },
  {
    id: 2,
    name: "Aurelia Salsa Nabila",
    nim: "1202224012",
    angkatan: "2022",
    level: "Senior",
    division: "Liaison Officer (LO)",
    eventsCount: 3,
    status: "Aktif",
    phone: "0813-8899-1122"
  },
  {
    id: 3,
    name: "Dimas Aditya Nugroho",
    nim: "1101230089",
    angkatan: "2023",
    level: "Senior",
    division: "Pemandu Acara & Pedel",
    eventsCount: 2,
    status: "Aktif",
    phone: "0821-4455-6677"
  },
  {
    id: 4,
    name: "Tiara Anindita Putri",
    nim: "1401232155",
    angkatan: "2023",
    level: "Senior",
    division: "Registrasi & VIP Host",
    eventsCount: 2,
    status: "Aktif",
    phone: "0857-9911-3344"
  },
  {
    id: 5,
    name: "Bagas Kurniawan",
    nim: "1302240011",
    angkatan: "2024",
    level: "Junior",
    division: "Anggota Muda",
    eventsCount: 0,
    status: "Aktif",
    phone: "0878-1234-9988"
  },
  {
    id: 6,
    name: "Nadia Clarissa",
    nim: "1201243022",
    angkatan: "2024",
    level: "Junior",
    division: "Anggota Muda",
    eventsCount: 0,
    status: "Aktif",
    phone: "0896-5544-2211"
  },
  {
    id: 7,
    name: "Raden Surya Pratama",
    nim: "1103241050",
    angkatan: "2024",
    level: "Junior",
    division: "Anggota Muda",
    eventsCount: 0,
    status: "Aktif",
    phone: "0812-9900-1144"
  },
  {
    id: 8,
    name: "Safira Zahra",
    nim: "1301244080",
    angkatan: "2024",
    level: "Junior",
    division: "Anggota Muda",
    eventsCount: 0,
    status: "Aktif",
    phone: "0822-7766-5544"
  },
  {
    id: 9,
    name: "Kevin Ardiansyah",
    nim: "1402240099",
    angkatan: "2024",
    level: "Junior",
    division: "Anggota Muda",
    eventsCount: 0,
    status: "Aktif",
    phone: "0856-3322-1100"
  },
  {
    id: 10,
    name: "Meutia Amanda",
    nim: "1203242018",
    angkatan: "2024",
    level: "Junior",
    division: "Anggota Muda",
    eventsCount: 0,
    status: "Aktif",
    phone: "0813-2211-9988"
  }
];

export const initialEvents = [
  {
    id: 1,
    title: "Wisuda Sarjana & Magister Periode I 2026",
    category: "Upacara Resmi",
    date: "2026-11-14",
    time: "07:30 - 13:00 WIB",
    location: "Telkom University Convention Hall (TUCH)",
    requiredOfficers: 4,
    description: "Protokoler utama prosesi wisuda universitas, pendampingan Senat Akademik dan orang tua wisudawan terbaik.",
    status: "Menunggu Penugasan",
    assignedMembers: []
  },
  {
    id: 2,
    title: "Sidang Senat Terbuka PKKMB Telkom University",
    category: "Sidang Senat",
    date: "2026-11-28",
    time: "08:00 - 12:00 WIB",
    location: "Auditorium Gedung Damar (Kacuk)",
    requiredOfficers: 3,
    description: "Penyambutan mahasiswa baru bersama jajaran Rektorat, Dekanat, dan pimpinan lembaga mahasiswa.",
    status: "Menunggu Penugasan",
    assignedMembers: []
  },
  {
    id: 3,
    title: "Pengukuhan Guru Besar Fakultas Informatika",
    category: "Akademik VVIP",
    date: "2026-12-12",
    time: "09:00 - 11:30 WIB",
    location: "Ruang Manterawu Gedung Rektorat",
    requiredOfficers: 2,
    description: "Protokoler acara orasi ilmiah dan pengukuhan Guru Besar tamu kehormatan LLDIKTI.",
    status: "Siap Bertugas",
    assignedMembers: [
      {
        id: 1,
        name: "Muhammad Fikri Pratama",
        nim: "1301223045",
        level: "Senior",
        dutyRole: "Koordinator Tim Protokol"
      },
      {
        id: 7,
        name: "Raden Surya Pratama",
        nim: "1103241050",
        level: "Junior",
        dutyRole: "Pendamping Tamu Kehormatan"
      }
    ]
  }
];
