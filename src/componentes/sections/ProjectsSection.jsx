import Subtitle from "../ui/Subtitle"
import Carrossel from "../ui/Carrossel"

function ProjectsSection(){
    return(
        <section id="projetos" className="scroll-mt-32 bg-background flex flex-col w-full min-h-[70dvh] rounded-card overflow-hidden md:scroll-mt-20">
            <Subtitle>Projetos</Subtitle>
            <Carrossel />
        </section>
    )
}
export default ProjectsSection
