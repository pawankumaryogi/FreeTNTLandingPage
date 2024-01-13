import React from "react";
import PropTypes from "prop-types";
import "./YoutubeVideo.css"

const YoutubeEmbed = ({ embedId ,title}) => (
  <div className="youtubeVideo">
    <iframe 
      width="553"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <p style={{padding:"10px"}}>{title}</p>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;