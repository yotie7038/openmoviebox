import { useUserState } from "./user";
export interface Tokens {
    accessTokens: string;
    refreshTokens: string;
}
export interface User {
    id: string;
    phone: string;
    email: string;
    verified?: boolean | null;
    dateJoined?: number;
    lastName: string;
    password: string;
    firstName: string;
}
export function getDeviceId() {
    let id = localStorage.getItem("xptk12ro")
    if (id) return id
    id = Date.now() + '' + Math.random() * (2 * Math.random()) + '' +
        '' + Math.random() * (2 * Math.random()) + '' +
        '' + Math.random() * (3 * Math.random()) + '' +
        '' + Math.random() * (4 * Math.random()) + '' +
        '' + Math.random() * (5 * Math.random()) + '' +
        '' + Math.random() * (6 * Math.random()) + '' +
        '' + Math.random() * (7 * Math.random()) + '' +
        '' + Math.random() * (8 * Math.random()) + '' +
        '' + Math.random() * (9 * Math.random());
    localStorage.setItem("xptk12ro", id);
    return id;
}
export function setVariables(data: Tokens) {
    localStorage.setItem(`${process.env.NEXT_PUBLIC_API_AKEY}`, data.accessTokens)
    localStorage.setItem(`${process.env.NEXT_PUBLIC_API_RKEY}`, data.refreshTokens)
}
export function getVariables() {
    return {
        refreshTokens: localStorage.getItem(`${process.env.NEXT_PUBLIC_API_RKEY}`) ?? '',
        accessTokens: localStorage.getItem(`${process.env.NEXT_PUBLIC_API_AKEY}`) ?? ''
    }
}
export function setUser(user: User) {
    localStorage.setItem(`${process.env.NEXT_PUBLIC_API_GUEST}`, JSON.stringify(user))
    return user
}
export function getUser() {
    try {
        const data = localStorage.getItem(`${process.env.NEXT_PUBLIC_API_GUEST}`)
        if (!data) return null
        const user = JSON.parse(data)
        if (!user) return null
        if (user.email.length > 0 && user.firstName.length > 2 && user.lastName.length > 2) {
            return user
        }
        return null

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        return null
    }
}
export function userLoggedIn() {
    try {

        const data = localStorage.getItem(`${process.env.NEXT_PUBLIC_API_GUEST}`)
        if (!data) return false
        const user = JSON.parse(data)
        if (!user) return false
        useUserState.setState(user)
        return true
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    } catch (e) {
        return false
    }
}
export function clearSavedLogss() {
    localStorage.removeItem(`${process.env.NEXT_PUBLIC_API_AKEY}`)
    localStorage.removeItem(`${process.env.NEXT_PUBLIC_API_RKEY}`)
    localStorage.removeItem(`${process.env.NEXT_PUBLIC_API_GUEST}`)
}