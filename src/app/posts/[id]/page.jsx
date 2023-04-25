import React from "react";

export default function Post({ params }) {
    const id = params.id
  return(
    <>
        {'id: ' + id}
    </>
  )
}
