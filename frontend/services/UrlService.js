class UrlService {
	constructor() {
		this.URI = '/api/shorten'
	}

	async getUrls() {
		const res = await fetch(this.URI);
		const urls = await res.json();
		return urls;
	}

	async getUrl(urlId) {
		const res = await fetch(`${this.URI}/${urlId}`)
		const data = await res.json();
		console.log(data);
	}

	async postUrl(url) {
		const res = await fetch(this.URI, {
			method: 'POST',
			body: url,
		});
		const data = await res.json();
		console.log(data);
	}

}

export default UrlService;