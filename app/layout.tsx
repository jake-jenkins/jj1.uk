import type { Metadata } from "next";
import "./globals.css";

const siteName = "JJ1.uk";

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
        <div id="app" className="">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
