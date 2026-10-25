import { Users, AlertTriangle, Building2, CheckCircle } from "lucide-react";
import StatCard from "../components/StatCard";
import EmptyState from "../components/EmptyState";

function DashboardView({ events, members, onNavigate, onGenerateEventTeam }) {
  const totalMembers = members.length;
  const unassignedMembers = members.filter((m) => m.eventsCount === 0);
  const totalEvents = events.length;
  const readyEvents = events.filter(
    (e) => e.assignedMembers && e.assignedMembers.length > 0
  );
  const pendingEvents = events.filter(
    (e) => !e.assignedMembers || e.assignedMembers.length === 0
  );

  return (
    <div className="view-container">
      <div className="dashboard-hero">
        <h1 className="hero-title">Dashboard</h1>
        <p className="hero-description">
          Berisi informasi terkait{" "}
          <strong style={{ color: "#0284c7" }}>fungsi</strong> /{" "}
          <strong style={{ color: "#0284c7" }}>info kegiatan</strong> /{" "}
          <strong style={{ color: "#0284c7" }}>early warning</strong> anggota Korps Protokol Mahasiswa.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onNavigate("events")}
          >
            Kelola Event ({totalEvents})
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onNavigate("members")}
          >
            Kelola Anggota ({totalMembers})
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={<Users size={20} />}
          label="Total Anggota KPM"
          value={totalMembers}
          subtext="Senior & Junior aktif"
          color="blue"
        />
        <StatCard
          icon={<AlertTriangle size={20} />}
          label="Belum Pernah Tugas"
          value={unassignedMembers.length}
          subtext="Prioritas utama penugasan"
          color="amber"
        />
        <StatCard
          icon={<Building2 size={20} />}
          label="Total Event Seremonial"
          value={totalEvents}
          subtext="Wisuda, Senat & Protokoler"
          color="purple"
        />
        <StatCard
          icon={<CheckCircle size={20} />}
          label="Event Siap Bertugas"
          value={readyEvents.length}
          subtext={`${pendingEvents.length} event menunggu tim`}
          color="green"
        />
      </div>

      {unassignedMembers.length > 0 ? (
        <div className="alert-box alert-warning">
          <div className="alert-icon"><AlertTriangle size={24} /></div>
          <div className="alert-content">
            <h4 className="alert-heading">
              Perhatian Pembagian Tugas: {unassignedMembers.length} Anggota Belum Memiliki Jadwal
            </h4>
            <p className="alert-text">
              Untuk mencegah ada anggota yang terlewat, klik tombol <strong>"Generate Tim Petugas"</strong> pada
              event mendatang. Sistem akan memprioritaskan anggota ini dan memasangkannya dengan mentor senior.
            </p>
          </div>
        </div>
      ) : (
        <div className="alert-box alert-success">
          <div className="alert-icon"><CheckCircle size={24} /></div>
          <div className="alert-content">
            <h4 className="alert-heading">Distribusi Penugasan Merata!</h4>
            <p className="alert-text">
              Seluruh anggota Korps Protokol Mahasiswa saat ini telah memiliki pengalaman penugasan seremonial.
            </p>
          </div>
        </div>
      )}

      <div className="dashboard-grid-two">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h3 className="panel-title">Event Menunggu Tim Petugas</h3>
              <span className="panel-subtitle">
                Acara yang belum dialokasikan anggota protokolnya
              </span>
            </div>
            <button
              type="button"
              className="btn-text"
              onClick={() => onNavigate("events")}
            >
              Lihat Semua →
            </button>
          </div>

          <div className="panel-body">
            {pendingEvents.length === 0 ? (
              <EmptyState
                title="Semua Event Sudah Terisi"
                message="Semua event seremonial aktif saat ini telah memiliki petugas yang siap bertugas."
                actionLabel="Tambah Event Baru"
                onAction={() => onNavigate("events")}
              />
            ) : (
              <div className="quick-event-list">
                {pendingEvents.map((evt) => (
                  <div key={evt.id} className="quick-event-item">
                    <div className="quick-event-info">
                      <div className="quick-event-badge">{evt.category}</div>
                      <h4 className="quick-event-name">{evt.title}</h4>
                      <p className="quick-event-meta">
                        {evt.date} • {evt.location} • Butuh {evt.requiredOfficers} petugas
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-auto-assign-sm"
                      onClick={() => onGenerateEventTeam(evt.id)}
                    >
                      ⚡ Auto-Assign
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h3 className="panel-title">Anggota Antrean Penugasan</h3>
              <span className="panel-subtitle">
                Anggota dengan jam terbang 0 yang perlu diikutsertakan
              </span>
            </div>
            <button
              type="button"
              className="btn-text"
              onClick={() => onNavigate("members")}
            >
              Kelola Anggota →
            </button>
          </div>

          <div className="panel-body">
            {unassignedMembers.length === 0 ? (
              <EmptyState
                title="Tidak Ada Anggota Menganggur"
                message="Hebat! Semua anggota terdaftar sudah pernah bertugas minimal satu kali."
              />
            ) : (
              <div className="priority-member-list">
                {unassignedMembers.map((member) => (
                  <div key={member.id} className="priority-member-item">
                    <div className="priority-avatar">
                      {member.name.charAt(0)}
                    </div>
                    <div className="priority-info">
                      <span className="priority-name">{member.name}</span>
                      <span className="priority-meta">
                        NIM {member.nim} • Angkatan {member.angkatan} • {member.division}
                      </span>
                    </div>
                    <span className="priority-badge">0 Tugas</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
