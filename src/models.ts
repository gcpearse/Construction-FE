export type job = {
  "job_Id": number,
  "title": string,
  "tagline": string,
  "description": string,
  "job_Type": string,
  "date": string,
  "client": string,
  "location": string
}

export type jobType = {
  "name": string,
  "description": string,
  "image": string,
  "icon": string
}

export type personalInfo = {
  "info_id": number,
	"name": string,
	"email": string,
	"phone": string,
	"address": string,
	"city": string,
	"info": string,
	"logo": string,
	"facebook": string,
	"instagram": string,
	"youtube": string,
	"tiktok": string,
	"linkedin": string
}
