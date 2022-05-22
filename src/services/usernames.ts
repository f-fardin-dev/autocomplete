import axios from "axios";
import { User } from "types";

const get = () => axios.get<User[]>("https://jsonplaceholder.typicode.com/users");

export const usernameApi = { get };
