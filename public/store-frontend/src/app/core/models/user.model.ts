import { Tag } from "./tag.model";
import { Domain } from "./domain.model";

export class User {
  name: string;
  id: number;
  domains: any[];
  badges: any[];
  tags: Tag[];
  last_domain: Domain;
  username: string;
  email: string;
  phone: string;
  title: string;
  first_name: string;
  last_name: string;
  role: number;
  site_role: number;
  preferred_language: string;
  online: boolean;
  active: boolean;
  archive: boolean;
  avatar: string;
  sounds: boolean;
  meta: any;
}
