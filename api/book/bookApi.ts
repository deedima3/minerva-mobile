import client from "../baseApi";

export default{
    async getDetailBook(id: string, user : string){
        return (await client.post(`/admin/detail-book`, { idBook : parseInt(id) }, {headers : {
            "Authorization" : `Bearer ${user}`
        }})).data.data;
    },

    async getAllBook(user : string){
        return (await client.get(`/admin/all-book`, {headers : {
            "Authorization" : `Bearer ${user}`
        }})).data.data;
    },

    async getAllCategory(){
        return (await client.get(`/admin/all-category`)).data.data;
    },

}