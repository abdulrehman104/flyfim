import { Users, Globe, Clock, Award } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: "36M+",
    description: "Happy customers and counting",
  },
  {
    id: 2,
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "45+",
    description: "Countries where you can find us",
  },
  {
    id: 3,
    icon: <Clock className="h-8 w-8 text-green-600" />,
    title: "24/7",
    description: "Customer service available round the clock",
  },
  {
    id: 4,
    icon: <Award className="h-8 w-8 text-yellow-600" />,
    title: "4.7/5",
    description: "Average rating from thousands of reviews",
  },
]

export default function ServedMillions() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center">We've served 36 million+ guests</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

