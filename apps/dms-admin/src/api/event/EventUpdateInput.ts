import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type EventUpdateInput = {
  device?: DeviceWhereUniqueInput;
  eventType?: string;
  humidity?: number | null;
  temperature?: number | null;
  timestamp?: Date;
};
