import { Global, Module } from "@nestjs/common";
import { ClientProxyFactory } from "@nestjs/microservices";
import { generateKafkaClientOptions } from "./generateKafkaClientOptions";
import { KafkaProducerService } from "./kafka.producer.service";
import { KafkaController } from "./kafka.controller";
import { ConfigService } from "@nestjs/config";
import { DeviceModule } from "src/device/device.module";
import { EventModule } from "src/event/event.module";

@Global()
@Module({
  imports: [DeviceModule, EventModule],
  providers: [
    {
      provide: "KAFKA_CLIENT",
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(
          generateKafkaClientOptions(configService)
        );
      },
      inject: [ConfigService],
    },
    KafkaProducerService,
  ],
  controllers: [KafkaController],
  exports: [KafkaProducerService],
})
export class KafkaModule {}
