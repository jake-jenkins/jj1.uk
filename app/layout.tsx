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
      <div className="h-dvh flex flex-col bg-zinc-900 text-white">
      <header className="bg-sky-200 h-18 text-center p-2 text-black">
        <p className="text-xl font-extrabold">Jake.ac</p>
      </header>

      <main className="flex-1 container mx-auto p-4">
        {children}
      </main>

      <footer className="bg-lime-300 text-center px-2 py-4 text-black">
        <p>Jake.ac © Jake Jenkins 2001 - 2025.</p>
      </footer>
    </div>
      </body>
    </html>
  );
}
