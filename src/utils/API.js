import axios from "axios";

const URL = "https://randomuser.me/api/?results=300"

export default {
 
  getEmployee: function() {
    return axios.get(URL)
  },

};