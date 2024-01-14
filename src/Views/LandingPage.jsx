import React from "react";
import data from "../../data.json";
import "./LandingPage.css";
import YoutubeEmbed from "./YoutubeVideo";
import SupportCard from "./SupportCard";
let topBanner =
  data.data.allLandingPages[0].body[0].sectionContent[0].bannerSlides[0];
let sectionContent = data.data.allLandingPages[0].body[1].sectionContent[0];
let topBannerImg = topBanner.image.url;
let title = topBanner.title;
let subText = topBanner.subtext.value.document.children[0].children[0].value;
// console.log(subText, "subtext");

// console.log(topBannerImg);

// console.log(title);
let videoCount = 0;
const extractVideoId = (youtubeLink) => {
  const match = youtubeLink.match(/\/embed\/([^/?]+)/);
  return match ? match[1] : null;
};
// console.log(extractVideoId("https://www.youtube.com/embed/cqSx86VTLYY"));
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="topBannerContainer">
        <img
          className="topBannerImg"
          src={topBannerImg}
          alt=""
        />

        <div className="topBannerText">
          <h2>Free Tamil Nadu's</h2>
          <h2>Temples</h2> <br />
          <p style={{ fontWeight: "normal", textAlign: "left" }}>
            Show your support to
          </p>
          <h1 style={{ color: "#febd2c", textAlign: "left" }}>
            #FreeTNTemples
          </h1>
          <button
            className="topBannerButton"
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
          <img className="playButton"
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
              {sectionContent.body.value.document.children[0].children[0].value}
              <br />
            </p>
            <div className="tntVideo">
              <YoutubeEmbed embedId="KHkxs7Cnwp4" />
            </div>
          </div>
          <SupportCard className="supportCard"/>
        </div>
      </div>

      <div className="stateData">
        <h1 className="stateDataTitle">
          {data.data.allLandingPages[0].body[2].sectionContent[0].titleText}
        </h1>
        <div className="state-block">
          {data.data.allLandingPages[0].body[2].sectionContent[1].card.map(
            (card, i) => (
              <div key={i} className="templeBlock">
                <div className="img">
                  <img src={card.thumbnail.url} />
                </div>
                <div className="templeData">
                  <div className="number">{card.title}</div>
                  <div className="name">{card.shortText}</div>
                  <div className="text">
                    {
                      card.description.value.document.children[0].children[0]
                        .value
                    }
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="postSec" style={{}}>
        <div className="postSecData" style={{}}>
          <h1 className="postSecTitle">
            Why We Should Free Tamil Nadu's <br /> Temples
          </h1>
          <h3 className="postData">No Posts!</h3>
          <button className="loadMoreButton">LOAD MORE</button>
        </div>
      </div>

      <div className="storySec" style={{}}>
        <div className="">
          <div className="storySecTitle">
            <h1 className="name">
              {data.data.allLandingPages[0].body[3].sectionContent[0].titleText}
            </h1>
            <div className="text" style={{}}>
              {
                data.data.allLandingPages[0].body[3].sectionContent[0]
                  .titleSubtext
              }
            </div>
          </div>
          <div className="templeSec">
            {data.data.allLandingPages[0].body[3].sectionContent[1].cards.map(
              (card, i) => (
                <div key={i} className="templeSecImgAndText">
                  <img src={card.image.url} />
                  <div className="templeSecData">
                    <div className="templeSecImgAndTextName">{card.title}</div>
                    <div className="templeSecImgAndTextText">
                      <p>
                        {
                          card.description.value.document.children[0]
                            .children[0].value
                        }
                      </p>
                      <span
                        className="ReadMore"
                        style={{ color: "#c05a1b", fontWeight: "bold" }}
                      >
                        {/* Read more &gt; */}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div
            className="count"
            style={{
              color: "WHITE",
              marginRight: "520px",
              marginBottom: "10px",
            }}
          >
            6/11
          </div>
          <button
            className="storySecLoadMoreButton"
            style={{
              backgroundColor: "beige",
              color: "black",
              marginLeft: "0px",
            }}
          >
            LOAD MORE
          </button>
        </div>
      </div>
      <div className="youtubeVideosSec" style={{ paddingBottom: "50px" }}>
        <h1 style={{}}>
          {data.data.allLandingPages[0].body[4].sectionContent[0].titleText}
        </h1>
        <div className="templeTalk">
          {data.data.allLandingPages[0].body[4].sectionContent[1].card
            .slice(0, 4)
            .map((card, i) => (
              <div key={i} className="videoDiv">
                <YoutubeEmbed
                  key={i}
                  embedId={extractVideoId(card.linkUrl)}
                  title={card.shortText}
                  className="templeTalkVideos"
                />
              </div>
            ))}
        </div>
        <div className="loadMore" style={{ marginTop: "30px" }}>
          <h3
            className="count"
            style={{
              color: "black",
              marginRight: "500px",
              marginBottom: "10px",
            }}
          >
            4 /
            {data.data.allLandingPages[0].body[4].sectionContent[1].card.length}
          </h3>
          <button className="loadMoreButton" style={{}}>
            LOAD MORE
          </button>
        </div>
      </div>
      <div className="appealSec">
        <h1 className="title" style={{}}>
          {data.data.allLandingPages[0].body[5].sectionContent[0].titleText}{" "}
          <br /> <span style={{}}></span>
        </h1>
        <div className="apealLatters" style={{  }}>
          {data.data.allLandingPages[0].body[5].sectionContent[1].fileList.map(
            (file, i) => (
              <div
                key={i}
                className="letterCard"
                style={{ marginBottom: "90px", padding: "10px" }}
              >
                <div
                  className="latterHeading"
                  style={{ marginBottom: "20px", padding: "10px" }}
                >
                  {file.fileTitle}
                </div>
                <div className="img">
                  <img src={file.thumbnail.url} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="hRAndCeSec">
        <h1
          className="title"
          style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}
        >
          {data.data.allLandingPages[0].body[6].sectionContent[0].titleText}
        </h1>
        <div
          className="timelineBlock"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          {data.data.allLandingPages[0].body[6].sectionContent[1].timelines.map(
            (e, i) => (
              <div key={i} className="years">
                <div className="img" style={{ width: "110px" }}>
                  <img src={e.thumbnail.url} />
                </div>
                <div className="content" id="templeHistoryDes">
                  {e.description.value.document.children[0].children[0].value}
                </div>
              </div>
            )
          )}
        </div>
        <div
          className="note"
          style={{ marginTop: "80px", fontStyle: "italic" }}
        >
          {
            data.data.allLandingPages[0].body[6].sectionContent[2].body.value
              .document.children[0].children[0].value
          }
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
        <h1>Get in touch</h1>
        <p
          className="subtitle"
          style={{ color: "white", paddingBottom: "30px" }}
        >
          Want to stay connected with the campaign?
        </p>
        <div className="formBlock">
          <form
            name="getInvolvedForm"
            id="getInvolvedForm"
            action=""
            method="post"
            acceptCharset="utf-8"
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
      <div
        className="footerSec"
        style={{
          display: "flex",
          color: "white",
          height: "40px",
          alignItems: "center",
        }}
      >
        <p className="copyRightText" style={{ fontSize: "15px" }}>
          Copyright ©2023 Thenkailaya Bakthi Peravai
        </p>
        <div
          className="footerBlog"
          style={{ display: "flex", marginLeft: "500px", fontSize: "15px" }}
        >
          <p className="privacyText" style={{ marginRight: "20px" }}>Privacy</p>
          <p className="termsAndConditionsText" style={{ marginLeft: "20px" }}>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
