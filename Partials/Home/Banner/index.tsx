import React from 'react'
import Image from "next/image"
import Banner from "@/components/banner";
import imgGoogle from "@/public/googleplay.png" 
import imgApple from "@/public/appstore.png"
import imgBanner from "@/public/team.svg"


export default function BannerHome() {
  return (
    <>
        <Banner
            title='Organize sua equipe com Work it'
            text='melhore a gestão da sua empresa e a criar um ambiente de trabalho mais produtivo e agradável.'
            picture={<Image src={imgBanner} alt="imagem do banner" />}
            >
                <div className="flex items-center justify-center gap-2 m-6 lg:ml-0 lg:justify-start">
                    <button className=" lg:cursor-pointer w-32 lg:w-40"> <Image src={imgApple}  alt="icone applestore"/> </button>
                    <button className="cursor-pointer w-32 lg:w-40"> <Image src={imgGoogle} alt="icone googleplay"/> </button>
                </div>
            </Banner>
    </>
  )
}
