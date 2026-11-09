import Subtitle from "../ui/Subtitle"
import Carrossel from "../ui/Carrossel"

function ProjectsSection(){
    return(
        <section id="projetos" className="bg-background flex flex-col w-full min-h-[70dvh] rounded-card overflow-hidden">
            <Subtitle>Projetos</Subtitle>
            <Carrossel />
        </section>
    )
}
export default ProjectsSection
