import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type EventWhereInput = {
  device?: DeviceWhereUniqueInput;
  eventType?: StringFilter;
  humidity?: FloatNullableFilter;
  id?: StringFilter;
  temperature?: FloatNullableFilter;
  timestamp?: DateTimeFilter;
};
