
import AuroraHeader from "./AuroraHeader";
import "./LandingPage.css"; 

export default function LandingPage() {
  return (
    <div className="landing-container">
      <video
        className="landing-video"
        autoPlay
        muted
        loop
        playsInline
        src="/aurora_background.webm" 
      />

      <div className="landing-content">
        <AuroraHeader/>
      </div>
    </div>
  );
}
