'use strict';

export const load = async () => {
	const token = '8WT05LTmEmJBmBWHROWGYmjulMDp3EIa38thJTBzc0R4VAGBVMpsifRsXu3bYPz7';

	if (!token) console.log('No Token!');

	const response = await fetch('https://north-case-api.vercel.app/api', {
		headers: { Authorization: token }
	});

	if (!response.ok) console.log('Error fetching!');

	if (response.ok) {
		const data = await response.json();

		return data;
	}
};
