import { LayoutDashboard, CalendarDays, Users, Star } from "lucide-react";

function Sidebar({ currentView, setCurrentView, unassignedCount }) {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: "events",
      label: "Manajemen Event",
      icon: <CalendarDays size={18} />,
    },
    {
      id: "members",
      label: "Data Anggota",
      icon: <Users size={18} />,
      badge: unassignedCount > 0 ? unassignedCount : null,
    },
  ];

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div
        className="sidebar-brand"
        onClick={() => setCurrentView("dashboard")}
        role="button"
        tabIndex={0}
      >
        <div className="sidebar-logo">
          <Star size={20} fill="white" stroke="white" />
        </div>
        <div className="sidebar-brand-text">
          <span className="sidebar-brand-title">KPM Portal</span>
          <span className="sidebar-brand-sub">Telkom University</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar-nav-item ${currentView === item.id ? "active" : ""}`}
            onClick={() => setCurrentView(item.id)}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            <span className="sidebar-nav-label">{item.label}</span>
            {item.badge && (
              <span className="sidebar-nav-badge">{item.badge}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <p className="sidebar-footer-text">© 2026 KPM Telkom</p>
      </div>
    </aside>
  );
}

export default Sidebar;
