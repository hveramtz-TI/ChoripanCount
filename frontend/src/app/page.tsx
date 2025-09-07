'use client';
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    // Separar el título en palabras
    const splitTitle = () => {
      const titleElement = document.querySelector('.title');
      if (titleElement) {
        const text = titleElement.textContent || '';
        const words = text.split(' ');
        
        titleElement.innerHTML = words.map((word, index) => 
          `<span class="word" data-index="${index}" style="display: inline-block;">${word}</span>`
        ).join(' ');
      }
    };

    splitTitle();

    // Animar cada palabra con lógica personalizada
    gsap.fromTo('.title .word', 
      { 
        opacity: 0,
        x: (index, target) => {
          const totalWords = document.querySelectorAll('.title .word').length;
          if (index === 0) return -200; // Primera desde izquierda
          if (index === totalWords - 1) return 200; // Última desde derecha
          return 0; // Las del medio no se mueven en X
        },
        y: (index, target) => {
          const totalWords = document.querySelectorAll('.title .word').length;
          if (index === 0 || index === totalWords - 1) return 0; // Primera y última no se mueven en Y
          return -150; // Las del medio desde arriba
        },
        rotation: (index, target) => {
          const totalWords = document.querySelectorAll('.title .word').length;
          if (index === 0) return -15; // Primera con rotación izquierda
          if (index === totalWords - 1) return 15; // Última con rotación derecha
          return 0; // Las del medio sin rotación inicial
        }
      }, 
      { 
        opacity: 1, 
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.8, 
        ease: 'back.out(1)',
        stagger: 0.2, // 0.2 segundos entre cada palabra
        scrollTrigger: {
          trigger: '.title',
          start: 'top 80%',
          end: 'top 30%', // Define cuándo termina el área de trigger
          toggleActions: 'play reverse play reverse',
          markers:true
        }
      }
    );

    // Animación del párrafo (mantener la original)
    gsap.fromTo('.description',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1, scrollTrigger: {
        trigger: '.description',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play reverse play reverse',
        markers:true
      } }
    );
  }, [])

  return (
    <div className={styles.homeContainer}>
      <section>
        <div className={styles.welcomeMessage}>
          <h1 className='title'>¡Hola, bienvenido a Choripan Count!</h1>
          <p className='description'>¿Alguna vez te has preguntado cuánta comida puedes comprar por el valor de un producto específico? ¡Estás en el lugar correcto!</p>
        </div>
      </section>
      <section></section>
    </div>
  );
}