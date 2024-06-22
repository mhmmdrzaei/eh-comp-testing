import { Source_Sans_3 } from "next/font/google";
import "../../styles/global.scss";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: ["400", '600',"700"] });

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
      <body className={source_sans_3.className}>{children}</body>
    </html>
  );
}
