import type { ChangeEvent, VFC } from "react"
import { InputTodo } from "src/components/InputTodo"

type Props = {
  inputText: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  incompleteTodos: string[]
  completeTodos: string[]
  addTodo: () => void
}

// ここがPresenter的な役割。UI担当
export const Presenter: VFC<Props> = (props) => {
  return (
    <div>
      <h1 className="text-xl text-center">{props.inputText}</h1>

      {/* タスク入力部 */}
      <InputTodo inputText={props.inputText} handleInputChange={props.handleChange} addTodo={props.addTodo} />

      {/* 未完了のタスク */}
      <div className="w-80 p-2 m-2 bg-yellow-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">未完了のTODO</p>
        <ul>
          {props.incompleteTodos.map((todo: string) => {
            return (
              <div key={todo} className="flex items-center">
                <li className="pl-5 list-decimal list-inside">{todo}</li>
                <button className="py-0.5 pl-1 pr-1 ml-2 border rounded-sm shadow-sm cursor-pointer focus:outline-none border-gray-500">
                  完了
                </button>
                <button className="py-0.5 pl-1 pr-1 ml-2 border rounded-sm shadow-sm cursor-pointer focus:outline-none border-gray-500">
                  削除
                </button>
              </div>
            )
          })}
        </ul>
      </div>

      {/* 完了済みのタスク */}
      <div className="w-80 p-2 m-2 bg-pink-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">完了済みのTODO</p>
        <ul>
          {props.completeTodos.map((todo: string, index: number) => {
            return (
              <div key={index} className="flex items-center">
                <li className="pl-5 list-disc list-inside ">{todo}</li>
                <button className="py-0.5 pl-1 pr-1 ml-2 border rounded-sm shadow-sm cursor-pointer focus:outline-none border-gray-500">
                  戻す
                </button>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
