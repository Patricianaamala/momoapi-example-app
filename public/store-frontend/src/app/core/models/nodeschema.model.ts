export class NodeSchema {
  domain?: string;
  name: string;
  mappings?: any;
  requires_approval: boolean;
  survey: boolean;
  domain_schema?: any;
  weight?: number;
  schema: any[];
  color: string;
  has_point: boolean;
  has_early_warning: boolean;
  has_files: boolean;
  full_screeen_enabled: boolean;
  disable_reporting: boolean;
  is_global: boolean;
  is_asset: boolean;
  fullscreen?: any;
  parents?: any;
  derivative?: any;
  socket_name?: any;
  derivative_statement?: any;
  title?: string;
  meta: any;
  id: number;

  constructor(
    options: {
      domain?: string;
      name?: string;
      mappings?: any;
      requires_approval?: boolean;
      survey?: boolean;
      domain_schema?: any;
      weight?: number;
      schema?: any[];
      color?: string;
      has_point?: boolean;
      has_early_warning?: boolean;
      has_files?: boolean;
      full_screeen_enabled?: boolean;
      disable_reporting?: boolean;
      is_global?: boolean;
      is_asset?: boolean;
      fullscreen?: any;
      parents?: any;
      derivative?: any;
      socket_name?: any;
      derivative_statement?: any;
      title?: string;
      meta?: any;
      id?: number;
    } = {}
  ) {
    this.domain = options.domain;
    this.name = options.name;
    this.mappings = options.mappings;
    this.requires_approval = options.requires_approval;
    this.survey = options.survey;
    this.domain_schema = options.domain_schema;
    this.weight = options.weight;
    this.schema = options.schema;
    this.color = options.color;
    this.has_point = options.has_point;
    this.has_early_warning = options.has_early_warning;
    this.has_files = options.has_files;
    this.full_screeen_enabled = options.full_screeen_enabled;
    this.disable_reporting = options.disable_reporting;
    this.is_global = options.is_global;
    this.is_asset = options.is_asset;
    this.fullscreen = options.fullscreen;
    this.parents = options.parents;
    this.derivative = options.derivative;
    this.socket_name = options.socket_name;
    this.derivative_statement = options.derivative_statement;
    this.title = options.title;
    this.meta = options.meta;
    this.id = options.id;
  }
}

export class Indicator extends NodeSchema {
  constructor(options: {} = {}) {
    super(options);
  }
}
