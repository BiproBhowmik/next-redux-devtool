import { get, post } from "../Helper/axios";

export async function loginUser(userData: object) {
    const res = await post("/auth/login", userData)
    if (res.status == 200) {
        return res.data;
    }
    return false;
}

export async function getAuthUserData() {
    const res = await get("/auth/getUser")
    if (res.status == 200) {
        return res.data;
    }
    return false;
}
export async function logoutAuthUserData() {
    const res = await get("/auth/logout")
    if (res.status == 200) {
        return res.data;
    }
    return false;
}