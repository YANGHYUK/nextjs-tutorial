import React, { useEffect } from "react"
import Axios from "axios"
import { useRouter } from "next/router"
export default function SSRTest(props) {
  console.log({ props })
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    // 잠시 이 창이 뜨게 된다. 그리고 나서 에러 페이지로 바뀜.
    return <div>Loading...</div>
  }

  const { users } = props

  let userList

  if (users) {
    userList = users.map((user) => <li key={user.id}>{user.username}</li>)
  }
  return (
    <>
      {/* <div>{props.from} 에서 실행이 되었어요~!</div> */}
      <div>{userList}</div>
    </>
  )
}

//getStaticProps
// export async function getStaticProps() {
//   //빌드 타임 때 정적인 페이지를 생성 => page에서만 사용할 수 있으며, build 할 때, getStaticProps로 리턴한 props를 기반으로 page를 미리 렌더링 해놓는다. 따라서 빠르게 페이지를 띄워준다
//   // 데이터가 빌드 타임에 페이지에 사용되어야 할 때(사용자의 요청을 받지 않고)
//   // headless한 cms로부터 데이터가 올 때.
//   // 유저와 상관 없이 퍼블릭한 data를 캐쉬할 수 있는 데이터
//   // SEO 등의 이슈로 인해 빠르게 미리 렌더링 해야만 하는 페이지. getStaticProps는 HTML과 JSON파일을 모두 생성해 두기 때문에, 성능을 향상시키기 위해 CDN 캐시를 하기 쉽다.
//   const response = await Axios.get("https://jsonplaceholder.typicode.com/users")

//   return { props: { users: response.data } }
// }

// getStaticPaths
// export async function getStaticPaths() {
//   return {
//     paths: [
//       // {params:{...props}}
//     ],
//     fallback: true, // or false See the "fallback" section below

//     // paths키는 paths가 미리 렌더링 될때 결정된다. 예를 들어 `pages/posts/[id].js` 같이 dynamic routes를 설정해놓았으면 getStaticPaths에는 다음과 같이 리턴해야한다.
//     // return {
//     //   paths: [
//     //     { params: { id: '1' } },
//     //     { params: { id: '2' } }
//     //   ],
//     //   fallback: ...
//     // }
//     // params는 다음과 같이 작성되어야한다.
//     // 만약 pages/posts/[postId]/[commentId] 라면 params에는 postId 와 commentId가 포함 되어야한다.
//     // 만약 페이지이름이 여러 라우트에 매칭이 되기를 원한다면 예를 들어 pages/[...slug] 같이..
//     // 그러면 params는 slug라는 배열을 순서대로 포함된것에 매칭된다. 예를들어 array가 ['foo','bar']이라면 Next는 /foo/bar이라는 페이지를 정적으로 생성할 것이다.
//     //fallback 키도 필수이다.
//     //만약 fallback이 false라면 getStaticPaths에 의해 반환되지 않은 모든 경로는 404페이지가 된다.
//     //미리 렌더링의 해놓은 경로의 수가 적으면 false로 해놓기 좋다. 새로운 페이지가 자주 추가 되지 않을 때 유용한 기술이다.
//   }
// }

export async function getServerSideProps(context) {
  //     context 에는 다음의 key를 가지는 object이다.
  // params : 앞에서 설명했던 것과 같음.
  // req : The Http IncomingMessage object
  // res : The HTTP response object
  // query: The query string
  // preview, previewData

  const response = await Axios.get("https://jsonplaceholder.typicode.com/users")

  return {
    props: { users: response.data }, // will be passed to the page component as props
  }
}
