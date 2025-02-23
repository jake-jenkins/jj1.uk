import type { Metadata } from "next";
import "./globals.css";

const siteName = "Jake.ac";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="app" className="flex flex-col bg-slate-50">
          <main className="flex-1 mt-14 lg:mt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
