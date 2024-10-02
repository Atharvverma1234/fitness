//utils ==> short for utility functions

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-Key': '5108de6672msh54d55d15ecdcc1ap19532djsn0791c69b298b',
      'x-rapidapi-Host': 'exercisedb.p.rapidapi.com',
    }
  };

export const fetchData = async (url,options) =>
{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;

    

}