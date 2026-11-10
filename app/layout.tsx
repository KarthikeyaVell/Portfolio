import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karthikeya Vellanki",
  description:
    "Engineering secure, scalable networks and enterprise systems. B.S. in Computer Information Systems & Technology at UT Dallas.",
  authors: [{ name: "Karthikeya Vellanki" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full overflow-x-clip bg-black text-[#f5f5f7]">
        <noscript>
          <style>{`.reveal-pending{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
