import { NodeSchema } from "./nodeschema.model";
import { Theme } from "./station-type.model";

export class ReportingPeriod {
  themes: any[];
  nodeschema: NodeSchema[];
  surveypool: any;
  survey_template: any;
  domain: any;
  name: string;
  color: string;
  instantiate: boolean;
  instantiated: boolean;
  active: boolean;
  avatar: any;
  active_surveys: any;
  state_tracker: any;
  progress_tracker: any;
  sent_back: any;
  meta: any;
  id: number;
  stationschema: Theme[];
}
