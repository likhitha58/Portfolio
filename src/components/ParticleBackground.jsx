import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const particleCount = 500;
        const positions = [];

        for (let i = 0; i < particleCount; i++) {
            positions.push((Math.random() - 0.5) * 10); // x
            positions.push((Math.random() - 0.5) * 10); // y
            positions.push((Math.random() - 0.5) * 10); // z
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );

        const material = new THREE.PointsMaterial({
            color: 0x00ff99,   // minty neon green
            size: 0.04,
            transparent: true,
            opacity: 0.25,
        });



        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const animate = () => {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.0005;
            particles.rotation.x += 0.0003;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };

    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticleBackground;
