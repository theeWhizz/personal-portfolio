const Experiences = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="space-y-5">
          <div>
            <h2 className="text-4xl md:text-5xl font-circular-web font-medium mb-4">Experiences</h2>
            <div className="h-1 w-20 bg-accent"></div>
          </div>

          <div className="space-y-2">
            <div className="text-accent lowercase font-semibold tracking-tighter">Experience</div>
            <h3 className="text-2xl font-semibold font-robert-medium">Freelance Design</h3>
            <h4 className="text-lg underline col-secondary">UI/UX Designer</h4>
            <p className="col-secondary">
              Delivered client-focused digital designs for SaaS and e-commerce platforms. Specialized in wireframing, prototyping, and optimizing user journeys for accessibility.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-accent lowercase font-semibold tracking-tighter">experience</div>
            <h3 className="text-2xl font-semibold font-robert-medium">Independent Contract Work (2+ Years)</h3>
            <h4 className="text-lg underline col-secondary">App Developer</h4>
            <p className="col-secondary">
            </p>
              Developed and maintained mobile applications for iOS and android platforms. Focused on enhancing user experience through iterative design and testing.
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