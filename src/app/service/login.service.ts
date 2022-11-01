import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "./base-url"
import { LoginReq, LoginRes } from "../dto"

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient){}

    login(data: LoginReq): Observable<LoginRes>{
        return this.http.post<LoginRes>(`${BASE_URL}/login`, data)
    }

    saveData(data: LoginRes): void {
        localStorage.setItem('data', JSON.stringify(data))
    }

    getData(): LoginRes | null {
        const data = localStorage.getItem('data')
        if(data){
            return JSON.parse(data)
        }
        return null
    }

    getToken(): string | null {
        const data = this.getData()?.data.token
        if(data){
            return data
        }
        return null
    }

    getRole(): string | null {
        const data = this.getData()?.data.roleType
        if(data){
            return data
        }
        return null
    }

}