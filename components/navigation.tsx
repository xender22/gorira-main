"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Gamepad2 } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Gamepad2 className="h-5 w-5 text-white" />
          <span className="font-light text-lg text-white tracking-wide">Gorilla Gaming</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="text-gray-400 transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 hover:bg-transparent"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className="text-gray-400 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-400 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
