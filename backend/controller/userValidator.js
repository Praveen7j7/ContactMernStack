import { z } from "zod";

const userValidator = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),  
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
 
});
export default userValidator