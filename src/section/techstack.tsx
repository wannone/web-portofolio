import { techstack } from "@/assets/dynamic/techstack"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Techstack({ setShowAllTechs } : { setShowAllTechs : (arg : boolean) => void }) {
    return (
         <Card className="glassmorph border-none shadow-lg rounded-2xl flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="font-display text-lg text-white font-bold">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {techstack.slice(0, 5).map((skill) => (
                <div key={skill.name} className="space-y-2">
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
                </div>
              ))}

              <button
                onClick={() => setShowAllTechs(true)}
                className="w-full mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Show More Skills →
              </button>
            </CardContent>
          </Card>
    )
} 

export default Techstack