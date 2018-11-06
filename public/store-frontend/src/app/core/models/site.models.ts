export class Site {
  domain: {
    name?: string;
    urls?: string;
    avatar?: string;
    color?: string;
    node_schema?: string;
    meta?: null;
    id: number;
    site?: string;
  };
  site_name: string;
  restricted: boolean;
  motivation: boolean;
  survey?: string;
  site_url: string;
  languages: string[];
  default_language: string;
  language_labels: {
    [language: string]: string;
  };
  station_type: number[];
  api_route: string;
  integrations: {
    google_map_api: string;
    clickatell: string;
    twilio_token: string;
    twilio_sid: string;
    twilio_number: string;
    particle_user: string;
  };
  file_cache?: string;
  files: {
    upload: string;
    download: string;
  };

  active: boolean;

  starting_geopoint: {
    zoom: number;
    lng: number;
    lat: number;
  };

  id: number;
}
