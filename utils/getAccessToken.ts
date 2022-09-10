import axios from "axios"

const ENDPOINT = `${process.env.RD_ENDPOINT}/auth/token`

const BODY = {
    "client_id": process.env.RD_CLIENT_ID,
    "client_secret": process.env.RD_CLIENT_SECRET,
    "refresh_token": process.env.RD_REFRESH_TOKEN
}

export async function getAccessToken(): Promise<string> {

    const response = await axios.post(ENDPOINT, BODY)

    return response.data.access_token
}