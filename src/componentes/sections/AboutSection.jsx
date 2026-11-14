import Skills from "./Skills"
import Subtitle from "../ui/Subtitle"
import EstudosDev from "../../assets/estudos_dev.webp"

function AboutSection() {
    return (
        <section id="sobre" className="scroll-mt-32 bg-background flex w-full min-h-[70dvh] h-auto flex-col rounded-card md:scroll-mt-20">
            <Subtitle>Sobre Mim</Subtitle>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="min-w-0 text-base leading-relaxed text-text">
                    <div className="space-y-5 p-6 sm:p-10">
                        <h3 className="font-jetbrains-mono text-lg text-white">Meu nome é Raffael Thauã</h3>
                        <p>
                            sou desenvolvedor web
                            e estudante de Sistemas de Informação na UFPA. Desenvolvo interfaces e aplicações web,
                            com experiência em projetos de turismo, sistemas de gestão e suporte de TI.
                        </p>
                        <p>
                            Trabalho com JavaScript, PHP, React e Node.js. Gosto de aprender construindo projetos
                            e explorando novas ferramentas. Fora do código, curto jogos e acompanho novidades de tecnologia.
                        </p>
                    </div>
                    <div className="mt-5 relative isolate">
                        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,var(--color-accent),transparent_70%)] opacity-30" />
                        <svg
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 h-full w-full opacity-20 mix-blend-soft-light"
                            preserveAspectRatio="none"
                            style={{ maskImage: "radial-gradient(ellipse at 50% 120%, black, transparent 70%)" }}
                        >
                            <filter id="shadow-grain">
                                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
                                <feColorMatrix type="saturate" values="0" />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#shadow-grain)" />
                        </svg>
                        <img className="relative mix-blend-lighten" src={EstudosDev} alt="Materias de desenvolvimento." />
                    </div>
                </div>

                <div className="min-w-0 border-t border-divider bg-surface p-6 sm:p-10 lg:border-t-0 lg:border-l">
                    <h3 className="font-jetbrains-mono text-lg text-white">Formação acadêmica</h3>
                    <p className="mt-4 font-medium text-white">Bacharelado em Sistemas de Informação</p>
                    <p className="mt-1 text-sm text-accent">Universidade Federal do Pará · Em andamento</p>
                    <div className="mt-6 border-t border-divider pt-6">
                        <p className="font-medium text-white">Técnico em Manutenção e Suporte</p>
                        <p className="mt-1 text-sm text-accent">
                            EEEM Profª Maria de Nazaré Guimarães Macedo · Concluído
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-divider">
                <Subtitle id='exp_profissional'>Experiência profissional</Subtitle>
                <div className="grid grid-cols-1 border-t border-divider lg:grid-cols-2">
                    <article className="p-6 sm:p-10">
                        <p className="font-jetbrains-mono text-xs text-accent">2026 · Freelancer</p>
                        <h4 className="mt-3 font-jetbrains-mono text-base text-white">Vem Viver Curuçá</h4>
                        <p className="mt-3 leading-relaxed text-text">
                            Desenvolvimento do portal oficial de turismo de Curuçá, com destinos,
                            hospedagens, serviços e eventos para quem visita o município.
                        </p>
                        <a href="https://vemvivercuruca.curuca.pa.gov.br/" target="_blank" rel="noopener noreferrer"
                            className="mt-4 inline-block text-sm text-accent underline underline-offset-4 transition-colors hover:text-white">
                            Conhecer o portal ↗
                        </a>
                    </article>
                    <article className="border-t border-divider p-6 sm:p-10 lg:border-t-0 lg:border-l">
                        <p className="font-jetbrains-mono text-xs text-accent">2026 · Freelancer</p>
                        <h4 className="mt-3 font-jetbrains-mono text-base text-white">GO REGISTER</h4>
                        <p className="mt-3 leading-relaxed text-text">
                            Sistema de gestão para pequenos negócios, reunindo vendas, estoque,
                            caixa, financeiro e relatórios em uma única aplicação.
                        </p>
                        <a href="https://th23dev.github.io/goregister/" target="_blank" rel="noopener noreferrer"
                            className="mt-4 inline-block text-sm text-accent underline underline-offset-4 transition-colors hover:text-white">
                            Conhecer o projeto ↗
                        </a>
                    </article>
                    <article className="border-t border-divider p-6 sm:p-10">
                        <p className="font-jetbrains-mono text-xs text-accent">Mar — Jun 2026 · Estágio</p>
                        <h4 className="mt-3 font-jetbrains-mono text-base text-white">Desenvolvimento Front-End</h4>
                        <p className="mt-1 text-sm text-text">Secretaria de Turismo de Curuçá</p>
                        <p className="mt-3 leading-relaxed text-text">
                            Desenvolvimento de interfaces para o portal turístico, organizando
                            informações sobre os destinos e serviços de Curuçá.
                        </p>
                    </article>
                    <article className="border-t border-divider p-6 sm:p-10 lg:border-l">
                        <p className="font-jetbrains-mono text-xs text-accent">Jul 2026 — Atual · Estágio</p>
                        <h4 className="mt-3 font-jetbrains-mono text-base text-white">Tecnologia da Informação</h4>
                        <p className="mt-1 text-sm text-text">Ministério Público do Estado do Pará</p>
                        <p className="mt-3 leading-relaxed text-text">
                            Apoio às demandas tecnológicas e ao suporte de TI na rotina do órgão.
                        </p>
                    </article>
                </div>
            </div>

            <Subtitle id='skills'>Habilidades Técnicas</Subtitle>
            <Skills />
        </section>
    )
}

export default AboutSection
