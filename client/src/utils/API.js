/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all members
  getMembers: function() {
    return axios.get("api/members");
  },
  // Gets the member with the given id
  getMember: function(id) {
    return axios.get("api/members/" + id);
  },
  // Deletes the member with the given id
  deleteMember: function(id) {
    return axios.delete("api/members/" + id);
  },
  // Saves a member to the database
  saveMember: function(memberData) {
    return axios.post("api/members", memberData);
  }
};
