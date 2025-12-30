import { useState } from "react"

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  })

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)

    const message = `Hello Revs Enterprise,%0A
My name is ${formData.name}.%0A
My WhatsApp number is ${formData.phone}.%0A
I am interested in: ${formData.service}.`

    window.open(
      `https://wa.me/265991154080?text=${message}`,
      "_blank"
    )
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HERO + FORM */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: VALUE */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revs Enterprise
            </h1>

            <p className="text-gray-400 text-lg mb-6">
              We design websites, AI tools, and digital systems that help ideas grow.
            </p>

            <p className="text-gray-500 mb-8">
              Serving individuals, startups, and businesses across Malawi & Southern Africa.
            </p>

            <a
              href="https://wa.me/265991154080"
              className="inline-block border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Or chat directly on WhatsApp →
            </a>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-zinc-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-2">
              Start Your Project
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              Share a few details and continue on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-black border border-gray-700 rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="WhatsApp Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-black border border-gray-700 rounded-lg p-3"
              />

              <select
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full bg-black border border-gray-700 rounded-lg p-3"
              >
                <option value="">What do you need?</option>
                <option>Website Design</option>
                <option>Business Email</option>
                <option>AI Agent / Automation</option>
                <option>Digital Training</option>
                <option>Not sure yet</option>
              </select>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {submitting ? "Opening WhatsApp…" : "Start on WhatsApp"}
              </button>

            </form>

            <p className="text-gray-500 text-xs mt-4">
              Fast response • No spam • No obligation
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What We Can Help You With
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Website Design & Development",
            "Official Business Emails",
            "AI Agents & Automation",
            "Digital & AI Training",
          ].map((service) => (
            <div
              key={service}
              className="border border-gray-800 rounded-2xl p-8 hover:border-white transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-zinc-900 px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <span className="text-white font-bold">1.</span> Share your needs
            </div>
            <div>
              <span className="text-white font-bold">2.</span> We respond quickly
            </div>
            <div>
              <span className="text-white font-bold">3.</span> We build together
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Revs Enterprise • Malawi & Southern Africa
      </footer>

    </div>
  )
}
