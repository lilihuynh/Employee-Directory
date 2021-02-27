import axios from "axios";

//API call to randomuser
export default {
  searchAPI: function() {
    return axios.get("https://randomuser.me/api/?results=300&nat=us");
  }
};
