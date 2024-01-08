import React from "react";
import data from "../../data.json";
import "./LandingPage.css";
import YoutubeEmbed from "./YoutubeVideo";
import SupportCard from "./SupportCard";
let topBanner =
  data.data.allLandingPages[0].body[0].sectionContent[0].bannerSlides[0];
let topBannerImg = topBanner.image.url;
let title = topBanner.title;
// let subText = topBanner.subtext.value.document.children[0].value;
// console.log(subText)

console.log(topBannerImg);

console.log(title);
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="topBannerContainer">
        <img
          style={{ width: "1400px" }}
          className="topBannerImg"
          src={topBannerImg}
          alt=""
        />

        <div className="topBannerText">
          <h2
            style={{ fontSize: "50px", fontWeight: "500", textAlign: "left" }}
          >
            Free Tamil Nadu's
          </h2>
          <p
            style={{
              fontSize: "50px",
              fontWeight: "500",
              textAlign: "left",
              marginTop: "-25px",
            }}
          >
            Temples
          </p>{" "}
          <br />
          <p style={{ fontWeight: "normal", textAlign: "left" }}>
            Show your support to
          </p>
          <h1 style={{ color: "#febd2c", textAlign: "left" }}>
            #FreeTNTemples
          </h1>
          <button
            className=""
            style={{
              backgroundColor: "#febd2c",
              padding: "10px 80px ",
              borderRadius: "5px",
              color: "black",
              fontSize: "15px",
              fontWeight: "bold",
              float: "left",
              marginTop: "20px",
            }}
            onClick={() => {}}
          >
            Click Here to support
          </button>{" "}
          <img
            src="https://static.consciousplanet.org/static/assets/img/play-icon.svg"
            alt=""
            style={{ marginLeft: "500px", marginTop: "-150px" }}
          />
        </div>
      </div>
      <div className="sec2">
        <div className="aboutTNT">
          <div className="aboutTNTTextVideo">
            <p className="aboutText">
              Tamil Nadu's temples, the soul of Tamil culture and the core of
              Tamil spiritual ethos, are being suffocated to death. A vicious
              policy of seizing control over temples to take over their land and
              revenue was begun by the East India Company, 200 years ago. <br />
              <br />
              Unfortunately, the same policy of government control over temples
              continues today, 74 years after Independence. <br />
              <br />
              Powerfully consecrated temples are losing their vibrance and
              crumbling, causing enormous pain to crores of devotees and
              communities. <br />
              <br />
            </p>
            <div className="tntVideo">
              <YoutubeEmbed embedId="KHkxs7Cnwp4" />
            </div>
          </div>
          <SupportCard />
        </div>
      </div>

      <div className="stateData">
        <h1 className="stateDataTitle">Dire State of Tamil Temples</h1>
        <div className="state-block">
          <div className="templeBlock">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/Natraj_6 1.png" />
            </div>
            <div className="templeData">
              <div className="number">1200</div>
              <div className="name">Sacred ancient idols</div>
              <div className="text">stolen in 25 years</div>
            </div>
          </div>
          <div className="templeBlock">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/11,999_3 1.png" />
            </div>
            <div className="templeData">
              <div className="number">11,999</div>
              <div className="name">temples dying</div>
              <div className="text">with no Pooja conducted at all</div>
            </div>
          </div>
          <div className="templeBlock">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/37000_2 2.png" />
            </div>
            <div className="templeData">
              <div className="number">37,000</div>
              <div className="name">temples have just one person</div>
              <div className="text">
                to handle all activities-pooja, maintenance, security etc.
              </div>
            </div>
          </div>
          <div className="templeBlock">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/34000_5 1.png" />
            </div>
            <div className="templeData">
              <div className="number">34,000</div>
              <div className="name">temples struggling</div>
              <div className="text">
                to survive with less than Rs. 10,000 income a year
              </div>
            </div>
          </div>
          <div className="templeBlock">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/East_india 1.png" />
            </div>
            <div className="templeData">
              <div className="number">East India Company’s</div>
              <div className="name">policy of grabbing temples</div>
              <div className="text">
                still continues 74 years after Independence
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="postSec" style={{}}>
        <div className="postSecData" style={{ display: "flex", width: "70%" }}>
          <h1 className="postSecTitle">
            Why We Should Free Tamil Nadu's <br /> Temples
          </h1>
          <h3 className="postData">No Posts!</h3>
          <button className="loadMoreButton">LOAD MORE</button>
        </div>
      </div>

      {/* <div className="storiesSec">
        <h1>Heartbreaking Stories of Temple Decay</h1>
        <p>
          Incredibly, it is not just small, unknown temples that are in decay.
          Large, popular temples visited by lakhs of devotees every month are
          targets of theft and victims of neglect.
        </p>
        <div className="templeCard">
          <img
            src="https://static.consciousplanet.org/static/assets/img/bg-graphics.jpg"
            alt=""
            style={{ height: "20px", width: "20px" }}
          />
          <h1 className="templeName">Kapaleeshwarar Temple</h1>
          <p className="aboutTemple">
            A sacred idol representing goddess Parvati was stolen and replaced
          </p>
        </div>
      </div> */}
      <div
        className="storySec"
        style={{ paddingBottom: "20px", padding: "20px 50px 20px" }}
      >
        <div className="">
          <div className="storeSecTitle">
            <div
              className="name"
              style={{
                fontSize: "30px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Heartbreaking Stories of Temple Decay
            </div>
            <div
              className="text"
              style={{ maxWidth: "50%", fontSize: "small" }}
            >
              Incredibly, it is not just small, unknown temples that are in
              decay. Large, popular temples visited by lakhs of devotees every
              month are targets of theft and victims of neglect.
            </div>
          </div>
          <div className="templeSec">
            <div className="templeSecImgAndText">
              <img src="https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Ekambareswarar 4.jpg" />
              <div className="templeSecData">
                <div className="templeSecImgAndTextName">
                  Kapaleeshwarar Temple:{" "}
                </div>
                <div className="templeSecImgAndTextText">
                  <p>
                    A sacred idol representing goddess Parvati was stolen and
                    replaced with a fake. HR&amp;CE department told the court
                    that verification documents were
                  </p>
                  <span
                    className="ReadMore"
                    style={{ color: "#c05a1b", fontWeight: "bold" }}
                  >
                    Read more &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className="templeSecImgAndText">
              <img src="https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Ekambareswarar 4.jpg" />
              <div className="templeSecData">
                <div className="templeSecImgAndTextName">
                  Kapaleeshwarar Temple:{" "}
                </div>
                <div className="templeSecImgAndTextText">
                  <p>
                    A sacred idol representing goddess Parvati was stolen and
                    replaced with a fake. HR&amp;CE department told the court
                    that verification documents were
                  </p>
                  <span
                    className="ReadMore"
                    style={{ color: "#c05a1b", fontWeight: "bold" }}
                  >
                    Read more &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className="templeSecImgAndText">
              <img src="https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Ekambareswarar 4.jpg" />
              <div className="templeSecData">
                <div className="templeSecImgAndTextName">
                  Kapaleeshwarar Temple:{" "}
                </div>
                <div className="templeSecImgAndTextText">
                  <p>
                    A sacred idol representing goddess Parvati was stolen and
                    replaced with a fake. HR&amp;CE department told the court
                    that verification documents were
                  </p>
                  <span
                    className="ReadMore"
                    style={{ color: "#c05a1b", fontWeight: "bold" }}
                  >
                    Read more &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className="templeSecImgAndText">
              <img src="https://static.consciousplanet.org/d-100x100/isha-outreach-images/2021-03/Ekambareswarar 4.jpg" />
              <div className="templeSecData">
                <div className="templeSecImgAndTextName">
                  Kapaleeshwarar Temple:{" "}
                </div>
                <div className="templeSecImgAndTextText">
                  <p>
                    A sacred idol representing goddess Parvati was stolen and
                    replaced with a fake. HR&amp;CE department told the court
                    that verification documents were
                  </p>
                  <span
                    className="ReadMore"
                    style={{
                      color: "#c05a1b",
                      fontWeight: "bold",
                      margin: "auto",
                    }}
                  >
                    Read more &gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="count"
            style={{
              color: "WHITE",
              marginRight: "520px",
              marginBottom: "10px",
            }}
          >
            4/11
          </div>
          <button
            className="loadMoreButton"
            style={{
              backgroundColor: "beige",
              color: "black",
              marginLeft: "300px",
            }}
          >
            LOAD MORE
          </button>
        </div>
      </div>
      <div className="youtubeVideosSec" style={{ paddingBottom: "50px" }}>
        <h1
          style={{
            color: "black",
            fontSize: "35px",
            fontWeight: "bold",
            textAlign: "left",
            paddingTop: "70px",
            margin: "0 0px 50px 150px",
          }}
        >
          Sadhguru on #FreeTNTemples
        </h1>
        <div className="templeTalk">
          <div className="videoDiv">
            <YoutubeEmbed
              embedId="zQTJNV11RmA"
              title="Secular Governments Should Not Control Temples #FreeTNTemples"
              className="templeTalkVideos"
            />
          </div>
          <div className="videoDiv">
            <YoutubeEmbed
              embedId="cqSx86VTLYY"
              title="Government Can Manage Museums, Not Temples | Sadhguru #FreeTNTemples"
              className="templeTalkVideos"
            />
          </div>
          <div className="videoDiv">
            <YoutubeEmbed
              embedId="mhvxEdOCujo"
              title="Thousands of Temples Are Dying. Time to Free Tamil Nadu Temples | #FreeTNTemples"
              className="templeTalkVideos"
            />
          </div>
          <div className="videoDiv">
            <YoutubeEmbed
              embedId="lua5F0T3m70"
              title="lua5F0T3m70"
              className="templeTalkVideos"
            />
          </div>
        </div>
        <div className="loadMore" style={{ marginTop: "30px" }}>
          <div
            className="count"
            style={{
              color: "black",
              marginRight: "500px",
              marginBottom: "10px",
            }}
          >
            4/11
          </div>
          <button
            className="loadMoreButton"
            style={{
              backgroundColor: "#c05a1b",
              color: "white",
              marginLeft: "370px",
            }}
          >
            LOAD MORE
          </button>
        </div>
      </div>

      <div className="appealSec">
        <div
          className="title"
          style={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bolder",
            textAlign: "center",
            padding: "50px 390px 0 0 ",
          }}
        >
          An Appeal to Tamil Nadu's Political <br />{" "}
          <span style={{}}>Leaders</span>
        </div>
        <div className="apealLatters" style={{ margin: "10px 100px" }}>
          <div
            className="letterCard"
            style={{ marginBottom: "90px", padding: "10px" }}
          >
            <div
              className="latterHeading"
              style={{ marginBottom: "20px", padding: "10px" }}
            >
              An Appeal to <br />
              Shri Edappadi K Palaniswami
            </div>
            <div className="img">
              <a
                href="https://static.consciousplanet.org/static/assets/img/Thiru_Edapaddi_Palaniswami_Avargale_April_2_2021.pdf"
                target="_blank"
              >
                <img src="https://static.consciousplanet.org/static/assets/img/letter1_1.jpg" />
              </a>
            </div>
          </div>
          <div
            className="letterCard"
            style={{ marginBottom: "90px", padding: "10px" }}
          >
            <div
              className="latterHeading"
              style={{ marginBottom: "20px", padding: "10px" }}
            >
              An Appeal to <br />
              Shri M K Stalin
            </div>
            <div className="img">
              <a
                href="https://static.consciousplanet.org/static/assets/img/Thiru_Stalin_Avargale_April_2_2021.pdf"
                target="_blank"
              >
                <img src="https://static.consciousplanet.org/static/assets/img/letter2_1.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hRAndCeSec">
        <div
          className="title"
          style={{ fontSize: "30px", fontWeight: "bold", color: "brown" }}
        >
          HR&amp;CE Act: Colonial Origins &amp; History
        </div>
        <div
          className="timelineBlock"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div className="years">
            <div className="img" style={{ width: "110px" }}>
              <img src="https://static.consciousplanet.org/static/assets/img/1817.png" />
            </div>
            <div className="content">
              East India Company introduces The Madras Regulation VII to bring
              temples under company control, targeting lands and wealth donated
              by devotees.{" "}
            </div>
          </div>
          <div className="years">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/1925.png" />
            </div>
            <div className="content">
              The Madras Religious and Charitable Endowments Act is introduced
              to bring all religious institutions under government control. The
              act draws massive protests from Muslims and Christians.
            </div>
          </div>
          <div className="years">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/1927.png" />
            </div>
            <div className="content">
              The act is redrafted as Madras Hindu Religious and Endowments Act,
              and made applicable only to Hindu places of worship.
            </div>
          </div>
          <div className="years">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/1947.png" />
            </div>
            <div className="content bold" style={{ fontWeight: "bolder" }}>
              Govt. Control Continues in Independent India{" "}
            </div>
          </div>
          <div className="years">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/1951.png" />
            </div>
            <div className="content">
              The state government takes control of temples and their funds by
              the Hindu Religious and Charitable Endowments Act. Many provisions
              of the act are struck down by the High Court &amp; Supreme Court
              as unacceptable.{" "}
            </div>
          </div>
          <div className="years">
            <div className="img">
              <img src="https://static.consciousplanet.org/static/assets/img/1959.png" />
            </div>
            <div className="content">
              Scant attention is paid to the courts’ objections and the Tamil
              Nadu Hindu Religious and Charitable Endowments Act is passed.
            </div>
          </div>
        </div>
        <div
          className="note"
          style={{ marginTop: "80px", fontStyle: "italic" }}
        >
          Today, over 38,000 temples, mutts and similar organizations are under
          the control of the Tamil Nadu Hindu Religious and Charitable
          Endowments Department.{" "}
        </div>
      </div>
      {/* 
      <div className="pastGlorySec">
        <div className="title">Our Glorious Tamil Temples &amp; Culture</div>
        <div className="subtitle">
          Temples are not just for worship. They connect us across thousands of
          years to ancient Tamil culture &amp; tradition.{" "}
        </div>
        <div className="gallery-block">
          <div className="swiper-container gallery-slide swiper-container-initialized swiper-container-horizontal swiper-container-autoheight swiper-container-android">
            <div
              className="swiper-wrapper"
              style={{
                height: 406,
                transitionDuration: "0ms",
              }}
            >
              <div
                className="gallery-slot swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              
                style={{ width: 606 }}
              >
                <img
                  className="mobile"
                  src="https://static.consciousplanet.org/static/assets/img/M%20glorious%20temples-7.jpg"
                />
                <img
                  className="desktop"
                  src="https://static.consciousplanet.org/static/assets/img/M%20glorious%20temples-7.jpg"
                />
              </div>
              
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
          <div className="swiper-pagination swiper-pagination-bullets">
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
          </div>
          <div
            className="swiper-button-next gallery-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          />
          <div
            className="swiper-button-prev gallery-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          />
        </div>
      </div> */}

      <div className="getInTouchSec">
        <div
          className=""
          style={{
            color: "white",
            fontSize: "25px",
            fontWeight: "bold",
            paddingBottom: "20px",
          }}
        >
          Get in touch
        </div>
        <div
          className="subtitle"
          style={{ color: "white", paddingBottom: "30px" }}
        >
          Want to stay connected with the campaign?
        </div>
        <div className="form-block">
          <form
            name="getInvolvedForm"
            id="getInvolvedForm"
            action=""
            method="post"
            acceptCharset="utf-8"
            target="_blank"
          >
            <div className="formInput">
              <input
                className="inputClass"
                type="text"
                id="getInvolvedName"
                name="NAME"
                placeholder="Name"
                required=""
              />
            </div>
            <div className="formInput">
              <input
                className="inputClass"
                type="email"
                id="getInvolvedEmail"
                placeholder="Email"
                name="EMAIL"
                required=""
              />
            </div>
            <div className="formInput">
              <select
                id="getInvolvedCountry"
                name="COUNTRY"
                className="inputClass"
              >
                <option value="">Select Country</option>

                <option value="india">Inida</option>
              </select>
            </div>

            <button
              style={{
                backgroundColor: "#febd2c",
                padding: "10px 10px ",
                borderRadius: "5px",
                color: "black",
                fontWeight: "bold",
                width: "200px",
                marginBottom: "10px",
              }}
            >
              Subscribe
            </button>
            <div style={{ color: "white" }}>No spam. Unsubscribe anytime.</div>
          </form>
        </div>
      </div>

      <div className="footerSec" style={{ display: "flex", color: "white", height:"40px",alignItems:"center"}}>
        <p
         style={{fontSize:"15px"}}
        >
          Copyright ©2023 Thenkailaya Bakthi Peravai
        </p>
        <div
          className="footer-blog"
          style={{ display: "flex", marginLeft: "500px",fontSize:"15px" }}
        >
          <p style={{marginRight:"20px"}}>Privacy</p>
          <p style={{marginLeft:"20px"}}>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
