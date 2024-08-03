import React, { useEffect, useRef } from "react";
import "./About.css";
import BackgroundImage from "../assets/about_background.jpg";
import HarshImage from "../assets/harsh.png";
import ArhamImage from "../assets/arham.png";
import OurMission from "../assets/our_mission.jpg";
import OurStory from "../assets/our_story.png";
import OurValues from "../assets/our_values.png";

const About = () => {
  const introRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const introElement = introRef.current;
    const sectionElements = sectionRefs.current;

    const introObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active'); 
        }
      });
    }, {
      threshold: 0.2
    });

    introObserver.observe(introElement);

    const sectionObservers = sectionElements.map(section => {
      const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active'); // Optionally, remove 'active' if not intersecting
          }
        });
      }, {
        threshold: 0.2
      });

      sectionObserver.observe(section);
      return sectionObserver;
    });

    return () => {
      introObserver.disconnect();
      sectionObservers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="about">
      <div
        className="full-screen-background"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="blue-overlay"></div>
        <div className="intro-content" ref={introRef}>
          <h1>About Us</h1>
          <p>
            Welcome to Deevelo X, where innovation meets expertise and development
            meets marketing. We offer a comprehensive suite of services designed
            to elevate your brand and drive your success in the digital landscape.
            From crafting compelling personal brands to executing cutting-edge
            digital marketing strategies, our team is dedicated to delivering
            excellence.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="section" ref={el => sectionRefs.current.push(el)}>
          <div className="section-content">
            <div className="section-text">
              <h2>Our Mission</h2>
              <p>
                At Deevelo X, our mission is to empower businesses to thrive in
                the digital landscape. Through innovative solutions, creative
                content, and strategic marketing, we aim to elevate your brand
                from inception to industry leader. We are dedicated to delivering
                excellence and driving success for our clients.
              </p>
            </div>
            <div className="section-img-container">
              <img src={OurMission} alt="Our Mission" className="section-img" />
            </div>
          </div>
        </div>

        <div className="section" ref={el => sectionRefs.current.push(el)}>
          <div className="section-content">
            <div className="section-text">
              <h2>Our Story</h2>
              <p>
                Deevelo X was founded on the principle of blending development and
                marketing to create powerful digital solutions. We specialize in
                developing cutting-edge software, mobile apps, and websites, as
                well as implementing impactful digital marketing strategies. Our
                journey began with a vision to help brands grow and succeed in a
                competitive market, and today, we continue to innovate and excel
                in delivering exceptional results for our clients.
              </p>
            </div>
            <div className="section-img-container">
              <img src={OurStory} alt="Our Story" className="section-img" />
            </div>
          </div>
        </div>

        <div className="section" ref={el => sectionRefs.current.push(el)}>
          <div className="section-content">
            <div className="section-text">
              <h2>Our Values</h2>
              <p>
                At Deevelo X, our core values are innovation, integrity, and
                client satisfaction. We believe in developing comprehensive
                digital solutions that not only meet but exceed our clients'
                expectations. Our commitment to quality and excellence ensures
                that we build strong, lasting relationships with our clients. We
                strive to foster a loyal community around your brand, driving
                engagement and growth through effective strategies and creative
                content.
              </p>
            </div>
            <div className="section-img-container">
              <img src={OurValues} alt="Our Values" className="section-img" />
            </div>
          </div>
        </div>

        <div className="section" ref={el => sectionRefs.current.push(el)}>
          <div className="section-content">
            <div className="section-text">
              <h2>Meet Our Founders</h2>
              <div className="founder">
                <img src={ArhamImage} alt="Arham Banthia" className="founder-img" />
                <div className="founder-info">
                  <h3>Arham Banthia</h3>
                  <p>
                    Founder and chief visionary, Arham is the driving force behind
                    the company. He loves to keep his hands full by participating
                    in the development of software, marketing, and customer
                    experience strategies.
                  </p>
                </div>
              </div>
              <div className="founder">
                <img src={HarshImage} alt="Harsh Khandelwal" className="founder-img" />
                <div className="founder-info">
                  <h3>Harsh Khandelwal</h3>
                  <p>
                    Harsh loves taking on challenges. With a wealth of experience
                    in personal branding, digital marketing, and software
                    development, Harsh has helped the company to get where it is
                    today. Harsh is among the best minds in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
