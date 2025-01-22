export type User = {
    id: number
    name: string
    username: string
    email: string
    address: UserAddress
    phone: string
    website: string
    company: Company
}

export type UserAddress = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export type Geo = {
    lat: string
    lng: string
}

export type Company = {
    name: string
    catchPhrase: string
    bs: string
}

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export type Comments = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}