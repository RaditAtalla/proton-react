import { Crown, Sprout, Trash2, AlertTriangle, CheckCircle2 } from "lucide-react";

function MemberCard({ member, onDelete }) {
  const isZeroDuty = member.eventsCount === 0;

  return (
    <div className={`member-card ${isZeroDuty ? "member-zero-duty" : ""}`}>
      <div className="member-card-header">
        <div className="member-avatar">
          {member.name.charAt(0).toUpperCase()}
        </div>
        <div className="member-title-info">
          <h4 className="member-name">{member.name}</h4>
          <span className="member-nim">NIM: {member.nim}</span>
        </div>
        <span className={`badge-level ${member.level === "Senior" ? "badge-senior" : "badge-junior"}`}>
          {member.level === "Senior" ? (
            <><Crown size={10} /> Senior</>
          ) : (
            <><Sprout size={10} /> Junior</>
          )}
        </span>
      </div>

      <div className="member-card-body">
        <div className="member-info-row">
          <span className="info-label">Angkatan:</span>
          <span className="info-value">{member.angkatan}</span>
        </div>
        <div className="member-info-row">
          <span className="info-label">Divisi / Bidang:</span>
          <span className="info-value">{member.division}</span>
        </div>
        <div className="member-info-row">
          <span className="info-label">Kontak:</span>
          <span className="info-value">{member.phone || "-"}</span>
        </div>

        <div className="duty-status-container">
          <span className="info-label">Status Penugasan:</span>
          {isZeroDuty ? (
            <span className="duty-tag duty-zero">
              <AlertTriangle size={11} style={{ display: "inline", marginRight: 3 }} />
              Belum Pernah Tugas (Prioritas)
            </span>
          ) : (
            <span className="duty-tag duty-active">
              <CheckCircle2 size={11} style={{ display: "inline", marginRight: 3 }} />
              Sudah {member.eventsCount}x Bertugas
            </span>
          )}
        </div>
      </div>

      <div className="member-card-footer">
        <button
          type="button"
          className="btn-delete-member"
          onClick={() => onDelete(member.id)}
          title="Hapus Anggota"
        >
          <Trash2 size={12} /> Hapus
        </button>
      </div>
    </div>
  );
}

export default MemberCard;
