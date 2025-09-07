import { gsap } from "gsap";

const animation = {
  // Animaciones de entrada
  inLeft: (element, duration = 1) => {
    return gsap.fromTo(element, 
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  inRight: (element, duration = 1) => {
    return gsap.fromTo(element,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  inTop: (element, duration = 1) => {
    return gsap.fromTo(element,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  inBottom: (element, duration = 1) => {
    return gsap.fromTo(element,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  // Animaciones combinadas
  inRightTop: (element, duration = 1) => {
    return gsap.fromTo(element,
      { x: 200, y: -100, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  inLeftTop: (element, duration = 1) => {
    return gsap.fromTo(element,
      { x: -200, y: -100, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  inRightBottom: (element, duration = 1) => {
    return gsap.fromTo(element,
      { x: 200, y: 100, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  inLeftBottom: (element, duration = 1) => {
    return gsap.fromTo(element,
      { x: -200, y: 100, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration, ease: "power2.out" }
    );
  },

  // Animaciones de salida
  outLeft: (element, duration = 0.5) => {
    return gsap.to(element, {
      x: -200, opacity: 0, duration, ease: "power2.in"
    });
  },

  outRight: (element, duration = 0.5) => {
    return gsap.to(element, {
      x: 200, opacity: 0, duration, ease: "power2.in"
    });
  },

  // Animación de escala
  scaleIn: (element, duration = 0.8) => {
    return gsap.fromTo(element,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration, ease: "back.out(1.7)" }
    );
  },

  // Animación de fade
  fadeIn: (element, duration = 1) => {
    return gsap.fromTo(element,
      { opacity: 0 },
      { opacity: 1, duration, ease: "power2.out" }
    );
  },

  fadeOut: (element, duration = 0.5) => {
    return gsap.to(element, {
      opacity: 0, duration, ease: "power2.in"
    });
  },

  // Utilidad para establecer estado inicial
  setInitial: (element, state) => {
    return gsap.set(element, state);
  },

  // Timeline para animaciones secuenciales
  createTimeline: (options = {}) => {
    return gsap.timeline(options);
  }
};

export default animation;
