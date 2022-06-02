import { LoginProps } from "../../interfaces/auth.interface";
import useUserStore from "../../stores/userStore";
import client from "../baseApi";

export class AdminAuthApi {
    static async login(data : LoginProps) {
        try{
            let request = await client.post("/auth/login", data);
        if(request.status == 200){
            return request.data.token
        }
        }catch(e){
            console.log(e)
        }
    }

    static async logout() {
        const changeUser = useUserStore((state) => state.changeUser);
        changeUser("");
    }

    static async refresh(){
        try{
            let request = await client.get("/auth/refresh");
            return request.data;
        }
        catch(e){
            console.log(e)
        }
    }
}