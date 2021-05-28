import type { ChangeEvent, VFC } from "react"
import { useState } from "react"
import { InputTodo } from "src/components/InputTodo"
import { Layout } from "src/components/Laaaayout"

const Home: VFC = () => {
  const [inputText, setInputText] = useState("")
  // eslint-disable-next-line
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>(["タスク1", "タスク2"]) // 型推論でもいいかも？
  // eslint-disable-next-line
  const [completeTodos, setCompleteTodos] = useState<string[]>(["タスク3"]) // 型推論でもいいかも？
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <Layout>
      <h1 className="text-xl text-center">{inputText}</h1>

      {/* タスク入力部 */}
      <InputTodo inputText={inputText} handleInputChange={handleChange} />

      {/* 未完了のタスク */}
      <div className="w-80 p-2 m-2 bg-yellow-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo: string) => {
            return (
              <div key={todo} className="flex items-center">
                <li className="pl-5 list-decimal list-inside">{todo}</li>
                <button className="btn border-gray-500">完了</button>
                <button className="btn border-gray-500">削除</button>
              </div>
            )
          })}
        </ul>
      </div>

      {/* 完了済みのタスク */}
      <div className="w-80 p-2 m-2 bg-pink-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">完了済みのTODO</p>
        <ul>
          {completeTodos.map((todo: string, index: number) => {
            return (
              <div key={index} className="flex items-center">
                <li className="pl-5 list-disc list-inside ">{todo}</li>
                <button className="btn border-gray-500">戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Home
