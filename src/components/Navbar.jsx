function Navbar({ currentView, setCurrentView, unassignedCount }) {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-brand" onClick={() => setCurrentView("dashboard")} role="button" tabIndex={0}>
          <div className="brand-badge">KPM</div>
          <div className="brand-text">
            <span className="brand-title">KORPS PROTOKOL MAHASISWA</span>
            <span className="brand-subtitle">Telkom University • Sistem Penugasan Petugas</span>
          </div>
        </div>

        <nav className="nav-links">
          <button
            type="button"
            className={`nav-button ${currentView === "dashboard" ? "active" : ""}`}
            onClick={() => setCurrentView("dashboard")}
          >
            📊 Dashboard
          </button>
          <button
            type="button"
            className={`nav-button ${currentView === "events" ? "active" : ""}`}
            onClick={() => setCurrentView("events")}
          >
            📅 Manajemen Event
          </button>
          <button
            type="button"
            className={`nav-button ${currentView === "members" ? "active" : ""}`}
            onClick={() => setCurrentView("members")}
          >
            👥 Data Anggota
            {unassignedCount > 0 && (
              <span className="nav-counter" title={`${unassignedCount} anggota belum pernah bertugas`}>
                {unassignedCount}
              </span>
            )}
          </button>
        </nav>

        <div className="navbar-user-section">
          <div className="user-profile">
            <div className="user-avatar">P</div>
            <div className="user-details">
              <span className="user-name">PIC Protokol</span>
              <span className="user-role">Divisi Operasional</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
