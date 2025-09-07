"use client";
import { useEffect, useRef } from "react";
import animation from "@/styles/animation";
import styles from "@/styles/animation.module.scss";

export default function Home() {
  const boxRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // El estado inicial ya está definido en CSS, solo necesitamos animar hacia el estado final
    
    // Animación inicial del título con retraso para que se vea mejor
    setTimeout(() => {
      animation.inTop(titleRef.current, 2);
    }, 500);

    // Establecer estado inicial solo para la caja (que no tiene CSS inicial)
    animation.setInitial(boxRef.current, { opacity: 0, x: 200, y: -100 });

    // Intersection Observer con GSAP
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animación combinada InRight + InTop con GSAP
            animation.inRightTop(entry.target, 1.5);
          } else {
            // Resetear al estado inicial cuando sale de vista
            animation.setInitial(entry.target, { opacity: 0, x: 200, y: -100 });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (boxRef.current) observer.observe(boxRef.current);

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <main style={{ height: "200vh", padding: "2rem" }}>
      <div className="home-container">
        <section>
          <h1 ref={titleRef} className={styles.prepareAnimation}>
            ¡Hola, bienvenido a Choripan Count!
          </h1>
        </section>
        <section>
          <div
            ref={boxRef}
            className={`${styles.prepareAnimation} ${styles.animated}`}
            style={{
              background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
              height: "200px",
              lineHeight: "200px",
              textAlign: "center",
              marginTop: "50vh",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            🚀 Animación GSAP - InRight + InTop
          </div>
        </section>
      </div>
    </main>
  );
}
