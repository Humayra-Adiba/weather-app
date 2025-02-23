import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./providers";

export const metadata = {
  title: "Weather App ",
  description: "Weather app using weatherapi",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


