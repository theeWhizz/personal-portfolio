const Experiences = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-circular-web font-bold mb-4">Experiences</h2>
            <div className="h-1 w-20 bg-accent"></div>
          </div>

          <div className="space-y-2">
            <div className="text-accent lowercase font-semibold tracking-tighter">Experience</div>
            <h3 className="text-2xl font-semibold font-robert-medium">Soft Tech (3+ Years)</h3>
            <h4 className="text-lg underline col-secondary">UI/UX Designer</h4>
            <p className="col-secondary">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum desi dolore eu fugiat nulla pariatu Duis aute irure.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-accent lowercase font-semibold tracking-tighter">experience</div>
            <h3 className="text-2xl font-semibold font-robert-medium">ModernTech (2+ Years)</h3>
            <h4 className="text-lg underline col-secondary">App Developer</h4>
            <p className="col-secondary">
              In this portfolio, you&apos;ll find a curated selection of projects that
              highlight my skills in [Main Areas, e.g., responsive web design].
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img 
            src="/public/img/blog4.jpeg" 
            alt="Professional working" 
            className="rounded-3xl shadow-2xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;