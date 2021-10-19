import React, { useState } from 'react';
import Blop from '../components/Blop';

export default function App(props) {
	const [scale, setScale] = useState(50);
	const [spin, setSpin] = useState(0);
	const [hertSpin, setHertSpin] = useState(0);
	const [vertSpin, setVertSpin] = useState(0);
	const [increment, setIncrement] = useState(0);

	const increase = () => {
		let i = 10;
		setScale(scale + i);
		console.log(scale);
	};

	const plus = () => {
		let i = 1;
		setIncrement(increment + i);
	};

	const decrease = () => {
		let i = 10;
		setScale(scale - i);
	};

	const stopSpin = () => {
		setSpin(0.01);
	};
	//bad way to rotate the face from the top face.
	const vertSpinner = () => {
		let i = (90 * Math.PI) / 180;
		console.log(i);
		setVertSpin(vertSpin + i);
	};

	//bad way to rotate the face side face
	const hertSpinner = () => {
		let i = (90 * Math.PI) / 180;
		setHertSpin(hertSpin + i);
	};

	return (
		<>
			<div className="container">
				<div id="cubeSpace" className="container-fluid">
					<Blop
						scale={scale}
						spin={spin}
						hertSpin={hertSpin}
						vertSpin={vertSpin}
						increment={increment}
					/>
				</div>
				<div className="container bg-light">
					<h1 className="display-6">Welcome!</h1>
					<p className="lead">
						This is my QR cube. Use the buttons to resize and start or stop the
						spinning. You can also use your mouse to move the camera around the
						cube.
					</p>
				</div>
				<div className="container">
					<div className="row justify-content-evenly">
						<button
							id="sizeUp"
							className="col display-6 btn btn-light"
							onClick={increase}
						>
							{' '}
							Increase the Size{' '}
						</button>
						<button
							id="sizeDown"
							className="col display-6 btn btn-light"
							onClick={decrease}
						>
							{' '}
							Decrease the Size{' '}
						</button>
						<button
							id="spinDown"
							className="col display-6 btn btn-light"
							onClick={stopSpin}
						>
							{' '}
							Stop Spin{' '}
						</button>
						<button
							id="spinUp"
							className="col display-6 btn btn-light"
							onClick={vertSpinner}
						>
							{' '}
							Y Face Rotate{' '}
						</button>
						<button
							id="spinUp"
							className="col display-6 btn btn-light"
							onClick={hertSpinner}
						>
							{' '}
							X Face Spin{' '}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
