"use client"

import gsap from "gsap"

import { Card } from "@/components/ui/card"
import { Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState, useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mehwish",
    text: "Compliment interested discretion estimating on stimulated apartments oh.",
    image: "/public/img/user.png",
  },
  {
    id: 2,
    name: "Elizabeth Jeff",
    text: "Dear so sing when in find read of call. As distrusts behaviour abilities defective is.",
    image: "/public/img/user.png",
  },
  {
    id: 3,
    name: "Emily Thomas",
    text: "Never at water me might. On formed merits hunted unable merely by mr whence or.",
    image: "/public/img/user.png",
  },
]

export default function TestimonialsSection() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const buttonRef = useRef(null);

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

  useEffect(() => {
    const button = buttonRef.current;

    gsap.to(button, {
      scale: 0.7,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    return  () => {
      gsap.killTweensOf(button);
    };
  }, []);

  return (
    <div className="mx-auto py-16 md:flex items-center">
      <div className="relative mb-12">
        <div className="absolute -top-6 right-1/4">
          <div className="relative">
            <Plane className="text-yellow-500 w-6 h-6 transform rotate-45" />
            <svg className="absolute -top-4 right-6 -z-10" width="100" height="50" viewBox="0 0 100 50">
              <path d="M 0 25 Q 50 0 100 25" fill="none" stroke="rgb(139, 92, 246)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-circular-web font-bold mb-4">What Our Customers Says</h2>
        <p className="text-gray-600 mb-6 max-w-lg">
          Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get
          adieus nature day course for common.
        </p>
        <Button
          variant="secondary"
          className="bg-accent text-white border hover:bg-primary transition-colors duration-200"
        >
          View More
        </Button>
      </div>

      <div className="flex flex-col py-4 bg-gradient-to-bl from-accent-100 to-cyan-100/10 rounded-2xl items-center md:w-[50%]">
        <button
          ref={buttonRef}
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
  )
}