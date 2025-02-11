import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import Navigation from "@/components/Navigation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Course Management System",
  description: "A web application for showcasing courses and their details",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="container mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

