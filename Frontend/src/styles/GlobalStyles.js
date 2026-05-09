import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    min-width: 0;
    margin: 0;
    padding: 0;
  }

  :root {
    --bg: #07111a;
    --bg-rgb: 7, 17, 26;
    --surface: #0d1722;
    --surface-rgb: 13, 23, 34;
    --surface2: #12202d;
    --elevated: #152637;
    --elevated-rgb: 21, 38, 55;
    --accent: #00c896;
    --accent-rgb: 0, 200, 150;
    --accent-deep: #00a67e;
    --accent-deep-rgb: 0, 166, 126;
    --accent-soft: #8ef0d7;
    --accent2: #8ef0d7;
    --text: #f5f7fa;
    --muted: #aab6c5;
    --muted-2: #6b7a8c;
    --border: #1e2d3d;
    --success: #22c55e;
    --warning: #f59e0b;
    --error: #ef4444;
    --font-heading: "Plus Jakarta Sans", sans-serif;
    --font-body: "Inter", sans-serif;
    --nav-h: 78px;
    --max-w: 1280px;
    --radius: 18px;
    --radius-lg: 28px;
    --shadow-soft: 0 20px 50px rgba(0, 0, 0, 0.28);
    --shadow-glow: 0 0 40px rgba(var(--accent-rgb), 0.18);
    --transition-smooth: 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }

  html,
  body,
  #root {
    max-width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(var(--accent-rgb), 0.1), transparent 24%),
      radial-gradient(circle at 85% 12%, rgba(var(--accent-deep-rgb), 0.1), transparent 18%),
      linear-gradient(135deg, #07111a 0%, #0d1722 45%, #001f1a 100%);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: -0.01em;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 120px 120px;
    opacity: 0.25;
    pointer-events: none;
    z-index: -2;
  }

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(var(--accent-rgb), 0.08), transparent 28%),
      radial-gradient(circle at 80% 0%, rgba(var(--accent-deep-rgb), 0.08), transparent 22%);
    filter: blur(24px);
    pointer-events: none;
    z-index: -1;
  }

  #root {
    position: relative;
    isolation: isolate;
  }

  main,
  section,
  footer {
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    line-height: 1.08;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
  }

  p {
    color: var(--muted);
    overflow-wrap: anywhere;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  ::selection {
    background: rgba(var(--accent-rgb), 0.22);
    color: var(--text);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(var(--accent-rgb), 0.35);
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(var(--accent-rgb), 0.55);
  }

  @media (max-width: 768px) {
    :root {
      --nav-h: 70px;
      --radius: 16px;
      --radius-lg: 24px;
    }
  }

  @media (max-width: 480px) {
    :root {
      --nav-h: 68px;
      --radius: 14px;
      --radius-lg: 20px;
    }

    body {
      font-size: 15px;
    }
  }
`;

export default GlobalStyles;
