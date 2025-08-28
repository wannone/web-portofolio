import { experience } from "@/assets/dynamic/experience";
import { motion } from "motion/react";

function AllExperiences ( {setShowAllExp } : { setShowAllExp : (arg : boolean) => void }) {
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
                onClick={() => setShowAllExp(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

              {
                experience.slice().reverse().map((experience, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4 pb-4">
                <p className="font-display font-semibold text-white text-lg">{experience.name}</p>
                <p className="text-blue-300 text-sm mb-2">{experience.company} • {experience.startDate} - {experience.endDate}</p>
                <p className="text-gray-300 text-sm">
                  {experience.description}
                </p>
              </div>
                ))
              }
          </motion.div>
          
        </div>
    )
}

export default AllExperiences