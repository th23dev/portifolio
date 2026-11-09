import Tag from './Tag'
import FeaturedBadge from './FeaturedBadge'

const tagColors = {
    html: { textColor: 'text-orange-300', bgColor: 'bg-orange-950' },
    css: { textColor: 'text-blue-300', bgColor: 'bg-blue-950' },
    js: { textColor: 'text-yellow-300', bgColor: 'bg-yellow-950' },
    php: { textColor: 'text-indigo-300', bgColor: 'bg-indigo-950' },
    sql: { textColor: 'text-emerald-300', bgColor: 'bg-emerald-950' },
    firebase: { textColor: 'text-amber-300', bgColor: 'bg-amber-950' },
    react: { textColor: 'text-cyan-300', bgColor: 'bg-cyan-950' },
    tailwind: { textColor: 'text-sky-300', bgColor: 'bg-sky-950' },
}

function ProjectCard({ project, featured = false }) {
    const slug = new URL(project.url).pathname.split('/').filter(Boolean)[0] || 'curuca'
    const [name, category] = project.title.split(' | ')

    return (
        <article className="relative overflow-hidden border border-divider bg-surface">
            {featured && (
                <div className="absolute right-0 top-0">
                    <FeaturedBadge />
                </div>
            )}
            <img src={`${import.meta.env.BASE_URL}projects/${project.image || `${slug}.png`}`} alt={`Página inicial de ${name}`} loading="lazy" width="1440" height="960" className="h-44 w-full border-b border-divider object-cover object-top"/>

            <div className="space-y-3 p-4">
                <h3 className="font-jetbrains-mono text-sm font-semibold text-white">{name}</h3>
                {category && <p className="text-xs text-text">{category}</p>}
                <p className="line-clamp-3 text-sm leading-relaxed text-text">{project.desc}</p>
                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                    {project.tags.map((tag) => (
                        <li key={tag}>
                            <Tag textColor={tagColors[tag]?.textColor} bgColor={tagColors[tag]?.bgColor}>
                                {tag}
                            </Tag>
                        </li>
                    ))}
                </ul>
                <a href={project.url} className="inline-block text-sm text-accent underline underline-offset-4 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${name} (abre em nova aba)`}>
                    Ver projeto ↗
                </a>
            </div>
        </article>
    )
}

export default ProjectCard
