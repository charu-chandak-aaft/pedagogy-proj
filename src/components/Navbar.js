'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex space-x-6 justify-center">
        <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
      </ul>
    </nav>
  )
}