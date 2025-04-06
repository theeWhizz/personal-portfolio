import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { Textarea } from "./ui/textarea";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div 
      // style={{
      //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='500' cy='400' r='400' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3Ccircle cx='100' cy='300' r='150' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3Ccircle cx='600' cy='500' r='200' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3C/svg%3E")`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   zIndex: 10
      // }}
      // className="absolute left-0 right-0 px-4 py-8 md:py-12 w-full flex items-center justify-center md:bg-gradient-to-br from-accent-100 to-cyan-100/10">
      >
      <div className="w-full mx-auto rounded-3xl overflow-hidden bg-white shadow-xl flex">
        {/* Left side - Hero section */}
        <div className="relative hidden md:flex md:w-1/2 bg-gradient-to-br from-accent to-accent-foreground">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='400' cy='400' r='300' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3Ccircle cx='200' cy='300' r='150' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3Ccircle cx='600' cy='500' r='200' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative flex flex-col items-center justify-center p-12 text-white">
            <div className="">
              <h3 className="text-lg mb-4 font-semibold text-border uppercase">Connect with me</h3>
              <h2 className="tex-3xl md:text-5xl font-circular-web font-bold">
                <span><BiSolidMessageRoundedDots /></span>
                Let&apos;s Bring Your Digital Ideas to Life</h2>
              <div>
                <p className="text-md text-gray-100 my-4">
                  Join thousands of satisfied customers who have already taken the leap. Start your journey today!
                </p>
                <Button className="bg-primary hover:bg-foreground">
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form section */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <div className="space-y-6">
            <div className="space-y-2">
            <h2 className="text-4xl font-circular-web font-bold tracking-tight">Fill the form <br />to <span className="text-accent">contact me.</span></h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your name
                </label>
                <Input id="name" placeholder="John Doe" type="text" className="w-full p-3" />
              </div>

              <div className="space-y-2">
                <label htmlFor="text" className="text-sm font-medium">Your phone number</label>  
                <Input id="name" placeholder="(+254) 701 234 567" type="text" className="w-full p-3" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your email
                </label>
                <Input id="email" placeholder="username@gmail.com" type="email" className="w-full p-3" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea placeholder="Your message" className="w-full p-3" />
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-primary hover:bg-foreground" disabled={isLoading}>
                Send Message
                <ArrowRight />
              </Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;