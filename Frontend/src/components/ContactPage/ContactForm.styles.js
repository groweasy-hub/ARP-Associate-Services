import styled from "styled-components";
import { motion } from "framer-motion";

export const FormWrap = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
`;

const inputBase = `
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.85rem 1rem;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
  }

  &::placeholder { color: var(--muted); }
`;

export const Input = styled.input`
  ${inputBase}
  ${({ $error }) => $error && "border-color: #f06e6e; animation: shake 0.3s ease;"}

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-6px); }
    75% { transform: translateX(6px); }
  }
`;

export const Select = styled.select`
  ${inputBase}
  cursor: pointer;
  option { background: var(--surface2); }
`;

export const Textarea = styled.textarea`
  ${inputBase}
  resize: vertical;
  min-height: 120px;
  ${({ $error }) => $error && "border-color: #f06e6e;"}
`;

export const SubmitBtn = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: var(--accent);
  color: #0a0f0d;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

export const SuccessMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: var(--surface2);
  border: 1px solid var(--accent);
  border-radius: var(--radius-lg);
  gap: 0.5rem;
  h3 { font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text); }
  p { color: var(--muted); font-size: 0.95rem; }
`;

export const ErrorMsg = styled.p`
  font-size: 0.85rem;
  color: #f06e6e;
`;
