import React, { useState, useEffect } from "react";
import "./Services.css";
import brandingImage from "../assets/branding.jpg";
import marketingImage from "../assets/marketing.jpg";
import softwareImage from "../assets/software.jpg";
import metaAdsImage from "../assets/metaAds.jpg";
import contentCreationImage from "../assets/contentCreation.jpg";
import contentProductionImage from "../assets/contentProduction.jpg";
import person1 from "../assets/anuj.jpg";
import person2 from "../assets/rishabh.jpg";
import person3 from "../assets/lakshay.jpg";
import clientLogo1 from "../assets/clientLogo1.jpg";
import clientLogo2 from "../assets/clientLogo2.jpg";
import clientLogo3 from "../assets/clientLogo3.jpg";
import clientLogo4 from "../assets/clientLogo4.jpg";
import clientLogo5 from "../assets/clientLogo5.jpg";
import clientLogo6 from "../assets/clientLogo6.jpg";

const Services = () => {
  const [testimonials] = useState([
    {
      quote:
        "DeeveloX built an amazing website for us. It's easy to use, looks great, and has increased our online visitors by 30%. The team was professional and very responsive. Highly recommend!",
      author: "Anuj J.",
      image: person1,
    },
    {
      quote:
        "DeeveloX helped me create a strong personal brand. They built a stunning portfolio website and planned my social media strategy. Thanks to them, I’ve gained more clients and speaking opportunities. Thank you!",
      author: "Rishabh B.",
      image: person2,
    },
    {
      quote:
        "DeeveloX developed a fantastic app for us. It’s user-friendly and our customers love it. The team was knowledgeable and efficient, making the process smooth. The app has been a big hit!",
      author: "Lakshay K.",
      image: person3,
    },
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial, testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <div className="services">
        <div className="service-section">
          <img
            src={brandingImage}
            alt="Personal Branding"
            className="service-image"
          />
          <div className="service-content">
            <h2>Personal Branding</h2>
            <ul>
              <li>
                Build a compelling personal brand that resonates with your
                audience.
              </li>
              <li>
                Professional headshot sessions and personal website development.
              </li>
              <li>Social media profile optimization and content strategy.</li>
              <li>Branding consultations tailored to your career goals.</li>
            </ul>
            <div className="service-actions">
              <a href="/contact" className="learn-more-link">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="service-section">
          <img
            src={marketingImage}
            alt="Digital Marketing"
            className="service-image"
          />
          <div className="service-content">
            <h2>Digital Marketing</h2>
            <ul>
              <li>
                SEO (Search Engine Optimization) to boost your online presence.
              </li>
              <li>
                PPC (Pay-Per-Click) campaigns for targeted traffic and leads.
              </li>
              <li>Social Media Marketing to engage with your audience.</li>
              <li>Content Marketing that drives engagement and conversions.</li>
              <li>Email Marketing campaigns for effective communication.</li>
            </ul>
            <div className="service-actions">
              <a href="/contact" className="learn-more-link">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="service-section">
          <img
            src={softwareImage}
            alt="Software Development"
            className="service-image"
          />
          <div className="service-content">
            <h2>Software Development</h2>
            <ul>
              <li>
                Custom Software Solutions tailored to your business needs.
              </li>
              <li>Mobile App Development for iOS and Android platforms.</li>
              <li>Web Development with modern technologies and frameworks.</li>
              <li>E-commerce Solutions for seamless online transactions.</li>
              <li>UI/UX Design to enhance user experience.</li>
            </ul>
            <div className="service-actions">
              <a href="/contact" className="learn-more-link">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="service-section">
          <img src={metaAdsImage} alt="Meta Ads" className="service-image" />
          <div className="service-content">
            <h2>Meta Ads</h2>
            <ul>
              <li>
                Creative ad copy and visual design to capture audience
                attention.
              </li>
              <li>ROI-focused ad strategies for maximum impact.</li>
              <li>Continuous optimization and performance tracking.</li>
            </ul>
            <div className="service-actions">
              <a href="/contact" className="learn-more-link">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="service-section">
          <img
            src={contentCreationImage}
            alt="Content Creation & Social Media Management"
            className="service-image"
          />
          <div className="service-content">
            <h2>Content Creation & Social Media Management</h2>
            <ul>
              <li>
                Creative content writing for blogs, websites, and social media
                platforms.
              </li>
              <li>
                Social Media Management to grow your following and increase
                engagement.
              </li>
              <li>
                Video Production and Editing for compelling visual storytelling.
              </li>
              <li>
                Graphic Design for branded visuals and marketing materials.
              </li>
              <li>
                Analytics and Reporting to measure campaign effectiveness.
              </li>
            </ul>
            <div className="service-actions">
              <a href="/contact" className="learn-more-link">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="service-section">
          <img
            src={contentProductionImage}
            alt="Content Production"
            className="service-image"
          />
          <div className="service-content">
            <h2>Content Production</h2>
            <ul>
              <li>
                Crafting visually compelling advertisements that resonate with
                your target audience.
              </li>
              <li>
                Focus on creating ads that drive higher conversion rates and
                maximize Return on Advertising Spend (ROAS).
              </li>
              <li>
                Brainstorming and developing unique concepts and storyboards for
                ad campaigns.
              </li>
              <li>
                Professional filming and editing services to produce
                high-quality video content for ads.
              </li>
              <li>
                Tailoring content for various platforms to ensure maximum impact
                and engagement.
              </li>
            </ul>
            <div className="service-actions">
              <a href="/contact" className="learn-more-link">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-content">
          <p>"{testimonials[currentTestimonial].quote}"</p>
          <div className="author-info">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].author}
              className="author-image"
            />
            <p>- {testimonials[currentTestimonial].author}</p>
          </div>
        </div>
        <div className="pagination">
          {testimonials.map((testimonial, index) => (
            <span
              key={index}
              className={`pagination-dot ${currentTestimonial === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="client-logos">
        <img src={clientLogo1} alt="Client 1" className="client-logo" />
        <img src={clientLogo2} alt="Client 2" className="client-logo" />
        <img src={clientLogo3} alt="Client 3" className="client-logo" />
        <img src={clientLogo4} alt="Client 4" className="client-logo" />
        <img src={clientLogo5} alt="Client 5" className="client-logo" />
        <img src={clientLogo6} alt="Client 6" className="client-logo" />
      </div>
    </div>
  );
};

export default Services;
