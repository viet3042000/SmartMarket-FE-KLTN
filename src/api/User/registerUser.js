import ApiClient from "../ApiClient";
import { v4 } from "uuid";

export default async function registerUser( detail ) {
    const requestBody = {
        "requestId": v4(),
        "requestTime": Date.now(),
        "targetId": "User Service",
        "detail": detail
    };

    // const API_URL_REGISTER = "http://localhost:80/user/user-service/v1/register-user";
    const response = await ApiClient.postNoToken('http://localhost:80/', '/user/user-service/v1/register-user', null, requestBody);
    return response.data;
}