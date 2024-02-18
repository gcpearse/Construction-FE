import axios from "axios"

const api = axios.create({ baseURL: "http://4.234.160.181:8080/construction/api" })

export const getBusinessInfoAxios = async () => {
  try {
    const res = await api.get("/info")
    return res.data
  } catch (error: any) {
    console.log(error)
  }
}
