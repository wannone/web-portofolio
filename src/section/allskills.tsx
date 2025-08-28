import { motion } from "motion/react"
import { techstack } from "@/assets/dynamic/techstack"

function AllTechs({ setShowAllSkills }: { setShowAllSkills: (arg: boolean) => void }) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto custom-scrollbar"
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-display text-xl text-white font-bold">All Skills & Proficiency</h3>
                    <button
                        onClick={() => setShowAllSkills(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {techstack.map((skill) => (
                        <div key={skill.name} className="space-y-2 p-3 bg-white/5 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-white font-medium">{skill.name}</span>
                                <span className="text-xs text-gray-400">{skill.proficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${skill.proficiency}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-400">{skill.category}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    )
}

export default AllTechs