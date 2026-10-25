import { useState } from "react";
import MemberCard from "../components/MemberCard";
import EmptyState from "../components/EmptyState";
import { UserPlus, X, Search, AlertTriangle, Crown, Sprout } from "lucide-react";

function MemberManagementView({
  members,
  onAddMember,
  onDeleteMember,
  onRestoreDefaultMembers
}) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [angkatan, setAngkatan] = useState("2024");
  const [level, setLevel] = useState("Junior");
  const [division, setDivision] = useState("Anggota Muda");
  const [phone, setPhone] = useState("");
  const [formError, setFormError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) { setFormError("Nama lengkap anggota wajib diisi."); return; }
    if (!nim.trim()) { setFormError("Nomor Induk Mahasiswa (NIM) wajib diisi."); return; }

    const newMember = {
      id: Date.now(),
      name: name.trim(),
      nim: nim.trim(),
      angkatan,
      level,
      division,
      eventsCount: level === "Senior" ? 1 : 0,
      status: "Aktif",
      phone: phone.trim() || "-"
    };

    onAddMember(newMember);
    setName(""); setNim(""); setAngkatan("2024"); setLevel("Junior");
    setDivision("Anggota Muda"); setPhone(""); setFormError(""); setShowForm(false);
  };

  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.nim.includes(searchQuery) ||
      m.division.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterType === "zero") return matchesSearch && m.eventsCount === 0;
    if (filterType === "senior") return matchesSearch && m.level === "Senior";
    if (filterType === "junior") return matchesSearch && m.level === "Junior";
    return matchesSearch;
  });

  const zeroDutyCount = members.filter((m) => m.eventsCount === 0).length;

  return (
    <div className="view-container">
      <div className="view-header">
        <div>
          <h2 className="view-title">Manajemen Anggota Korps</h2>
          <p className="view-subtitle">
            Database personel protokol, tingkat jam terbang penugasan, dan status keaktifan
          </p>
        </div>

        <button
          type="button"
          className={`btn ${showForm ? "btn-secondary" : "btn-primary"}`}
          onClick={() => { setShowForm(!showForm); setFormError(""); }}
        >
          {showForm ? <><X size={15} /> Tutup Formulir</> : <><UserPlus size={15} /> Daftarkan Anggota Baru</>}
        </button>
      </div>

      {showForm && (
        <div className="form-card animate-fade">
          <div className="form-card-header">
            <h3 className="form-card-title">Formulir Pendaftaran Anggota KPM</h3>
            <span className="form-card-hint">
              Input terkontrol (Controlled Input Form) untuk menambah anggota baru ke array state
            </span>
          </div>

          {formError && <div className="form-error-alert">{formError}</div>}

          <form onSubmit={handleSubmit} className="custom-form">
            <div className="form-row">
              <div className="form-group flex-2">
                <label htmlFor="member-name">Nama Lengkap Mahasiswa *</label>
                <input id="member-name" type="text" className="form-input"
                  placeholder="Contoh: Raden Arya Wijaya"
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group flex-1">
                <label htmlFor="member-nim">NIM Telkom University *</label>
                <input id="member-nim" type="text" className="form-input"
                  placeholder="Contoh: 1301243011"
                  value={nim} onChange={(e) => setNim(e.target.value)} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group flex-1">
                <label htmlFor="member-angkatan">Angkatan</label>
                <select id="member-angkatan" className="form-input"
                  value={angkatan} onChange={(e) => setAngkatan(e.target.value)}>
                  <option value="2021">2021 (Tingkat Akhir)</option>
                  <option value="2022">2022 (Senior)</option>
                  <option value="2023">2023 (Madya)</option>
                  <option value="2024">2024 (Muda / Baru)</option>
                  <option value="2025">2025 (Calon Anggota)</option>
                </select>
              </div>
              <div className="form-group flex-1">
                <label htmlFor="member-level">Tingkat Pengalaman (Role)</label>
                <select id="member-level" className="form-input"
                  value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option value="Junior">Junior (Perlu Penugasan / Belajar)</option>
                  <option value="Senior">Senior (Mentor / Berpengalaman)</option>
                </select>
              </div>
              <div className="form-group flex-1">
                <label htmlFor="member-phone">Nomor Telepon / WhatsApp</label>
                <input id="member-phone" type="text" className="form-input"
                  placeholder="0812-xxxx-xxxx"
                  value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="member-division">Divisi / Penempatan Keprotokolan</label>
              <select id="member-division" className="form-input"
                value={division} onChange={(e) => setDivision(e.target.value)}>
                <option value="Anggota Muda">Anggota Muda (Umum)</option>
                <option value="Koor Protokol Utama">Koor Protokol Utama</option>
                <option value="Liaison Officer (LO)">Liaison Officer (LO VIP)</option>
                <option value="Pemandu Acara & Pedel">Pemandu Acara & Pedel</option>
                <option value="Registrasi & VIP Host">Registrasi & VIP Host</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Simpan Anggota ke Sistem</button>
              <button type="button" className="btn btn-secondary"
                onClick={() => { setShowForm(false); setFormError(""); }}>
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="filter-bar">
        <div className="search-box">
          <Search size={15} className="search-icon" />
          <input type="text" className="search-input"
            placeholder="Cari nama, NIM, atau divisi..."
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          {searchQuery && (
            <button type="button" className="btn-clear-search" onClick={() => setSearchQuery("")}>
              <X size={13} />
            </button>
          )}
        </div>

        <div className="filter-buttons">
          <button type="button" className={`filter-btn ${filterType === "all" ? "active" : ""}`}
            onClick={() => setFilterType("all")}>
            Semua ({members.length})
          </button>
          <button type="button" className={`filter-btn ${filterType === "zero" ? "active filter-warning" : ""}`}
            onClick={() => setFilterType("zero")}>
            <AlertTriangle size={12} /> Belum Pernah Tugas ({zeroDutyCount})
          </button>
          <button type="button" className={`filter-btn ${filterType === "senior" ? "active" : ""}`}
            onClick={() => setFilterType("senior")}>
            <Crown size={12} /> Senior ({members.filter((m) => m.level === "Senior").length})
          </button>
          <button type="button" className={`filter-btn ${filterType === "junior" ? "active" : ""}`}
            onClick={() => setFilterType("junior")}>
            <Sprout size={12} /> Junior ({members.filter((m) => m.level === "Junior").length})
          </button>
        </div>
      </div>

      {members.length === 0 ? (
        <EmptyState
          title="Belum Ada Data Anggota"
          message="Belum ada anggota yang terdaftar dalam korps protokol. Tambahkan anggota baru atau muat data bawaan."
          actionLabel="Muat Ulang Anggota Default"
          onAction={onRestoreDefaultMembers}
        />
      ) : filteredMembers.length === 0 ? (
        <EmptyState
          title="Tidak Ada Anggota Yang Cocok"
          message="Pencarian dengan kriteria tersebut tidak menemukan anggota."
          actionLabel="Hapus Filter Pencarian"
          onAction={() => { setSearchQuery(""); setFilterType("all"); }}
        />
      ) : (
        <div className="members-grid">
          {filteredMembers.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onDelete={onDeleteMember}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MemberManagementView;
