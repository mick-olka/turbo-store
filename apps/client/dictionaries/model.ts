export type Dictionary = {
  cart: {
    my_order: string;
    in_cart: string;
    make_order: string;
    delivery_note: string;
    form: {
      payment_method: string;
      address_placeholder: string;
      phone_placeholder: string;
      name_placeholder: string;
    };
  };
  header: {
    search: string;
  };
  footer: {
    privacy_policy: string;
    terms_of_service: string;
  };
  sidebar: {
    home: string;
    cart: string;
    about: string;
    categories: string;
  };
  product: {
    add_to_cart: string;
    taxes: string;
    quantity: string;
    specification: string;
    description: string;
  };
  search: {
    search_results: string;
    no_results: string;
  };
  auth: {
    login: string;
    register: string;
    main_page: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    repeat_password: string;
    back_to_login: string;
  };
};
