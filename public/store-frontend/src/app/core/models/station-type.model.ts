export class StationType {
  name?: string;
  color?: string;
  icon?: string;
  margin?: string;
  schema?: any[];
  theme?: boolean;
  station_url?: string;
  weight?: number;
  active?: boolean;
  public_site?: boolean;
  geo_type?: string;
  meta?: any;
  id?: number;
  station_id?: number;
  theme_parent?: number;
  domain?: number;

  constructor(
    options: {
      name?: string;
      color?: string;
      icon?: string;
      margin?: string;
      schema?: any[];
      theme?: boolean;
      station_url?: string;
      weight?: number;
      active?: boolean;
      public_site?: boolean;
      geo_type?: string;
      meta?: any;
      id?: number;
      station_id?: number;
      theme_parent?: number;
      domain?: number;
    } = {}
  ) {
    this.name = options.name;
    this.color = options.color;
    this.icon = options.icon;
    this.margin = options.margin;
    this.schema = options.schema;
    this.theme = options.theme;
    this.station_url = options.station_url;
    this.weight = options.weight;
    this.active = options.active;
    this.public_site = options.public_site;
    this.geo_type = options.geo_type;
    this.meta = options.meta;
    this.id = options.id;
    this.station_id = options.station_id;
    this.theme_parent = options.theme_parent;
    this.domain = options.domain;
  }
}

export class Theme extends StationType {
  constructor(options: {} = {}) {
    super(options);
  }
}
