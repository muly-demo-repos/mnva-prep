import { EventCreateNestedManyWithoutDevicesInput } from "./EventCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  deviceId: string;
  deviceName: string;
  events?: EventCreateNestedManyWithoutDevicesInput;
};
