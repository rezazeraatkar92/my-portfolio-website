import "@/app/globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { getThemeMode } from "@/actions/server-actions/getThemeMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reza Zeraatkar | Personal Portfolio",
  description:
    "Reza is a full-stack developer with more than 5 years of experience.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // get app theme
  const theme = await getThemeMode();

  return (
    <html lang='en' className={`!scroll-smooth ${theme}`}>
      <body
        className={`${inter.className} relative m-auto flex min-h-screen flex-col justify-between bg-gray-50 text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider themeMode={theme}>
          <ActiveSectionContextProvider>
            {children}
            <Footer />

            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
