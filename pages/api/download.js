import { DownloaderHelper } from 'node-downloader-helper';
export default async (req, res) => {
	try {
		const tunnel_path = "http://"+process.env.NEXT_PUBLIC_RPI_IP+"30005/home/pi/pikrellcam/media/videos";
		const video = `${tunnel_path}/${req.query.video}`;
		console.log(req.query.video);
		const dl = new DownloaderHelper(video, 'F:\\Fiverr\\nextGW\\public\\videos');
		dl.on('end', () => {
			console.log('video downloaded');
			console.log(`/videos/${req.query.video}`);
			res.status(200).json({ url: `/videos/${req.query.video}` });
		})
		dl.start();
	}
	catch (error) {
		console.log(error);
		res.status(500).json({ error: 'An error has occured.' });
	}
}
