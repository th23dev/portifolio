import Btn from "../ui/Btn"
import th23devImg from "../../assets/th23dev.webp"

function HeroSection(){
    return(
        <section id="inicio" className="bg-background flex flex-col md:flex-row w-full min-h-[70dvh] rounded-card overflow-hidden">
            <div className="w-full md:w-1/2 min-w-0 h-full border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-divider p-10 flex flex-col gap-4">
                <h2 className="text-6xl sm:text-5xl lg:text-9xl font-inter font-bold text-white">Raffael <br /> Thauã</h2>
                <p className="text-base leading-relaxed text-text">
                    Desenvolvedor apaixonado por tecnologia, criando interfaces e transformando ideias em experiências digitais.
                </p>

                <div className="w-auto h-auto flex gap-4">
                    <Btn value='Meus projetos ↗' src='#projetos' primary={true}/>
                    <Btn value='Download CV'/>
                </div>
            </div>

            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto min-w-0 self-stretch border-divider">
                <img src={th23devImg} alt="th23dev" className="absolute inset-0 h-full w-full object-cover" />
            </div>
        </section>
    )
}

export default HeroSection
