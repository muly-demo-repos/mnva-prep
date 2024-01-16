import { StringFilter } from "../../util/StringFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";

export type DeviceWhereInput = {
  deviceId?: StringFilter;
  deviceName?: StringFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
};
