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
            <div style={{ color: "#FFFDFD", fontSize: "30pt" }}>THANNATHON</div>
            <div style={{ color: "#FFFDFD", fontSize: "30pt" }}>
              NIRATTISAYKUL
            </div>
            <div style={{ color: "#FFFDFD", fontSize: "15pt" }}>
              Front/Back-end developer
            </div>
          </div>
          <div className="dt">
            <div className="box2">qweqwe</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Q3;
