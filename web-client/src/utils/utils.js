export default {
    createListfromObj: function(obj){
        const list = []
        for(let prop in obj){
            const knwoledgeObj = obj[prop]
            knwoledgeObj.id = prop
            list.push(knwoledgeObj)
        }
        return list
    }
}
