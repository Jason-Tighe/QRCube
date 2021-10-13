import * as THREE from 'three';
import React, { Suspense, useRef, useMemo } from 'react';
import {
	Canvas,
	extend,
	useThree,
	useLoader,
	useFrame
} from '@react-three/fiber';
import {
	OrbitControls,
	Sky,
	Plane,
	Sphere,
	Torus,
	GradientTexture,
	MeshWobbleMaterial,
	Billboard,
	Text,
	useCubeTexture,
	Html,
	Instance,
	Stars
} from '@react-three/drei';

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

function QRCube(props) {
	const i = 0.01 - `${props.spin}`;
	const texture_1 = useLoader(TextureLoader, 'img/JGit.svg');
	const texture_2 = useLoader(TextureLoader, 'img/JLinkedIN.svg');
	const texture_3 = useLoader(TextureLoader, 'img/Meme1.svg');
	const texture_4 = useLoader(TextureLoader, 'img/Meme2.svg');
	const texture_5 = useLoader(TextureLoader, 'img/Meme3.svg');
	const texture_6 = useLoader(TextureLoader, 'img/RRoll.svg');
	const mesh = useRef();

	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += i;
	});

	return (
		<mesh ref={mesh} scale={props.scale}>
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial map={texture_1} attachArray="material" />
			<meshStandardMaterial map={texture_2} attachArray="material" />
			<meshStandardMaterial map={texture_3} attachArray="material" />
			<meshStandardMaterial map={texture_4} attachArray="material" />
			<meshStandardMaterial map={texture_5} attachArray="material" />
			<meshStandardMaterial map={texture_6} attachArray="material" />
		</mesh>
	);
}

export default function Blop(props) {
	return (
		<Canvas camera={{ position: [500, 5, 1], fov: 50, near: 1, far: 2000 }}>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Suspense fallback={null}>
				<QRCube {...props} />
			</Suspense>
			<Stars
				radius={100}
				depth={50}
				count={5000}
				factor={4}
				saturation={0}
				fade
			/>

			<OrbitControls />
		</Canvas>
	);
}
