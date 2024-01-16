import { Module } from "@nestjs/common";
import { SensorEventModuleBase } from "./base/sensorEvent.module.base";
import { SensorEventService } from "./sensorEvent.service";
import { SensorEventController } from "./sensorEvent.controller";

@Module({
  imports: [SensorEventModuleBase],
  controllers: [SensorEventController],
  providers: [SensorEventService],
  exports: [SensorEventService],
})
export class SensorEventModule {}
