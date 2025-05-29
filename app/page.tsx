import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Users, Trophy, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 lg:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-light tracking-tight sm:text-6xl xl:text-7xl">Gorira Gaming</h1>
                <div className="w-16 h-0.5 bg-white"></div>
                <p className="max-w-[600px] text-gray-400 text-lg leading-relaxed">
                  Unleash the beast within. We create immersive gaming experiences that push the boundaries of what's
                  possible.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-slate-700 text-white hover:bg-slate-800 font-medium">
                    Discover Our Games
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-slate-00 border-gray-400 text-white hover:bg-slate-800 hover:text-black font-medium"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gray-900 rounded-none flex items-center justify-center">
                <Gamepad2 className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-6 text-white">Why Choose Gorira Gaming?</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              We combine raw power with intelligent design to create gaming experiences that dominate the competition.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
            <div className="space-y-12">
              <div className="flex gap-6">
                <Gamepad2 className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Innovative Gameplay</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Revolutionary mechanics that redefine what gaming can be.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Users className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Community Driven</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Built with our passionate gaming community at the heart.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Trophy className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Award Winning</h3>
                  <p className="text-gray-400 leading-relaxed">Recognized excellence in game design and development.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Zap className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Cutting Edge Tech</h3>
                  <p className="text-gray-400 leading-relaxed">Powered by the latest gaming technology and engines.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gray-900 rounded-none flex items-center justify-center">
                <Trophy className="h-24 w-24 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="w-full py-24 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-6">Our Latest Games</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Experience the power of gorira-level gaming with our latest releases.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-transparent border border-gray-700 rounded-none">
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center mb-6">
                  <Gamepad2 className="h-12 w-12 text-gray-500" />
                </div>
                <div className="px-6 pb-6">
                  <CardTitle className="text-white text-xl font-medium mb-2">Jungle Warfare</CardTitle>
                  <CardDescription className="text-gray-400">
                    Tactical combat in the heart of the jungle
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="bg-transparent border border-gray-700 rounded-none">
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center mb-6">
                  <Users className="h-12 w-12 text-gray-500" />
                </div>
                <div className="px-6 pb-6">
                  <CardTitle className="text-white text-xl font-medium mb-2">Primal Legends</CardTitle>
                  <CardDescription className="text-gray-400">Epic RPG adventure through ancient lands</CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="bg-transparent border border-gray-700 rounded-none">
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center mb-6">
                  <Zap className="h-12 w-12 text-gray-500" />
                </div>
                <div className="px-6 pb-6">
                  <CardTitle className="text-white text-xl font-medium mb-2">Gorira Racing</CardTitle>
                  <CardDescription className="text-gray-400">High-speed racing with a wild twist</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light tracking-tight mb-6">Ready to Join the Pack?</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Get in touch with us to discuss partnerships, collaborations, or just to say hello.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-700 text-white hover:bg-slate-800 font-medium">
                  Contact Us
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-slate-00 border-gray-400 text-white hover:bg-slate-800 hover:text-black font-medium"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
