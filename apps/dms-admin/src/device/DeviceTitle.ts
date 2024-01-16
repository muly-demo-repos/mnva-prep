import { Device as TDevice } from "../api/device/Device";

export const DEVICE_TITLE_FIELD = "name";

export const DeviceTitle = (record: TDevice): string => {
  return record.name?.toString() || String(record.id);
};
