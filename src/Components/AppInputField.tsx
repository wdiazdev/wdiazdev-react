import React from "react"

interface Props {
  className: string
  type?: string
  name: string
  required: boolean
  label: string
}
export default function AppInputField({ className, type = "text", name, required, label }: Props) {
  return (
    <div className={className}>
      <input type={type} name={name} required={required} />
      <span>{label}</span>
    </div>
  )
}
