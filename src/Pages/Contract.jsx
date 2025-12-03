import React from 'react'
import Mycontainer from '../components/Mycontainer'
import Mylink from '../components/Mylink'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const Contract = () => {
  return (
    <Mycontainer>
      <main className="py-12">
        <motion.header variants={fade} initial="hidden" whileInView="show" className="mb-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-400 px-8 py-12 text-white rounded-2xl">
              <h1 className="text-3xl md:text-4xl font-extrabold">Service Agreement & Terms</h1>
              <p className="mt-3 text-lg opacity-90 max-w-2xl">Read the key terms before you book or offer a skill. This short summary highlights the important points — you can download the full contract below.</p>
            </div>
          </div>
        </motion.header>

        <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="font-semibold text-lg">Cancellation Policy</h3>
            <p className="text-gray-600 mt-2">Providers and learners should notify cancellations at least 24 hours in advance. Late cancellations may be charged.</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="font-semibold text-lg">Payment & Fees</h3>
            <p className="text-gray-600 mt-2">Payments are handled securely. Platform fee applies to each booking. Providers receive payout after completion.</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="font-semibold text-lg">Code of Conduct</h3>
            <p className="text-gray-600 mt-2">Respectful behavior is required. Any harassment or rule violations may result in account actions.</p>
          </div>
        </motion.section>

        <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Contract Summary</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li><strong>Agreement:</strong> You agree to follow platform rules and payment terms when booking or providing services.</li>
            <li><strong>Refunds:</strong> Refunds are evaluated case-by-case; please contact support for disputes.</li>
            <li><strong>Intellectual Property:</strong> Course materials belong to their creators unless otherwise stated.</li>
            <li><strong>Privacy:</strong> We protect your data and share only what is necessary for bookings.</li>
          </ul>
        </motion.section>

        <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-xl p-6 bg-gradient-to-br from-white to-slate-50 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-xl">Download Full Contract</h3>
              <p className="text-gray-600">Get the complete agreement (PDF) containing detailed terms and conditions.</p>
            </div>

            <div className="flex gap-3">
              <Mylink to="/assets/sample-contract.pdf" className="btn btn-outline">Download PDF</Mylink>
              <Mylink to="/signup" className="btn bg-gradient-to-r from-indigo-600 to-cyan-400 text-white">Agree & Continue</Mylink>
            </div>
          </div>
        </motion.section>
      </main>
    </Mycontainer>
  )
}

export default Contract