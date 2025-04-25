import gsap from "gsap";
import { ArrowRight, User, Calendar } from "lucide-react"
import PropTypes from 'prop-types';
import { useRef } from "react";

export default function Blog() {
  // Blog posts data array
  const blogPosts = [
    {
      id: 1,
      title: "Inspiring the World, One Project at a Time for the man",
      image: "/public/img/blog1.jpeg",
      author: "Osman Blenick",
      date: "April 10",
      alt: "Person working on laptop with red lighting",
    },
    {
      id: 2,
      title: "Let's bring your ideas to life! Contact me, and let's",
      image: "/public/img/blog2.jpeg",
      author: "Scott Evans",
      date: "October 1",
      alt: "Person working on laptop in cozy environment",
    },
    {
      id: 3,
      title: "Each one showcases my approach and dedication man",
      image: "/public/img/blog3.jpeg",
      author: "Nyandigisi Ongaga",
      date: "May 28",
      alt: "Person smiling while working on laptop",
    },
  ]

  const cardRef = useRef(null);


  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out",
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    })
  }

const BlogCard = ({ post }) => (
    <div
      className="rounded-3xl overflow-hidden bg-primary border border-primary flex flex-col"
    >
      <div className="relative h-64">
        <div className="h-full rounded-3xl p-6">
          <img src={post.image || "/placeholder.svg"} alt={post.alt} className="absolute top-0 left-0 rounded-3xl object-cover w-full h-full" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="flex items-center gap-1 bg-accent text-primary-foreground px-2 py-1 rounded-md text-sm font-circular-web">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-1 bg-accent text-primary-foreground px-2 py-1 rounded-md text-sm font-circular-web">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-4 font-robert-medium">{post.title}</h3>
        <div className="mt-auto">
          <a
            href="#"
            className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors font-robert-medium tracking-tighter"
          >
            READ MORE <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )

  BlogCard.propTypes = {
    post: PropTypes.shape({
      image: PropTypes.string,
      author: PropTypes.string,
      date: PropTypes.string,
      alt: PropTypes.string,
    }).isRequired,
  };

  return (
    <div className="text-primary-foreground py-10">
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-accent font-zentry text-2xl font-medium tracking-wide mb-4">BLOG AND NEWS</h2>
          <h1 className="text-4xl text-primary lg:text-5xl font-medium max-w-4xl mx-auto leading-tight font-circle-web">
            Elevating Personal Branding the through Powerful Portfolios
          </h1>
        </div>

        {/* Blog Cards */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post}
              ref={cardRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  )
}