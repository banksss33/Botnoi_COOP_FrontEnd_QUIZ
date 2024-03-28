import "./Q3.css";
import { ReactComponent as Icon1 } from "./icons/icon1.svg";
import { ReactComponent as Icon2 } from "./icons/icon2.svg";
import { ReactComponent as Icon3 } from "./icons/icon3.svg";
import { ReactComponent as Icon4 } from "./icons/icon4.svg";
import { ReactComponent as Icon5 } from "./icons/icon5.svg";
import { ReactComponent as Icon6 } from "./icons/icon6.svg";

function Q3() {
  return (
    <>
      <div className="body">
        <div className="grid">
          <div className="bgs1" />
          <div className="bgs2" />
        </div>

        <div className="inner-grid">
          <div className="pd">
            <div className="box">
              <div className="img-box">
                <img
                  draggable="false"
                  className="profile-img"
                  src={require("./image/PROFILE_IMG.jpg")}
                />
              </div>

              <div className="box-wrapper">
                <div>
                  <Icon1 className="icons-head" /> <b>CONTACT</b>
                </div>
                <div className="item">
                  <Icon2 className="icons" />
                  <span>banksss33.b99@gmail.com</span>
                </div>
                <div className="item">
                  <Icon3 className="icons" /> <span>098-265-9781</span>
                </div>
                <div className="item">
                  <Icon4 className="icons" /> <span> Pathum Thani,</span>
                  <br />
                  <span style={{ marginLeft: "12.5%" }}>
                    Lam Luk Ka District, Thailand
                  </span>
                </div>
                <div style={{ marginTop: "5%", marginLeft: "9%" }}>
                  <Icon5 className="icons-head" />
                  <span style={{ marginLeft: "2%" }}>github.com/banksss33</span>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <Icon6 className="icons-head" /> <b>SKILLS</b>
                </div>
                <ul>
                  <li>ReactJS</li>
                  <li>HTML/CSS</li>
                  <li>SQL</li>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Golang</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ns">
            <div className="header-bns">
              <b>THANNATHON</b>
            </div>
            <div className="header-bns">
              <b>NIRATTISAYKUL</b>
            </div>
            <div className="header-sns">
              Front/Back-end developer
            </div>
          </div>
          <div className="dt">
            <div className="box2">
              <p>As a Computer Science undergraduate with a</p>
              <p>minor in Software Engineering, my focus lies in</p>
              <p>front/back-end development. I have experience</p>
              <p>with Python, C/C++, Java, Golang, and</p>
              <p>JavaScript, and I'm somewhat familiar with Agile-</p>
              <p>Scrum methodology for Software Development.</p>

              <div className="dt-line">
                <span className="header">
                  <li>PROJECT</li>
                </span>
              </div>

              <p>
                <b>Full-Stack Development on Movie Reviews Website</b>
              </p>
              <ul>
                <li>
                  Contributed to the development of a Movie Reviews and Rating
                  Website for a database assignment.
                </li>
                <li>
                  Utilized ReactJS-Bootstrap for the front-end, NodeJS for
                  back-end tasks, and SQL for database design.
                </li>
                <li>
                  Actively participated in various project aspects, gaining
                  practical experience in full-stack development.
                </li>
              </ul>

              <p>
                <b>Web Development Project: Health-Fitness Website in ReactJS with Agile-Scrum</b>
              </p>
              <ul>
                <li>
                  Contributed to the development of a Health-Fitness Website in
                  a collaborative WebApps team project.
                </li>
                <li>
                  Utilized ReactJS and applied Agile-Scrum methodology for
                  efficient project management.
                </li>
              </ul>

              <span className="header">
                <li>EDUCATION</li>
              </span>
              <p>
                <b>THAMMASAT UNIVERSITY</b>
              </p>
              <p style={{color: "#545454"}}>2021-Present</p>
              <p>Bachelor of Science and Technology in</p>
              <p>Computer and Information Science</p>
              <p>(Graduate in 2025) GPA 3.08</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Q3;
