import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv"
dotenv.config();
//create a rate limit that creates 10 request per 20 seconds..
const ratelimit = new Ratelimit({
  redis: Redis,
  limiter: Ratelimit.fixedWindow(10, "20 s"), // ✅ Uses fixed window method to prevent permission issues
});
  
export default ratelimit;