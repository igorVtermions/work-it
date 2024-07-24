import Image from "next/image"
import imgBanner from "@/public/team.svg"
import imgGoogle from "@/public/googleplay.png" 
import imgApple from "@/public/appstore.png"
import Dash from "@/components/dash"

export default function Banner() {
  return (
    <section className=" bg-gray-100">
        <div className="flex-col-reverse lg:flex-row max-w-[1280px] mx-auto flex items-center justify-between p-7">
            <div className=" max-w-lg mt-10">
            <h1 className="text-base text-center lg:text-left lg:text-3xl font-semibold">Organize sua equipe com Work it</h1>
                <Dash />
                <p className="font-medium text-xs lg:text-lg text-center lg:text-left">melhore a gestão da sua empresa e a criar um ambiente de trabalho mais produtivo e agradável.</p>
                <div className="flex items-center justify-center gap-2 m-6">
                    <button className=" lg:cursor-pointer w-32 lg:w-40"> <Image src={imgApple}  alt="icone applestore"/> </button>
                    <button className="cursor-pointer w-32 lg:w-40"> <Image src={imgGoogle} alt="icone googleplay"/> </button>
                </div>
            </div>
            <picture>
                <Image src={imgBanner} alt="imagem do banner" />
            </picture>
        </div>
    </section>
  )
}
