import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award, Trophy } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
  {/* Hero Section */}
  <section className="relative bg-black text-white py-32 lg:py-48">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-light tracking-tight sm:text-6xl xl:text-7xl mb-6">
          Privacy Policy
        </h1>
        <div className="w-80 h-0.5 bg-white mx-auto mb-8"></div>
      </div>

      {/* Policy Content */}
      <div className="max-w-3xl mx-auto text-left space-y-8 mt-20">

        <div>
          <h2 className="text-2xl font-semibold mb-3">1. No Data Collection</h2>
          <p className="text-gray-400 leading-relaxed">
            Gorira does not collect, store, or share any personal data from its users.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li>We do not track your activity.</li>
            <li>We do not use cookies or similar technologies.</li>
            <li>We do not collect any personally identifiable information (such as name, email address, or location).</li>
            <li>We do not store or process any usage data.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">2. Third-Party Services</h2>
          <p className="text-gray-400 leading-relaxed">
            Since Gorira does not collect or process personal data, no information is shared with third parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">3. Security</h2>
          <p className="text-gray-400 leading-relaxed">
            As we do not collect or store user data, there is no risk of your personal information being exposed through Gorira.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Changes to This Privacy Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            If Gorira’s features change in the future and require the handling of user data, we will update this Privacy Policy accordingly. Any updates will be made publicly available before changes take effect.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Contact Us</h2>
          <p className="text-gray-400 leading-relaxed">
            If you have any questions about this Privacy Policy, you can contact us <Link href="/contact" className="text-gray-400 underline transition-colors hover:text-white">
            here
          </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
