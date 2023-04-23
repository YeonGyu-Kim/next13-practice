import { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page Description",
  openGraph: {
    title: "Home Page",
    description: "Home Page Description",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles?.header}>
          <Link className={styles?.link} href="/contact">
            Contact
          </Link>
          <Link className={styles?.link} href="/about">
            About
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
