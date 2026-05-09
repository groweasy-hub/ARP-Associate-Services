import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addClientHistory,
  clearAdminAuth,
  createClient,
  fetchClients,
  fetchLeads,
  getStoredAdminAuth,
  updateClient,
  updateLead,
} from "../utils/adminApi";
import {
  ActionsCell,
  Badge,
  CardKicker,
  CardTitle,
  ClientCard,
  ClientCardTop,
  ClientCompany,
  ClientFieldGrid,
  ClientForm,
  ClientLayout,
  ClientList,
  ClientMeta,
  ClientName,
  ClientNameBlock,
  ClientSplit,
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerLabel,
  DrawerOverlay,
  DrawerSection,
  DrawerTextarea,
  DrawerValue,
  DualGrid,
  EmptyRow,
  FieldLabel,
  HistoryDate,
  HistoryItem,
  HistoryList,
  HistoryNote,
  HistoryPanel,
  IconButton,
  InlineActions,
  Input,
  LeadsSection,
  LeadsSectionHeader,
  LeadsTable,
  Main,
  MetaPill,
  NameCell,
  NameSub,
  NameText,
  NavIcon,
  NavItem,
  NavLabel,
  PageBody,
  PipelineCard,
  PipelineCardHeader,
  PipelineCount,
  PipelineFill,
  PipelineItem,
  PipelineItemLabel,
  PipelineRows,
  PipelineTrack,
  SaveBtn,
  SectionHeader,
  SectionPanel,
  SectionSubtext,
  SectionText,
  Shell,
  Sidebar,
  SidebarAvatar,
  SidebarAvatarInfo,
  SidebarAvatarInitial,
  SidebarAvatarName,
  SidebarAvatarRole,
  SidebarFooter,
  SidebarLogo,
  SidebarLogoMark,
  SidebarLogoText,
  SidebarNav,
  SnapshotItem,
  SnapshotList,
  SnapshotMeta,
  SnapshotTitle,
  Spinner,
  StatBody,
  StatCard,
  StatIcon,
  StatLabel,
  StatTrend,
  StatsRow,
  StatValue,
  StatusSelect,
  TableBody,
  TableHead,
  TableHeadRow,
  Td,
  Textarea,
  Th,
  Toast,
  Topbar,
  TopbarLeft,
  TopbarRight,
  TopbarSub,
  TopbarTitle,
  Tr,
} from "./AdminDashboard.styles";

const LEAD_STATUS_OPTIONS = ["new", "contacted", "in-progress", "completed", "closed"];
const LEAD_STATUS_LABELS = {
  new: "New",
  contacted: "Contacted",
  "in-progress": "In Progress",
  completed: "Completed",
  closed: "Closed",
};

const CLIENT_STATUS_OPTIONS = ["onboarding", "active", "completed", "inactive"];
const CLIENT_STATUS_LABELS = {
  onboarding: "Onboarding",
  active: "Active",
  completed: "Completed",
  inactive: "Inactive",
};

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "[]" },
  { id: "leads", label: "Leads", icon: "O" },
  { id: "clients", label: "Clients", icon: "#" },
];

const initialClientForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  status: "onboarding",
  remarks: "",
  initialHistory: "",
};

const formatDate = (value) =>
  new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

const getInitials = (name = "") =>
  name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const AdminDashboard = () => {
  const navigate = useNavigate();
  const auth = useMemo(() => getStoredAdminAuth(), []);

  const [leads, setLeads] = useState([]);
  const [clients, setClients] = useState([]);
  const [leadDrafts, setLeadDrafts] = useState({});
  const [clientDrafts, setClientDrafts] = useState({});
  const [clientHistoryDrafts, setClientHistoryDrafts] = useState({});
  const [clientForm, setClientForm] = useState(initialClientForm);
  const [loading, setLoading] = useState(true);
  const [clientsLoading, setClientsLoading] = useState(true);
  const [toast, setToast] = useState({ text: "", tone: "" });
  const [savingId, setSavingId] = useState("");
  const [clientSavingId, setClientSavingId] = useState("");
  const [clientHistorySavingId, setClientHistorySavingId] = useState("");
  const [creatingClient, setCreatingClient] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");
  const [drawerLead, setDrawerLead] = useState(null);

  const leadStats = useMemo(() => {
    const counts = LEAD_STATUS_OPTIONS.reduce((accumulator, status) => {
      accumulator[status] = 0;
      return accumulator;
    }, {});

    for (const lead of leads) {
      if (counts[lead.status] !== undefined) {
        counts[lead.status] += 1;
      }
    }

    const total = leads.length;
    const active = counts.new + counts.contacted + counts["in-progress"];
    const rate = total === 0 ? 0 : Math.round((counts.completed / total) * 100);

    return { total, active, rate, counts };
  }, [leads]);

  const clientStats = useMemo(() => {
    const counts = CLIENT_STATUS_OPTIONS.reduce((accumulator, status) => {
      accumulator[status] = 0;
      return accumulator;
    }, {});

    for (const client of clients) {
      if (counts[client.status] !== undefined) {
        counts[client.status] += 1;
      }
    }

    return {
      total: clients.length,
      active: counts.active,
      onboarding: counts.onboarding,
      completed: counts.completed,
      counts,
    };
  }, [clients]);

  const showToast = (text, tone = "success") => {
    setToast({ text, tone });
    setTimeout(() => setToast({ text: "", tone: "" }), 3500);
  };

  const handleAuthError = useCallback((message) => {
    if (/authorized|token/i.test(message)) {
      clearAdminAuth();
      navigate("/admin/login", { replace: true });
      return true;
    }

    return false;
  }, [navigate]);

  useEffect(() => {
    document.title = "Admin Dashboard | ARP";
  }, []);

  useEffect(() => {
    if (!auth?.token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    const load = async () => {
      setLoading(true);
      setClientsLoading(true);

      try {
        const [leadData, clientData] = await Promise.all([fetchLeads(), fetchClients()]);
        setLeads(leadData);
        setClients(clientData);
      } catch (error) {
        if (handleAuthError(error.message)) {
          return;
        }

        showToast(error.message || "Unable to load admin data.", "error");
      } finally {
        setLoading(false);
        setClientsLoading(false);
      }
    };

    load();
  }, [auth, handleAuthError, navigate]);

  const handleLogout = () => {
    clearAdminAuth();
    navigate("/admin/login", { replace: true });
  };

  const handleLeadDraftChange = (leadId, field, value) => {
    setLeadDrafts((current) => ({
      ...current,
      [leadId]: {
        status:
          current[leadId]?.status ??
          leads.find((lead) => lead._id === leadId)?.status ??
          "new",
        notes:
          current[leadId]?.notes ??
          leads.find((lead) => lead._id === leadId)?.notes ??
          "",
        [field]: value,
      },
    }));
  };

  const handleLeadSave = async (leadId) => {
    const currentLead = leads.find((lead) => lead._id === leadId);

    if (!currentLead) {
      return;
    }

    const draft = leadDrafts[leadId] || {
      status: currentLead.status,
      notes: currentLead.notes || "",
    };

    setSavingId(leadId);

    try {
      const updatedLead = await updateLead(leadId, draft);
      setLeads((current) => current.map((lead) => (lead._id === leadId ? updatedLead : lead)));
      setLeadDrafts((current) => {
        const next = { ...current };
        delete next[leadId];
        return next;
      });

      if (drawerLead?._id === leadId) {
        setDrawerLead(updatedLead);
      }

      showToast("Lead updated successfully.");
    } catch (error) {
      if (handleAuthError(error.message)) {
        return;
      }

      showToast(error.message || "Unable to update lead.", "error");
    } finally {
      setSavingId("");
    }
  };

  const handleClientFormChange = (field) => (event) => {
    setClientForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleCreateClient = async (event) => {
    event.preventDefault();
    setCreatingClient(true);

    try {
      const createdClient = await createClient(clientForm);
      setClients((current) => [createdClient, ...current]);
      setClientForm(initialClientForm);
      setActiveNav("clients");
      showToast("Client added successfully.");
    } catch (error) {
      if (handleAuthError(error.message)) {
        return;
      }

      showToast(error.message || "Unable to create client.", "error");
    } finally {
      setCreatingClient(false);
    }
  };

  const handleClientDraftChange = (clientId, field, value) => {
    setClientDrafts((current) => ({
      ...current,
      [clientId]: {
        name: current[clientId]?.name ?? clients.find((client) => client._id === clientId)?.name ?? "",
        company:
          current[clientId]?.company ?? clients.find((client) => client._id === clientId)?.company ?? "",
        email: current[clientId]?.email ?? clients.find((client) => client._id === clientId)?.email ?? "",
        phone: current[clientId]?.phone ?? clients.find((client) => client._id === clientId)?.phone ?? "",
        service:
          current[clientId]?.service ?? clients.find((client) => client._id === clientId)?.service ?? "",
        status:
          current[clientId]?.status ?? clients.find((client) => client._id === clientId)?.status ?? "onboarding",
        remarks:
          current[clientId]?.remarks ?? clients.find((client) => client._id === clientId)?.remarks ?? "",
        [field]: value,
      },
    }));
  };

  const handleClientSave = async (clientId) => {
    const currentClient = clients.find((client) => client._id === clientId);

    if (!currentClient) {
      return;
    }

    const draft = clientDrafts[clientId] || {
      name: currentClient.name,
      company: currentClient.company,
      email: currentClient.email,
      phone: currentClient.phone,
      service: currentClient.service,
      status: currentClient.status,
      remarks: currentClient.remarks || "",
    };

    setClientSavingId(clientId);

    try {
      const updatedClient = await updateClient(clientId, draft);
      setClients((current) =>
        current.map((client) => (client._id === clientId ? updatedClient : client))
      );
      setClientDrafts((current) => {
        const next = { ...current };
        delete next[clientId];
        return next;
      });
      showToast("Client updated successfully.");
    } catch (error) {
      if (handleAuthError(error.message)) {
        return;
      }

      showToast(error.message || "Unable to update client.", "error");
    } finally {
      setClientSavingId("");
    }
  };

  const handleClientHistorySave = async (clientId) => {
    const note = (clientHistoryDrafts[clientId] || "").trim();

    if (!note) {
      showToast("Please enter a history note first.", "error");
      return;
    }

    setClientHistorySavingId(clientId);

    try {
      const updatedClient = await addClientHistory(clientId, note);
      setClients((current) =>
        current.map((client) => (client._id === clientId ? updatedClient : client))
      );
      setClientHistoryDrafts((current) => ({
        ...current,
        [clientId]: "",
      }));
      showToast("Client history updated successfully.");
    } catch (error) {
      if (handleAuthError(error.message)) {
        return;
      }

      showToast(error.message || "Unable to update client history.", "error");
    } finally {
      setClientHistorySavingId("");
    }
  };

  const openDrawer = (lead) => setDrawerLead(lead);
  const closeDrawer = () => setDrawerLead(null);

  const adminName = auth?.admin?.name || "Admin";
  const topbarTitle =
    activeNav === "leads"
      ? "Leads"
      : activeNav === "clients"
        ? "Clients"
        : "Dashboard";

  const renderLeadsTable = (rows) => (
    <LeadsTable>
      <TableHead>
        <TableHeadRow>
          <Th>Lead</Th>
          <Th>Service</Th>
          <Th>Received</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {loading ? (
          <tr>
            <td colSpan={5}>
              <EmptyRow>
                <Spinner /> Loading leads...
              </EmptyRow>
            </td>
          </tr>
        ) : rows.length === 0 ? (
          <tr>
            <td colSpan={5}>
              <EmptyRow>No leads yet. Submissions will appear here.</EmptyRow>
            </td>
          </tr>
        ) : (
          rows.map((lead) => {
            const draft = leadDrafts[lead._id];
            const statusValue = draft?.status ?? lead.status;

            return (
              <Tr key={lead._id} onClick={() => openDrawer(lead)}>
                <Td>
                  <NameCell>
                    <SidebarAvatarInitial style={{ flexShrink: 0 }}>
                      {getInitials(lead.name)}
                    </SidebarAvatarInitial>
                    <div>
                      <NameText>{lead.name}</NameText>
                      <NameSub>{lead.email}</NameSub>
                    </div>
                  </NameCell>
                </Td>
                <Td>{lead.service || "-"}</Td>
                <Td>{formatDate(lead.createdAt)}</Td>
                <Td>
                  <Badge $status={lead.status}>{LEAD_STATUS_LABELS[lead.status]}</Badge>
                </Td>
                <Td onClick={(event) => event.stopPropagation()}>
                  <ActionsCell>
                    <StatusSelect
                      value={statusValue}
                      onChange={(event) =>
                        handleLeadDraftChange(lead._id, "status", event.target.value)
                      }
                    >
                      {LEAD_STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {LEAD_STATUS_LABELS[status]}
                        </option>
                      ))}
                    </StatusSelect>
                    <SaveBtn
                      disabled={savingId === lead._id}
                      onClick={() => handleLeadSave(lead._id)}
                    >
                      {savingId === lead._id ? "..." : "Save"}
                    </SaveBtn>
                  </ActionsCell>
                </Td>
              </Tr>
            );
          })
        )}
      </TableBody>
    </LeadsTable>
  );

  const renderDashboardView = () => (
    <>
      <StatsRow>
        <StatCard>
          <StatIcon $color="teal">*</StatIcon>
          <StatBody>
            <StatLabel>Total Leads</StatLabel>
            <StatValue>{leadStats.total}</StatValue>
            <StatTrend>All enquiries received</StatTrend>
          </StatBody>
        </StatCard>
        <StatCard>
          <StatIcon $color="blue">+</StatIcon>
          <StatBody>
            <StatLabel>Active Pipeline</StatLabel>
            <StatValue>{leadStats.active}</StatValue>
            <StatTrend>New, contacted, and in progress</StatTrend>
          </StatBody>
        </StatCard>
        <StatCard>
          <StatIcon $color="amber">@</StatIcon>
          <StatBody>
            <StatLabel>Total Clients</StatLabel>
            <StatValue>{clientStats.total}</StatValue>
            <StatTrend>Clients added by the admin team</StatTrend>
          </StatBody>
        </StatCard>
        <StatCard>
          <StatIcon $color="green">=</StatIcon>
          <StatBody>
            <StatLabel>Active Clients</StatLabel>
            <StatValue>{clientStats.active}</StatValue>
            <StatTrend>{clientStats.completed} completed client records</StatTrend>
          </StatBody>
        </StatCard>
      </StatsRow>

      <DualGrid>
        <PipelineCard>
          <PipelineCardHeader>
            <CardKicker>Lead Flow</CardKicker>
            <CardTitle>Status Breakdown</CardTitle>
          </PipelineCardHeader>
          <PipelineRows>
            {LEAD_STATUS_OPTIONS.map((status) => {
              const count = leadStats.counts[status];
              const width =
                leadStats.total === 0 ? 0 : Math.max((count / leadStats.total) * 100, 0);

              return (
                <PipelineItem key={status}>
                  <PipelineItemLabel>{LEAD_STATUS_LABELS[status]}</PipelineItemLabel>
                  <PipelineTrack>
                    <PipelineFill $status={status} $width={width} />
                  </PipelineTrack>
                  <PipelineCount>{count}</PipelineCount>
                </PipelineItem>
              );
            })}
          </PipelineRows>
        </PipelineCard>

        <PipelineCard>
          <PipelineCardHeader>
            <CardKicker>Clients</CardKicker>
            <CardTitle>Recent Client Snapshot</CardTitle>
          </PipelineCardHeader>
          <SnapshotList>
            {clientsLoading ? (
              <EmptyRow>
                <Spinner /> Loading clients...
              </EmptyRow>
            ) : clients.length === 0 ? (
              <EmptyRow>No clients added yet.</EmptyRow>
            ) : (
              clients.slice(0, 4).map((client) => (
                <SnapshotItem key={client._id}>
                  <SnapshotTitle>{client.name}</SnapshotTitle>
                  <SnapshotMeta>
                    {client.company} · {CLIENT_STATUS_LABELS[client.status]}
                  </SnapshotMeta>
                  <SnapshotMeta>{client.service}</SnapshotMeta>
                </SnapshotItem>
              ))
            )}
          </SnapshotList>
        </PipelineCard>
      </DualGrid>

      <LeadsSection>
        <LeadsSectionHeader>
          <div>
            <CardKicker>Recent Leads</CardKicker>
            <CardTitle>Latest enquiries</CardTitle>
          </div>
          <SaveBtn type="button" onClick={() => setActiveNav("leads")}>
            Open Leads
          </SaveBtn>
        </LeadsSectionHeader>
        {renderLeadsTable(leads.slice(0, 5))}
      </LeadsSection>
    </>
  );

  const renderLeadsView = () => (
    <LeadsSection>
      <LeadsSectionHeader>
        <div>
          <CardKicker>Lead Manager</CardKicker>
          <CardTitle>All Leads ({leadStats.total})</CardTitle>
        </div>
      </LeadsSectionHeader>
      {renderLeadsTable(leads)}
    </LeadsSection>
  );

  const renderClientsView = () => (
    <ClientLayout>
      <SectionPanel>
        <SectionHeader>
          <SectionText>
            <CardKicker>Clients</CardKicker>
            <CardTitle>Add Client</CardTitle>
            <SectionSubtext>
              Fill the required client fields and create a client record from the admin dashboard.
            </SectionSubtext>
          </SectionText>
        </SectionHeader>

        <ClientForm onSubmit={handleCreateClient}>
          <ClientFieldGrid>
            <FieldLabel>
              Client Name *
              <Input
                value={clientForm.name}
                onChange={handleClientFormChange("name")}
                placeholder="Enter client name"
                required
                disabled={creatingClient}
              />
            </FieldLabel>
            <FieldLabel>
              Company *
              <Input
                value={clientForm.company}
                onChange={handleClientFormChange("company")}
                placeholder="Enter company name"
                required
                disabled={creatingClient}
              />
            </FieldLabel>
            <FieldLabel>
              Email *
              <Input
                type="email"
                value={clientForm.email}
                onChange={handleClientFormChange("email")}
                placeholder="client@example.com"
                required
                disabled={creatingClient}
              />
            </FieldLabel>
            <FieldLabel>
              Phone *
              <Input
                value={clientForm.phone}
                onChange={handleClientFormChange("phone")}
                placeholder="Enter phone number"
                required
                disabled={creatingClient}
              />
            </FieldLabel>
            <FieldLabel>
              Service *
              <Input
                value={clientForm.service}
                onChange={handleClientFormChange("service")}
                placeholder="Service provided"
                required
                disabled={creatingClient}
              />
            </FieldLabel>
            <FieldLabel>
              Client Status
              <StatusSelect
                value={clientForm.status}
                onChange={handleClientFormChange("status")}
                disabled={creatingClient}
              >
                {CLIENT_STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {CLIENT_STATUS_LABELS[status]}
                  </option>
                ))}
              </StatusSelect>
            </FieldLabel>
          </ClientFieldGrid>

          <FieldLabel>
            Admin Remarks
            <Textarea
              value={clientForm.remarks}
              onChange={handleClientFormChange("remarks")}
              placeholder="Internal summary, scope, or account notes"
              disabled={creatingClient}
            />
          </FieldLabel>

          <FieldLabel>
            Initial History Note
            <Textarea
              value={clientForm.initialHistory}
              onChange={handleClientFormChange("initialHistory")}
              placeholder="First onboarding note, kickoff summary, or starting history entry"
              disabled={creatingClient}
            />
          </FieldLabel>

          <InlineActions>
            <SaveBtn type="submit" disabled={creatingClient}>
              {creatingClient ? "Creating..." : "Add Client"}
            </SaveBtn>
          </InlineActions>
        </ClientForm>
      </SectionPanel>

      <SectionPanel>
        <SectionHeader>
          <SectionText>
            <CardKicker>Client Manager</CardKicker>
            <CardTitle>All Clients ({clientStats.total})</CardTitle>
            <SectionSubtext>
              Update client details, track remarks, and append client history entries over time.
            </SectionSubtext>
          </SectionText>
        </SectionHeader>

        <ClientList>
          {clientsLoading ? (
            <EmptyRow>
              <Spinner /> Loading clients...
            </EmptyRow>
          ) : clients.length === 0 ? (
            <EmptyRow>No clients added yet.</EmptyRow>
          ) : (
            clients.map((client) => {
              const draft = clientDrafts[client._id] || {};
              const historyDraft = clientHistoryDrafts[client._id] || "";

              return (
                <ClientCard key={client._id}>
                  <ClientCardTop>
                    <ClientNameBlock>
                      <ClientName>{draft.name ?? client.name}</ClientName>
                      <ClientCompany>{draft.company ?? client.company}</ClientCompany>
                      <ClientMeta>
                        <MetaPill>{draft.email ?? client.email}</MetaPill>
                        <MetaPill>{draft.phone ?? client.phone}</MetaPill>
                        <MetaPill>{draft.service ?? client.service}</MetaPill>
                        <MetaPill>Added {formatDate(client.createdAt)}</MetaPill>
                      </ClientMeta>
                    </ClientNameBlock>

                    <Badge $status={(draft.status ?? client.status) === "active" ? "completed" : "contacted"}>
                      {CLIENT_STATUS_LABELS[draft.status ?? client.status]}
                    </Badge>
                  </ClientCardTop>

                  <ClientSplit>
                    <div style={{ display: "grid", gap: "0.9rem" }}>
                      <ClientFieldGrid>
                        <FieldLabel>
                          Client Name
                          <Input
                            value={draft.name ?? client.name}
                            onChange={(event) =>
                              handleClientDraftChange(client._id, "name", event.target.value)
                            }
                          />
                        </FieldLabel>
                        <FieldLabel>
                          Company
                          <Input
                            value={draft.company ?? client.company}
                            onChange={(event) =>
                              handleClientDraftChange(client._id, "company", event.target.value)
                            }
                          />
                        </FieldLabel>
                        <FieldLabel>
                          Email
                          <Input
                            type="email"
                            value={draft.email ?? client.email}
                            onChange={(event) =>
                              handleClientDraftChange(client._id, "email", event.target.value)
                            }
                          />
                        </FieldLabel>
                        <FieldLabel>
                          Phone
                          <Input
                            value={draft.phone ?? client.phone}
                            onChange={(event) =>
                              handleClientDraftChange(client._id, "phone", event.target.value)
                            }
                          />
                        </FieldLabel>
                        <FieldLabel>
                          Service
                          <Input
                            value={draft.service ?? client.service}
                            onChange={(event) =>
                              handleClientDraftChange(client._id, "service", event.target.value)
                            }
                          />
                        </FieldLabel>
                        <FieldLabel>
                          Status
                          <StatusSelect
                            value={draft.status ?? client.status}
                            onChange={(event) =>
                              handleClientDraftChange(client._id, "status", event.target.value)
                            }
                          >
                            {CLIENT_STATUS_OPTIONS.map((status) => (
                              <option key={status} value={status}>
                                {CLIENT_STATUS_LABELS[status]}
                              </option>
                            ))}
                          </StatusSelect>
                        </FieldLabel>
                      </ClientFieldGrid>

                      <FieldLabel>
                        Admin Remarks
                        <Textarea
                          value={draft.remarks ?? client.remarks ?? ""}
                          onChange={(event) =>
                            handleClientDraftChange(client._id, "remarks", event.target.value)
                          }
                          placeholder="Project notes, account remarks, relationship summary..."
                        />
                      </FieldLabel>

                      <InlineActions>
                        <SaveBtn
                          type="button"
                          disabled={clientSavingId === client._id}
                          onClick={() => handleClientSave(client._id)}
                        >
                          {clientSavingId === client._id ? "Saving..." : "Save Client"}
                        </SaveBtn>
                      </InlineActions>
                    </div>

                    <HistoryPanel>
                      <div>
                        <CardKicker>History</CardKicker>
                        <CardTitle>Client Timeline</CardTitle>
                      </div>

                      <HistoryList>
                        {client.history.length === 0 ? (
                          <EmptyRow>No history added yet.</EmptyRow>
                        ) : (
                          client.history.map((item) => (
                            <HistoryItem key={item._id || `${client._id}-${item.createdAt}`}>
                              <HistoryNote>{item.note}</HistoryNote>
                              <HistoryDate>{formatDate(item.createdAt)}</HistoryDate>
                            </HistoryItem>
                          ))
                        )}
                      </HistoryList>

                      <FieldLabel>
                        Add History Note
                        <Textarea
                          value={historyDraft}
                          onChange={(event) =>
                            setClientHistoryDrafts((current) => ({
                              ...current,
                              [client._id]: event.target.value,
                            }))
                          }
                          placeholder="Add a new client update, meeting note, delivery update, or follow-up record"
                        />
                      </FieldLabel>

                      <InlineActions>
                        <SaveBtn
                          type="button"
                          disabled={clientHistorySavingId === client._id}
                          onClick={() => handleClientHistorySave(client._id)}
                        >
                          {clientHistorySavingId === client._id ? "Saving..." : "Add History"}
                        </SaveBtn>
                      </InlineActions>
                    </HistoryPanel>
                  </ClientSplit>
                </ClientCard>
              );
            })
          )}
        </ClientList>
      </SectionPanel>
    </ClientLayout>
  );

  return (
    <Shell>
      <Sidebar>
        <SidebarLogo>
          <SidebarLogoMark>A</SidebarLogoMark>
          <SidebarLogoText>ARP Admin</SidebarLogoText>
        </SidebarLogo>

        <SidebarNav>
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              $active={activeNav === item.id}
              onClick={() => setActiveNav(item.id)}
            >
              <NavIcon>{item.icon}</NavIcon>
              <NavLabel>{item.label}</NavLabel>
            </NavItem>
          ))}
        </SidebarNav>

        <SidebarFooter>
          <SidebarAvatar>
            <SidebarAvatarInitial>{getInitials(adminName)}</SidebarAvatarInitial>
            <SidebarAvatarInfo>
              <SidebarAvatarName>{adminName}</SidebarAvatarName>
              <SidebarAvatarRole>Administrator</SidebarAvatarRole>
            </SidebarAvatarInfo>
          </SidebarAvatar>
        </SidebarFooter>
      </Sidebar>

      <Main>
        <Topbar>
          <TopbarLeft>
            <TopbarTitle>{topbarTitle}</TopbarTitle>
            <TopbarSub>
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </TopbarSub>
          </TopbarLeft>
          <TopbarRight>
            <IconButton onClick={() => window.location.reload()} title="Refresh">
              R
            </IconButton>
            <IconButton onClick={handleLogout} title="Logout">
              X
            </IconButton>
          </TopbarRight>
        </Topbar>

        {toast.text ? <Toast $tone={toast.tone}>{toast.text}</Toast> : null}

        <PageBody>
          {activeNav === "dashboard" ? renderDashboardView() : null}
          {activeNav === "leads" ? renderLeadsView() : null}
          {activeNav === "clients" ? renderClientsView() : null}
        </PageBody>
      </Main>

      {drawerLead ? (
        <>
          <DrawerOverlay onClick={closeDrawer} />
          <Drawer>
            <DrawerHeader>
              <div>
                <CardKicker>Lead Detail</CardKicker>
                <CardTitle style={{ fontSize: "1.25rem" }}>{drawerLead.name}</CardTitle>
              </div>
              <DrawerClose onClick={closeDrawer}>X</DrawerClose>
            </DrawerHeader>

            <DrawerSection>
              <DrawerLabel>Email</DrawerLabel>
              <DrawerValue>{drawerLead.email}</DrawerValue>
            </DrawerSection>
            {drawerLead.phone ? (
              <DrawerSection>
                <DrawerLabel>Phone</DrawerLabel>
                <DrawerValue>{drawerLead.phone}</DrawerValue>
              </DrawerSection>
            ) : null}
            {drawerLead.company ? (
              <DrawerSection>
                <DrawerLabel>Company</DrawerLabel>
                <DrawerValue>{drawerLead.company}</DrawerValue>
              </DrawerSection>
            ) : null}
            {drawerLead.service ? (
              <DrawerSection>
                <DrawerLabel>Service</DrawerLabel>
                <DrawerValue>{drawerLead.service}</DrawerValue>
              </DrawerSection>
            ) : null}
            <DrawerSection>
              <DrawerLabel>Received</DrawerLabel>
              <DrawerValue>{formatDate(drawerLead.createdAt)}</DrawerValue>
            </DrawerSection>
            <DrawerSection>
              <DrawerLabel>Message</DrawerLabel>
              <DrawerValue style={{ whiteSpace: "pre-wrap" }}>{drawerLead.message}</DrawerValue>
            </DrawerSection>
            <DrawerSection>
              <DrawerLabel>Email Acknowledgement</DrawerLabel>
              <DrawerValue>
                {drawerLead.emailSentAt ? `Sent on ${formatDate(drawerLead.emailSentAt)}` : "Not confirmed yet"}
              </DrawerValue>
            </DrawerSection>
            <DrawerSection>
              <DrawerLabel>Status</DrawerLabel>
              <StatusSelect
                value={leadDrafts[drawerLead._id]?.status ?? drawerLead.status}
                onChange={(event) =>
                  handleLeadDraftChange(drawerLead._id, "status", event.target.value)
                }
                style={{ marginTop: "0.4rem" }}
              >
                {LEAD_STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {LEAD_STATUS_LABELS[status]}
                  </option>
                ))}
              </StatusSelect>
            </DrawerSection>
            <DrawerSection style={{ flex: 1 }}>
              <DrawerLabel>Admin Remarks</DrawerLabel>
              <DrawerTextarea
                value={leadDrafts[drawerLead._id]?.notes ?? drawerLead.notes ?? ""}
                onChange={(event) =>
                  handleLeadDraftChange(drawerLead._id, "notes", event.target.value)
                }
                placeholder="Add follow-up notes, call outcomes, next steps..."
              />
            </DrawerSection>

            <DrawerFooter>
              <SaveBtn
                disabled={savingId === drawerLead._id}
                onClick={() => handleLeadSave(drawerLead._id)}
                style={{ width: "100%", padding: "0.9rem" }}
              >
                {savingId === drawerLead._id ? "Saving..." : "Save Changes"}
              </SaveBtn>
            </DrawerFooter>
          </Drawer>
        </>
      ) : null}
    </Shell>
  );
};

export default AdminDashboard;
