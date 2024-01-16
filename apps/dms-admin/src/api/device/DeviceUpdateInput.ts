import { EventUpdateManyWithoutDevicesInput } from "./EventUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  events?: EventUpdateManyWithoutDevicesInput;
  name?: string | null;
};
