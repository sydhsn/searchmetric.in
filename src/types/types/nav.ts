export interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
