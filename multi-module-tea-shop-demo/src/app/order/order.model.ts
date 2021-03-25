import { OrderItem } from "./order-item.model";

export class Order {
    constructor(public id ?: number,public orderDate ?: Date,public orderItems ?: OrderItem[],public totalItems ?: number,public totalBillAmount ?: number ){}
}