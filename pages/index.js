import React from "react"
import Link from "next/link"
export default function Index() {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: "100%",
          backgroundColor: "#E65251",
          color: "white",
        }}
      >
        <Link href={`/count`}>
          <span style={{ display: "inline-block", padding: "20px" }}>
            <a>COUNT(with Redux & Redux-saga)</a>
          </span>
        </Link>
        {/* prefetch */}
        <Link prefetch href={`/ssr-test`}>
          <span style={{ display: "inline-block", padding: "20px" }}>
            <a>SSRTest</a>
          </span>
        </Link>
      </div>
    </>
  )
}
