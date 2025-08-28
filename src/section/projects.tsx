import { projects } from "@/assets/dynamic/project"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function Projects ({setShowAllProj} : {setShowAllProj : (arg : boolean) => void}) {
    return (
        <Card className="flex-1 glassmorph border-none shadow-lg rounded-2xl flex flex-col">
            <CardHeader>
              <CardTitle>
                <h2 className="font-display text-xl text-white font-bold">Projects</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto custom-scrollbar space-y-3">
              {
                projects.slice().reverse().slice(0, 1).map((proj, index) => (
            <Card key={index} className="project-card p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
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

              <button
                onClick={() => setShowAllProj(true)}
                className="w-full mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Show More Project →
              </button>
              

            </CardContent>
          </Card>
    )
}

export default Projects