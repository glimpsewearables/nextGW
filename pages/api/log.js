import axios from 'axios';

export default async (req, res) => {
	try {
		const { baseURL } = req.query;
		const tunnel_path = `${baseURL}5/home/pi/glimpse-cam/glimpseLog.log`;
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
