import { UserLogin, UserResponse } from "@/types/user";

export const ConvertUser = (userResponse: UserResponse | undefined): UserLogin | undefined => {
  if(userResponse){
    const { id, username, email, firstName, lastName, gender, image } =
    userResponse;
    return { id, username, email, firstName, lastName, gender, image };
  }
  return undefined;
  
};
