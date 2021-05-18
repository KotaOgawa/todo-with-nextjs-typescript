/* eslint-disable no-console */
// ↑ このファイル内全てを対象にして、指定した`ESLint`設定を無効にする場合
import type { VFC } from "react"

export const EslintIgnoreTest: VFC = () => {
  // 次の行の指定した`ESLint`設定を無効にする場合
  // eslint-disable-next-line no-console, arrow-body-style
  console.log("Yanai")

  // 同じ行の指定した`ESLint`設定を無効にする場合
  console.log("Aiko") // eslint-disable-line arrow-body-style

  return (
    <div>
      <p className="p-2">ESLintの設定を一部無視する時の方法メモ</p>
    </div>
  )
}
