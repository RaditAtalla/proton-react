import { useState } from "react";
import { initialMembers, initialEvents } from "./data/initialData";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import DashboardView from "./views/DashboardView";
import EventManagementView from "./views/EventManagementView";
import MemberManagementView from "./views/MemberManagementView";

function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [members, setMembers] = useState(initialMembers);
  const [events, setEvents] = useState(initialEvents);
  const [toastMessage, setToastMessage] = useState("");

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3500);
  };

  const handleAddEvent = (newEvent) => {
    setEvents([newEvent, ...events]);
    showNotification(`✅ Event "${newEvent.title}" berhasil ditambahkan!`);
  };

  const handleDeleteEvent = (eventId) => {
    const eventToDelete = events.find((e) => e.id === eventId);
    if (!eventToDelete) return;

    if (eventToDelete.assignedMembers && eventToDelete.assignedMembers.length > 0) {
      const assignedIds = new Set(eventToDelete.assignedMembers.map((m) => m.id));
      setMembers((prevMembers) =>
        prevMembers.map((m) =>
          assignedIds.has(m.id)
            ? { ...m, eventsCount: Math.max(0, m.eventsCount - 1) }
            : m
        )
      );
    }

    setEvents(events.filter((e) => e.id !== eventId));
    showNotification(`🗑️ Event "${eventToDelete.title}" telah dihapus.`);
  };

  const handleRestoreDefaultEvents = () => {
    setEvents(initialEvents);
    showNotification("Data event default telah dipulihkan.");
  };

  const handleAddMember = (newMember) => {
    setMembers([newMember, ...members]);
    showNotification(`✅ Anggota baru "${newMember.name}" berhasil didaftarkan!`);
  };

  const handleDeleteMember = (memberId) => {
    const memberToDelete = members.find((m) => m.id === memberId);
    setMembers(members.filter((m) => m.id !== memberId));
    showNotification(`🗑️ Anggota "${memberToDelete?.name || ""}" telah dihapus.`);
  };

  const handleRestoreDefaultMembers = () => {
    setMembers(initialMembers);
    showNotification("Data anggota default telah dipulihkan.");
  };

  const handleGenerateTeam = (eventId) => {
    const targetEvent = events.find((e) => e.id === eventId);
    if (!targetEvent) return;

    const quota = targetEvent.requiredOfficers || 3;

    const seniors = members.filter(
      (m) => m.level === "Senior" || m.eventsCount > 0
    );

    if (members.length === 0) {
      showNotification("⚠️ Tidak ada data anggota yang tersedia untuk ditugaskan.");
      return;
    }

    const sortedSeniors = [...seniors].sort((a, b) => a.eventsCount - b.eventsCount);
    const seniorQuota = quota >= 4 ? 2 : 1;
    const selectedSeniors = sortedSeniors.slice(
      0,
      Math.min(seniorQuota, sortedSeniors.length)
    );
    const selectedSeniorIds = new Set(selectedSeniors.map((s) => s.id));

    const remainingCandidates = members
      .filter((m) => !selectedSeniorIds.has(m.id))
      .sort((a, b) => {
        if (a.eventsCount === 0 && b.eventsCount !== 0) return -1;
        if (b.eventsCount === 0 && a.eventsCount !== 0) return 1;
        return a.eventsCount - b.eventsCount;
      });

    const neededOthers = quota - selectedSeniors.length;
    const selectedOthers = remainingCandidates.slice(0, neededOthers);

    const specificRoles = [
      "Pedel / Pembawa Panji Senat",
      "Liaison Officer (LO Tamu VIP)",
      "Penerima Tamu & Registrasi",
      "Pembawa Acara (MC Protokol)",
      "Pengatur Barisan Prosesi"
    ];

    const generatedTeam = [
      ...selectedSeniors.map((senior, idx) => ({
        id: senior.id,
        name: senior.name,
        nim: senior.nim,
        level: senior.level,
        dutyRole:
          idx === 0
            ? "Koordinator / Mentor Acara"
            : "Wakil Koordinator Tim Protokol"
      })),
      ...selectedOthers.map((other, idx) => ({
        id: other.id,
        name: other.name,
        nim: other.nim,
        level: other.level,
        dutyRole: specificRoles[idx % specificRoles.length]
      }))
    ];

    if (targetEvent.assignedMembers && targetEvent.assignedMembers.length > 0) {
      const oldIds = new Set(targetEvent.assignedMembers.map((m) => m.id));
      setMembers((prev) =>
        prev.map((m) =>
          oldIds.has(m.id) ? { ...m, eventsCount: Math.max(0, m.eventsCount - 1) } : m
        )
      );
    }

    setEvents((prevEvents) =>
      prevEvents.map((evt) => {
        if (evt.id === eventId) {
          return {
            ...evt,
            status: "Siap Bertugas",
            assignedMembers: generatedTeam
          };
        }
        return evt;
      })
    );

    const newAssignedIds = new Set(generatedTeam.map((t) => t.id));
    setMembers((prevMembers) =>
      prevMembers.map((m) => {
        if (newAssignedIds.has(m.id)) {
          return { ...m, eventsCount: m.eventsCount + 1 };
        }
        return m;
      })
    );

    showNotification(
      `🎉 Berhasil! Tim petugas (${generatedTeam.length} orang) untuk "${targetEvent.title}" telah digenerate secara adil.`
    );
  };

  const handleResetTeam = (eventId) => {
    const targetEvent = events.find((e) => e.id === eventId);
    if (!targetEvent || !targetEvent.assignedMembers) return;

    const assignedIds = new Set(targetEvent.assignedMembers.map((m) => m.id));

    setMembers((prevMembers) =>
      prevMembers.map((m) =>
        assignedIds.has(m.id)
          ? { ...m, eventsCount: Math.max(0, m.eventsCount - 1) }
          : m
      )
    );

    setEvents((prevEvents) =>
      prevEvents.map((evt) => {
        if (evt.id === eventId) {
          return {
            ...evt,
            status: "Menunggu Penugasan",
            assignedMembers: []
          };
        }
        return evt;
      })
    );

    showNotification(`ℹ️ Penugasan petugas untuk "${targetEvent.title}" telah direset.`);
  };

  const unassignedCount = members.filter((m) => m.eventsCount === 0).length;

  return (
    <div className="app-layout">
      {toastMessage && (
        <div className="toast-notification animate-bounce">
          <span>{toastMessage}</span>
        </div>
      )}

      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        unassignedCount={unassignedCount}
      />

      <div className="app-body">
        <TopBar currentView={currentView} />

        <main className="main-content">
          {currentView === "dashboard" && (
            <DashboardView
              events={events}
              members={members}
              onNavigate={(view) => setCurrentView(view)}
              onGenerateEventTeam={handleGenerateTeam}
            />
          )}

          {currentView === "events" && (
            <EventManagementView
              events={events}
              onAddEvent={handleAddEvent}
              onDeleteEvent={handleDeleteEvent}
              onGenerateTeam={handleGenerateTeam}
              onResetTeam={handleResetTeam}
              onRestoreDefaultEvents={handleRestoreDefaultEvents}
            />
          )}

          {currentView === "members" && (
            <MemberManagementView
              members={members}
              onAddMember={handleAddMember}
              onDeleteMember={handleDeleteMember}
              onRestoreDefaultMembers={handleRestoreDefaultMembers}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
