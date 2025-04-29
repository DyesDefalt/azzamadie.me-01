
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog = () => {
  // Mock blog posts data - in a real implementation, this would come from an API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Proven SEO Strategies That Actually Work in 2025",
      excerpt: "Discover the latest SEO strategies that are driving real results in today's constantly evolving search landscape.",
      date: "April 5, 2025",
      readTime: "8 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "How to Build a Data-Driven Social Media Strategy",
      excerpt: "Learn how to leverage data analytics to create and optimize social media campaigns that deliver measurable results.",
      date: "March 20, 2025",
      readTime: "6 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Future of AI in Digital Marketing",
      excerpt: "Explore how artificial intelligence is transforming digital marketing and what marketers need to know to stay ahead.",
      date: "March 12, 2025",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Conversion Rate Optimization: A Step-by-Step Guide",
      excerpt: "A comprehensive guide to improving your website's conversion rate through strategic testing and optimization.",
      date: "February 28, 2025",
      readTime: "12 min read",
      category: "Conversion",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Digital Marketing Insights
            </h1>
            <p className="text-gray-400 text-lg">
              Sharing my thoughts, strategies, and case studies on digital marketing, 
              SEO, social media, and more.
            </p>
          </div>

          {/* Blog Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-1 rounded-full bg-teal text-background font-medium">
              All Posts
            </button>
            <button className="px-4 py-1 rounded-full bg-secondary text-gray-300 hover:bg-secondary/70 transition-colors">
              SEO
            </button>
            <button className="px-4 py-1 rounded-full bg-secondary text-gray-300 hover:bg-secondary/70 transition-colors">
              Social Media
            </button>
            <button className="px-4 py-1 rounded-full bg-secondary text-gray-300 hover:bg-secondary/70 transition-colors">
              Content Strategy
            </button>
            <button className="px-4 py-1 rounded-full bg-secondary text-gray-300 hover:bg-secondary/70 transition-colors">
              Analytics
            </button>
          </div>

          {/* Blog List */}
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-secondary rounded-lg overflow-hidden shadow-lg hover-scale"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-60 md:h-auto">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8 text-left flex flex-col">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-teal text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-teal hover:text-teal-400 transition-colors gap-2"
                      >
                        Read more <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Blog Footer */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              This blog section would be powered by WordPress in the full implementation,
              enabling easy content management and SEO optimization.
            </p>
            
            <Link 
              to="/contact" 
              className="text-teal hover:text-teal-400 transition-colors inline-flex items-center gap-2"
            >
              Have a topic suggestion? Let me know <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
