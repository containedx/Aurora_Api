import { motion, useScroll, useTransform } from "framer-motion";
import AuroraHeader from "./AuroraHeader";
import "./LandingPage.css";

export default function LandingPage() {
  const { scrollY } = useScroll();
  
  const videoOpacity = useTransform(scrollY, [0, 1000], [1, 0]);

  return (
    <div className="landing-wrapper">
      <motion.video
        className="landing-video"
        autoPlay
        muted
        loop
        playsInline
        src="/aurora_background.webm"
        style={{ opacity: videoOpacity }}
      />

      <div className="landing-content">
        <AuroraHeader />
      </div>

      <div style={{ height: "100vh" }} />
    </div>
  );
}
