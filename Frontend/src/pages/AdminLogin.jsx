import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getStoredAdminAuth, loginAdmin } from "../utils/adminApi";
import {
  Button,
  Eyebrow,
  Field,
  Form,
  Input,
  LoginCard,
  LoginWrap,
  Message,
  Subtitle,
  Title,
} from "./AdminPortal.styles";

const initialState = {
  email: "",
  password: "",
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const auth = getStoredAdminAuth();

  useEffect(() => {
    document.title = "Admin Login | ARP";
  }, []);

  if (auth?.token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleChange = (field) => (event) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      await loginAdmin({
        email: form.email.trim(),
        password: form.password,
      });
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to log in.");
    }
  };

  return (
    <LoginWrap>
      <LoginCard>
        <Eyebrow>Admin Portal</Eyebrow>
        <Title>Sign in to manage leads</Title>
        <Subtitle>
          View all enquiries, update lead status, and track responses from one place.
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <Field>
            Email
            <Input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="admin@example.com"
              required
              disabled={status === "loading"}
            />
          </Field>

          <Field>
            Password
            <Input
              type="password"
              value={form.password}
              onChange={handleChange("password")}
              placeholder="Enter your password"
              required
              disabled={status === "loading"}
            />
          </Field>

          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Signing in..." : "Login"}
          </Button>

          <Message $tone={status === "error" ? "error" : undefined}>
            {message}
          </Message>
        </Form>
      </LoginCard>
    </LoginWrap>
  );
};

export default AdminLogin;
