import { useState } from "react";
import EventCard from "../components/EventCard";
import EmptyState from "../components/EmptyState";
import { CalendarPlus, X, Search, Clock, CheckCircle2 } from "lucide-react";

function EventManagementView({
  events,
  onAddEvent,
  onDeleteEvent,
  onGenerateTeam,
  onResetTeam,
  onRestoreDefaultEvents
}) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Upacara Resmi");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("08:00 - 13:00 WIB");
  const [location, setLocation] = useState("");
  const [requiredOfficers, setRequiredOfficers] = useState(4);
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) { setFormError("Judul event wajib diisi."); return; }
    if (!date) { setFormError("Tanggal pelaksanaan wajib dipilih."); return; }
    if (!location.trim()) { setFormError("Lokasi / Gedung acara wajib diisi."); return; }

    const newEvent = {
      id: Date.now(),
      title: title.trim(),
      category,
      date,
      time: time.trim() || "08:00 - Selesai",
      location: location.trim(),
      requiredOfficers: Number(requiredOfficers) || 3,
      description: description.trim() || "Protokoler seremonial resmi Telkom University.",
      status: "Menunggu Penugasan",
      assignedMembers: []
    };

    onAddEvent(newEvent);
    setTitle(""); setCategory("Upacara Resmi"); setDate("");
    setTime("08:00 - 13:00 WIB"); setLocation(""); setRequiredOfficers(4);
    setDescription(""); setFormError(""); setShowForm(false);
  };

  const filteredEvents = events.filter((evt) => {
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.category.toLowerCase().includes(searchQuery.toLowerCase());

    const hasTeam = evt.assignedMembers && evt.assignedMembers.length > 0;
    if (statusFilter === "ready") return matchesSearch && hasTeam;
    if (statusFilter === "pending") return matchesSearch && !hasTeam;
    return matchesSearch;
  });

  return (
    <div className="view-container">
      <div className="view-header">
        <div>
          <h2 className="view-title">Manajemen Event Protokoler</h2>
          <p className="view-subtitle">
            Daftar upacara resmi, sidang senat, dan kegiatan keprotokolan Telkom University
          </p>
        </div>

        <button
          type="button"
          className={`btn ${showForm ? "btn-secondary" : "btn-primary"}`}
          onClick={() => { setShowForm(!showForm); setFormError(""); }}
        >
          {showForm ? <><X size={15} /> Tutup Formulir</> : <><CalendarPlus size={15} /> Tambah Event Baru</>}
        </button>
      </div>

      {showForm && (
        <div className="form-card animate-fade">
          <div className="form-card-header">
            <h3 className="form-card-title">Formulir Tambah Event Baru</h3>
            <span className="form-card-hint">
              Input terkontrol (Controlled Component) terhubung langsung ke state App.jsx
            </span>
          </div>

          {formError && <div className="form-error-alert">{formError}</div>}

          <form onSubmit={handleSubmit} className="custom-form">
            <div className="form-row">
              <div className="form-group flex-2">
                <label htmlFor="event-title">Nama / Judul Acara *</label>
                <input id="event-title" type="text" className="form-input"
                  placeholder="Contoh: Sidang Senat Wisuda Periode II 2026"
                  value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-group flex-1">
                <label htmlFor="event-category">Kategori Acara</label>
                <select id="event-category" className="form-input"
                  value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Upacara Resmi">Upacara Resmi</option>
                  <option value="Sidang Senat">Sidang Senat</option>
                  <option value="Akademik VVIP">Akademik VVIP</option>
                  <option value="Dies Natalis">Dies Natalis</option>
                  <option value="Seminar Internasional">Seminar Internasional</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group flex-1">
                <label htmlFor="event-date">Tanggal Acara *</label>
                <input id="event-date" type="date" className="form-input"
                  value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="form-group flex-1">
                <label htmlFor="event-time">Waktu Penugasan</label>
                <input id="event-time" type="text" className="form-input"
                  placeholder="Contoh: 07:30 - 13:00 WIB"
                  value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
              <div className="form-group flex-1">
                <label htmlFor="event-quota">Kebutuhan Petugas</label>
                <input id="event-quota" type="number" min="1" max="10" className="form-input"
                  value={requiredOfficers} onChange={(e) => setRequiredOfficers(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="event-location">Lokasi / Gedung Acara *</label>
              <input id="event-location" type="text" className="form-input"
                placeholder="Contoh: Telkom University Convention Hall (TUCH) atau Gd. Damar"
                value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="event-desc">Deskripsi & Catatan Penugasan</label>
              <textarea id="event-desc" rows="3" className="form-input"
                placeholder="Rincian acara, pakaian seragam dinas (PSU/PDU), atau instruksi khusus..."
                value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Simpan Event Baru</button>
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
            placeholder="Cari nama event, kategori, atau gedung..."
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          {searchQuery && (
            <button type="button" className="btn-clear-search" onClick={() => setSearchQuery("")}>
              <X size={13} />
            </button>
          )}
        </div>

        <div className="filter-buttons">
          <button type="button" className={`filter-btn ${statusFilter === "all" ? "active" : ""}`}
            onClick={() => setStatusFilter("all")}>
            Semua ({events.length})
          </button>
          <button type="button" className={`filter-btn ${statusFilter === "pending" ? "active" : ""}`}
            onClick={() => setStatusFilter("pending")}>
            <Clock size={12} /> Menunggu Tim ({events.filter((e) => !e.assignedMembers || e.assignedMembers.length === 0).length})
          </button>
          <button type="button" className={`filter-btn ${statusFilter === "ready" ? "active" : ""}`}
            onClick={() => setStatusFilter("ready")}>
            <CheckCircle2 size={12} /> Siap Bertugas ({events.filter((e) => e.assignedMembers && e.assignedMembers.length > 0).length})
          </button>
        </div>
      </div>

      {events.length === 0 ? (
        <EmptyState
          title="Belum Ada Data Event"
          message="Daftar event protokoler saat ini kosong. Anda dapat menambahkan event baru atau memuat kembali data contoh awal."
          actionLabel="Muat Ulang Event Default"
          onAction={onRestoreDefaultEvents}
        />
      ) : filteredEvents.length === 0 ? (
        <EmptyState
          title="Tidak Ada Event Yang Cocok"
          message={`Pencarian dengan kata kunci "${searchQuery}" tidak menemukan event.`}
          actionLabel="Hapus Filter & Pencarian"
          onAction={() => { setSearchQuery(""); setStatusFilter("all"); }}
        />
      ) : (
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onGenerate={onGenerateTeam}
              onResetAssignment={onResetTeam}
              onDelete={onDeleteEvent}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default EventManagementView;
