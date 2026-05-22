"use client";

import { Bounds, ContactShadows, Environment, Float, Html, Lightformer, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Color, Group, MathUtils, Mesh, MeshPhysicalMaterial, type Object3D } from "three";
import styles from "@/components/three-model-stage.module.css";

type Vec3 = [number, number, number];

export type ThreeModelStageProps = {
  src?: string;
  className?: string;
  scale?: number;
  cameraPosition?: Vec3;
  backgroundColor?: string | null;
  transparent?: boolean;
  materialFinish?: "original" | "chrome";
  rotationSpeed?: number;
  autoRotate?: boolean;
  controls?: boolean;
  float?: boolean;
  shadows?: boolean;
  animateLights?: boolean;
  ambientLightIntensity?: number;
  keyLightColor?: string;
  fillLightColor?: string;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
};

const DEFAULT_CAMERA: Vec3 = [0, 0.55, 5.2];

function MovingLights({
  animate,
  keyLightColor,
  fillLightColor,
  keyLightIntensity,
  fillLightIntensity
}: {
  animate: boolean;
  keyLightColor: string;
  fillLightColor: string;
  keyLightIntensity: number;
  fillLightIntensity: number;
}) {
  const key = useRef<Object3D>(null);
  const fill = useRef<Object3D>(null);
  const keyColor = useMemo(() => new Color(keyLightColor), [keyLightColor]);
  const fillColor = useMemo(() => new Color(fillLightColor), [fillLightColor]);

  useFrame(({ clock }) => {
    if (!animate) return;
    const time = clock.getElapsedTime();
    if (key.current) {
      key.current.position.x = Math.sin(time * 0.42) * 2.25;
      key.current.position.y = 3.1 + Math.sin(time * 0.31) * 0.55;
      key.current.position.z = 2.8 + Math.cos(time * 0.28) * 1.15;
    }
    if (fill.current) {
      fill.current.position.x = Math.cos(time * 0.34) * -2.4;
      fill.current.position.y = 1.7 + Math.sin(time * 0.25) * 0.35;
      fill.current.position.z = 3.5 + Math.sin(time * 0.2) * 0.9;
    }
  });

  return (
    <>
      <spotLight ref={key} color={keyColor} position={[2.6, 3.3, 3.2]} angle={0.46} penumbra={0.72} intensity={keyLightIntensity} castShadow shadow-mapSize={[2048, 2048]} />
      <pointLight ref={fill} color={fillColor} position={[-3.2, 1.8, 3.6]} intensity={fillLightIntensity} />
    </>
  );
}

function DemoMesh({ rotationSpeed }: { rotationSpeed: number }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * rotationSpeed;
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, Math.sin(Date.now() * 0.0007) * 0.08, 0.04);
  });

  return (
    <group ref={group} castShadow receiveShadow>
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <torusKnotGeometry args={[0.86, 0.24, 156, 20]} />
        <meshStandardMaterial color="#ddf160" roughness={0.32} metalness={0.54} />
      </mesh>
      <mesh position={[0, -0.9, 0]} rotation={[0, 0, Math.PI / 4]} castShadow receiveShadow>
        <boxGeometry args={[1.55, 0.22, 1.55]} />
        <meshStandardMaterial color="#9f8be7" roughness={0.48} metalness={0.28} />
      </mesh>
    </group>
  );
}

function AnimatedModel({
  src,
  scale,
  rotationSpeed,
  materialFinish
}: {
  src: string;
  scale: number;
  rotationSpeed: number;
  materialFinish: ThreeModelStageProps["materialFinish"];
}) {
  const root = useRef<Group>(null);
  const gltf = useGLTF(src);
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const { actions } = useAnimations(gltf.animations, root);
  const chromeMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: "#f1f4f7",
        metalness: 0.82,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 3.2,
        emissive: "#262a30",
        emissiveIntensity: 0.08
      }),
    []
  );

  useEffect(() => {
    scene.traverse((object) => {
      object.castShadow = true;
      object.receiveShadow = true;
      if (materialFinish === "chrome" && object instanceof Mesh) {
        object.material = chromeMaterial;
      }
    });
  }, [chromeMaterial, materialFinish, scene]);

  useEffect(() => () => chromeMaterial.dispose(), [chromeMaterial]);

  useEffect(() => {
    Object.values(actions).forEach((action) => action?.reset().fadeIn(0.25).play());
    return () => {
      Object.values(actions).forEach((action) => action?.fadeOut(0.2).stop());
    };
  }, [actions]);

  useFrame((_, delta) => {
    if (root.current) root.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <group ref={root} scale={scale}>
      <primitive object={scene} castShadow receiveShadow />
    </group>
  );
}

function Scene({
  src,
  scale,
  rotationSpeed,
  autoRotate,
  controls,
  float,
  shadows,
  animateLights,
  ambientLightIntensity,
  backgroundColor,
  keyLightColor,
  fillLightColor,
  keyLightIntensity,
  fillLightIntensity,
  materialFinish
}: Required<Pick<ThreeModelStageProps, "scale" | "rotationSpeed" | "autoRotate" | "controls" | "float" | "shadows" | "animateLights" | "ambientLightIntensity" | "keyLightColor" | "fillLightColor" | "keyLightIntensity" | "fillLightIntensity" | "materialFinish">> &
  Pick<ThreeModelStageProps, "src" | "backgroundColor">) {
  const model = src ? <AnimatedModel src={src} scale={scale} rotationSpeed={autoRotate ? rotationSpeed : 0} materialFinish={materialFinish} /> : <DemoMesh rotationSpeed={autoRotate ? rotationSpeed : 0.34} />;

  return (
    <>
      {backgroundColor ? <color attach="background" args={[backgroundColor]} /> : null}
      <ambientLight intensity={ambientLightIntensity} />
      <hemisphereLight color="#ffffff" groundColor="#747b88" intensity={ambientLightIntensity * 0.82} />
      <MovingLights animate={animateLights} keyLightColor={keyLightColor} fillLightColor={fillLightColor} keyLightIntensity={keyLightIntensity} fillLightIntensity={fillLightIntensity} />
      <Suspense fallback={<Html center className={styles.loader}>Loading 3D asset</Html>}>
        <Bounds fit clip observe margin={1.18}>
          {float ? (
            <Float speed={1.35} rotationIntensity={0.16} floatIntensity={0.28}>
              {model}
            </Float>
          ) : (
            model
          )}
        </Bounds>
        <Environment resolution={64}>
          <Lightformer color={keyLightColor} intensity={3.6} position={[0, 4, 2]} scale={[4, 3, 1]} />
          <Lightformer color="#ffffff" intensity={4.8} position={[1.6, 2.4, 3.2]} scale={[0.75, 5.2, 1]} />
          <Lightformer color={fillLightColor} intensity={1.6} position={[-3, 1, -2]} scale={[3, 2, 1]} />
        </Environment>
        {shadows ? <ContactShadows position={[0, -1.42, 0]} opacity={0.48} scale={8.5} blur={2.8} far={4.5} /> : null}
      </Suspense>
      {controls ? <OrbitControls enablePan={false} minDistance={2.2} maxDistance={8} autoRotate={false} /> : null}
    </>
  );
}

export function ThreeModelStage({
  src,
  className,
  scale = 1,
  cameraPosition = DEFAULT_CAMERA,
  backgroundColor = "#101110",
  transparent = false,
  materialFinish = "original",
  rotationSpeed = 0.22,
  autoRotate = true,
  controls = true,
  float = true,
  shadows = true,
  animateLights = true,
  ambientLightIntensity = 0.72,
  keyLightColor = "#ddf160",
  fillLightColor = "#9f8be7",
  keyLightIntensity = 5.2,
  fillLightIntensity = 2.1
}: ThreeModelStageProps) {
  return (
    <div className={[styles.stage, className].filter(Boolean).join(" ")} data-transparent={transparent ? "true" : undefined}>
      <Canvas
        className={styles.canvas}
        shadows={shadows}
        dpr={[1, 1.75]}
        camera={{ position: cameraPosition, fov: 38, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: transparent, powerPreference: "high-performance" }}
      >
        <Scene
          src={src}
          scale={scale}
          rotationSpeed={rotationSpeed}
          autoRotate={autoRotate}
          controls={controls}
          float={float}
          shadows={shadows}
          animateLights={animateLights}
          ambientLightIntensity={ambientLightIntensity}
          backgroundColor={backgroundColor}
          keyLightColor={keyLightColor}
          fillLightColor={fillLightColor}
          keyLightIntensity={keyLightIntensity}
          fillLightIntensity={fillLightIntensity}
          materialFinish={materialFinish}
        />
      </Canvas>
    </div>
  );
}
