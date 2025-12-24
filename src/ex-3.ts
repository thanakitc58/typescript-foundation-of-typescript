const ordersSample: Order[] = [
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
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

interface Order {
  orderId: string;
  status: OrderStatus;
  productName: string;
  price: number;
  quantity: number;
  discount?: number;
}

function totalByStatusWithDiscount(
  orders: Order[],
  targetStatus: OrderStatus
): number {

  return orders.reduce(
    (acc, cur) =>
      cur.status === targetStatus
        ? acc + (cur.price * cur.quantity - (cur.discount ?? 0))
        : acc,0
  );
}

const order: Order[] = ordersSample;
const totalShipped = totalByStatusWithDiscount(order, "shipped");
console.log("Total for shipped orders with discount:", totalShipped);

// const totalPending = totalByStatusWithDiscount(order, "pending");
// console.log("Total for pending orders:", totalPending);

// const totalDelivered = totalByStatusWithDiscount(order, "delivered");
// console.log("Total for delivered orders:", totalDelivered);

// const totalCancelled = totalByStatusWithDiscount(order, "cancelled");
// console.log("Total for cancelled orders:", totalCancelled);
