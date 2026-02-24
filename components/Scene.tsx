import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, Trail } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { random } from 'maath';

const DataCloud = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const ConnectingLines = () => {
    // A simplified visual representation of connections
    const count = 50;
    const lines = useMemo(() => {
        const temp = [];
        for(let i=0; i<count; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 5;
            temp.push([x,y,z]);
        }
        return temp;
    }, []);

    return (
        <group>
            {lines.map((pos, i) => (
                <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
                     <mesh position={new THREE.Vector3(...pos)}>
                        <boxGeometry args={[0.05, 0.05, 0.05]} />
                        <meshStandardMaterial color={i % 2 === 0 ? "#8b5cf6" : "#06b6d4"} emissive={i % 2 === 0 ? "#8b5cf6" : "#06b6d4"} emissiveIntensity={2} />
                     </mesh>
                </Float>
            ))}
        </group>
    )
}

const MouseParallax = () => {
    useFrame((state) => {
        const { mouse, camera } = state;
        // Smoothly interpolate camera position based on mouse coordinates
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });
    return null;
}

export const Scene: React.FC = () => {
  return (
    <>
      <color attach="background" args={['#020205']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8b5cf6" />

      {/* Elements */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <DataCloud />
      </Float>
      
      <ConnectingLines />
      <MouseParallax />

      {/* Post Processing for the "Glow" effect */}
      <EffectComposer disableNormalPass>
        <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={1.2} 
            radius={0.6} 
        />
      </EffectComposer>
    </>
  );
};