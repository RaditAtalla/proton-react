function StatCard({ icon, label, value, subtext, color = "default" }) {
  return (
    <div className={`stat-card stat-${color}`}>
      <div className="stat-card-header">
        <span className="stat-card-label">{label}</span>
        <div className={`stat-card-icon stat-icon-${color}`}>{icon}</div>
      </div>
      <div className="stat-card-value">{value}</div>
      {subtext && <div className="stat-card-subtext">{subtext}</div>}
    </div>
  );
}

export default StatCard;
