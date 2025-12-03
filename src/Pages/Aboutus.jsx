import React from 'react'
import { motion } from 'framer-motion'
import Mycontainer from '../components/Mycontainer'
import Mylink from '../components/Mylink'

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const Aboutus = () => {
  const team = [
    { id: 1, name: 'Alex Martin', role: 'Founder & Instructor', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Sara Hossain', role: 'Head of Community', img: 'https://images.unsplash.com/photo-1545996124-1a9b1a0aaf3b?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Rehan Ahmed', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80' },
  ]

  return (
    <Mycontainer>
      <main className="py-16">
        {/* Hero */}
        <motion.section variants={fadeUp} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">We help people learn meaningful skills — faster.</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Our mission is to connect learners with vetted experts, offering practical, hands-on learning experiences that lead to real outcomes.</p>

            <div className="mt-6 flex gap-3 items-center">
              <Mylink to="/signup" className="btn btn-primary bg-gradient-to-r from-indigo-600 to-cyan-400 text-white px-6">Get Started</Mylink>

              {/* Browse Skills with categories popover */}
              <div className="relative">
                <Mylink
                  to="/allskills"
                  className="inline-flex items-center gap-2 btn btn-outline px-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                  Browse Skills
                </Mylink>

                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block" aria-hidden>
                  {/* fallback static categories */}
                  <div className="py-2">
                    <Mylink to="/allskills?category=Programming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Programming</Mylink>
                    <Mylink to="/allskills?category=Design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Design</Mylink>
                    <Mylink to="/allskills?category=Language" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Language</Mylink>
                    <Mylink to="/allskills?category=Music" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Music</Mylink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80" alt="About hero" className="w-full h-64 object-cover" />
          </div>
        </motion.section>

        {/* Mission & Values */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-white to-slate-50">
              <h3 className="font-semibold text-lg">Our Mission</h3>
              <p className="mt-2 text-gray-600">Deliver skill-first learning with trusted instructors and a supportive community.</p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-white to-slate-50">
              <h3 className="font-semibold text-lg">Our Values</h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Quality & Trust</li>
                <li>Practical Learning</li>
                <li>Community First</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-white to-slate-50">
              <h3 className="font-semibold text-lg">What We Offer</h3>
              <p className="mt-2 text-gray-600">Live sessions, flexible scheduling, verified providers, and career-focused projects.</p>
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(t => (
              <motion.div key={t.id} whileHover={{ scale: 1.03 }} className="p-6 rounded-xl shadow-lg text-center">
                <img src={t.img} alt={t.name} className="mx-auto w-28 h-28 rounded-full object-cover mb-4" />
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-10 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-400 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold">Join our community and start learning today</h3>
          <p className="mt-2 opacity-90 max-w-2xl mx-auto">Sign up to access live classes, community events, and personalized learning plans.</p>
          <div className="mt-6">
            <Mylink to="/signup" className="btn bg-white text-indigo-600 px-6">Create free account</Mylink>
          </div>
        </motion.section>
      </main>
    </Mycontainer>
  )
}

export default Aboutus