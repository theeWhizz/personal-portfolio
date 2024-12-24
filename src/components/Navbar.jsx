const Navbar = () => {
  return (
    <div>
      <div className="navbar flex-between bg-slate-400 px-7 py-3 rounded-[2rem]">
        <div>
          <h1 className="font-zentry text-3xl special-font text-deepnavyblue-900">. / .<b>blenick</b></h1>
        </div>
        <div className="flex gap-6">
          <a href="home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar