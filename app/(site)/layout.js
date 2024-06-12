import { Poppins } from "next/font/google";
import "../global.scss";

const inter = Poppins({ subsets: ["latin"], weight: ["400", '600'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
