import "./globals.css";
import { Quicksand } from "next/font/google";

import AddItem from "~/components/add-item";
import Navigation from "~/components/navigation";
import ShoppingList from "~/components/shopping-list";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  title: "Shoppingify",
  description: "Shopping List Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} bg-gray-100`}>
        <Navigation />
        {children}
        <AddItem />
        {/* <ShoppingList /> */}
      </body>
    </html>
  );
}
