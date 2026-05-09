import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --bg: #0a0f0d;
    --surface: #111810;
    --surface2: #182218;
    --accent: #b8f06e;
    --accent2: #6ef0c0;
    --text: #f0ede6;
    --muted: #8a9688;
    --border: #1e2b1e;
    --nav-h: 64px;
    --max-w: 1200px;
    --radius: 10px;
    --radius-lg: 16px;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-heading);
    line-height: 1.15;
  }

  a { text-decoration: none; color: inherit; }
  img { max-width: 100%; display: block; }
  ul { list-style: none; }
  button { cursor: pointer; border: none; background: none; font-family: inherit; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--muted); }
`;

export default GlobalStyles;
