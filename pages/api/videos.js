import axios from 'axios';

export default async (req, res) => {
	console.log("here");
	try {
		const { baseURL } = req.query;
		const tunnel_path = `${baseURL}5/home/pi/pikrellcam/media/videos`;
		const response = await axios.get(tunnel_path);
		const videos = response.data.files.map(video => {
			const info = video.title.split('_');
			const filename = video.title;
			const name = `${info[0]}_${info[1]}`;
			const date = info[2];
			const time = info[3] ? info[3].substring(0, info[3].length - 4) : null;
			const url = `${tunnel_path}/${video.title}`;
			return {
				filename,
				name,
				date,
				time,
				url
			};
		})
		videos.shift();
		console.log(videos);
		res.status(200).json({ videos: videos })
	}
	catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' })
	}
}