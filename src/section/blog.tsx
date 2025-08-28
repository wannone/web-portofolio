import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { blog } from "@/assets/dynamic/blog"

function Blog({ setShowAllBlog }: { setShowAllBlog: (arg: boolean) => void }) {
    return (
        <Card className="flex-1 glassmorph border-none shadow-lg rounded-2xl flex flex-col">
            <CardHeader>
                <CardTitle className="font-display text-xl text-white font-bold">Blog Posts</CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto custom-scrollbar space-y-3">
                {
                    blog.length !== 0 ? (
                        blog.slice().reverse().slice(0, 5).map( (blog, index) => (
                        <a key={index} href="#" className="blog-link block text-blue-300 hover:text-blue-200 transition-colors">
                            <h4 className="font-medium mb-1">{blog.title}</h4>
                            <p className="text-gray-400 text-sm">{blog.summary}</p>
                        </a>
                        ))

                    ) : (
                        <p className="text-center text-blue-400 text-sm font-medium">Coming Soon</p>
                    )
                }

                {
                    blog.length > 5 && (
                        <button
                            onClick={() => setShowAllBlog(true)}
                            className="w-full mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                            Show More Project →
                        </button>
                    )
                }
            </CardContent>
        </Card>
    )
}

export default Blog