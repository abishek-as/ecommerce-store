import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import Navbar from "@/components/navbar";

const font = Fira_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Store",
    description: "Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
