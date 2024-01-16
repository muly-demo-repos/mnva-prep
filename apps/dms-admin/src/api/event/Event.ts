import { Device } from "../device/Device";

export type Event = {
  createdAt: Date;
  device?: Device;
  eventType: string;
  humidity: number | null;
  id: string;
  temperature: number | null;
  timestamp: Date;
  updatedAt: Date;
};
