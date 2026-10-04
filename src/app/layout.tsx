import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

/**
 * Inter Tight carries the whole page: the reference is a neo-grotesque
 * layout where the display cut and the body cut are the same family, so a
 * single variable family with weight/tracking changes is the honest match.
 */
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novix® Studio - Websites, motion and no-code builds for ambitious brands",
  description:
    "Novix® Studio builds websites and experiences that help brands launch faster, grow smarter, and stand out with confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
