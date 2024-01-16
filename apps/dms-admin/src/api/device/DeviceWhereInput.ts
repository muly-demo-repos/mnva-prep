import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeviceWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
