import { Dictionary } from "./model";

export const dictionaryEN: Dictionary = {
  cart: {
    my_order: "My order",
    // delivery_note: "Delivery is proceeded with Nova Post services to written in form address",
    delivery_note: "You will be contacted by a manager to clarify the details, delivery method and payment",
    make_order: "Make order",
    in_cart: "In cart",
    sum: "Sum",
    product_name: "Product name",
    quantity: "Q-ty",
    price: "Price",
    payment_types: {
      card: "Credit card",
      post: "Via post service",
    },
    form: {
      address_placeholder: "Delivery address & comment",
      name_placeholder: "Your name",
      phone_placeholder: "Your phone",
      payment_method: "Payment method",
    },
  },
  sidebar: {
    home: "Home page",
    cart: "My cart",
    about: "About page",
    categories: "Categories",
  },
  header: {
    search: "Search",
  },
  footer: {
    privacy_policy: "Privacy policy",
    terms_of_service: "Terms of service",
  },
  product: {
    add_to_cart: "Buy",
    taxes: "Inclusive all Taxes",
    quantity: "Q-ty",
    specification: "Color",
    description: "Description",
    related_products: "Related products",
    similar_products: "Similar products",
    features: "Features",
    currency: "$",
  },
  search: {
    search_results: "Search results for: ",
    no_results: "No products found for this search",
  },
  auth: {
    login: "Login",
    register: "register",
    back_to_login: "Back to login",
    email: "Email",
    password: "Password",
    first_name: "First Name",
    last_name: "Last Name",
    main_page: "Back to main page",
    repeat_password: "Repeat Password",
  },
  profile: {
    account: "Account",
    save: "Save",
    orders_label: "Check my orders history",
    orders: "My Orders",
    logout_label: "Log out and remove all my cache from this session",
    logout: "Logout",
    delete_label: "You can delete all data about you",
    delete: "Delete my account",
    irreversible_warning: "This action is irreversible",
    update_settings: "Update your account settings, change your mail or name",
  },
  order: {
    order: "Order",
    customer: "Customer",
    status: "Status",
    phone_number: "Phone number",
    name: "Name",
    price: "Price",
    quantity: "Quantity",
    discount: "Discount",
    remark: "Remark",
    time: "Time",
    total: "Total",
    orders: "Orders",
    order_id: "Order ID",
    check: "Check",
    date: "Date",
  },
};
