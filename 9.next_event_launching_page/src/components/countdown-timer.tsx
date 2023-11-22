import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { useState, useEffect } from "react"
import { type Framework } from "@/utils/framework-utils";
import TimeUnit from "./time-units";

export const CountdownTimer = ({ currentFramework }: { currentFramework: Framework }) => {
   const [countdown, setCountdown] = useState(calculateTimeToEvent())
   // console.table(countdown)

   useEffect(() => {
      const intervalId = setInterval(() => setCountdown(calculateTimeToEvent()), 1000)
      return () => {
         clearInterval(intervalId)
      }
   }, [])
   return (
      <div className={"text-center flex gap-[10px]"}>
         <TimeUnit
            label="DAYS"
            value={countdown.days}
            currentFramework={currentFramework}
         />
         <TimeUnit
            label="HOURS"
            value={countdown.hours}
            currentFramework={currentFramework}
         />
         <TimeUnit
            label="MINUTES"
            value={countdown.minutes}
            currentFramework={currentFramework}
         />
         <TimeUnit
            label="SECONDS"
            value={countdown.seconds}
            currentFramework={currentFramework}
         />
      </div>
   );
}