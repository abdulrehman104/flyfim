import Image from "next/image";
import Link from "next/link";
import { Clock, MessageSquare, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Help Column */}
          <div>
            <h3 className="font-semibold text-base uppercase tracking-wide mb-4">GET HELP 24/7</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="flex items-center text-gray-600 hover:text-purple-600"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Help center</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="flex items-center text-gray-600 hover:text-purple-600"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Chat with us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+13479790100"
                  className="flex items-center text-gray-600 hover:text-purple-600"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Call +13479870100</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@headout.com"
                  className="flex items-center text-gray-600 hover:text-purple-600"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>support@headout.com</span>
                </Link>
              </li>
              <li className="pt-4">
                <div className="border border-gray-200 p-3 rounded-lg inline-block">
                  <Image
                    src="/placeholder.svg"
                    alt="QR Code"
                    width={90}
                    height={90}
                    className="h-[90px] w-[90px]"
                  />
                  <p className="text-sm mt-2 text-gray-600">
                    Download the<br />
                    Headout app
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Cities Column */}
          <div>
            <h3 className="font-semibold text-base uppercase tracking-wide mb-4">CITIES</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cities/new-york"
                  className="text-gray-600 hover:text-purple-600"
                >
                  New York
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/las-vegas"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Las Vegas
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/rome"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Rome
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/paris"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Paris
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/london"
                  className="text-gray-600 hover:text-purple-600"
                >
                  London
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/dubai"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Dubai
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/barcelona"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Barcelona
                </Link>
              </li>
              <li>
                <Link
                  href="/cities"
                  className="text-gray-600 hover:text-purple-600"
                >
                  +161 more
                </Link>
              </li>
            </ul>
          </div>

          {/* Headout Column */}
          <div>
            <h3 className="font-semibold text-base uppercase tracking-wide mb-4">HEADOUT</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/newsroom"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Company blog
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-blog"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Travel blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h3 className="font-semibold text-base uppercase tracking-wide mb-4">PARTNERS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/partners"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Experience providers
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliates"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Affiliates
                </Link>
              </li>
              <li>
                <Link
                  href="/creators"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Creators & influencers
                </Link>
              </li>
              <li className="pt-4">
                <h4 className="font-medium text-sm text-gray-500 uppercase mb-2">WE ACCEPT</h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Visa"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Mastercard"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Amex"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="PayPal"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Google Pay"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Apple Pay"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Discover"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                  <div className="border border-gray-200 rounded p-1 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg"
                      alt="iDEAL"
                      width={36}
                      height={24}
                      className="h-5"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src="/Headout_logo_purps.svg"
                  alt="Headout"
                  width={100}
                  height={30}
                  className="h-6"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © 2014-2025 Headout Inc, 82 Nassau St #60351 New York, NY 10038
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Terms of Usage
              </Link>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Image
                  src="/placeholder.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Image
                  src="/placeholder.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
