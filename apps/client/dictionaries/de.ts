import { Dictionary } from "./model";

export const dictionaryDE: Dictionary = {
  cart: {
    my_order: "Meine Bestellung",
    delivery_note: "Lieferung erfolgt mit Nova Post an die angegebene Adresse",
    make_order: "Bestellung aufgeben",
    in_cart: "Im Warenkorb",
    sum: "Summe",
    product_name: "Produktname",
    quantity: "Menge",
    price: "Preis",
    payment_types: {
      card: "Kreditkarte",
      post: "Nachnahme",
    },
    form: {
      address_placeholder: "Lieferadresse & Kommentar",
      name_placeholder: "Ihr Name",
      phone_placeholder: "Ihre Telefonnummer",
      payment_method: "Zahlungsmethode",
    },
  },
  sidebar: {
    home: "Startseite",
    cart: "Mein Warenkorb",
    about: "Über uns",
    categories: "Kategorien",
  },
  header: {
    search: "Suche",
  },
  footer: {
    privacy_policy: "Datenschutz",
    terms_of_service: "Nutzungsbedingungen",
  },
  product: {
    add_to_cart: "Kaufen",
    taxes: "Alle Steuern inbegriffen",
    quantity: "Menge",
    specification: "Spezifikation",
    description: "Beschreibung",
    related_products: "Ähnliche Produkte",
    similar_products: "Ähnliche Produkte",
    features: "Eigenschaften",
    currency: "€", // Assuming Euro for Germany
  },
  search: {
    search_results: "Suchergebnisse für: ",
    no_results: "Keine Produkte für diese Suche gefunden",
  },
  auth: {
    login: "Anmelden",
    register: "Registrieren",
    back_to_login: "Zurück zur Anmeldung",
    email: "E-Mail",
    password: "Passwort",
    first_name: "Vorname",
    last_name: "Nachname",
    main_page: "Zurück zur Hauptseite",
    repeat_password: "Passwort wiederholen",
  },
  profile: {
    account: "Konto",
    save: "Speichern",
    orders_label: "Bestellverlauf anzeigen",
    orders: "Meine Bestellungen",
    logout_label: "Abmelden und alle Cache-Daten dieser Sitzung löschen",
    logout: "Abmelden",
    delete_label: "Sie können alle Ihre Daten löschen",
    delete: "Mein Konto löschen",
    irreversible_warning: "Diese Aktion kann nicht rückgängig gemacht werden",
    update_settings: "Aktualisieren Sie Ihre Kontoeinstellungen, ändern Sie Ihre E-Mail oder Ihren Namen",
  },
};
