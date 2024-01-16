import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type EventCreateInput = {
  device: DeviceWhereUniqueInput;
  eventType: string;
  humidity?: number | null;
  temperature?: number | null;
  timestamp: Date;
};
