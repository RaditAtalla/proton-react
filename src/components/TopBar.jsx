import { UserCircle, ChevronDown } from "lucide-react";

function TopBar({ currentView }) {
  const viewTitles = {
    dashboard: "Dashboard",
    events: "Manajemen Event",
    members: "Data Anggota",
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h2 className="topbar-page-title">{viewTitles[currentView] || "Dashboard"}</h2>
      </div>
      <div className="topbar-right">
        <div className="topbar-user">
          <div className="topbar-user-avatar">
            <UserCircle size={22} strokeWidth={1.8} />
          </div>
          <div className="topbar-user-info">
            <span className="topbar-user-name">PIC Protokol</span>
            <span className="topbar-user-role">Divisi Operasional</span>
          </div>
          <span className="topbar-user-badge">ID</span>
          <ChevronDown size={14} color="var(--slate-400)" />
        </div>
      </div>
    </header>
  );
}

export default TopBar;
