import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 lg:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light tracking-tight sm:text-6xl xl:text-7xl mb-6">Get In Touch</h1>
            <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to discuss your next gaming project? We'd love to hear from you. Let's create something amazing
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full py-24 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-6 text-white">Send us a message</h2>
              <div className="w-16 h-0.5 bg-white mb-8"></div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-gray-300 font-medium">
                      First name
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-none focus:border-gray-500 focus:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-gray-300 font-medium">
                      Last name
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-none focus:border-gray-500 focus:ring-0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-none focus:border-gray-500 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-300 font-medium">
                    Company (Optional)
                  </Label>
                  <Input
                    id="company"
                    placeholder="Enter your company name"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-none focus:border-gray-500 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300 font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-none focus:border-gray-500 focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your project or inquiry..."
                    className="min-h-[120px] bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-none focus:border-gray-500 focus:ring-0"
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-none font-medium">
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light tracking-tight mb-6 text-white">Contact Information</h2>
                <div className="w-16 h-0.5 bg-white mb-6"></div>
                <p className="text-gray-400 leading-relaxed">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 border border-gray-700 bg-gray-900">
                  <Mail className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Email</h3>
                    <p className="text-gray-400">hello@gorillagaming.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border border-gray-700 bg-gray-900">
                  <Phone className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border border-gray-700 bg-gray-900">
                  <MapPin className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Address</h3>
                    <p className="text-gray-400">
                      123 Gaming Street
                      <br />
                      Tech District, CA 90210
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border border-gray-700 bg-gray-900">
                  <Clock className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-6">Frequently Asked Questions</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Quick answers to common questions about working with Gorilla Gaming.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-b border-gray-700 pb-8">
              <h3 className="text-xl font-medium mb-4">What types of games do you develop?</h3>
              <p className="text-gray-400 leading-relaxed">
                We specialize in action, adventure, and RPG games across multiple platforms including PC, console, and
                mobile. Our expertise spans from indie titles to AAA productions.
              </p>
            </div>
            <div className="border-b border-gray-700 pb-8">
              <h3 className="text-xl font-medium mb-4">Do you offer game publishing services?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes! We provide full publishing services including marketing, distribution, and post-launch support for
                both our own titles and select partner games.
              </p>
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-medium mb-4">How can I join your team?</h3>
              <p className="text-gray-400 leading-relaxed">
                We're always looking for talented developers, artists, and designers. Send us your portfolio and resume
                through our contact form, and we'll get back to you if there's a good fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
