import styled from "styled-components";

const Chip = styled.span`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--muted);
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const TagChip = ({ label }) => <Chip>{label}</Chip>;

export default TagChip;
