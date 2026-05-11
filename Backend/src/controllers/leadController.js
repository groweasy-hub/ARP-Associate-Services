const Lead = require("../models/Lead");
const { sendLeadAutoReply } = require("../services/emailService");

const normalizeLeadPayload = (body) => ({
  name: body.name?.trim() || "",
  email: body.email?.trim().toLowerCase() || "",
  phone: body.phone?.trim() || "",
  company: body.company?.trim() || "",
  service: body.service?.trim() || "",
  message: body.message?.trim() || "",
});

const validateLeadPayload = (payload) => {
  if (!payload.name || !payload.email || !payload.message) {
    return "Name, email and message are required.";
  }

  if (!/\S+@\S+\.\S+/.test(payload.email)) {
    return "A valid email address is required.";
  }

  return null;
};

const createLead = async (req, res, next) => {
  try {
    const payload = normalizeLeadPayload(req.body);
    const validationError = validateLeadPayload(payload);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const lead = await Lead.create(payload);

    let emailSent = false;

    try {
      await sendLeadAutoReply({
        to: lead.email,
        name: lead.name,
        phone: lead.phone,
        company: lead.company,
        service: lead.service,
        message: lead.message,
      });

      lead.emailSentAt = new Date();
      await lead.save();
      emailSent = true;
    } catch (emailError) {
      console.error("Lead email failed:", emailError.message);
    }

    return res.status(201).json({
      message: emailSent
        ? "Lead created and acknowledgement email sent."
        : "Lead created, but acknowledgement email could not be sent.",
      emailSent,
      lead,
    });
  } catch (error) {
    return next(error);
  }
};

const getLeads = async (_req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    return res.json({ leads });
  } catch (error) {
    return next(error);
  }
};

const updateLeadStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const updates = {};

    if (status) {
      updates.status = status;
    }

    if (typeof notes === "string") {
      updates.notes = notes.trim();
    }

    const lead = await Lead.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!lead) {
      return res.status(404).json({ error: "Lead not found." });
    }

    return res.json({
      message: "Lead updated successfully.",
      lead,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus,
};
