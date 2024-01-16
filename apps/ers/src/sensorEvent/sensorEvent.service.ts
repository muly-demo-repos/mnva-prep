import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SensorEventServiceBase } from "./base/sensorEvent.service.base";
import { KafkaProducerService } from "..//kafka/kafka.producer.service";
import { Prisma, SensorEvent } from "@prisma/client";
import { SensorEventsBrokerTopics } from "../kafka/topics";

@Injectable()
export class SensorEventService extends SensorEventServiceBase {
  constructor(protected readonly prisma: PrismaService, protected kafka : KafkaProducerService) {
    super(prisma);
  }

  async createSensorEvent<T extends Prisma.SensorEventCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SensorEventCreateArgs>
  ): Promise<SensorEvent> {
    const newEvent = await super.createSensorEvent(args);
    const {deviceId, timestamp, eventType, eventData} = newEvent;
    await this.kafka.emitMessage(SensorEventsBrokerTopics.TopicSensorDataReceived, {key: deviceId, value: {deviceId, timestamp, eventType, eventData}});
    return newEvent;
  }
}
