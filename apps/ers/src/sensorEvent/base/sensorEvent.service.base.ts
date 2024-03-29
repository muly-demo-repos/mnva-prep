/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SensorEvent } from "@prisma/client";

export class SensorEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SensorEventCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SensorEventCountArgs>
  ): Promise<number> {
    return this.prisma.sensorEvent.count(args);
  }

  async sensorEvents<T extends Prisma.SensorEventFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SensorEventFindManyArgs>
  ): Promise<SensorEvent[]> {
    return this.prisma.sensorEvent.findMany(args);
  }
  async sensorEvent<T extends Prisma.SensorEventFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SensorEventFindUniqueArgs>
  ): Promise<SensorEvent | null> {
    return this.prisma.sensorEvent.findUnique(args);
  }
  async createSensorEvent<T extends Prisma.SensorEventCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SensorEventCreateArgs>
  ): Promise<SensorEvent> {
    return this.prisma.sensorEvent.create<T>(args);
  }
  async updateSensorEvent<T extends Prisma.SensorEventUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SensorEventUpdateArgs>
  ): Promise<SensorEvent> {
    return this.prisma.sensorEvent.update<T>(args);
  }
  async deleteSensorEvent<T extends Prisma.SensorEventDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SensorEventDeleteArgs>
  ): Promise<SensorEvent> {
    return this.prisma.sensorEvent.delete(args);
  }
}
