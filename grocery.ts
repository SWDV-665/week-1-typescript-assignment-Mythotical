// grocery.ts

class Grocery {
    name: string;
    quantity: number;
    category: string;
  
    constructor(name: string, quantity: number, category: string) {
      this.name = name;
      this.quantity = quantity;
      this.category = category;
    }
  }
  
  const groceries: Grocery[] = [
    new Grocery('Milk', 3, 'Dairy'),
    new Grocery('Bread', 6, 'Bakery'),
    new Grocery('Eggs', 11, 'Dairy'),
  ];
  
  export { Grocery, groceries };  