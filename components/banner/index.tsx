import Dash from "@/components/dash"

interface BannerProps {
    title: string
    text: string
    children?: React.ReactNode
    picture: React.ReactNode
}

export default function Banner({title, text, children, picture}: BannerProps) {
  return (
    <section className=" bg-gray-100">
        <div className="flex-col-reverse lg:flex-row max-w-[1280px] mx-auto flex items-center justify-between p-7">
            <div className=" max-w-lg mt-10">
            <h1 className="text-base text-center lg:text-left lg:text-3xl font-semibold">{title}</h1>
                <Dash />
                <p className="font-medium text-xs lg:text-lg text-center lg:text-left">{text}</p>
                {children}
            </div>
            <picture>
                {picture}
            </picture>
        </div>
    </section>
  )
}
