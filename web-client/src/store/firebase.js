import axios from 'axios'

// firebase URL
const url = 'https://saii-4c15c.firebaseio.com/Knowledge.json'

export default {
    getKnowledge: function(){
        return axios.get(url).then(response => {
            // console.log(response.data)
            return response.data
        })
    },
    postKnowledge: function(payload){
        return axios.post(url, payload).then(response => {
            // console.log(response.data)
            return response.data
        })
    },
    deleteKnowledge: function(payload){
        // payload is the json route pointing to whatever needs to be deleted
        return axios.delete(`https://saii-4c15c.firebaseio.com/Knowledge/${payload}.json`).then(response => {
            // console.log(response.data)
            return response.data
        })
    },
    changeKnowledge: function(payload){
        return axios.patch(`https://saii-4c15c.firebaseio.com/Knowledge/${payload.query}.json`, payload.body).then(response => {
            // console.log(response.data)
            return response.data
        })
    },
}
