const axios = require('axios');
const cheerio = require('cheerio');

async function fetchUserRating(username) {
  try {
    const url = `https://www.codechef.com/users/${username}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const userRatingElement = $('aside').find('div.rating-number');
    const userRating = userRatingElement.text().trim();

    
    if (userRating) {
        //get number from string
        const userRatingnum = parseInt(userRatingElement.text().trim(), 10);
        console.log(`User "${username}" has a rating of ${userRatingnum}.`);
        return userRatingnum;
    } else {
      console.log(`User "${username}" not found.`);
      return 0;
    }
  } catch (error) {
    console.error(`Error fetching rating for user "${username}":`, error.message);
    return 0;
  }
}


// const username = process.argv[2];
// fetchUserRating(username);

module.exports ={
    fetchUserRating
}