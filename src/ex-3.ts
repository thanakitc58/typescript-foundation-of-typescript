const ordersSample = [
  {
    orderId: "ORD001",
    status: "pending",
    productName: "Laptop",
    price: 1500,
    quantity: 2,
    discount: 50,
  },
  {
    orderId: "ORD002",
    status: "shipped",
    productName: "Smartphone",
    price: 800,
    quantity: 1,
  },
  {
    orderId: "ORD003",
    status: "delivered",
    productName: "Headphones",
    price: 150,
    quantity: 1,
    discount: 100,
  },
  {
    orderId: "ORD004",
    status: "shipped",
    productName: "Monitor",
    price: 300,
    quantity: 2,
    discount: 30,
  },
  {
    orderId: "ORD005",
    status: "pending",
    productName: "Keyboard",
    price: 100,
    quantity: 5,
  },
  {
    orderId: "ORD006",
    status: "delivered",
    productName: "Mouse",
    price: 50,
    quantity: 3,
    discount: 10,
  },
  {
    orderId: "ORD007",
    status: "shipped",
    productName: "Tablet",
    price: 400,
    quantity: 1,
    discount: 20,
  },
  {
    orderId: "ORD008",
    status: "pending",
    productName: "Webcam",
    price: 120,
    quantity: 4,
    discount: 15,
  },
  {
    orderId: "ORD009",
    status: "delivered",
    productName: "Charger",
    price: 25,
    quantity: 10,
  },
  {
    orderId: "ORD010",
    status: "shipped",
    productName: "External HDD",
    price: 200,
    quantity: 1,
    discount: 50,
  },
  {
    orderId: "ORD011",
    status: "pending",
    productName: "USB Cable",
    price: 10,
    quantity: 7,
  },
  {
    orderId: "ORD012",
    status: "shipped",
    productName: "Speakers",
    price: 150,
    quantity: 2,
    discount: 25,
  },
];

//Start Coding Here
//ให้ประกาศ type ชื่อ OrderStatus ซึ่งเป็น union type ของ string literals ค่าที่เป็นไปได้คือ
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

//ให้ประกาศ type ที่ชื่อ Order ซึ่งเป็น Object โดยมี Property ดังต่อไปนี้
type Order = {
  orderId: string;
  status: OrderStatus;
  productName: string;
  price: number;
  quantity: number;
  discount?: number;
};

function  totalByStatusWithDiscount(orders:Order[] , targetStatus: OrderStatus): number {
  return orders.reduce((acc,cur)=>{
    if(cur.status === targetStatus){
      const total = cur.price*cur.quantity
      const discount = cur.discount || 0;
      return acc + (total - discount)
    }
    return acc
  },0)
}

const orders: Order[] = ordersSample as Order[];

const totalShipped = totalByStatusWithDiscount(orders, "shipped");
console.log("Total for shipped orders with discount:", totalShipped);

const totalPending = totalByStatusWithDiscount(orders, "pending");
console.log("Total for pending orders:", totalPending);

const totalDelivered = totalByStatusWithDiscount(orders, "delivered");
console.log("Total for delivered orders:", totalDelivered);

const totalCancelled = totalByStatusWithDiscount(orders, "cancelled");
console.log("Total for cancelled orders:", totalCancelled);
