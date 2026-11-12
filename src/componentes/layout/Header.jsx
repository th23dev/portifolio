import linkedinIcon from '../../assets/linkedin.svg'

import SocialLink from '../ui/SocialLink'




function Header() {
    return (
        <header className="bg-background w-full h-20 rounded-card flex items-center px-6">

            <div className="flex items-center gap-3">
                <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Logo th23dev" className="size-10 shrink-0" />
                <h3 className='text-white text-3xl font-jetbrains-mono'>th23dev</h3>
            </div>

            <nav aria-label="Links do portifólio" className="ml-auto flex items-center gap-6 font-jetbrains-mono text-white">
                <a href="#inicio" className="transition-colors duration-200 hover:text-accent">Início</a>
                <a href="#sobre" className="transition-colors duration-200 hover:text-accent">Sobre</a>
                <a href="#projetos" className="transition-colors duration-200 hover:text-accent">Projetos</a>
                <a href="#contatos" className="transition-colors duration-200 hover:text-accent">Contatos</a>
            </nav>

            <nav aria-label="Redes sociais" className="ml-auto flex items-center gap-2">
                <SocialLink img="https://cdn.simpleicons.org/github/8257E5" src="https://github.com/th23dev" alt="GitHub" />
                <SocialLink img={linkedinIcon} src="https://www.linkedin.com/in/raffaelthaua/" alt="LinkedIn" />
                <SocialLink img="https://cdn.simpleicons.org/instagram/E4405F" src="https://www.instagram.com/th23_dev/" alt="Instagram" />
                <SocialLink img="https://cdn.simpleicons.org/tiktok/25F4EE" src="https://www.tiktok.com/@th23_dev" alt="TikTok" />
                {/* <SocialLink img="https://cdn.simpleicons.org/youtube/FF0000" src="https://www.youtube.com/@SEU-USUARIO" alt="YouTube" /> */}
            </nav>
        </header>
    )
}

export default Header
