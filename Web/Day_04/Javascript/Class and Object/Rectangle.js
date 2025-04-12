class Rectangle{
    constructor(length,breadth,color){
        this.length = length;
        this.breadth = breadth;
        this.color = color;
    }

    Area(){
        let area = this.length * this.breadth;
        return area;
    }

    Color(){
        console.log("Color of rectangle is ", this.color);
    }
}

const r1 = new Rectangle(5,10,"Red");
let area = r1.Area();
console.log("The area of rectangle is ", area);
r1.Color();
