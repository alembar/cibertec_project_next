import { DashboardLogo } from '@/components/atom/dashboard/dashboard_logo'
import './globals.css'
import { satoshi } from "../assets/fonts/fonts";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MenuOptions } from '@/components/organism/dashboard/menu_options'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PROYECTO FINAL',
  description: 'Proyecto final',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="es">
          <body className={`${satoshi.className}`}>
              <div className="flex flex-row h-full  pt-5">
                  <div className="w-3/12 flex flex-col items-center ">
                      <DashboardLogo />
                      <div className="bg-DarkBlue w-full flex flex-row justify-center mt-5 h-[100vh]">
                          <MenuOptions />
                      </div>
                  </div>
                  <div className="w-9/12 flex flex-col items-center">
                      <div className='w-11/12'>{children}</div>
                  </div>
              </div>
          </body>
      </html>
  );
}
