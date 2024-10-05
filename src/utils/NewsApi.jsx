

const apiKey = 'c1b97c0823a44c9083a35aac091b098c';

async function getNewsUrl(query) {
    const today = new Date().toISOString().split("T")[0];
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const url = 
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    

    try{
        const response =  await fetch(url);
        const data = await response.json();
        return(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

export default getNewsUrl;