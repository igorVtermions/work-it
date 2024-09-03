import React from 'react';
import { Facebook, Instagram, MessageCircleMore, Linkedin, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-purple-900 text-white'>
        <div className='max-w-[1280px] mx-auto px-2 py-7 flex flex-col gap-6'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between border-b pb-10'>
                <ul className='flex flex-col items-center'>
                    <li><h2 className="text-white font-bold text-2xl mb-5">Work <span className="text-purple-800 bg-white rounded-sm px-1">it</span></h2></li>
                    <li className='text-[11px] max-w-72 text-center'>Na Work It, oferecemos uma experiência de aluguel superior com veículos de alta qualidade. Dirija com estilo e conforto em qualquer viagem, com a garantia de um serviço VIP.</li>
                </ul>
                <div className='flex gap-4'>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-2xl mb-3 font-bold'>Empresa</li>
                        <li>Sobre nós</li>
                        <li>Serviços</li>
                        <li>Pontos de coleta</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-2xl mb-3 font-bold'>Produtos</li>
                        <li>Sobre nós</li>
                        <li>Serviços</li>
                        <li>Pontos de coleta</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row sm:gap-0 items-center justify-between'>
                <p className='flex gap-1 items-center text-sm'><Copyright size={15} />Copyright 2024. Powered by Work It Team</p>
                <div className='flex gap-1'>
                    <Facebook />
                    <Instagram />
                    <MessageCircleMore />
                    <Linkedin />
                </div>
            </div>
        </div>
    </footer>
  )
}
