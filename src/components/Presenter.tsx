import type { ChangeEvent, VFC } from "react"
import { InputTodo } from "src/components/InputTodo"

type Props = {
  inputText: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  incompleteTodos: string[]
  completeTodos: string[]
  addTodo: () => void
  deleteTodo: (index: number) => void
}

// ここがPresenter的な役割。UI担当
export const Presenter: VFC<Props> = (props) => {
  return (
    <div>
      {/* タスク入力部 */}
      <InputTodo inputText={props.inputText} handleInputChange={props.handleChange} addTodo={props.addTodo} />

      {/* 未完了のタスク */}
      <div className="w-80 p-2 m-2 bg-yellow-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">未完了のTODO</p>
        <ul className="space-y-2">
          {props.incompleteTodos.map((todo: string, index: number) => {
            return (
              <div key={todo} className="flex items-center">
                <li className="pl-5 list-disc list-inside">{todo}</li>
                <button className="px-0.5 ml-2 text-sm border rounded shadow-sm cursor-pointer focus:outline-none border-gray-500 hover:bg-pink-300">
                  完了
                </button>
                <button
                  onClick={() => {
                    props.deleteTodo(index)
                  }}
                  className="px-0.5 ml-2 text-sm border rounded shadow-sm cursor-pointer focus:outline-none border-gray-500 hover:bg-pink-300"
                >
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
        <ol>
          {props.completeTodos.map((todo: string, index: number) => {
            return (
              <div key={index} className="flex items-center">
                <li className="pl-5 list-decimal list-inside ">{todo}</li>
                <button className="px-0.5 ml-2 text-sm border rounded shadow-sm cursor-pointer focus:outline-none border-gray-500 hover:bg-pink-300">
                  戻す
                </button>
              </div>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
