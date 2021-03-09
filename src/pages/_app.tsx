// スタイル読み込み
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import '../styles/globals.css';

import type { AppProps } from "next/app";

function App({ Component, pageProps }:AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
