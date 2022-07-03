import { data } from "./fake_data"

export const artistResolver = {
    Query: {
        artist: () => {
            return data[0]
        }
    }
}