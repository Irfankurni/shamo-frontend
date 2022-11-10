export class InsertProductReq {
    id?: number
    productName!: string
    categoryId!: number
    price!: number
    description!: string
    tags!: string
    isActive?: boolean
}