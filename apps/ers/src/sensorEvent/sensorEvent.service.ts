import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SensorEventServiceBase } from "./base/sensorEvent.service.base";

@Injectable()
export class SensorEventService extends SensorEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
