export class Service {
	constructor() {}

	async getData() {
		try {
			const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");

			// console.log(data.ok);
			const finalData = await data.json();

			// return Promise.resolve({
			// 	status: "success",
			// 	data: finalData,
			// });
			return {
				status: "success",
				data: finalData,
			};
		} catch (error) {
			return {
				status: "failed",
				data: error,
			};
		}
	}
}
