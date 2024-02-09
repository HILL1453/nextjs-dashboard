import Customers from "./customers";
import Dashboard from "./dashboard";
import Invoices from "./invoices";

export const PageTemplates = [
    {
        key: "Dashboard",
        component: Dashboard
    },
    {
        key: "Invoices",
        component: Invoices
    },
    {
        key: "Customers",
        component: Customers
    },
];
