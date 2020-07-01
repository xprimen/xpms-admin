// import config from './config';

export default {
	base_url_api:
		process.env.NODE_ENV === 'development'
			? 'http://127.0.0.1/honda-events-api/v1'
			: 'https://www.astra-honda-tdr.masuk.id/v1'
};
