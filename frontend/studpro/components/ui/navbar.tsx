'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, LogOut, User } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToogle'
import { usePathname } from 'next/navigation'
import logo from '../../images/image.png'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  if (pathname === '/authentication') {
    return null
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex-shrink-0">
              <Image className="h-8 w-8 rounded-lg" src={logo} alt="Logo" width={32} height={32} />
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              <Link href="/dashboard" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/problem-author" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Problem Author
              </Link>
              <Link href="/flowchart" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Flowchart
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="ml-3 relative hidden md:block">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <User className="h-8 w-8 rounded-full text-gray-800 dark:text-white" />
                </button>
              </div>
              {isProfileOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-white" role="menuitem">
                    Profile
                  </Link>
                  <button onClick={()=>{localStorage.removeItem('access_token');window.location.href='/authentication'}} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white" role="menuitem">
                    <LogOut className="mr-3 h-5 w-5" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/dashboard" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/problem-author" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Problem Author
            </Link>
            <Link href="/flowchart" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Flowchart
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-300 dark:border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 rounded-full p-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-gray-800 dark:text-white">User Name</div>
                <div className="text-sm font-medium leading-none text-gray-600 dark:text-gray-400">user@example.com</div>
              </div>
              <ThemeToggle />
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                Profile
              </Link>
              <button onClick={()=>{localStorage.removeItem('access_token');window.location.href='/authentication'}} className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <LogOut className="mr-3 h-5 w-5" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}