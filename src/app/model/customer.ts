export class Customer {
    id: number;
    lastName: String;
    firstName: String;
    phone: String;
    otherPhone: String;
    email: String;
    emailVerify: String;
    streetName: String;
    cityName: String;
    stateCode: String;
    zipCode: String;
    passCode: String;
    status: String;
    createdDate: Date;
    updatedDate: Date;
    
    constructor(id?: number, lastName?: string, firstName?: string, phone?: string, otherPhone?: string, email?: string, emailVerify?: string, streetName?: string , cityName?: string, stateCode?: string, zipCode?: string,passCode?: String, status?: String, createdDate?: Date, updatedDate?: Date) { 
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.otherPhone = otherPhone;
		this.email = email;
		this.emailVerify = emailVerify;
		this.streetName = streetName;
		this.cityName = cityName;
		this.stateCode = stateCode;
		this.zipCode = zipCode;
		this.passCode = passCode;
		this.status = status;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
	}
}
