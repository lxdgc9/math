import IUser from "../../models/entities/IUser";

type MeRequest = { id: string };
type LoginRequest = IUser;

export { MeRequest, LoginRequest };
