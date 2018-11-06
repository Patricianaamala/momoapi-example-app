import { StationType } from "./station-type.model";
import { Tag } from "./tag.model";
export class Station {
  tags: Tag[];
  files: any[];
  station_state: any;
  station_type: StationType;
  station_id: string;
  local_name: string;
  code: any;
  parents: any;
  archived: boolean;
  schema: any;
  alerts: any;
  meta: any;
  id: number;
}

export class Theme extends Station {}
