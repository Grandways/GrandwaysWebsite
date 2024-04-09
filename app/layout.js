import "./globals.css";
import { Footer, Navbar } from "./(util)/components";

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
      </body>
    </html>
  );
}
