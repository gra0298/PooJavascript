const _private = new WeakMap()

class Book{

    constructor(title,author,price){

        
        const properties={
            //this accede al objeto
            _author: author,
            _title : title,
            _price : price
            
        }

        _private.set(this,{properties});
        _private.get()

    }
    get title(){
        return _private.get(this).properties['_title'];

    }
    set title(newTitle){
        return _private.get(this).properties['_title'] = newTitle;
        
    }

    get author(){
        return _private.get(this).properties['_author'];

    }
    set author(newAuthor){
        return _private.get(this).properties['_author'] = newTitle;
        
    }

    get price(){
        return _private.get(this).properties['_price'];

    }
    set price(newPrice){
        return _private.get(this).properties['_price'] = newTitle;
        
    }

    getAllData(){
        console.log(`Titulo: ${this.title}, Autor: ${this.author},Precio:${this.price}`);
    }

     
}

//instance
let book1 = new Book('Margin',"Leonardo",250);

// book1.title = '1984';
// console.log(book1.title);

class Comic extends Book{

    constructor(title,author,price,illustrators){
        //super hace referencia a la clase padre
        super(title,author,price);

        this.illustrators=illustrators;
    }

    addIllustrators(newIllustrators = []){
        this.illustrators.push(newIllustrators);
    }

    getAllData(){
        super.getAllData();//se accede al getAllData original que pertenece al padre 
        console.log(`Ilustradores: ${this.illustrators}`);
    }

}
let comic1 = new Comic('The Killing joke','A.M',150,['pepe']);
// console.log(comic1.illustrators);

comic1.addIllustrators('chepe');
// console.log(comic1.illustrators);
class ShoppingCart{
    constructor(){
        this.products = [];
    }
    
    addProduct(amount,price){
        // ... => copia del arreglo anterior

        this.products.push(...Array(amount).fill(price));  
    }

    showProducts(){
        console.log(this.products);
    }

    calcTotal(){
        return this.products 
            .map( price => price)
            .reduce((ac,price) => ac + price, 0);
    }

    printTicket(){
        console.log(`Total a pagar ${ this.calcTotal()}`)
    }
}

let cart = new ShoppingCart();
// cart.addProduct(2,comic1.price);
// cart.addProduct(1,book1.price);
// cart.showProducts();

// cart.printTicket();

// book1.getAllData();
comic1.getAllData();
