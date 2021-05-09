import axios from "axios";

const URL = "https://randomuser.me/api/?results=100`"

export default {
 
  getEmployee: function() {
    return axios.get(URL)
  },

};