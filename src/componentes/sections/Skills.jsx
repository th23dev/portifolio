import skills from '../../data/skills'

function Skill({imgSrc, title}){
    return(
        <li className="group flex min-w-0 items-center justify-center gap-3 border border-divider bg-surface px-4 py-5 transition-colors hover:border-accent @min-[400px]:col-span-2 @min-[400px]:@max-[680px]:nth-[3n+3]:col-start-2 @min-[680px]:nth-[5n+4]:col-start-2">
            <img src={imgSrc} alt="" className={`size-8 shrink-0 object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0 motion-reduce:transition-none ${title === 'GitHub' ? 'invert opacity-60 group-hover:opacity-100 transition-[filter,opacity]' : ''}`} loading="lazy" width="32" height="32" />
            <h4 className="font-jetbrains-mono text-sm text-white">{title}</h4>
        </li>
    )
}

function Skills(){
    return(
        <section aria-label="Habilidades" className="@container w-full min-w-0">
            <ul className="grid grid-cols-1 @min-[400px]:grid-cols-4 @min-[680px]:grid-cols-6">
                {skills.map(({ title, icon }) => (
                    <Skill key={title} title={title} imgSrc={icon} />
                ))}
            </ul>
        </section>
    )
}
export default Skills
