import Link from "next/link"
import { Gamepad2, Twitter, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="h-5 w-5 text-white" />
              <span className="font-light text-lg tracking-wide">Gorira Gaming</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Creating immersive gaming experiences that push the boundaries of what's possible.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-medium text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Games */}
          <div className="space-y-6">
            <h3 className="font-medium text-white">Our Games</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Jungle Warfare
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Primal Legends
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Gorira Racing
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-medium text-white">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>123 Gaming Street</p>
              <p>Tech District, CA 90210</p>
              <p>hello@gorillagaming.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Gorira Gaming Studios. All rights reserved.
          </p>
          <nav className="flex space-x-6 text-xs text-gray-400 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
