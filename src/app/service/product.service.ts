import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes, UpdateRes } from "../dto";
import { FindAllProductRes, InsertProductReq } from "../dto/product";
import { BASE_URL } from "./base-url";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    constructor(private http: HttpClient){}

    findAll(): Observable<FindAllProductRes>{
        return this.http.get<FindAllProductRes>(`${BASE_URL}/products`);
    }

    insert(data: InsertProductReq): Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/products`, data)
    }

    update(data: InsertProductReq): Observable<UpdateRes>{
        return this.http.put<UpdateRes>(`${BASE_URL}/products`, data)
    }
}