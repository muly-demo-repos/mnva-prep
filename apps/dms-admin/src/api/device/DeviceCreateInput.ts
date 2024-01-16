import { EventCreateNestedManyWithoutDevicesInput } from "./EventCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  events?: EventCreateNestedManyWithoutDevicesInput;
  name?: string | null;
};
