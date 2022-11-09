import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes } from "../dto";
import { FindAllProductGalleryRes } from "../dto/product-gallery/find-all-gallery-res";
import { InsertProductGalleryReq } from "../dto/product-gallery/gallery-req";
import { BASE_URL } from "./base-url";

@Injectable({
    providedIn: "root"
})
export class ProductGallerService {

    constructor(private http: HttpClient){}

    insert(data: InsertProductGalleryReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/galleries`, data)
    }

    findAllByProduct(productId: number): Observable<FindAllProductGalleryRes> {
        return this.http.get<FindAllProductGalleryRes>(`${BASE_URL}/galleries/${productId}`)
    }

}