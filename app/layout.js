import "./globals.css";
import { Footer, Navbar } from "./(util)/components";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Grandways - Brilliant Minds, Expect More",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
