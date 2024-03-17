import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Techfully",
    description: "Tomorrow's Solutions: Today's Technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-dvh bg-[#0B131E] md:overflow-hidden">
                <PrimeReactProvider>
                    {children}
                </PrimeReactProvider>
            </body>
        </html>
    );
}
