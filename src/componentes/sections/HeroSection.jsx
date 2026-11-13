import Btn from "../ui/Btn"
import th23devImg from "../../assets/th23dev.webp"

function HeroSection(){
    return(
        <section id="inicio" className="scroll-mt-32 bg-background flex flex-col md:scroll-mt-20 md:flex-row w-full min-h-[70dvh] rounded-card overflow-hidden">
            <div className="w-full md:w-1/2 min-w-0 h-full border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-divider p-6 sm:p-8 md:p-6 lg:p-10 flex flex-col gap-4">
                <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-titan-one leading-none text-white">Raffael <br /> Thauã</h2>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-text">
                    Programador dedicado a alcançar suas <br /> expectativas e entregar o melhor produto.
                </p>

                <div className="flex w-full flex-wrap gap-3">
                    <Btn value='Meus projetos ↗' src='#projetos' primary={true}/>
                    <Btn value='Contato' src='#contatos'/>
                </div>
            </div>

            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto min-w-0 self-stretch border-divider">
                <img src={th23devImg} alt="th23dev" className="absolute inset-0 h-full w-full object-cover" />
            </div>
        </section>
    )
}

export default HeroSection
