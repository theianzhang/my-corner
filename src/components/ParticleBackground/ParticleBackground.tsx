import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // Optional callback
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
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
              distance: 200,
              links: {
                opacity: 0.1,
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
            distance: 200,
            enable: true,
            opacity: 0.08,
            width: 0.8,
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 40,
          },
          opacity: {
            value: { min: 0.2, max: 0.5 },
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
            value: { min: 0.8, max: 2 },
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