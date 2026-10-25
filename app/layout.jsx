import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Olubiyi Oluwatise | Full-Stack Engineer",
  description: "Portfolio of Olubiyi Oluwatise - Full-Stack Web and Mobile Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-primary text-white font-jetbrainsMono">
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}