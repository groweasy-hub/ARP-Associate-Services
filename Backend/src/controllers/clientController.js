const Client = require("../models/Client");

const normalizeClientPayload = (body) => ({
  name: body.name?.trim() || "",
  company: body.company?.trim() || "",
  email: body.email?.trim().toLowerCase() || "",
  phone: body.phone?.trim() || "",
  service: body.service?.trim() || "",
  status: body.status?.trim() || "onboarding",
  remarks: body.remarks?.trim() || "",
});

const validateClientPayload = (payload) => {
  if (!payload.name || !payload.company || !payload.email || !payload.phone || !payload.service) {
    return "Name, company, email, phone, and service are required.";
  }

  if (!/\S+@\S+\.\S+/.test(payload.email)) {
    return "A valid email address is required.";
  }

  return null;
};

const getClients = async (_req, res, next) => {
  try {
    const clients = await Client.find().sort({ updatedAt: -1, createdAt: -1 });
    return res.json({ clients });
  } catch (error) {
    return next(error);
  }
};

const createClient = async (req, res, next) => {
  try {
    const payload = normalizeClientPayload(req.body);
    const validationError = validateClientPayload(payload);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const initialHistoryNote = req.body.initialHistory?.trim();
    const history = initialHistoryNote
      ? [{ note: initialHistoryNote }]
      : [{ note: "Client created in admin dashboard." }];

    const client = await Client.create({
      ...payload,
      history,
    });

    return res.status(201).json({
      message: "Client created successfully.",
      client,
    });
  } catch (error) {
    return next(error);
  }
};

const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = {};
    const allowedFields = ["name", "company", "email", "phone", "service", "status", "remarks"];

    for (const field of allowedFields) {
      if (typeof req.body[field] === "string") {
        updates[field] = field === "email" ? req.body[field].trim().toLowerCase() : req.body[field].trim();
      }
    }

    const client = await Client.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!client) {
      return res.status(404).json({ error: "Client not found." });
    }

    return res.json({
      message: "Client updated successfully.",
      client,
    });
  } catch (error) {
    return next(error);
  }
};

const addClientHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = req.body.note?.trim();

    if (!note) {
      return res.status(400).json({ error: "History note is required." });
    }

    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ error: "Client not found." });
    }

    client.history.unshift({ note });
    await client.save();

    return res.json({
      message: "Client history updated successfully.",
      client,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getClients,
  createClient,
  updateClient,
  addClientHistory,
};
