import Image from "next/image"
import Link from "next/link"

export default function WorldAtTap() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">World at your tap.</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Get the Headout app to get tickets on your phone and access app-only deals. Talk about win-win.
            </p>

            <div className="flex gap-4">
              <Link href="https://apps.apple.com/app/headout/id899327000" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/placeholder.svg?height=50&width=150"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-12"
                />
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.headout.android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/placeholder.svg?height=50&width=150"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-12"
                />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m1ZHf0zpUlvYBGjYVOCWSqzhUoXtHd.png"
                alt="Headout mobile app"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

