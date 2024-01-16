/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EventUpdateManyWithoutDevicesInput } from "./EventUpdateManyWithoutDevicesInput";
import { Type } from "class-transformer";

@InputType()
class DeviceUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deviceId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deviceName?: string;

  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutDevicesInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutDevicesInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutDevicesInput, {
    nullable: true,
  })
  events?: EventUpdateManyWithoutDevicesInput;
}

export { DeviceUpdateInput as DeviceUpdateInput };
