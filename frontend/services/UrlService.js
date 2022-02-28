class UrlService {
	constructor() {
		this.URI = '/api/shorten'
	}

	async getUrls() {
		const res = await fetch(this.URI);
		const urls = await res.json();
		return urls;
	}

	async getUrl(Id) {
		const res = await fetch(`${this.URI}/${bookId}`)
		const data = await res.json();
		console.log(data);
	}

	async postBook(url) {
		const res = await fetch(this.URI, {
			method: 'POST',
			body: url,
		});
		const data = await res.json();
		console.log(data);
	}

}

export default UrlService;