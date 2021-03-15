import { BillingAddress } from "./BillingAddress";

export interface User {
    username: string;
    organization: string;
    phone: string;
    billing_address: BillingAddress;
    email: string;
    applications: string;
    plan: string;
  }
  