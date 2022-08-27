import React from 'react'
import Back from "../common/Back"
import RecenetCard from "../Home/Recent/RecenetCard"
import img from "../images/about.jpg"

const Blog = () => {
  return (
    <>
     <section className="blog-out mb">
        <Back name="Blog" title="Blog Grid - Our Blog" cover={img} />
        <div className="container recent">
            <RecenetCard />
        </div>
     </section>
    </>
  )
}

export default Blog