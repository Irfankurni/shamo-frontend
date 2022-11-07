import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindAllProductRes } from "../dto/product";
import { BASE_URL } from "./base-url";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    constructor(private http: HttpClient){}

    findAll(): Observable<FindAllProductRes>{
        return this.http.get<FindAllProductRes>(`${BASE_URL}/products`);
    }
}