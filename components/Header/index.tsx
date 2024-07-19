
import Link from "next/link";

export default function Header() {
  return (
    <header  className="w-full sticky top-0 bg-black p-5">
      <div className="max-w-7xl m-0-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl">Work <span className="text-purple-800 bg-white rounded-sm px-1">it</span></h1>
        </Link>
        <nav>
          <ul>
            <li className="text-white">
              <Link href="/">opção 1</Link>
            </li>
            <li>
             <Link href="/login" className="text-white">login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
