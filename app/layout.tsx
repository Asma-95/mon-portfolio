import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Mon Portfolio",
  description: "Site personnel de développeuse débutante",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-beige text-olive">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
