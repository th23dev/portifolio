import Btn from "../ui/Btn"
import th23devImg from "../../assets/th23dev.webp"

function HeroSection(){
    return(
        <section id="inicio" className="bg-background flex flex-col md:flex-row w-full min-h-[70dvh] rounded-card overflow-hidden">
            <div className="w-full md:w-1/2 min-w-0 h-full border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-divider p-10 flex flex-col gap-4">
                <h2 className="text-3xl sm:text-5xl lg:text-5xl wrap-break-word font-jetbrains-mono text-white">Olá, eu sou Raffael Thauã</h2>
                <p className="text-base leading-relaxed text-text">
                    Desenvolvedor apaixonado por tecnologia, criando interfaces e transformando ideias em experiências digitais.
                </p>

                <div className="w-auto h-auto flex gap-4">
                    <Btn value='Projetos' src='#projetos'/>
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
