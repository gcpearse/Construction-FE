export type Job = {
  job_Id: number
  title: string
  tagline: string
  description: string
  job_Type: string
  date: string
  client: string
  location: string
}

export type JobRequest = {
  title: string
  tagline: string
  description: string
  job_Type: string
  client: string
  location: string
}

export type Service = {
  name: string
  description: string
  image: string
  icon: string
}

export type BusinessInfo = {
  info_id?: number
	name: string
	email: string
	phone: string
	address: string
	city: string
	info: string
	logo: string
	facebook: string
	instagram: string
	youtube: string
	tiktok: string
	linkedin: string
}

export type LoginRequest = {
  name: string
  password: string
}

export type LoginResponse = {
  name: string
  token: string
  role: string
}

export type User = {
  name: string
  role: string
}

export type ValidationError = {
  data: string
  error: string
  originalStatus: number
  status: string
}
