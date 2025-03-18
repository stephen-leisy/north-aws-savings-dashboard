'use strict';

import { API_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const token = API_TOKEN;

	if (!token) {
		console.warn('No auth token found.');
		return { success: false, data: null };
	}

	try {
		const response = await fetch('https://north-case-api.vercel.app/api', {
			headers: { Authorization: token }
		});

		if (!response.ok) {
			throw new Error(`API request failed with status ${response.status}`);
		}

		const data = await response.json();
		return { success: true, data };
	} catch (error) {
		console.error('Error fetching AWS savings data:', error);
		return { success: false, data: null };
	}
};
