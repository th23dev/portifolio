import linkedinIcon from '../../assets/linkedin.svg'

import SocialLink from '../ui/SocialLink'
import SectionDropdown from '../ui/SectionDropdown'




function Header() {
    return (
        <header className="bg-background flex min-h-20 w-full flex-wrap items-center gap-y-3 rounded-card px-4 py-4 md:flex-nowrap md:px-6 sticky top-0 z-10 border-divider border-b-[0.5px] border-t-[0.5px]">

            <div className="flex items-center gap-3">
                <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Logo th23dev" className="size-10 shrink-0" />
                <h3 className="font-jetbrains-mono text-2xl text-white sm:text-3xl">th23dev</h3>
            </div>

            <nav aria-label="Links do portifólio" className="order-3 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 font-jetbrains-mono text-sm text-white md:order-0 md:ml-auto md:w-auto md:flex-nowrap md:justify-end md:gap-3 md:text-sm lg:text-base">
                <div className="group relative">
                    <a href="#inicio" className="transition-colors duration-200 hover:text-accent">Início</a>
                </div>
                <div className="group relative">
                    <a href="#sobre" className="transition-colors duration-200 hover:text-accent">Sobre</a>
                    <SectionDropdown>
                        <a href="#exp_profissional" className="transition-colors duration-200 hover:text-accent">Experiência profissional</a>
                        <a href="#skills" className="transition-colors duration-200 hover:text-accent">Habilidades Técnicas</a>
                    </SectionDropdown>
                </div>
                <div className="group relative">
                    <a href="#projetos" className="transition-colors duration-200 hover:text-accent">Projetos</a>
                </div>
                <div className="group relative">
                    <a href="#contatos" className="transition-colors duration-200 hover:text-accent">Contatos</a>
                </div>
            </nav>

            <nav aria-label="Redes sociais" className="ml-auto hidden items-center gap-2 xl:flex">
                <SocialLink img="https://cdn.simpleicons.org/github/8257E5" src="https://github.com/th23dev" alt="GitHub" />
                <SocialLink img={linkedinIcon} src="https://www.linkedin.com/in/raffaelthaua/" alt="LinkedIn" />
                <SocialLink img="https://cdn.simpleicons.org/instagram/E4405F" src="https://www.instagram.com/th23dev/" alt="Instagram" />
                <SocialLink img="https://cdn.simpleicons.org/tiktok/25F4EE" src="https://www.tiktok.com/@th23_dev" alt="TikTok" />
                {/* <SocialLink img="https://cdn.simpleicons.org/youtube/FF0000" src="https://www.youtube.com/@SEU-USUARIO" alt="YouTube" /> */}
            </nav>
        </header>
    )
}

export default Header
