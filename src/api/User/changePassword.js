import ApiClient from "../ApiClient";
import { v4 } from "uuid";

export default async function changePassword({ currentPassword, newPassword }) {
    const requestBody = {
        "requestId": v4(),
        "requestTime": Date.now(),
        "targetId": "User Service",
        "detail": {
            "oldPassword": currentPassword,
            "newPassword": newPassword
        }
    };

    // const response = await ApiClient.post('/dev/user/user-service/v1/change-password', null, requestBody);
    const response = await ApiClient.post('http://localhost:8081/', '/user/user-service/v1/change-password', null, requestBody);
    return response.data;
}