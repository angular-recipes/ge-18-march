import { Item } from './item';

export class Cart {
    items: Item[];
    totalPrice: number;

    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(name: string, price: number) {
        let item = new Item(name, 1, price);
        this.items.push(item);
    }

    findItemByName(name: string) {
        return this.items.find(i => i.name == name);
    }

    getTotalItems() : number {
        return this.items.reduce((res, i) => res + i.qty, 0);
    }

}
