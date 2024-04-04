import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.68.111:3333',
    timeout: 10000
})

const EVENT_ID = '9e9bd979-9d10-4915-b339-3786b1634f33'

const routesAPI = {
    registerSubscription: () => 
        `/events/${EVENT_ID}/attendees`,
    consultSubscription: (code: string) =>
        `/attendees/${code}/badge`
}

export async function RegisterSubscription( name: string, email: string) {
    const response = await api
        .post(`${routesAPI.registerSubscription()}`, { name, email })

    return response
}

export async function ConsultSubscription(code: string) {
    const response = await api
        .get(`${routesAPI.consultSubscription(code)}`)

    return response
}