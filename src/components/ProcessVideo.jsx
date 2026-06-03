import heroVideo from "../assets/hero.mp4";

const ProcessVideo = () => {
  return (
    <section className="process-video-section" id="process">
      <video
        className="process-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default ProcessVideo;