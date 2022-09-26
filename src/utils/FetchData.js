export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "033959c211msh4724ece1e21784dp15eeadjsnfc074dae0576",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
