function PageButton({ arrow = false, children, ...props }) {
    return (
        <button
            type="button"
            className={`inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-card border transition-colors
                focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent
                disabled:cursor-not-allowed disabled:opacity-25
                enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-background
                aria-[current=page]:border-accent aria-[current=page]:bg-accent aria-[current=page]:text-background
                ${arrow ? 'border-transparent bg-transparent text-accent' : 'border-divider bg-surface text-text'}`}
            {...props}
        >
            {children}
        </button>
    )
}

function Pagination({ page, totalPages, onPageChange, controls }) {
    return (
        <nav aria-label="Paginação dos projetos" className="mt-8 flex items-center justify-center gap-2 font-jetbrains-mono text-sm">
            <PageButton arrow aria-label="Página anterior" aria-controls={controls} disabled={page === 0} onClick={() => onPageChange(page - 1)}>‹</PageButton>

            {Array.from({ length: totalPages }, (_, index) => (
                <PageButton key={index} aria-label={`Página ${index + 1}`} aria-controls={controls} aria-current={page === index ? 'page' : undefined} onClick={() => onPageChange(index)}>{index + 1}</PageButton>
            ))}

            <PageButton arrow aria-label="Próxima página" aria-controls={controls} disabled={page === totalPages - 1} onClick={() => onPageChange(page + 1)}>›</PageButton>
        </nav>
    )
}

export default Pagination
