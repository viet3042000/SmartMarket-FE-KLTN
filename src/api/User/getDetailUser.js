import ApiClient from "../ApiClient";
import { v4 } from "uuid";

export default async function getDetailUser() {
    // const response = await ApiClient.post('/dev/user/user-service/v1/get-user', null, requestBody);
    const response = await ApiClient.post('http://localhost:8081/', 'user/user-service/v1/get-user', null, requestBody);
    return response.data;
}

const requestBody = {
    "requestId": v4(),
    "requestTime": Date.now(),
    "targetId": "User Service",
};