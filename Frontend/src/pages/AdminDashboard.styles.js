import styled, { keyframes } from "styled-components";

/* ─────────────────────────────────────────
   SHELL / LAYOUT
───────────────────────────────────────── */

export const Shell = styled.div`
  display: flex;
  min-height: 100vh;
  background: #041019;
  font-family: "DM Sans", "Helvetica Neue", sans-serif;
  color: var(--text, #e8f4f0);
`;

/* ─────────────────────────────────────────
   SIDEBAR
───────────────────────────────────────── */

export const Sidebar = styled.aside`
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: rgba(6, 18, 28, 0.95);
  border-right: 1px solid rgba(142, 240, 215, 0.1);
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1.25rem 1.75rem;
  border-bottom: 1px solid rgba(142, 240, 215, 0.08);
  margin-bottom: 1.25rem;
`;

export const SidebarLogoMark = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #8ef0d7 0%, #00c896 100%);
  color: #03140f;
  font-weight: 900;
  font-size: 1.1rem;
  display: grid;
  place-items: center;
  flex-shrink: 0;
`;

export const SidebarLogoText = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: var(--text, #e8f4f0);
  letter-spacing: 0.02em;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 0.75rem;
  flex: 1;
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 0.9rem;
  border-radius: 12px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  color: ${({ $active }) => ($active ? "#8ef0d7" : "rgba(232,244,240,0.55)")};
  background: ${({ $active }) =>
    $active ? "rgba(142,240,215,0.1)" : "transparent"};
  border: ${({ $active }) =>
    $active ? "1px solid rgba(142,240,215,0.2)" : "1px solid transparent"};
  transition: all 0.18s ease;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: rgba(142, 240, 215, 0.07);
    color: #8ef0d7;
  }
`;

export const NavIcon = styled.span`
  font-size: 1rem;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
`;

export const NavLabel = styled.span``;

export const SidebarFooter = styled.div`
  padding: 1rem 1.25rem 0;
  border-top: 1px solid rgba(142, 240, 215, 0.08);
  margin-top: auto;
`;

export const SidebarAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

export const SidebarAvatarInitial = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(142, 240, 215, 0.3),
    rgba(0, 200, 150, 0.5)
  );
  border: 1px solid rgba(142, 240, 215, 0.3);
  color: #8ef0d7;
  font-size: 0.78rem;
  font-weight: 800;
  display: grid;
  place-items: center;
  flex-shrink: 0;
`;

export const SidebarAvatarInfo = styled.div`
  min-width: 0;
`;

export const SidebarAvatarName = styled.p`
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text, #e8f4f0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarAvatarRole = styled.p`
  font-size: 0.74rem;
  color: var(--muted, rgba(232, 244, 240, 0.45));
`;

/* ─────────────────────────────────────────
   MAIN / TOPBAR
───────────────────────────────────────── */

export const Main = styled.main`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid rgba(142, 240, 215, 0.08);
  background: rgba(6, 18, 28, 0.6);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TopbarLeft = styled.div``;

export const TopbarTitle = styled.h1`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text, #e8f4f0);
  margin: 0;
`;

export const TopbarSub = styled.p`
  font-size: 0.8rem;
  color: var(--muted, rgba(232, 244, 240, 0.45));
  margin-top: 0.15rem;
`;

export const TopbarRight = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(170, 182, 197, 0.15);
  color: var(--muted, rgba(232, 244, 240, 0.55));
  font-size: 1rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.18s;

  &:hover {
    background: rgba(142, 240, 215, 0.1);
    border-color: rgba(142, 240, 215, 0.2);
    color: #8ef0d7;
  }
`;

/* ─────────────────────────────────────────
   TOAST
───────────────────────────────────────── */

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Toast = styled.div`
  margin: 0.75rem 2rem;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  animation: ${slideIn} 0.22s ease;
  background: ${({ $tone }) =>
    $tone === "error" ? "rgba(239,68,68,0.12)" : "rgba(34,197,94,0.12)"};
  border: 1px solid
    ${({ $tone }) =>
      $tone === "error" ? "rgba(239,68,68,0.25)" : "rgba(34,197,94,0.25)"};
  color: ${({ $tone }) => ($tone === "error" ? "#fda4af" : "#86efac")};
`;

/* ─────────────────────────────────────────
   PAGE BODY
───────────────────────────────────────── */

export const PageBody = styled.div`
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

/* ─────────────────────────────────────────
   STAT CARDS
───────────────────────────────────────── */

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: rgba(9, 22, 33, 0.9);
  border: 1px solid rgba(142, 240, 215, 0.1);
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(142, 240, 215, 0.22);
  }
`;

const iconColors = {
  teal: "rgba(0,200,150,0.15)",
  blue: "rgba(59,130,246,0.15)",
  amber: "rgba(245,158,11,0.15)",
  green: "rgba(34,197,94,0.15)",
};
const iconTextColors = {
  teal: "#8ef0d7",
  blue: "#93c5fd",
  amber: "#fcd34d",
  green: "#86efac",
};

export const StatIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${({ $color }) => iconColors[$color] || iconColors.teal};
  color: ${({ $color }) => iconTextColors[$color] || iconTextColors.teal};
  font-size: 1.2rem;
  display: grid;
  place-items: center;
  flex-shrink: 0;
`;

export const StatBody = styled.div`
  min-width: 0;
`;

export const StatLabel = styled.p`
  font-size: 0.78rem;
  color: var(--muted, rgba(232, 244, 240, 0.45));
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
`;

export const StatValue = styled.h2`
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.3rem;
  color: var(--text, #e8f4f0);
`;

export const StatTrend = styled.p`
  font-size: 0.76rem;
  color: var(--muted, rgba(232, 244, 240, 0.4));
`;

/* ─────────────────────────────────────────
   GRID ROW (pipeline + optional future card)
───────────────────────────────────────── */

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const DualGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const PipelineCard = styled.div`
  background: rgba(9, 22, 33, 0.9);
  border: 1px solid rgba(142, 240, 215, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
`;

export const PipelineCardHeader = styled.div`
  margin-bottom: 1.25rem;
`;

export const CardKicker = styled.p`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8ef0d7;
  margin-bottom: 0.3rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text, #e8f4f0);
`;

export const PipelineRows = styled.div`
  display: grid;
  gap: 0.9rem;
`;

export const PipelineItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 36px;
  gap: 0.75rem;
  align-items: center;
`;

export const PipelineItemLabel = styled.span`
  font-size: 0.85rem;
  color: var(--text, #e8f4f0);
  font-weight: 500;
`;

export const PipelineTrack = styled.div`
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  overflow: hidden;
`;

export const PipelineFill = styled.div`
  height: 100%;
  width: ${({ $width }) => $width}%;
  min-width: ${({ $width }) => ($width > 0 ? "8px" : "0")};
  border-radius: inherit;
  transition: width 0.6s ease;
  background: ${({ $status }) => {
    if ($status === "completed")
      return "linear-gradient(90deg, #16a34a, #86efac)";
    if ($status === "contacted")
      return "linear-gradient(90deg, #2563eb, #93c5fd)";
    if ($status === "in-progress")
      return "linear-gradient(90deg, #d97706, #fcd34d)";
    if ($status === "closed") return "linear-gradient(90deg, #dc2626, #fda4af)";
    return "linear-gradient(90deg, #0f766e, #8ef0d7)";
  }};
`;

export const PipelineCount = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text, #e8f4f0);
  text-align: right;
`;

export const SnapshotList = styled.div`
  display: grid;
  gap: 0.9rem;
`;

export const SnapshotItem = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(142, 240, 215, 0.08);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.9rem 1rem;
  display: grid;
  gap: 0.25rem;
`;

export const SnapshotTitle = styled.p`
  color: var(--text, #e8f4f0);
  font-weight: 600;
  font-size: 0.92rem;
`;

export const SnapshotMeta = styled.p`
  color: var(--muted, rgba(232, 244, 240, 0.45));
  font-size: 0.8rem;
`;

/* ─────────────────────────────────────────
   LEADS TABLE
───────────────────────────────────────── */

export const LeadsSection = styled.div`
  background: rgba(9, 22, 33, 0.9);
  border: 1px solid rgba(142, 240, 215, 0.1);
  border-radius: 16px;
  overflow: hidden;
`;

export const LeadsSectionHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(142, 240, 215, 0.08);
`;

export const LeadsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr`
  border-bottom: 1px solid rgba(142, 240, 215, 0.08);
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.85rem 1.25rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted, rgba(232, 244, 240, 0.45));
  font-weight: 600;
  white-space: nowrap;
`;

export const TableBody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid rgba(142, 240, 215, 0.06);
  transition: background 0.15s;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: rgba(142, 240, 215, 0.04);
  }
`;

export const Td = styled.td`
  padding: 1rem 1.25rem;
  font-size: 0.88rem;
  color: var(--text, #e8f4f0);
  vertical-align: middle;
`;

export const NameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

export const NameText = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text, #e8f4f0);
`;

export const NameSub = styled.p`
  font-size: 0.78rem;
  color: var(--muted, rgba(232, 244, 240, 0.45));
  margin-top: 0.1rem;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
  background: ${({ $status }) => {
    if ($status === "completed") return "rgba(34,197,94,0.14)";
    if ($status === "contacted") return "rgba(59,130,246,0.14)";
    if ($status === "in-progress") return "rgba(245,158,11,0.14)";
    if ($status === "closed") return "rgba(239,68,68,0.14)";
    return "rgba(142,240,215,0.14)";
  }};
  color: ${({ $status }) => {
    if ($status === "completed") return "#86efac";
    if ($status === "contacted") return "#93c5fd";
    if ($status === "in-progress") return "#fcd34d";
    if ($status === "closed") return "#fda4af";
    return "#8ef0d7";
  }};
`;

export const ActionsCell = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StatusSelect = styled.select`
  background: rgba(5, 14, 21, 0.9);
  border: 1px solid rgba(170, 182, 197, 0.18);
  color: var(--text, #e8f4f0);
  border-radius: 10px;
  padding: 0.45rem 0.65rem;
  font-size: 0.82rem;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: rgba(0, 200, 150, 0.5);
  }
`;

export const SaveBtn = styled.button`
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  background: linear-gradient(135deg, #8ef0d7, #00c896);
  color: #03140f;
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition:
    opacity 0.18s,
    transform 0.18s;

  &:hover:not(:disabled) {
    opacity: 0.88;
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const EmptyRow = styled.div`
  padding: 3rem;
  text-align: center;
  color: var(--muted, rgba(232, 244, 240, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

const spin = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;

export const Spinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(142, 240, 215, 0.3);
  border-top-color: #8ef0d7;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

export const SectionPanel = styled.div`
  background: rgba(9, 22, 33, 0.9);
  border: 1px solid rgba(142, 240, 215, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SectionText = styled.div`
  display: grid;
  gap: 0.25rem;
`;

export const SectionSubtext = styled.p`
  color: var(--muted, rgba(232, 244, 240, 0.45));
  font-size: 0.84rem;
`;

export const ClientLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 0.95fr) minmax(0, 1.35fr);
  gap: 1rem;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const ClientForm = styled.form`
  display: grid;
  gap: 0.9rem;
`;

export const ClientFieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldLabel = styled.label`
  display: grid;
  gap: 0.4rem;
  color: var(--muted, rgba(232, 244, 240, 0.55));
  font-size: 0.82rem;
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(5, 14, 21, 0.9);
  border: 1px solid rgba(170, 182, 197, 0.18);
  color: var(--text, #e8f4f0);
  border-radius: 12px;
  padding: 0.8rem 0.95rem;
  font-size: 0.88rem;
  outline: none;

  &:focus {
    border-color: rgba(0, 200, 150, 0.45);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 110px;
  resize: vertical;
  background: rgba(5, 14, 21, 0.9);
  border: 1px solid rgba(170, 182, 197, 0.18);
  color: var(--text, #e8f4f0);
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-size: 0.88rem;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: rgba(0, 200, 150, 0.45);
  }
`;

export const ClientList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const ClientCard = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(142, 240, 215, 0.1);
  background: rgba(255, 255, 255, 0.03);
  padding: 1.1rem;
  display: grid;
  gap: 1rem;
`;

export const ClientCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ClientNameBlock = styled.div`
  display: grid;
  gap: 0.2rem;
`;

export const ClientName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text, #e8f4f0);
`;

export const ClientCompany = styled.p`
  color: var(--muted, rgba(232, 244, 240, 0.45));
  font-size: 0.84rem;
`;

export const ClientMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.32rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--muted, rgba(232, 244, 240, 0.65));
  font-size: 0.76rem;
`;

export const ClientSplit = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.95fr);
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const HistoryPanel = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(142, 240, 215, 0.08);
  background: rgba(255, 255, 255, 0.025);
  padding: 0.9rem;
  display: grid;
  gap: 0.8rem;
`;

export const HistoryList = styled.div`
  display: grid;
  gap: 0.7rem;
  max-height: 260px;
  overflow-y: auto;
  padding-right: 0.15rem;
`;

export const HistoryItem = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(142, 240, 215, 0.08);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.8rem;
  display: grid;
  gap: 0.35rem;
`;

export const HistoryNote = styled.p`
  color: var(--text, #e8f4f0);
  font-size: 0.85rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const HistoryDate = styled.p`
  color: var(--muted, rgba(232, 244, 240, 0.45));
  font-size: 0.74rem;
`;

export const InlineActions = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;
`;

/* ─────────────────────────────────────────
   DRAWER
───────────────────────────────────────── */

export const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 40;
  backdrop-filter: blur(3px);
`;

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(440px, 100vw);
  background: #070f18;
  border-left: 1px solid rgba(142, 240, 215, 0.15);
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1.5rem;
  gap: 1.25rem;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const DrawerClose = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(170, 182, 197, 0.15);
  color: var(--muted, rgba(232, 244, 240, 0.55));
  font-size: 0.85rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: rgba(239, 68, 68, 0.12);
    border-color: rgba(239, 68, 68, 0.25);
    color: #fda4af;
  }
`;

export const DrawerSection = styled.div`
  display: grid;
  gap: 0.3rem;
`;

export const DrawerLabel = styled.p`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted, rgba(232, 244, 240, 0.4));
`;

export const DrawerValue = styled.p`
  font-size: 0.9rem;
  color: var(--text, #e8f4f0);
  line-height: 1.5;
`;

export const DrawerTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: vertical;
  background: rgba(5, 14, 21, 0.9);
  border: 1px solid rgba(170, 182, 197, 0.18);
  border-radius: 12px;
  color: var(--text, #e8f4f0);
  padding: 0.85rem 1rem;
  font-size: 0.88rem;
  outline: none;
  font-family: inherit;
  margin-top: 0.4rem;

  &:focus {
    border-color: rgba(0, 200, 150, 0.5);
  }
`;

export const DrawerFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(142, 240, 215, 0.08);
`;
