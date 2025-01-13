import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Admin Demo App - Learning the Next.js",
    description: "Just an admin demo application",
};

export default function adminLayout({ children }) {
    return (
        <>
        <span>Admin Navbar</span>
        { children }
        </>
    );
}
