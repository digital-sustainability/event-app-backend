export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    street: string;
    city: string;
    zip_code: number;
    firm?: string;
    phone?: string;
    linked_in_url?: string;
    projects: any[];
}
