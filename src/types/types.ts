export type Client = {
  id: number
  companyName: string
  cellPhone: string
  firstName: string
  lastName: string
  email: string
  orders: Array<Order>
}
export type Order = {
  id: number
  creationDate: string
  dueDate: string
  client: Client
  clientId: Client["id"]
  items: Array<Item>
}

export type Item = {
  id: number
  orderId: Order["id"]
  order: Order
  productId: Product["id"]
  product: Product
  quantity: number
}

export type Product = {
  id: number
  name: string
  price: number
}