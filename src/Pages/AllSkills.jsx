import React, { useEffect, useMemo, useState } from 'react'
import Skillcard from '../components/Skillcard'
import { motion } from 'framer-motion'
import Mycontainer from '../components/Mycontainer'

const AllSkills = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const res = await fetch('/data.json')
        const data = await res.json()
        if (mounted) setSkills(data)
      } catch (err) {
        console.error('Failed to load skills', err)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => (mounted = false)
  }, [])

  const categories = useMemo(() => {
    const set = new Set(skills.map(s => s.category))
    return ['All', ...Array.from(set)]
  }, [skills])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return skills.filter(s => {
      if (category !== 'All' && s.category !== category) return false
      if (!q) return true
      return (
        s.skillName.toLowerCase().includes(q) ||
        (s.providerName || '').toLowerCase().includes(q) ||
        (s.description || '').toLowerCase().includes(q)
      )
    })
  }, [skills, query, category])

  return (
    <Mycontainer>
      <main className="py-12">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">All Skills</h1>
          <p className="text-center text-gray-600 mb-6">Browse all available skills — search, filter and discover your next learning opportunity.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-8">
          <div className="sm:col-span-2">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search skills, providers, or descriptions..."
              className="w-full input input-bordered bg-white"
            />
          </div>

          <div>
            <select className="select select-bordered w-full" value={category} onChange={e => setCategory(e.target.value)}>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-500">No skills matched your search.</div>
            ) : (
              filtered.map((s, idx) => (
                <div key={s.skillId} className="flex justify-center">
                  <Skillcard skill={s} index={idx} />
                </div>
              ))
            )}
          </section>
        )}
      </main>
    </Mycontainer>
  )
}

export default AllSkills