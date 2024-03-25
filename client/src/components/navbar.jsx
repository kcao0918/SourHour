import React from 'react'
import { Disclosure } from '@headlessui/react'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { Cog8ToothIcon } from '@heroicons/react/24/outline'

const navigation = [
  { icon: HomeIcon, href: '#', current: true },
  { icon: ClockIcon, href: '#', current: false },
  { icon: BookmarkIcon, href: '#', current: false },
  { icon: Cog8ToothIcon, href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed bottom-0 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium', index !== 0 && 'ml-12' 
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
