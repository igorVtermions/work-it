import Image from 'next/image'
import React from 'react'

import teste from "@/public/teste.png";
import { Button } from '../ui/button';
import Dash from '../dash';

interface FeatureBlockProps {
    inverse?: boolean
    title: string
    text: string
    buttonText?: string
    picture: React.ReactNode
}

export default function FetureBlock({inverse, title, text, buttonText, picture}: FeatureBlockProps) {
  return (
    <div id='sobre' className={`flex-col ${inverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} max-w-[1280px] mx-auto flex items-center justify-between py-6 gap-12 px-7`}>
        {picture}
        <div className='flex flex-col gap-2 items-center text-center lg:items-start lg:text-left'>
            <h2 className='text-xl lg:text-3xl font-semibold'>{title}</h2>
            <Dash />
            <p className='text-sm lg:text-xl'>{text}</p>
            {buttonText && <Button className='w-[250px] h-10 bg-purple-900 text-white hover:bg-purple-700 mt-2'>{buttonText}</Button>}
        </div>
    </div>
  )
}
