import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Chatbot } from "@/components/Chatbot";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Change Energy Engineering | Low Carbon Infrastructure",
  description:
    "Change Energy Engineering designs hydrogen, CNG, and LNG refuelling infrastructure for operators serious about the low-carbon economy. 150+ deployments worldwide.",
  openGraph: {
    title: "Change Energy Engineering | Low Carbon Infrastructure",
    description:
      "Strategic engineering for hydrogen, CNG, and LNG refuelling. Concept through commissioning, signed by professional engineers.",
    url: "https://changeenergy.ca",
    siteName: "Change Energy Engineering",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
