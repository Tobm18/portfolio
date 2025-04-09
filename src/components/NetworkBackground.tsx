"use client";

import { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Créer des points pour le réseau
    const points: { x: number; y: number; vx: number; vy: number; }[] = [];
    const pointsCount = 80; // Nombre de points dans le réseau
    const connectionDistance = 200; // Distance maximale pour connecter deux points
    const mouseMoveRadius = 150; // Rayon d'influence du mouvement de la souris
    
    // Configuration de l'animation
    let animationFrameId: number;
    
    // Redimensionner le canvas pour qu'il occupe tout l'écran
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Réinitialiser les points quand le canvas est redimensionné
      points.length = 0;
      for (let i = 0; i < pointsCount; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    };
    
    // Suivre la position de la souris
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    // Animation du réseau
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dessiner et mettre à jour chaque point
      points.forEach((point, i) => {
        // Mettre à jour la position du point
        point.x += point.vx;
        point.y += point.vy;
        
        // Effet de rebond sur les bords
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        // Effet d'attraction/répulsion avec la souris
        const dx = mousePosition.current.x - point.x;
        const dy = mousePosition.current.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseMoveRadius) {
          point.vx -= (dx / distance) * 0.1;
          point.vy -= (dy / distance) * 0.1;
        }
        
        // Limitation de la vitesse
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
        if (speed > 1.5) {
          point.vx = (point.vx / speed) * 1.5;
          point.vy = (point.vy / speed) * 1.5;
        }
        
        // Dessiner les connexions entre les points
        for (let j = i + 1; j < points.length; j++) {
          const otherPoint = points[j];
          const dx = otherPoint.x - point.x;
          const dy = otherPoint.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Opacité basée sur la distance
            const opacity = 1 - (distance / connectionDistance);
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            
            // Utiliser les couleurs du thème
            const strokeColor = document.documentElement.classList.contains('dark') 
              ? `rgba(79, 70, 229, ${opacity * 0.2})` // Primaire plus foncé/violet
              : `rgba(79, 70, 229, ${opacity * 0.2})`; // Primaire plus clair
            
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Dessiner le point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = document.documentElement.classList.contains('dark') 
          ? 'rgba(79, 70, 229, 0.4)' 
          : 'rgba(79, 70, 229, 0.2)';
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialiser le canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Démarrer l'animation
    animate();
    
    // Nettoyer lors du démontage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default NetworkBackground;