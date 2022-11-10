import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes, InsertRes, UpdateRes } from "../dto";
import { FindAllProductCategoryRes, InsertProductCategoryReq } from "../dto/product-category";
import { BASE_URL } from "./base-url";

@Injectable({
    providedIn: "root"
})
export class ProductCategoryService {
    constructor(private http: HttpClient){}

    findAll(): Observable<FindAllProductCategoryRes> {
        return this.http.get<FindAllProductCategoryRes>(`${BASE_URL}/product-categories`)
    }

    insert(data: InsertProductCategoryReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/product-categories`, data)
    }

    update(data: InsertProductCategoryReq): Observable<UpdateRes> {
        return this.http.put<UpdateRes>(`${BASE_URL}/product-categories`, data)
    }

    delete(id: number): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/product-categories/${id}`)
    }
}