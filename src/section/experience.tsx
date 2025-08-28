import { experience } from "@/assets/dynamic/experience"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function Experience({ setShowAllExp }: { setShowAllExp: (arg: boolean) => void }) {
  return (
    <Card className="flex-1 glassmorph border-none shadow-lg rounded-2xl flex flex-col">
            <CardHeader>
              <CardTitle>
                <h2 className="font-display text-xl text-white font-bold">Experience</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto custom-scrollbar space-y-4">
              {
                experience.slice().reverse().slice(0, 1).map((experience, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4 pb-4">
                <p className="font-display font-semibold text-white text-lg">{experience.name}</p>
                <p className="text-blue-300 text-sm mb-2">{experience.company} • {experience.startDate} - {experience.endDate}</p>
                <p className="text-gray-300 text-sm">
                  {experience.description}
                </p>
              </div>
                ))
              }
              
              <button
                onClick={() => setShowAllExp(true)}
                className="w-full mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Show More Experience →
              </button>

            </CardContent>
          </Card>
  )
}

export default Experience