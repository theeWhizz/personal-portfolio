"use client"

import gsap from "gsap"

import { Card } from "@/components/ui/card"
import { Plane, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState, useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mehwish",
    text: "Transformed complex ideas into flawless, scalable digital solutions.",
    image: "/public/img/user.png",
  },
  {
    id: 2,
    name: "Elizabeth Jeff",
    text: "Delivered high-performance apps with precision and unmatched expertise.",
    image: "/public/img/user.png",
  },
  {
    id: 3,
    name: "Emily Thomas",
    text: "Simplified workflows, enhanced UX, and exceeded all expectations.",
    image: "/public/img/user.png",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    text: "Innovative solutions that truly transformed our digital presence.",
    image: "/public/img/user.png",
  },
  {
    id: 5,
    name: "Rachel Adams",
    text: "The final product was exactly what we needed.",
    image: "/public/img/user.png",
  },
]

// const additionalTestimonials = [
//   {
//     id: 4,
//     name: "Sarah Johnson",
//     text: "Innovative solutions that truly transformed our digital presence.",
//     image: "/public/img/user.png",
//   },
//   {
//     id: 6,
//     name: "Rachel Adams",
//     text: "The final product was exactly what we needed.",
//     image: "/public/img/user.png",
//   },
// ]

export default function TestimonialsSection() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const overlayRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (showMore) {// Store current scroll position
      // Add styles to prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent page from shifting
    } else {
      // Remove the fixed position without scrolling
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [showMore]);

  useEffect(() => {
    if (showMore && overlayRef.current) {
      gsap.fromTo(overlayRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' }
      );
    }
  }, [showMore]);

  const handleNext = () => {
    setActiveTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    )
  }

  const handlePrevious = () => {
    setActiveTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const handleOpenMore = () => {
    setShowMore(true);
  };

  const handleCloseMore = (e) => {
    e.preventDefault();
    setShowMore(false);
  };

  return (
    <div className="relative mx-auto py-10">
      <div className="md:flex items-center">
        <div className="relative mb-12">
          <div className="absolute -top-6 right-1/4">
            <div className="relative">
              <Plane className="text-yellow-500 w-6 h-6 transform rotate-45" />
              <svg className="absolute -top-4 right-6 -z-10" width="100" height="50" viewBox="0 0 100 50">
                <path d="M 0 25 Q 50 0 100 25" fill="none" stroke="rgb(139, 92, 246)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-circular-web font-medium mb-4">What My Customers Says</h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            From seamless user experiences to cutting-edge solutions, my clients have shared their success stories. Dive into what they have to say about collaborating with me to transform ideas into innovative, scalable, and future-proof digital solutions.
          </p>
          <div className="">
            {!isMobile && (
              <Button
                variant="secondary"
                onClick={handleOpenMore}
                className="bg-accent text-white hover:bg-primary transition-colors duration-200"
              >
                View All
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col py-4 bg-gradient-to-bl from-accent-100 to-cyan-100/10 rounded-2xl items-center md:w-[50%] overflow-hidden">
          <button
            onClick={handlePrevious}
            className="mb-4 p-2 rounded-full bg-gray-100 hover:bg-secondary duration-100 hover:bg-gray-100 transition-colors"
          >
            <ChevronUp className="w-8 h-8 text-gray-600" />
          </button>

          <div className="w-[90%] h-[20rem] overflow-hidden relative rounded-2xl">
            <div 
              className="absolute flex flex-col transition-transform duration-500 ease-in-out" 
              style={{
                transform: `translateY(-${activeTestimonialIndex * 25}rem)`,
                width: '100%'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`p-6 mb-4 h-96 flex items-center transition-all duration-300 ${
                    index === activeTestimonialIndex 
                      ? "opacity-100 scale-100" 
                      : "opacity-70 scale-95"
                  }`}
                >
                  <div className="grid gap-4 w-full">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{testimonial.name}</h3>
                      <p className="text-muted-foreground italic pl-2">{testimonial.text}</p>
                    </div>
                    <span className="text-4xl text-muted-foreground font-serif">&quot;</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <button
            // ref={buttonRef}
            onClick={handleNext}
            className="mt-4 p-2 rounded-full bg-gray-100 hover:bg-secondary duration-100 transition-colors"
          >
            <ChevronDown className="w-8 h-8 text-gray-600 rounded-full" />
          </button>
        </div>
      </div>

      {showMore && (
        <div className="fixed inset-0 bg-muted-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            ref={overlayRef}
            className="relative max-w-7xl w-full mx-4 bg-background rounded-2xl p-8 max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={handleCloseMore}
              className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-circular-web font-bold mb-8 text-center">All Customer Testimonials</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...testimonials].map((testimonial) => (
                <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold font-robert-medium">{testimonial.name}</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-sm">{testimonial.text}</p>
                  <span className="text-3xl text-accent/20 font-serif">&quot;</span>
                </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}