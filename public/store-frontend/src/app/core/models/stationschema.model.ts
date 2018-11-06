import { Indicator } from "./nodeschema.model";
import { Domain } from "./domain.model";

export class StationSchema {
  nodes: Indicator[];
  modules: any[];
  station_id: any;
  domain: Domain;
  name: string;
  color: string;
  icon: string;
  margin: number;
  schema: any[];
  theme: boolean;
  station_url: string;
  weight: number;
  active: boolean;
  public_site: boolean;
  geo_type: string;
  meta: any;
  id: number;
  createdAt: string;
  updatedAt: string;
}
