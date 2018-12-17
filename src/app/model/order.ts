export class Order {
    id: number;
    customerId: number;
    deliveryType: String;
    orderStatus: String;
    deliveryAtTemple: String;
    taxable: String;
    paymentType: String;
    pickupTime: String;
    pickupPersonName: String;
    nameOnCard: String;
    ccNumber: number;
    ccExpiryMonth: number;
    ccExpiryYear: number;
    ccCvv: number;
    comments: String;
    gratuity: String;
    discount: String; 
    deliveryDate: String;
    message: String;
    createdDate: Date;
    updatedDate: Date;
    itemDetails: Array<ItemDetails>;
    
    constructor(id?: number, customerId?: number, 
        deliveryType?: string, orderStatus?: string, 
        deliveryAtTemple?: string , taxable?: string, 
        paymentType?: string, pickupTime?: string,
        pickupPersonName?: String, comments?: String, 
        nameOnCard?: String, ccNumber?: number,
        ccExpiryMonth?: number, ccExpiryYear?: number, ccCvv?: number,
        gratuity?: String, discount?: String, deliveryDate?: String, message?: String,
        createdDate?: Date, updatedDate?: Date, item?: Array<ItemDetails>) 
        { }
}
export class ItemDetails {
    itemId: number;
    quantity: number;
    price: number;
}