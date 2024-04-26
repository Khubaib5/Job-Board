import { Raleway } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "../lib/edgesstore";
import Navbar from "../components/shared/Navbar"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Workify",
  description: "Job Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <EdgeStoreProvider>
        <Navbar />
        {children}
        </EdgeStoreProvider>
        {/* {children} */}
        </body>
    </html>
  );
}
