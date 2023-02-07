import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />;
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default trpc.withTRPC(MyApp);
