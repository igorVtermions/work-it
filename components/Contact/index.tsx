import React from 'react'
import Dash from '../dash'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { MessageCircleMore, Phone } from "lucide-react"
import sac from "@/public/sac.svg"
import Image from "next/image"

export default function Contact() {
  return (
    <section className=" bg-gray-100 flex ">
        <div className="flex-col-reverse lg:flex-row max-w-[1280px] mx-auto flex items-center justify-between p-7">
        <div className='flex items-center flex-col-reverse lg:flex-row-reverse justify-center gap-20'>
          <form  className="flex flex-col items-center gap-2 border-2 border-purple-800 p-4 rounded-xl">
            <h2 className='mb-4 font-semibold text-xl'>Fale Conosco</h2>
            <input type="text" placeholder="Nome" name="nome" className='p-2 rounded-lg' />
            <input type="email" placeholder="E-mail" name="email" className='p-2 rounded-lg'/>
            <input type="text" placeholder="Nome" name="nome" className='p-2 rounded-lg'/>
            <select id="subject" name="subject" className='p-2 rounded-lg' required>
              <option value="">Selecione um assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="suporte">Suporte Técnico</option>
              <option value="reclamacao">Reclamação</option>
              <option value="reclamacao">Outro Assunto</option>
            </select>
            <textarea placeholder="Deixe sua mensagem aqui..." className='p-6 rounded-lg' ></textarea>
            <Button className="bg-purple-800 hover:bg-purple-950 transition delay-150 duration-300 ease-in-out mt-6 text-xl p-4"><Link href="/login">Enviar</Link></Button>
          </form>

          <div className='flex flex-col items-center'>
          <picture  >
                <Image src={sac} alt="imagem do banner"  className='w-80' />
            </picture>
            <h2 className='mb-4 font-semibold text-xl'>Entre em contato conosco pelo seu smartphone</h2>
            <Dash />
            <div className='flex flex-col items-center '>
            <Button className="bg-purple-800 hover:bg-purple-950 transition delay-150 duration-300 ease-in-out mt-6 text-xl p-4"><Link href="123456789101" className='flex p-2 items-center gap-3' ><Phone /> Telefone</Link></Button>
            <Button className="bg-purple-800 hover:bg-purple-950 transition delay-150 duration-300 ease-in-out mt-6 text-xl p-4"><Link href="/" className='flex p-2 items-center gap-3' ><MessageCircleMore /> WhatsApp</Link></Button>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}
