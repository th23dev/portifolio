import { useState } from 'react'
import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
import Pagination from './Pagination'

function Carrossel() {
    const [page, setPage] = useState(0)
    const totalProjects = projects.flat().length

    return (
        <div className="p-5 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-text">Ideias transformadas em experiências digitais.</p>
                <span className="font-jetbrains-mono text-xs text-accent">
                    {String(totalProjects).padStart(2, '0')} projetos
                </span>
            </div>

            <div id="project-grid" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {projects[page].map((project, index) => (
                    <ProjectCard key={project.url} project={project} featured={page === 0 && index < 3}/>
                ))}
            </div>

            <Pagination page={page} totalPages={projects.length} onPageChange={setPage} controls="project-grid"/>
        </div>
    )
}

export default Carrossel
