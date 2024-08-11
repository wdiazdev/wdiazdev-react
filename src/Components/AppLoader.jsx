import React from "react"

export default function AppLoader() {
  const loaderStyles = {
    border: "3px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "3px solid #00ffff",
    width: "26px",
    height: "26px",
    animation: "spin 1s linear infinite",
  }

  const spinKeyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `

  return (
    <>
      <style>{spinKeyframes}</style>
      <div style={loaderStyles}></div>
    </>
  )
}
