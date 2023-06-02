import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CarSport = () => {
  const result = useLoader(GLTFLoader, "/car.glb");

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment={"city"} intensity={0.6} shadows={false}>
        <Suspense fallback={null}>
          <primitive object={result.scene} />
        </Suspense>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry />
        <MeshReflectorMaterial
          blur={[300, 100]} // Blur ground reflections (width, height), 0 skips blur
          mixBlur={1} // How much blur mixes with surface roughness (default = 1)
          mixStrength={40} // Strength of the reflections
          roughness={1}
          mixContrast={1} // Contrast of the reflections
          resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          depthScale={1.2} // Scale the depth factor (0 = no depth, default = 0)
          minDepthThreshold={0.4} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1.4} // Upper edge for the depthTexture interpolation (default = 0)
          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          metalness={0.5}
          distortion={1} // Amount of distortion based on the distortionMap texture
          color={"#101010"}
        />
      </mesh>
    </PresentationControls>
  );
};

export default CarSport;
