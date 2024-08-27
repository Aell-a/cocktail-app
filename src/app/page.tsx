import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Martini, Wine, Beer, Flag, LucideIcon } from "lucide-react"
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Beverage {
  name: string;
  icon: LucideIcon;
  color: string;
}

const beverages: Beverage[] = [
  { name: "Vodka", icon: Martini, color: "text-blue-400" },
  { name: "Wine", icon: Wine, color: "text-red-400" },
  { name: "Beer", icon: Beer, color: "text-yellow-400" },
  { name: "Whiskey", icon: Flag, color: "text-orange-400" },
]

export default function LandingPage(): React.ReactElement {
  return (
    <div className={`flex flex-col min-h-screen bg-gray-900 text-purple-300 ${inter.className}`}>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Martini className="h-6 w-6 mr-2 text-purple-400" />
          <span className="font-bold text-purple-300">CocktailCraft</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            Recipes
          </Link>
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-300">
                  Welcome to CocktailCraft
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl">
                  Discover and create amazing cocktails based on your favorite spirits. Start by selecting your base alcoholic beverage.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">Choose Your Base Spirit</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {beverages.map((beverage) => (
                <Card key={beverage.name} className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <beverage.icon className={`h-12 w-12 mb-4 ${beverage.color}`} />
                    <h3 className={`text-lg font-semibold mb-2 ${beverage.color}`}>{beverage.name}</h3>
                    <Button variant="outline" className="bg-gray-800 text-purple-300 border-purple-400 hover:bg-gray-700 hover:text-purple-200">
                      Select
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-purple-200">
          © {new Date().getFullYear()} CocktailCraft. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-purple-200 hover:text-purple-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-purple-200 hover:text-purple-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}