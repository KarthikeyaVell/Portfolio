import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karthikeya Vellanki | Network & Security Engineering",
  description:
    "Portfolio of Karthikeya Vellanki, a Computer Information Systems & Technology student at UT Dallas engineering secure, scalable networks and enterprise systems.",
  authors: [{ name: "Karthikeya Vellanki" }],
  openGraph: {
    title: "Karthikeya Vellanki",
    description:
      "Engineering secure, scalable networks and enterprise systems.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#000000] text-[#f5f5f7]">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_480px_at_50%_-10%,rgba(41,151,255,0.16),transparent_60%)]"
        />
        {children}
      </body>
    </html>
  );
}
