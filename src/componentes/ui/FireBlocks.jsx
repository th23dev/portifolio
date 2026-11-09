// Heights are measured in square blocks, matching the reference silhouette.
const columns = [
    { base: 1, tip: 1 },
    { base: 2, tip: 1 },
    { base: 1, tip: 1 },
    { base: 2, tip: 2 },
    { base: 2, tip: 1 },
    { base: 1, tip: 2 },
    { base: 2, tip: 1 },
    { base: 1, tip: 1 },
]

function FireBlocks({ className = '' }) {
    return (
        <div className={`grid aspect-8/5.5 w-full grid-cols-8 items-end overflow-hidden bg-background ${className}`} aria-hidden="true">
            {columns.map(({ base, tip }, index) => (
                <div key={index} className="flex min-w-0 flex-col">
                    {Array.from({ length: tip + base }, (_, block) => (
                        <div
                            key={block}
                            className={`aspect-square w-full border border-divider hover:brightness-90 ${block < tip ? 'bg-white' : 'bg-accent'}`}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default FireBlocks