

export class CompanyUser {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public phone: number,
        public cities: string,
        public locations: any[],
        public fax: number,
        public tax: number,
        public description: string
    ){ }
}
