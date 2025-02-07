const CTASection = () => {
  return (
    <section className="my-10 bg-gradient-to-r from-accent to-cyan-100 py-16 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-circular-web font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-md text-gray-100 mb-8 px-10">
          Join thousands of satisfied customers who have already taken the leap. Start your journey today!
        </p>
        <a
          href="#"z
          className="inline-block bg-background text-primary font-semibold py-3 px-8 rounded-full hover:bg-primary hover:text-background transition duration-300"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;