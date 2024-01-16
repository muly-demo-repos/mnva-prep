import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from "@nestjs/microservices";
import { Controller } from "@nestjs/common";
import { DeviceService } from "src/device/device.service";
import { EventService } from "src/event/event.service";
import { Decimal } from "@prisma/client/runtime/library";

class KafkaMessageValue {
  constructor() {
    this.deviceId = "";
    this.timestamp = new Date();
    this.eventType = "";
    this.eventData = {humidity: -1.0, temperature: -1.0};
  }
  deviceId: string;
  timestamp: Date;
  eventType: string;
  eventData: {humidity: number, temperature: number}; 
}

@Controller("kafka-controller")
export class KafkaController {
  constructor(protected deviceService: DeviceService, protected eventService: EventService) {
  }

  @EventPattern("topic.sensor.data.received")
  async onTopicSensorDataReceived(
    @Payload()
    value: string | Record<string, any> | null,
    @Ctx()
    context: KafkaContext
  ): Promise<void> {
    const messageValue : KafkaMessageValue = value as KafkaMessageValue;

    let existingDevice = await this.deviceService.device({where: { deviceId: messageValue.deviceId }});
    if (!existingDevice) {
        console.log("creating a new device");
        existingDevice = await this.deviceService.createDevice({data: {deviceId: messageValue.deviceId, deviceName: messageValue.deviceId }});
    }
    console.log("existing device: ", existingDevice);

    const newEvent = await this.eventService.createEvent({data: {eventType: messageValue.eventType, humidity: messageValue.eventData.humidity, 
                                                            temperature: messageValue.eventData.temperature, timestamp: messageValue.timestamp,
                                                            deviceId: existingDevice.id}});
    console.log("new event: ", newEvent);
  }
}
