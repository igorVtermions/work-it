import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link";

export default function Header() {
  return (
    <header  className="w-full sticky top-0 bg-purple-950 p-5 ">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl">Work <span className="text-purple-800 bg-white rounded-sm px-1">it</span></h1>
        </Link>
        <nav>
          <ul className="hidden lg:flex gap-4">
            <li className="text-white hover:text-purple-400 transition delay-150 duration-300 ease-in-out">
              <Link href="/">opção 1</Link>
            </li>
            <li className="text-white hover:text-purple-400 transition delay-150 duration-300 ease-in-out">
              <Link href="/#sobre">Sobre</Link>
            </li>
            <li className="text-white hover:text-purple-400 transition delay-150 duration-300 ease-in-out">
              <Link href="/">opção 3</Link>
            </li>
          </ul>
        </nav>
        <Button className="bg-purple-800 hover:bg-purple-900 transition delay-150 duration-300 ease-in-out hidden lg:block cursor-pointer"><Link href="/login">Login</Link></Button>
        
        <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden bg-purple-800"><Menu /></Button>
      </SheetTrigger>
      <SheetContent>
      <nav className="h-full">
          <ul className="flex flex-col items-center justify-center gap-4 h-full">
            <li className="text-black text-2xl">
              <Link href="/">Sobre</Link>
            </li>
            <li className="text-black text-2xl">
              <Link href="/">Recursos</Link>
            </li>
            <li className="text-black text-2xl">
              <Link href="/">Contatos</Link>
            </li>
            <Button className="bg-purple-800 hover:bg-purple-950 transition delay-150 duration-300 ease-in-out mt-6 text-2xl p-6"><Link href="/login">Login</Link></Button>
          </ul>
          
        </nav>
        
        
        <SheetFooter>
          <SheetClose asChild>
        </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
      </div>
    </header>
  );
}
