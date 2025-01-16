'use client';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname();
  if(pathname === '/authentication') {
    return <></>;
  }
  else
  return (
    <footer className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}