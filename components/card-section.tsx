import { Gem, DollarSign, Heart, Smile } from "lucide-react"

export default function CardSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <Gem className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Only the finest</h3>
            <p className="text-gray-600">
              At Headout, you only find the best. We do the hard work so you don&apos;t have to.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Greed is good</h3>
            <p className="text-gray-600">
              With quality, you also get lowest prices, last-minute availability and 24x7 support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 mb-4">
              <Heart className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience every flavour</h3>
            <p className="text-gray-600">
              Offbeat or mainstream, a tour or a show, a game or a museum - we have &apos;em all.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
              <Smile className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No pain, only gain</h3>
            <p className="text-gray-600">
              Didn&apos;t love it? We&apos;ll give you your money back. Not cocky, just confident.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

