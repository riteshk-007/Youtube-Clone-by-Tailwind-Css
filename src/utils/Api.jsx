import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "in",
  },
  headers: {
    "X-RapidAPI-Key": "3fdc9026a0msh194d2caecb4d815p1b3570jsnf7330d991a2a",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
