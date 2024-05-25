import { jwtDecode } from "jwt-decode"


export const useToken = token => {

    return jwtDecode(token).id
}