import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4 mb-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Course Catalog</Link>
        </li>
        <li>
          <Link href="/dashboard">Student Dashboard</Link>
        </li>
      </ul>
    </nav>
  )
}

