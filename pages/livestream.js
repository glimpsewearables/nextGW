import React from 'react';
import styled from "styled-components";
import getBaseURL from '../utils/baseURL';

const Container = styled.div`
margin: 0 auto;
margin-bottom: 20px;
`;

export default function Livestream() {
	const [time, setTime] = React.useState(Date.now());
	let baseURL;
	React.useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), 500);
		baseURL = getBaseURL(window);
		return () => { clearInterval(interval); }
	}, []);

	return (
		<Container>
			<img src={`${baseURL}/mjpeg_read.php?${time}`} width="90%" />
		</Container>
	);
}
