import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-cb4e7.firebaseio.com/",
});

export default instance;
