import { EventUpdateManyWithoutDevicesInput } from "./EventUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  deviceId?: string;
  deviceName?: string;
  events?: EventUpdateManyWithoutDevicesInput;
};
