import Image from 'next/image'
import React from 'react'

import teste from "@/public/teste.png";
import FeatureBlock from "@/components/FeatureBlock";

export default function AboutHome() {
  return (
    <>
        <FeatureBlock
          title='Lorem ipsum dolor sit amet consectetur adipisicing'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nulla maxime debitis odit rerum itaque beatae assumenda est aspernatur voluptates!'
          buttonText={`Venha fazer parte`}
          picture={<Image src={teste} alt='imagem teste' className='w-[320px] h-[320px]' />}
        />
    </>
  )
}
