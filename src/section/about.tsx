import { about } from "@/assets/dynamic/about"
import { techstack } from "@/assets/dynamic/techstack"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function About() {
  return (
     <Card className="flex-1 glassmorph border-none shadow-lg rounded-2xl flex flex-col">
            <CardHeader>
              <CardTitle>
                <h2 className="font-display text-xl text-white font-bold">About Me</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto custom-scrollbar space-y-4">
              {about.map((text: string, idx: number) => (
                <p key={idx} className="text-gray-300 leading-relaxed">
                  {text}
                </p>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {techstack.map((tag) => (
                  <span key={tag.name} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {tag.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
  )
}

export default About