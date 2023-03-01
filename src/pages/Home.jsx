import React from 'react'
import "../styles/home.css"

export default function Home() {
  return (
    <div className="home-container">
  <div className="main-content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis
      nibh quis leo rutrum, nec ultrices enim ullamcorper. Donec iaculis neque
      id felis hendrerit, vel blandit elit luctus.{" "}
      <span className="inline-image">
        <img src="/path/to/image.jpg" alt="inline image" />
      </span>{" "}
      Nam nec sapien aliquam, sagittis nunc in, cursus odio. In hac habitasse
      platea dictumst.
    </p>
  </div>
  <div className="green-text">
    <p>
      Sed ac sapien nulla.{" "}
      <span>
        <a href="#">Click here</a>
      </span>{" "}
      to learn more.
    </p>
  </div>
</div>
  )
}
