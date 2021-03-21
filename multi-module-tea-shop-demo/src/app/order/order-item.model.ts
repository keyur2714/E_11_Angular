import { Item } from './item.model';

export class OrderItem{
    constructor(public id ?: number,public item?: Item,public qty ?: number){}
}