// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	if (req.method === 'GET') {
		return { user: 'Bob' };
	}
};
