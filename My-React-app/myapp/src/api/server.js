import axios from "axios";

// Json Server at local
export default axios.create({
  baseURL: "http://localhost:3002/",
});