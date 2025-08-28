import { Card, CardContent } from "@/components/ui/card"
import { softSkill, hardSkill } from "@/assets/dynamic/skills"
function Skills() {
  return (
    <Card className="flex-2 glassmorph border-none shadow-lg rounded-2xl flex flex-col">
      <CardContent className="overflow-y-auto custom-scrollbar space-y-4">
        <div className="pt-4 border-t border-white/10">
          <p className="font-display font-semibold text-white mb-3 mt-2">Soft Skills</p>
          <ul className="space-y-2 text-sm text-gray-300">
            {
              softSkill.map((skill) => (
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  {skill}
                </li>
              ))
            }
          </ul>
          <p className="font-display font-semibold text-white mb-3 mt-4">Hard Skills</p>
          <ul className="space-y-2 text-sm text-gray-300">
            {
              hardSkill.map((skill) => (
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  {skill}
                </li>
              ))
            }
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default Skills