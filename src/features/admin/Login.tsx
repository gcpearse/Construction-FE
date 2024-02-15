import { SubmitHandler, useForm } from "react-hook-form"
import { useLoginMutation } from "../../features/api/apiSlice"
import { LoginRequest, LoginResponse, ValidationError } from "../../models"
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { setCredentials } from "./authSlice"
import { useCookies } from "react-cookie"
import { RiAdminFill } from "react-icons/ri"

type FormValues = {
  name: string
  password: string
}

const Login: React.FC = () => {

  const dispatch = useAppDispatch()

  const setCookie = useCookies(["token"])[1]

  const [errorMsg, setErrorMsg] = useState<string>("")

  const {
    register,
    handleSubmit
  } = useForm<FormValues>()

  const [login] = useLoginMutation()

  const submitForm: SubmitHandler<FormValues> = async (request: LoginRequest) => {
    try {
      const response: LoginResponse = await login(request).unwrap()
      dispatch(setCredentials(response))
      setCookie("token", response.token, { maxAge: 3600, sameSite: "strict" })
      localStorage.setItem("name", response.name)
      localStorage.setItem("role", response.role)
      setErrorMsg("")
    } catch (error: any) {
      const validationError = error as ValidationError
      if (validationError) {
        setErrorMsg(`${error.data}.`)
      } else {
        setErrorMsg("Something went wrong.")
      }
    }
  }

  return (
    <div className="login-wrapper">

      <h2>Admin Portal&nbsp;<RiAdminFill /></h2>

      <form
        className="login-form"
        onSubmit={handleSubmit(submitForm)}
      >

        <input
          type="text"
          id="admin-name-input"
          autoComplete="true"
          placeholder="Admin name"
          required
          {...register("name", { required: true })}
          onFocus={() => setErrorMsg("")}
        />

        <input
          type="text"
          id="admin-password-input"
          placeholder="Password"
          required
          {...register("password", { required: true })}
          onFocus={() => setErrorMsg("")}
        />

        {errorMsg ? <p>{errorMsg}</p> : null}

        <button type="submit">
          Log in
        </button>

      </form>

    </div>
  )
}

export default Login
