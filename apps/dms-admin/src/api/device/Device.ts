import { Event } from "../event/Event";

export type Device = {
  createdAt: Date;
  deviceId: string;
  deviceName: string;
  events?: Array<Event>;
  id: string;
  updatedAt: Date;
};
