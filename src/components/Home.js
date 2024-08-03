import React, { useEffect, useRef } from "react";
import "./Home.css";
import consultation from "../assets/consultation.jpg";
import strategy from "../assets/strategy.jpg";
import execution from "../assets/execution.jpg";
import review from "../assets/review.jpg";
import advertisement from "../assets/advertising.jpg";
import creative from "../assets/creative.jpg";
import strategic from "../assets/strategic.jpg";
import adCreation from "../assets/adCreation.jpg";
import softwareSolution from "../assets/softwareSolution.jpg";

const Home = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const showOverlay = () => {
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.classList.add("active");
        }
      }, 500);
    };

    showOverlay();
  }, []);

  const services = [
    {
      image: advertisement,
      alt: "Digital Advertising",
      title: "Results-Driven Digital Advertising",
      description:
        "Designing, executing, and optimizing digital ad campaigns across various platforms to maximize ROI, drive targeted traffic, and achieve your business objectives."
    },
    {
      image: creative,
      alt: "Content Creation",
      title: "Creative Content Creation",
      description:
        "Crafting engaging, high-quality content including blog posts, articles, videos, and graphics that resonate with your audience and align with your brand’s voice and messaging."
    },
    {
      image: strategic,
      alt: "Social Media Management",
      title: "Strategic Social Media Management",
      description:
        "Developing and implementing comprehensive social media strategies to grow your online presence, increase engagement, and foster a loyal community around your brand."
    },
    {
      image: adCreation,
      alt: "Ad Creation",
      title: "Stunning Ad Creation",
      description:
        "Producing visually compelling and impactful advertisements that capture attention, communicate your message effectively, and drive higher conversion rates."
    },
    {
      image: softwareSolution,
      alt: "Software Solutions",
      title: "Comprehensive Software Solutions",
      description:
        "Providing tailored software and app development services to streamline your business processes, enhance productivity, and deliver seamless user experiences across platforms."
    }
  ];

  const handleLearnMoreClick = () => {
    window.location.href = '/services'; 
  };

  const handleContactUsClick = () => {
    window.location.href = '/contact'; 
  };

  return (
    <div>
      <div className="home">
        <div className="home-background"></div>
        <div ref={overlayRef} className="overlay">
          <div className="overlay-content">
            <h1>We Exist To Empower Your Digital Future</h1>
            <p>
              Every exceptional business deserves exceptional branding
              solutions.
            </p>
            <button onClick={handleLearnMoreClick}>Learn More</button>
          </div>
        </div>
      </div>

      <div className="additional-content">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <img src={consultation} alt="Initial Consultation" />
            <h3>Initial Consultation</h3>
            <p>Meet and understand your needs</p>
          </div>
          <div className="process-step">
            <img src={strategy} alt="Strategy Development" />
            <h3>Strategy Development</h3>
            <p>Create a tailored plan based on insights.</p>
          </div>
          <div className="process-step">
            <img src={execution} alt="Execution" />
            <h3>Execution</h3>
            <p>Kick off with a project alignment meeting</p>
          </div>
          <div className="process-step">
            <img src={review} alt="Review and Optimization" />
            <h3>Review and Optimization</h3>
            <p>Evaluate performance against goals</p>
          </div>
        </div>
      </div>

      <div className="service-section-home">
        {services.map((service, index) => (
          <div className="service-container" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.alt} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="branding-content">
        <h2>Transform Your Business</h2>
        <p>
          Transform your business with our powerful branding tools. Elevate your
          business with our branding solutions.
        </p>
      </div>

      <div className="contact-us">
        <button className="contact-button" onClick={handleContactUsClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Home;
