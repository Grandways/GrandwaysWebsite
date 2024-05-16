import "./globals.css";
import { Footer, Navbar } from "./(util)/components";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Grandways - Brilliant Minds, Expect More",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
