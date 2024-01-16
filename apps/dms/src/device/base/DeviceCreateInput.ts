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
import { EventCreateNestedManyWithoutDevicesInput } from "./EventCreateNestedManyWithoutDevicesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DeviceCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutDevicesInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutDevicesInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutDevicesInput, {
    nullable: true,
  })
  events?: EventCreateNestedManyWithoutDevicesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { DeviceCreateInput as DeviceCreateInput };
