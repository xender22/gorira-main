import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award, Trophy } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 lg:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light tracking-tight sm:text-6xl xl:text-7xl mb-6">About Gorira Gaming</h1>
            <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              We are a passionate team of developers, designers, and gamers united by our love for creating
              extraordinary gaming experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-24 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light tracking-tight mb-6 text-white">Our Mission</h2>
                <div className="w-16 h-0.5 bg-white mb-6"></div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To create gaming experiences that push the boundaries of imagination and technology. We believe in the
                  power of games to bring people together, tell compelling stories, and create lasting memories.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <Target className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Innovation First</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Always pushing the envelope with new ideas and technologies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Users className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Community Focused</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Building games with our community's feedback and passion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Lightbulb className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Creative Excellence</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Combining artistic vision with technical expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gray-900 rounded-none flex items-center justify-center">
                <Target className="h-24 w-24 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-6">Meet the Pack</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our diverse team of talented individuals who make the magic happen.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-transparent border border-gray-700 rounded-none">
              <CardHeader className="text-center p-8">
                <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-500" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-2">Alex Silverback</CardTitle>
                <CardDescription className="text-gray-400 mb-4">CEO & Creative Director</CardDescription>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visionary leader with 15+ years in game development. Passionate about creating immersive worlds.
                </p>
              </CardHeader>
            </Card>
            <Card className="bg-transparent border border-gray-700 rounded-none">
              <CardHeader className="text-center p-8">
                <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-gray-500" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-2">Maya Kong</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Lead Game Designer</CardDescription>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Master of game mechanics and player experience. Brings innovative gameplay ideas to life.
                </p>
              </CardHeader>
            </Card>
            <Card className="bg-transparent border border-gray-700 rounded-none">
              <CardHeader className="text-center p-8">
                <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 text-gray-500" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-2">Rex Gorira</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Technical Director</CardDescription>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Technical wizard who ensures our games run smoothly across all platforms and devices.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full py-24 md:py-32 bg-gray-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-6">Our Achievements</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Recognition and milestones that mark our journey in the gaming industry.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <Award className="h-8 w-8 text-white mx-auto" />
              <h3 className="text-3xl font-light">50+</h3>
              <p className="text-gray-400">Games Published</p>
            </div>
            <div className="text-center space-y-4">
              <Users className="h-8 w-8 text-white mx-auto" />
              <h3 className="text-3xl font-light">10M+</h3>
              <p className="text-gray-400">Players Worldwide</p>
            </div>
            <div className="text-center space-y-4">
              <Trophy className="h-8 w-8 text-white mx-auto" />
              <h3 className="text-3xl font-light">25+</h3>
              <p className="text-gray-400">Industry Awards</p>
            </div>
            <div className="text-center space-y-4">
              <Target className="h-8 w-8 text-white mx-auto" />
              <h3 className="text-3xl font-light">8</h3>
              <p className="text-gray-400">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light tracking-tight mb-6">Want to Work With Us?</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We're always looking for talented individuals to join our pack. Get in touch!
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-slate-700 text-white hover:bg-slate-800 font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
