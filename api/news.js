// api/news.js - NewsAPI Proxy

module.exports = async (req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ error: 'Search query parameter (q) is required' });
    }

    const apiKey = process.env.NEWS_API_KEY || "4f8861a9c091499d893491e53d5c1ea2";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&apiKey=${apiKey}`;

    try {
        const apiResponse = await fetch(url);
        const data = await apiResponse.json();
        
        return res.status(apiResponse.status).json(data);
    } catch (error) {
        console.error('News API Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
