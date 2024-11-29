import { checkResponse } from "./utils";
import { getToken } from "../utils/token";
// import { fetchNews } from "./NewsApi";

const baseUrl = "http://localhost:3001";

const currentUser = { id: "1", name: "Samuel" };

export function request(url, options) {
  return new Promise((resolve) => {
    //   return fetch(url, options).then(checkResponse);
    setTimeout(() => {
      resolve({ message: "Success", data: { name: "Samuel", id: "1" } });
    }, 1000);
  });
}

const mockNewsData = [
  {
    _id: "nbc-news",
    author: "David Ingram",
    title:
      "Elon Musk says all voting should be ‘in person’ while his super PAC promotes voting by mail",
    description: "musk townhall 2",
    url: "https://www.nbcnews.com/tech/tech-news/elon-musk-says-voting-person-super-pac-promotes-voting-mail-rcna176074",
    urlToImage:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241018-oaks-pa-elon-musk-town-hall-ac-1103p-3b40ef.jpg",
    publishedAt: "2024-10-19T03:24:27Z",
    content:
      "Tech billionaire Elon Musk said Friday that all voting should be in person, contradicting his own history of voting by mail and the efforts of his pro-Trump super PAC to get others to vote by mail, t… [+4497 chars]",
    sourceName: "NBC News",
    keyword: "vote",
  },
  {
    _id: "electrek",
    author: "Jo Borrás",
    title: "QOTD: is Volvo planning a low cost, electric Robotaxi rival?",
    description:
      "It’s probably nothing. Just a playful post on social media from a random Volvo account celebrating an obscure concept car from the early aughts. It couldn’t possibly mean that Volvo is actually going to build the thing … right?\n\n\n\n more…",
    url: "http://electrek.co/2024/10/06/qotd-is-volvo-planning-a-low-cost-electric-robotaxi-rival/",
    urlToImage:
      "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/10/volvo_concept.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-10-06T16:54:16Z",
    content:
      "It’s probably nothing. Just a playful post on social media from a random Volvo account celebrating an obscure concept car from the early aughts. It couldn’t possibly mean that Volvo is actually going… [+2378 chars]",
    sourceName: "Electrek",
    keyword: "volvo",
  },

  {
    _id: "fox-news",
    author: "Emma Colton",
    title:
      "Trump supporter Elon Musk offers massive hourly pay to those working to increase voter turnout",
    description:
      "Elon Musk's pro-Trump super PAC, America, is offering a $30 hourly base salary to canvassers in battleground states working to increase voter registration and turnout.",
    url: "https://www.foxnews.com/politics/trump-supporter-elon-musk-offers-massive-hourly-pay-those-working-increase-voter-turnout",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/musk-trump-2.jpg",
    publishedAt: "2024-10-06T16:34:29Z",
    content:
      "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+3889 chars]",
    sourceName: "Fox News",
    keyword: "elon",
  },
  {
    _id: "the-times-of-india",
    author: "Reuters",
    title:
      "Former OpenAI technology chief Mira Murati to raise capital for new AI startup, sources say",
    description:
      "While the talks are in the early stages, Murati's new venture could raise over $100 million given her reputation and the capital needed to train proprietary models, one of the sources said, cautioning that the figures have not been finalized.",
    url: "https://economictimes.indiatimes.com/tech/artificial-intelligence/former-openai-technology-chief-mira-murati-to-raise-capital-for-new-ai-startup-sources-say/articleshow/114364928.cms",
    urlToImage:
      "https://img.etimg.com/thumb/msid-114364935,width-1200,height-630,imgsize-38362,overlay-ettech/articleshow.jpg",
    publishedAt: "2024-10-19T02:36:52Z",
    content:
      "This article is part of The D.C. Brief, TIMEs politics newsletter. Sign up here to get stories like this sent to your inbox.\r\nDETROITDonald Trump does not apologize. Ever. Its actually a point of gre… [+5271 chars]",
    sourceName: "The Times of India",
    keyword: "ai",
  },
  {
    _id: "biztoc.com",
    author: "news.google.com",
    title:
      "Mesa woman killed in Tesla ‘Full Self-Driving’ crash; feds to probe automaker",
    description:
      "Mesa woman killed in Tesla ‘Full Self-Driving’ crash; feds to probe automaker Arizona's Family\nMusk's Tesla probed by US over safety of self-driving software BBC.com\nRegulator Investigates Tesla’s Automated-Driving Feature After Fatal Crash The Wall Street Jo…",
    url: "https://biztoc.com/x/9923b332092e7402",
    urlToImage: "https://biztoc.com/cdn/805/og.png",
    publishedAt: "2024-10-19T00:57:08Z",
    content:
      "Mesa woman killed in Tesla Full Self-Driving crash; feds to probe automaker Arizona's FamilyMusk's Tesla probed by US over safety of self-driving software BBC.comRegulator Investigates Teslas Automat… [+145 chars]",
    sourceName: "Biztoc.com",
    keyword: "tesla",
  },
  {
    _id: "iphone-in-canada",
    author: "John Quintet",
    title: "Tesla iOS App Updated with Control Center Toggles in iOS 18",
    description:
      "Tesla has updated its iPhone app to version 4.38.0 which includes the following features (via Tesla North): Commands can now be executed offline when in proximity to the vehicle. Requires vehicle software version 2024.38+ Add your favorite commands to Control…",
    url: "https://www.iphoneincanada.ca/2024/10/18/tesla-ios-app-updated-with-control-center-toggles-in-ios-18/",
    urlToImage:
      "https://cdn.iphoneincanada.ca/wp-content/uploads/2017/09/iic-logo-1.svg",
    publishedAt: "2024-10-18T23:17:06Z",
    content:
      "Tesla has updated its iPhone app to version 4.38.0 which includes the following features (via Tesla North):\r\n<ul><li>Commands can now be executed offline when in proximity to the vehicle. Requires ve… [+784 chars]",
    sourceName: "iPhone in Canada",
    keyword: "tesla",
  },
];

let savedArticlesList = [];

const getNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNewsData);
    }, 1000);
  });
};

const savedArticles = (articleData) => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }
    const existsNews = savedArticlesList.some(
      (article) => article._id === articleData._id
    );
    if (!existsNews) {
      savedArticlesList.push(articleData);
    }

    resolve({
      ...articleData,
      id: "65f7371e7bce9e7d331b11a0",
    });
  });
};
const unsaveArticle = () => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    const response = {
      ok: true,
      status: 200,
      statusText: "OK",
    };
    resolve(response);
  });
};

const getSavedArticles = () => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }
    setTimeout(() => {
      resolve(savedArticlesList || []);
    }, 1000);
  });
};

const deleteArticle = (articleId) => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }
    if (!articleId) {
      reject("No article id found");
    }
    const initialLength = savedArticlesList.length;
    savedArticlesList = savedArticlesList.filter(
      (article) => article._id !== articleId
    );
    if (savedArticlesList.length === initialLength) {
      reject("Articles not found");
    } else {
      resolve({
        ok: true,
        status: 200,
        statusText: "OK",
      });
    }
  });
};

const getUserInfo = () => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }
    resolve({
      name: "Samuel",
      id: "65f7371e7bce9e7d331b11a0",
      email: "samuel1234@gmail.com",
    });
    return request(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  });
};

const api = {
  getNews,
  savedArticles,
  unsaveArticle,
  getSavedArticles,
  deleteArticle,
  getUserInfo,
};

export default api;
