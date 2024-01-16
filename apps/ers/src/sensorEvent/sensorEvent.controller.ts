import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SensorEventService } from "./sensorEvent.service";
import { SensorEventControllerBase } from "./base/sensorEvent.controller.base";

@swagger.ApiTags("sensorEvents")
@common.Controller("sensorEvents")
export class SensorEventController extends SensorEventControllerBase {
  constructor(protected readonly service: SensorEventService) {
    super(service);
  }
}
