import React from "react";

function AvatarPV({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      className=" w-10 rounded-full transition transform hover:scale-110 cursor-pointer"
      alt="profile picture"
    />
  );
}

export default AvatarPV;
