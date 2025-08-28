import { projects } from "@/assets/dynamic/project"
import { Card } from "@/components/ui/card"
import { motion } from "motion/react"

function AllProjects({ setShowAllProj }: { setShowAllProj: (arg: boolean) => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto custom-scrollbar"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-xl text-white font-bold">All Experience</h3>
          <button
            onClick={() => setShowAllProj(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {
          projects.slice().reverse().map((proj, index) => (
            <Card key={index} className="project-card p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mt-2">
              <h3 className="font-display font-semibold text-white -mb-1">{proj.name}</h3>
              {proj.link && (
                proj.goto ? (
                  <a
                    href={proj.goto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    {proj.link}
                  </a>
                ) : (
                  <span className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    {proj.link}
                  </span>
                )
              )}

              <p className="text-gray-300 text-sm mb-3 mt-2">
                {proj.description}
              </p>
              <div className="flex gap-2">
                {proj.tech.map((val, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">{val}</span>
                ))}
              </div>
            </Card>
          ))
        }
      </motion.div>

    </div>
  )
}

export default AllProjects