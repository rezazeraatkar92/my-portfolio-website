import "@/app/globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("@/components/theme-switch"), {
  loading: () => (
    <div className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] animate-pulse items-center justify-center rounded-full border border-gray-900 border-opacity-40 bg-gray-200 bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-yellow-700 dark:bg-gray-950'></div>
  ),
  ssr: false,
});

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
  return (
    <html lang='en' className={`!scroll-smooth`}>
      <body
        className={`${inter.className} relative m-auto flex min-h-screen flex-col justify-between bg-gray-50 text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <NextTopLoader
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          easing='ease'
          speed={200}
          shadow='0 0 10px #2299DD,0 0 5px #2299DD'
          color='#2299DD'
          showSpinner={false}
        />
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          themes={["light", "dark"]}
        >
          <ActiveSectionContextProvider>
            {children}
            <Footer />

            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
