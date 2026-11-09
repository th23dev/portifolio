import Subtitle from "../ui/Subtitle"
import SocialLink from "../ui/SocialLink"
import FireBlocks from "../ui/FireBlocks"
import linkedinIcon from "../../assets/linkedin.svg"

function Footer() {
    return (
        <footer id="contatos" className="bg-background w-full min-h-[30dvh] flex flex-col rounded-card overflow-hidden">
            <Subtitle>Links Para Contato</Subtitle>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex min-w-0 flex-col">
                    <div className="p-6 sm:p-10">
                    <h3 className="font-jetbrains-mono text-3xl leading-tight text-white sm:text-4xl">
                        Vamos trabalhar <span className="text-accent">juntos?</span>
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-text">
                        Tem um projeto em mente ou uma oportunidade? Vamos conversar.
                    </p>
                    <nav aria-label="Redes sociais" className="mt-6 flex flex-wrap items-center gap-2">
                        <SocialLink img="https://cdn.simpleicons.org/github/8257E5" src="https://github.com/th23dev" alt="GitHub" />
                        <SocialLink img={linkedinIcon} src="https://www.linkedin.com/in/raffaelthaua/" alt="LinkedIn" />
                        <SocialLink img="https://cdn.simpleicons.org/instagram/E4405F" src="https://www.instagram.com/th23_dev/" alt="Instagram" />
                        <SocialLink img="https://cdn.simpleicons.org/tiktok/25F4EE" src="https://www.tiktok.com/@th23_dev" alt="TikTok" />
                    </nav>
                    </div>
                    <FireBlocks className="mt-auto" />
                </div>

                <div className="flex min-w-0 flex-col border-t border-divider font-jetbrains-mono lg:border-l lg:border-t-0">
                    {[
                        { label: 'Telefone', value: '+55 (91) 98475-0946', href: 'tel:+5591984750946' },
                        { label: 'E-mail', value: 'thaua23sl@gmail.com', href: 'mailto:thaua23sl@gmail.com' },
                    ].map(({ label, value, href }) => (
                        <a key={label} href={href}
                            className="group flex shrink-0 items-center justify-between gap-4 border-b border-divider bg-surface px-6 py-5 transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none sm:px-10">
                            <span className="min-w-0">
                                <span className="block text-xs text-text">{label}</span>
                                <span className="mt-2 block wrap-break-word text-sm text-accent transition-colors group-hover:text-white motion-reduce:transition-none">{value}</span>
                            </span>
                            <span aria-hidden="true" className="shrink-0 text-xl text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">&#8599;</span>
                        </a>
                    ))}
                </div>
            </div>

            <p className="mt-auto border-t border-divider px-6 py-4 text-center font-jetbrains-mono text-xs leading-relaxed text-text sm:px-10">
                © {new Date().getFullYear()} Raffael Thauã. Todos os direitos reservados.
            </p>
        </footer>
    )
}
export default Footer
