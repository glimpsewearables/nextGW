import axios from 'axios';

export default async (req, res) => {
	try {
		const { baseURL } = req.query;
		const tunnel_path = "http://"+process.env.NEXT_PUBLIC_RPI_IP+":30005/home/pi/pikrellcam/media/videos";
		const response = await axios.get(tunnel_path);
		const log = response.data.split('\n').reverse();
		const updated_log = log.map(string => { 
			return string.replace( /{.*?}/, '').split('  ');
		});
		res.status(200).json({ log: updated_log })
	}
	catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
