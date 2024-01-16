import { Event } from "../event/Event";

export type Device = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
