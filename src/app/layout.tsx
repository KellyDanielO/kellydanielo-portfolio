import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelly Daniel Official",
  description: "I am a passionate and versatile web developer based in Nigeria, dedicated to transforming ideas into digital reality. Specializing in crafting dynamic and user-friendly web applications, my skills cover a range of technologies, allowing me to create seamless and engaging online experiences. I excel in building responsive and intuitive interfaces, leveraging my front-end expertise. Additionally, my back-end proficiency with Django ensures the development of robust and scalable server-side functionalities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Freeman&display=swap" rel="stylesheet" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
