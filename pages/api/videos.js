import axios from 'axios';
import _, { filter } from 'underscore';
import moment from 'moment';

export default async (req, res) => {
	try {
		const { baseURL } = req.query;
		var url = baseURL;
		if (url == 'http://my.glimpse.cam'){
		  url = 'http://10.42.0.1';
		}
		else{
		  url = 'baseURL';
		}
		const tunnel_path = `https://a5554ee460c1209e42734a6245543849.balena-devices.com/home/pi/pikrellcam/media/videos/`;
		const response = await axios.get(tunnel_path);
		const videos = response.data.files.map(video => {
			const info = video.title.split('_');
			const filename = video.title;
			const name = `${info[0]}_${info[1]}`;
			const date = info[2];
			const time = formatTime(info[3] ? info[3].substring(0, info[3].length - 4) : null);
			const url = `https://a5554ee460c1209e42734a6245543849.balena-devices.com/home/pi/pikrellcam/media/videos/${video.title}`;
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
		console.log(grouped)

		const date_list = Object.entries(grouped).map(([key]) => key);
		//Sort in descending order
		const sorted_dates = date_list.sort(function (a, b) {
			a = a.split('-').reverse().join('');
			b = b.split('-').reverse().join('');
			return a.localeCompare(b);
		});
		console.log(sorted_dates);
		res.status(200).json({ videos: grouped, date_list: sorted_dates });
	}
	catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

function formatTime(time) {

	if (!time) return;

	const split_time = time.split('.');
	let flag = 'am';
	let hours = parseInt(split_time[0]);

	if (hours >= 12) {
		if (hours > 12) {
			hours -= 12;
		}
		flag = 'pm';
	}

	if (hours < 10) {
		hours = `0${hours}`
	}

	console.log(`${hours}:${split_time[1]} ${flag.toUpperCase()}`);
	return `${hours}:${split_time[1]} ${flag.toUpperCase()}`
}
