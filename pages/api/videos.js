import axios from 'axios';
import _, { filter } from 'underscore';
import moment from 'moment';

export default async (req, res) => {
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
			return moment(date, "YYYY-MM-DD", true).isValid()
				? {
					filename,
					name,
					date,
					time,
					url
				}
				: null;
		})
		const filtered = videos.filter(el => el != null);
		const grouped = _.groupBy(filtered, video => video.date);

		const date_list = Object.entries(grouped).map(([key]) => key);
		//date_list.push('2020-08-17');
		//Sort in descending order
		const sorted_dates = date_list.sort(function (a, b) {
			a = a.split('-').reverse().join('');
			b = b.split('-').reverse().join('');
			return b.localeCompare(a);
		});
		console.log(sorted_dates);
		res.status(200).json({ videos: grouped, date_list: sorted_dates });
	}
	catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' })
	}
}