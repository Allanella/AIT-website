import React, { useRef } from "react";
import "./Testimonials.css";
import alien from "../../assets/alien.jpg";
import elijah from "../../assets/elijah.jpg";
import lillian from "../../assets/lillian.jpg";
import sam from "../../assets/sam.jpg";
import allanella from "../../assets/allanella.jpg";
import torren from "../../assets/torren.jpg";
import back from "../../assets/back.jpg";
import next from "../../assets/next.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const ShowPrev = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const ShowNext = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <h2 className="team">Our team</h2>
      <img src={back} alt="" className="back_btn" onClick={ShowPrev} />
      <img src={next} alt="" className="next_btn" onClick={ShowNext} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Myelijah" src={elijah} alt="" />
              </div>
              <div>
                <h3>Nyombi Elijah</h3>
                
              </div>
              <p>
                Elijah Nyombi is one of the Directors for iONA Tech, a
                cutting-edge software company committed to driving innovation
                and providing impactful technological solutions. With a rich
                background in journalism public health, and digital marketing
                communication, Elijah leads the company with a focus on digital
                transformation and high-quality software development. His
                expertise in project management, strategy, and team leadership
                has made iONA Tech a standout in the tech industry. Elijah is
                passionate about leveraging technology to enhance public health
                and create positive change in communities.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Mylillian" src={lillian} alt="" />
              </div>
              <div>
                <h3>Lillian</h3>
                
              </div>
              <p>
                I am hard working and enthusiastic about learning new skills. I
                am well organised and always meet deadlines when they have been
                set. I find it easy working with other people but can also work
                well independently. I have shown that I am a trustworthy and
                responsible person in school and at home. I have got very good
                communication skills which I feel will be useful when working in
                new situations. I enjoy travelling and have travelled to many
                different places within the UK and abroad. These experiences
                will be useful within the travel industry. I am keen to further
                develop my experiences and skills within the travel business.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Myallanella" src={allanella} alt="" />
              </div>
              <div>
                <h3>Baliddawa Allan</h3>
                
              </div>
              <p>
                I'm a passionate and skilled Fullstack Web Developer with a
                strong background in both front-end and back-end development. I
                specialize in building responsive, user-friendly, and scalable
                web applications using modern technologies. My expertise
                includes working with ReactJS for front-end development and Java
                (Spring Boot) and Node.js (Express.js) for back-end solutions,
                along with experience in managing databases like MySQL and
                MongoDB. I thrive on solving complex problems and creating
                seamless user experiences. From designing intuitive user
                interfaces to optimizing server-side performance, I’m committed
                to delivering high-quality solutions that meet business needs.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="MyAlien" src={alien} alt="" />
              </div>
              <div>
                <h3>Alien</h3>
                
              </div>
              <p>
                I am hard working and enthusiastic about learning new skills. I
                am well organised and always meet deadlines when they have been
                set. I find it easy working with other people but can also work
                well independently. I have shown that I am a trustworthy and
                responsible person in school and at home. I have got very good
                communication skills which I feel will be useful when working in
                new situations. I enjoy travelling and have travelled to many
                different places within the UK and abroad. These experiences
                will be useful within the travel industry. I am keen to further
                develop my experiences and skills within the travel business.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Mysam" src={sam} alt="" />
              </div>
              <div>
                <h3>Katongole Samuel</h3>
                
              </div>
              <p>
                samuel is a passionate java Developer dedicated to crafting
                software that inspires progress and delivers value. Skilled in
                building intuitive, functional desktop and web applications, he
                combines technical expertize with a heart for service,
                collaboration and faith-driven purpose. Samuel believes in using
                technology to make a difference creativity, ethically and
                excellently. Building with purpose. Growing with vision.
                Impacting through code.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Mytorren" src={torren} alt="" />
              </div>
              <div>
                <h3>Torren</h3>
               
              </div>
              <p>
                As a digital enthusiast, AI activist and skilled graphics
                designer, I merge creativity with technological expertise to
                drive innovative solutions. I advocate for responsible AI
                development and harnes its potential to enhance visual story
                telling. Through design, i craft engaging experiences that
                inspire and empower.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
