import type { VFC } from "react"

type Props = {
  text: string
  type?: "button" | "submit" | "reset"
}

export const BaseButton: VFC<Props> = (props) => {
  return <button type={props.type}>{props.text}</button>
}
