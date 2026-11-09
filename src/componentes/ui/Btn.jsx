function Btn({ value, src, target }) {
  if(!src) {
    src = '#'
    target = ''
  }
  return (
    <a href={src} target={target}
      className="
        inline-block rounded bg-background px-4 py-2 text-white border
        transition duration-200
        hover:-translate-y-1 hover:shadow-[0_4px_0_0_white] hover:bg-mist-800
        active:translate-y-0 active:shadow-none 
      "> 
      {value}
    </a>
  )
}

export default Btn