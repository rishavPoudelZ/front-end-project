import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "../src/App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const links = [
  {
    id: 1,
    href:'#',
    icon:"fa-brands fa-facebook-f"
  },
  {
    id: 2,
    href:'#',
    icon:"fa-brands fa-x-twitter"
  },
  {
    id: 3,
    href:'#',
    icon:"fa-brands fa-discord"
  },
  {
    id: 4,
    href:'#',
    icon:"fa-brands fa-youtube"
  },
  {
    id: 5,
    href:'#',
    icon:"fa-brands fa-twitch"
  },
  {
    id: 6,
    href:'#',
    icon:"fa-brands fa-instagram"
  },

]

const articles = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: './src/assets/h47.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    text: 'ROG Zephyrus'
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: './src/assets/h4.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    text: 'ROG Strix'

  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: './src/assets/h470.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    text: 'ROG Flow'

  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: './src/assets/1655506515601_upscayl_4x_realesrgan-x4plus.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    text: 'Accessories'
  }
]

const products = [
  {
    id: 1,
    name: 'ROG Zephyrus G16 (2024)',
    href: '#',
    imageSrc: './src/assets/w273.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$3,299',
    color: 'GU605MU-QP095X',
  },
  {
    id: 2,
    name: 'ROG Strix G16 (2024)',
    href: '#',
    imageSrc: './src/assets/w2737.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$2,299',
    color: 'G614JVR-N4119X',
  },
  {
    id: 3,
    name: 'ROG Strix G18 (2024)',
    href: '#',
    imageSrc: './src/assets/w27300.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$3,500',
    color: 'G814JVR-N6048X',
  },
  {
    id: 4,
    name: 'ROG Zephyrus G16 (2024)',
    href: '#',
    imageSrc: './src/assets/w273111.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$2,799',
    color: 'GU605MU-QP096X',
  }
  // More products...
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("src/assets/LandingImage.webp")' }}>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="company logo"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white transition-colors duration-500 hover:text-red-600 after">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5 mr-5  hover:fill-red-600 hover:cursor-pointer">
                <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              </svg>
              <a href="#" className="text-sm font-semibold leading-6 text-white  hover:text-red-600">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 border-b"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <div className='container center borderS'>
          <div className="relative">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next generation of rog.{' '}
                  <a href="#" className="font-semibold text-indigo-300">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Elevate Your <br /> Gaming Realm
                </h1>
                <p className="mt-6 text-lg leading-8 text-red-300">
                  ASUS ROG Series – Where Power Meets Precision
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-200">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backgroundRed">
        <div className="mx-auto max-w-2xl px-0 py-2 sm:px-0 sm:py-4 lg:max-w-screen-2xl lg:px-1">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-2 sm:gap-y-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2">
            {articles.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full h-full overflow-hidden bg-gray-200 relative">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <div className='absolute text-red-100 text-2xl center group-hover:underline group-hover:text-black transition-all'>{product.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="backgroundRed">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-2 sm:py-24 lg:max-w-7xl lg:px-4">
          <h2 className="text-2xl font-bold tracking-tight text-red-300 text-center">Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-blue-400">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full h-[90vh] bg-black sm:h-[80vh]'>
        <div className='w-full h-[30%] sm:h-[50%]' >
          <img src="./src/assets/FF7ACBD0-24CD-49EC-80AB-9D96E9F008E5_upscayl_4x_realesrgan-x4plus.png" alt="" className='w-full h-full object-cover' />
        </div>
        <div className='h-[50%] w-full sm:flex relative text-gray-400 sm:h-[30%]'>
          <div className='w-full h-[50px] m-4'>
            <i className="fa-solid fa-a text-[32px]"></i>
            <span className='ml-4 text-xl'>GAMING LAPTOPS</span>
          </div>
          <div>
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold leading-7 border-b sm:inline sm:border-none"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='flex justify-evenly h-[60px] items-center'>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='text-gray-400 h-[20%] p-4'>
          <i className="fa-solid fa-globe"></i> <span> Gobal English</span>
          <div>
            <span className='mr-2'> Privacy Policy</span><span>Terms of use notice</span> <br />
            <span>&copy; ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>





    </>
  )
}