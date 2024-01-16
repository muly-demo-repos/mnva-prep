/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SensorEventWhereInput } from "./SensorEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SensorEventOrderByInput } from "./SensorEventOrderByInput";

@ArgsType()
class SensorEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SensorEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SensorEventWhereInput, { nullable: true })
  @Type(() => SensorEventWhereInput)
  where?: SensorEventWhereInput;

  @ApiProperty({
    required: false,
    type: [SensorEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SensorEventOrderByInput], { nullable: true })
  @Type(() => SensorEventOrderByInput)
  orderBy?: Array<SensorEventOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SensorEventFindManyArgs as SensorEventFindManyArgs };