import { Module } from "@nestjs/common";
import { SensorEventModuleBase } from "./base/sensorEvent.module.base";
import { SensorEventService } from "./sensorEvent.service";
import { SensorEventController } from "./sensorEvent.controller";
import { KafkaModule } from "../kafka/kafka.module";

@Module({
  imports: [SensorEventModuleBase, KafkaModule],
  controllers: [SensorEventController],
  providers: [SensorEventService],
  exports: [SensorEventService],
})
export class SensorEventModule {}
