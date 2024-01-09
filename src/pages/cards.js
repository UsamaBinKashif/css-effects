import React, { useState } from "react";

function Option({ imageUrl, videoURL, setActive, active }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleHover = () => {
    setActive(imageUrl);
    setVideoPlaying(true);
  };

  const handleLeave = () => {
    setActive("");
    setVideoPlaying(false);
  };
  return (
    <div
      className={`relative overflow-hidden min-w-[60px] bg-cover bg-center bg-no-repeat w-1/5 m-2 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${
        active === imageUrl
          ? "flex-grow-10000 transform  w-[900px] mx-0  "
          : "flex-grow "
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {videoPlaying && (
        <video
          src={videoURL}
          autoPlay
          loop
          muted={false}
          className="w-full h-full absolute inset-0 object-cover"
        />
      )}
    </div>
  );
}

function Options() {
  const [active, setActive] = useState("");

  const optionImages = [
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FApple%20Watch%20Series%209%201.png?alt=media&token=d387cd8a-e7af-40b3-86c0-f17a1d397129",
      videoURL:
        "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FZG%20-%20Apple%20Watch%20Series%209%20Apple%20-%20Verizon.mp4?alt=media&token=a23db496-0eed-4ff4-a11f-4d3ea501d6b6",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FMecedes%20Benz%201.png?alt=media&token=379dbc67-025d-4a86-8824-65d4f70033dc",
      videoURL:
        "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FZG%2096621%20Mercedes-Benz%20UK.mp4?alt=media&token=8dcb27e0-58bd-4256-bd13-7450327c92c6",
    },
    {
      imageUrl:
        " https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FQatar%20Airways%201.png?alt=media&token=a236ae5f-c008-4172-8710-eeccfbc2d428",
      videoURL:
        "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FZG%2097365%20-%20Qatar%20Airways%20x%20Deepika%20Padukone.mp4?alt=media&token=fc7592e7-9692-4dc2-b3ad-6a6c7b0138c9",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FApple%20iPhone%2015%201.png?alt=media&token=4857b24b-7795-4804-a361-763e27ee00a1",
      videoURL:
        "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FZG%20-%20Introducing%20iPhone%2015%20Apple.mp4?alt=media&token=cac852d7-d402-4b18-9b28-7b3bf1513c72",
    },

    // ... Add other image URLs here
  ];
  return (
    <section className="h-dvh bg-black flex items-center justify-center">
      <div className="flex flex-row items-stretch overflow-hidden   max-w-[900px] w-full h-[400px] ">
        {optionImages.map((option, index) => (
          <Option
            key={index}
            imageUrl={option.imageUrl}
            videoURL={option.videoURL}
            setActive={setActive}
            active={active}
          />
        ))}
      </div>
    </section>
  );
}

export default Options;
