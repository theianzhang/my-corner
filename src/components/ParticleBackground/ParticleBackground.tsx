import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 180,
              links: {
                opacity: 0.15,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#64ffda", "#00bcd4", "#42a5f5"],
          },
          links: {
            color: "#64ffda",
            distance: 180,
            enable: true,
            opacity: 0.15,
            width: 0.8,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.9,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.25, max: 0.6 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground; 