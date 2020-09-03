// import axios from "axios"
// import dotenv from "dotenv"

// dotenv.config()
// let BASENAME
// if (process.env.NODE_ENV !== "production") {
//   BASENAME = process.env.REACT_APP_API_KEY
// }

// const path = {
//   signup: "auth/registration",
// }

function callApi(information) {
  // const {
  //   method = "",
  //   api = "",
  //   id = "",
  //   params = "",
  //   body = {},
  //   token = "",
  //   contentType = "application/json",
  // } = information

  // let data //we have two types for sending data, one is raw data (like, {}), the other is FormData
  // if (contentType === "multipart/form-data") {
  //   let formData = new FormData()
  //   Object.keys(body).forEach((key) => {
  //     formData.append(key, body[key])
  //   })
  //   formData.append("client_id", "H8Q41frxgWwbz0mlvRzYC4crtww0gcju33OWCYLL")
  //   formData.append(
  //     "client_secret",
  //     "zHoCXrvho790GpxQsqNUuH8kI42oIPnG3pLLi3S0cN86kAhr6W72vYBcXA1WZe1BMhPDfzcr0jhOTu9UcZLw25YlRgrXpX5nm8vkkgTM4IeE7MiReQivTy8BbnkjrGQN"
  //   )
  //   data = formData
  // } else {
  //   data = body
  // }

  // axios.defaults.xsrfCookieName = "csrftoken"
  // axios.defaults.xsrfHeaderName = "X-CSRFToken"

  // return axios({
  //   method,
  //   url: `${BASENAME}/${path[api]}/${id}`,
  //   data,
  //   params,
  //   headers: {
  //     "Content-Type": contentType,
  //     ...(token ? { Autorization: token } : {}),
  //   },
  // })

  return true
}

export async function apiFetch(data) {
  const res = await callApi(data)
  return res
}
