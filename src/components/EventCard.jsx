import {
  CalendarDays,
  MapPin,
  Clock,
  Users,
  ClipboardList,
  Trash2,
  Zap,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Crown,
  Sprout,
} from "lucide-react";

function EventCard({ event, onGenerate, onResetAssignment, onDelete }) {
  const isAssigned = event.assignedMembers && event.assignedMembers.length > 0;

  return (
    <div className={`event-card ${isAssigned ? "event-ready" : "event-pending"}`}>
      <div className="event-card-header">
        <div className="event-category-badge">{event.category || "Protokoler"}</div>
        <span className={`status-pill ${isAssigned ? "pill-success" : "pill-warning"}`}>
          {isAssigned ? (
            <><CheckCircle2 size={11} /> Siap Bertugas</>
          ) : (
            <><Clock size={11} /> Menunggu Penugasan</>
          )}
        </span>
      </div>

      <h3 className="event-title">{event.title}</h3>
      <p className="event-desc">{event.description}</p>

      <div className="event-meta-grid">
        <div className="meta-item">
          <span className="meta-icon"><CalendarDays size={16} /></span>
          <div>
            <span className="meta-label">Tanggal</span>
            <span className="meta-value">{event.date}</span>
          </div>
        </div>
        <div className="meta-item">
          <span className="meta-icon"><Clock size={16} /></span>
          <div>
            <span className="meta-label">Waktu</span>
            <span className="meta-value">{event.time || "08:00 - Selesai"}</span>
          </div>
        </div>
        <div className="meta-item">
          <span className="meta-icon"><MapPin size={16} /></span>
          <div>
            <span className="meta-label">Lokasi</span>
            <span className="meta-value">{event.location}</span>
          </div>
        </div>
        <div className="meta-item">
          <span className="meta-icon"><Users size={16} /></span>
          <div>
            <span className="meta-label">Kebutuhan</span>
            <span className="meta-value">{event.requiredOfficers} Petugas</span>
          </div>
        </div>
      </div>

      <div className="duty-team-section">
        <div className="duty-section-header">
          <h4 className="duty-section-title">
            <ClipboardList size={14} style={{ display: "inline", marginRight: 5 }} />
            Tim Petugas Protokol ({event.assignedMembers ? event.assignedMembers.length : 0}/{event.requiredOfficers})
          </h4>
        </div>

        {!isAssigned ? (
          <div className="duty-empty-box">
            <p className="duty-empty-text">
              <AlertTriangle size={14} style={{ display: "inline", marginRight: 4 }} />
              Belum ada petugas yang dialokasikan untuk event ini.
            </p>
            <p className="duty-helper-note">
              Sistem akan memprioritaskan anggota yang <strong>belum pernah bertugas</strong> dipadukan dengan <strong>mentor Senior</strong> berpengalaman.
            </p>
            <button
              type="button"
              className="btn btn-auto-assign"
              onClick={() => onGenerate(event.id)}
            >
              <Zap size={15} /> Generate Tim Petugas Otomatis
            </button>
          </div>
        ) : (
          <div className="assigned-roster">
            <div className="roster-list">
              {event.assignedMembers.map((officer, index) => (
                <div key={officer.id || index} className="roster-item">
                  <div className="roster-num">{index + 1}</div>
                  <div className="roster-details">
                    <span className="roster-name">{officer.name}</span>
                    <span className="roster-role-tag">{officer.dutyRole}</span>
                  </div>
                  <span
                    className={`badge-level ${
                      officer.level === "Senior" ? "badge-senior" : "badge-junior"
                    }`}
                  >
                    {officer.level === "Senior" ? (
                      <><Crown size={10} /> Senior</>
                    ) : (
                      <><Sprout size={10} /> Junior</>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="roster-actions">
              <button
                type="button"
                className="btn btn-secondary-sm"
                onClick={() => onGenerate(event.id)}
                title="Acak ulang penugasan dengan anggota lain"
              >
                <RefreshCw size={12} /> Acak Ulang Tim
              </button>
              <button
                type="button"
                className="btn btn-outline-danger-sm"
                onClick={() => onResetAssignment(event.id)}
                title="Kosongkan penugasan event ini"
              >
                Reset Tim
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="event-card-footer">
        <button
          type="button"
          className="btn-delete-event"
          onClick={() => onDelete(event.id)}
        >
          <Trash2 size={13} /> Hapus Event
        </button>
      </div>
    </div>
  );
}

export default EventCard;
