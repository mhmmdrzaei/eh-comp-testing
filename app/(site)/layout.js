import { Poppins } from "next/font/google";
import "../styles/global.scss";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", '600'] });

export const metadata = {
  title: "ExtraHop Comps",
  description: "Holding Extrahop Components",
};

export default function RootLayout({
  children,
}
) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
