-- CreateTable
CREATE TABLE "SensorEvent" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" TEXT NOT NULL,
    "eventData" JSONB NOT NULL,
    "eventType" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SensorEvent_pkey" PRIMARY KEY ("id")
);
