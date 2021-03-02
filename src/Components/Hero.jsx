import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// SVG Images

import PlanetOne from '../Images/planet-1.svg';
import PlanetTwo from '../Images/planet-2.svg';
import PlanetThree from '../Images/planet-3.svg';
import PlanetFour from '../Images/planet-4.svg';

const Section = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #131313;
`;
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100vh;
	padding: 3rem calc((100vw-1300px)/2);

	@media screen and (max-width: 768) {
		grid-template-columns: 1fr;
	}
`;

const ColumnLeft = styled.div`
	display: flex;
	color: white;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5rem 2rem;

	h1 {
		margin-bottom: 0.5rem;
		font-size: 2rem;
	}

	p {
		margin: 2rem 0;
		font-size: 4rem;
		line-height: 1.1;
	}
`;
const Button = styled(motion.button)`
	padding: 1rem 3rem;
	font-size: 1rem;
	border: 2px solid #fff;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
	background: transparent;
  color:#fff;
`;

const Image = styled(motion.img)`
	position: absolute;
	width: 100%;
	height: 100%;
	max-width: 250px;
	max-height: 250px;
`;
const ColumnRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	position: relative;

	${Image}:nth-child(1) {
		top: 10px;
		left: 10px;
	}

	${Image}:nth-child(2) {
		top: 170px;
		right: 10px;
	}
	${Image}:nth-child(3) {
		top: 350px;
		left: 50px;
	}

	${Image}:nth-child(4) {
		bottom: 100px;
		right: 75px;
	}

	${'' /* @keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: no-preference) {

		animation: App-logo-spin infinite 20s linear;
	} */};
`;

function Hero() {
	const fadeLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 }
	};
	return (
		<Section>
			<Container>
				<ColumnLeft>
					<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
						Welcome To Space
					</motion.h1>
					<motion.p variants={fadeLeft} initial="hidden" animate="visible" transition={{ duration: 1 }}>
						Journey to the UnKnown
					</motion.p>
					<Button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95, backgroundColor: '#fa1e0e', border: 'none', color: '#fff' }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.5 } }}
					>
						Get Started{' '}
					</Button>
				</ColumnLeft>
				<ColumnRight>
					<Image
						src={PlanetOne}
						alt="Planet One"
						whileTap={{ scale: 0.9 }}
						drag={true}
						dragConstraints={{ left: 100, right: 250, top: 100, bottom: 250 }}
						initial={{ opacity: 0, y: -1000 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
					/>
					<Image
						src={PlanetTwo}
						alt="Planet Two"
						whileTap={{ scale: 0.6 }}
						drag={true}
						dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: 1000 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
					/>
					<Image
						src={PlanetThree}
						alt="Planet Three"
						whileTap={{ scale: 0.8 }}
						drag={true}
						dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
						initial={{ opacity: 0, x: -1000 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
					/>
					<Image
						src={PlanetFour}
						alt="Planet Four"
						whileTap={{ scale: 0.9 }}
						drag={true}
						dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
						initial={{ opacity: 0, y: 1000 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
					/>
				</ColumnRight>
			</Container>
		</Section>
	);
}

export default Hero;
