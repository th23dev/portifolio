import Skills from "./Skills"
import Subtitle from "../ui/Subtitle"

function AboutSection() {
    return (
        <section id="sobre" className="bg-background flex w-full min-h-[70dvh] h-auto flex-col rounded-card">
            <Subtitle>Sobre Mim</Subtitle>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="min-w-0 space-y-5 p-6 text-base leading-relaxed text-text sm:p-10">
                    <p>
                        Sou <strong className="font-medium text-white">Raffael Thauã</strong>, desenvolvedor web
                        e estudante de Sistemas de Informação na UFPA. Desenvolvo interfaces e aplicações web,
                        com experiência em projetos de turismo, sistemas de gestão e suporte de TI.
                    </p>
                    <p>
                        Trabalho com JavaScript, PHP, React e Node.js. Gosto de aprender construindo projetos
                        e explorando novas ferramentas. Fora do código, curto jogos e acompanho novidades de tecnologia.
                    </p>
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
                <Subtitle>Experiência profissional</Subtitle>
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

            <Subtitle>Habilidades Técnicas</Subtitle>
            <Skills />
        </section>
    )
}

export default AboutSection
