import React, { useState } from 'react'
import Mycontainer from '../components/Mycontainer'
import { motion } from 'framer-motion'
import Mylink from '../components/Mylink'

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const Support = () => {
  const [q, setQ] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const faqs = [
    { id: 1, q: 'How do I book a skill?', a: 'Search a skill and click "View Details" then follow booking instructions.' },
    { id: 2, q: 'What is the refund policy?', a: 'Refunds are handled case-by-case; contact support with your booking id.' },
    { id: 3, q: 'How to become a provider?', a: 'Go to provider signup, complete your profile, and submit verification.' },
  ]

  const results = faqs.filter(f => f.q.toLowerCase().includes(q.toLowerCase()))

  function handleSubmit(e) {
    e.preventDefault()
    // simple client-side handling — replace with API call later
    console.log('support message', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <Mycontainer>
      <main className="py-12">
        <motion.header variants={fadeUp} initial="hidden" whileInView="visible" className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">Support & Help Center</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Need help? Use the search, contact our team, join the community, or download helpful resources.</p>
        </motion.header>

        {/* Grid: 4 parts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Part 1: FAQ Search */}
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" className="p-6 rounded-xl shadow-lg bg-white">
            <h2 className="text-xl font-semibold mb-3">Find answers fast</h2>
            <label className="block mb-2 text-sm text-gray-600">Search FAQs</label>
            <div className="flex gap-2">
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search for topics, e.g., booking, refunds" className="input input-bordered w-full" />
              <button className="btn btn-primary">Search</button>
            </div>

            <div className="mt-4">
              {q ? (
                results.length ? results.map(r => (
                  <div key={r.id} className="p-3 rounded-md border mb-2">
                    <div className="font-semibold">{r.q}</div>
                    <div className="text-gray-600 mt-1">{r.a}</div>
                  </div>
                )) : <div className="text-gray-500">No results found.</div>
              ) : (
                <div className="text-gray-500">Try searching for common topics like "booking" or "refund".</div>
              )}
            </div>
          </motion.section>

          {/* Part 2: Contact Support Form */}
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-indigo-50 to-cyan-50">
            <h2 className="text-xl font-semibold mb-3">Contact Support</h2>
            <p className="text-gray-600 mb-4">Our team typically replies within 24 hours. Describe your issue and include booking/reference ID if any.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Name</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Message</label>
                <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="textarea textarea-bordered w-full h-32" />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="btn btn-primary">Send Message</button>
                {submitted && <span className="text-green-600">Message sent — we'll be in touch.</span>}
              </div>
            </form>
          </motion.section>

          {/* Part 3: Community & Live Chat */}
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" className="p-6 rounded-xl shadow-lg bg-white">
            <h2 className="text-xl font-semibold mb-3">Community & Live Chat</h2>
            <p className="text-gray-600 mb-4">Join our community to ask quick questions, get tips from providers, and connect with learners.</p>
            <div className="flex flex-col gap-3">
              <Mylink to="/testimonials" className="btn btn-outline">Open Community</Mylink>
              <Mylink to="/contact" className="btn btn-primary">Start Live Chat</Mylink>
            </div>
          </motion.section>

          {/* Part 4: Resources & Downloads */}
          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-pink-50 to-yellow-50">
            <h2 className="text-xl font-semibold mb-3">Help & Resources</h2>
            <p className="text-gray-600 mb-4">Guides, quick-starts, and sample contracts to help you get started faster.</p>
            <ul className="space-y-2">
              <li><a className="text-indigo-600 hover:underline" href="/assets/getting-started.pdf">Getting Started Guide (PDF)</a></li>
              <li><a className="text-indigo-600 hover:underline" href="/assets/sample-contract.pdf">Sample Service Contract (PDF)</a></li>
              <li><a className="text-indigo-600 hover:underline" href="/faq">Full FAQ</a></li>
            </ul>
          </motion.section>
        </div>
      </main>
    </Mycontainer>
  )
}

export default Support