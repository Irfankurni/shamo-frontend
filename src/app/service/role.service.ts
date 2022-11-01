import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes, InsertRes, UpdateRes } from "../dto";
import { FindAllRolesRes, FindByIdRoleRes, InsertRoleReq, UpdateRoleReq } from "../dto/role";
import { BASE_URL } from "./base-url";

@Injectable({
    providedIn: "root"
})
export class RoleService {
    constructor(private http: HttpClient) { }

    findAll(): Observable<FindAllRolesRes> {
        return this.http.get<FindAllRolesRes>(`${BASE_URL}/roles`)
    }

    findById(id: number): Observable<FindByIdRoleRes> {
        return this.http.get<FindByIdRoleRes>(`${BASE_URL}/roles/${id}`)
    }

    insert(data: InsertRoleReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/roles`, data)
    }

    update(data: UpdateRoleReq): Observable<UpdateRes> {
        return this.http.put<UpdateRes>(`${BASE_URL}/roles`, data)
    }

    delete(id: number): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/roles/${id}`)
    }
}