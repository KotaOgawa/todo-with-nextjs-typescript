/* eslint-disable */
import React from "react"

type Props = {
  text: string
  children?: React.ReactNode
}

// 1と2は同じ。3と4は同じ。

// 1. propsなし
export const SampleComponent1 = () => {
  return <div>Hello TypeScript!</div>
}

// 2. propsなし VFC型指定
export const SampleComponent2: React.VFC = () => {
  return <div>Hello TypeScript!</div>
}

// 3. propsあり 型注釈パターン
export const SampleComponent3 = (props: Props) => {
  return <div>Hello {props.text}!</div>
}

// 4. propsあり ジェネリクスパターン
export const SampleComponent4: React.VFC<Props> = (props) => {
  return <div>Hello {props.text}!</div>
}

// 5. propsあり children含むパターン
export const SampleComponent5: React.VFC<Props> = (props) => {
  return (
    <div>
      <div>Hello {props.text}!</div>
      <div>{props.children}</div>
    </div>
  )
}

// 6. propsあり propsを分割代入で受け取るパターン
export const SampleComponent6 = ({ text }: Props) => {
  return <div>Hello {text}!</div>
}

// 7. propsあり propsを分割代入で受け取るパターン
export const SampleComponent7: React.VFC<Props> = ({ text }) => {
  return <div>Hello {text}!</div>
}

// 8. propsあり propsを分割代入で受け取るパターン children
export const SampleComponent8 = ({ text, children }: Props) => {
  return (
    <div>
      <div>Hello {text}!</div>
      <div>{children}</div>
    </div>
  )
}
