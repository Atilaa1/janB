export class Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]

    constructor(id: number,title: string,price: number,discountPercentage: number,rating: number,stock: number,brand: string,category: string,thumbnail: string,images: string[]) {
        this.id = id;
        this.title = title;
        this.price=price;
        this.discountPercentage=discountPercentage;
        this.rating=rating;
        this.stock=stock;
        this.brand=brand;
        this.category=category;
        this.thumbnail=thumbnail;
        this.images=images
    }
}
