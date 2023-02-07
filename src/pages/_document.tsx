import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="transition-all duration-300 dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
