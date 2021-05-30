import type { ChangeEvent, VFC } from "react"
import { InputTodo } from "src/components/InputTodo"

type Props = {
  inputText: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  incompleteTodos: string[]
  completeTodos: string[]
  handleAddTodo: () => void
  handleDeleteTodo: (index: number) => void
  handleCompleteTodo: (index: number) => void
  handleRevertTodo: (index: number) => void
}

// アイテムにまとめて下のTODOリストを共通化したい
// const ITEMS = [
//   {
//     title: "未完了のTODO",
//     funcs: [
//       { funcName: "完了", func:  }
//     ],
//   },
//   {
//     title: "完了済みのTODO",
//     funcs: [
//       { funcName: "完了", func:  }
//     ],
//   },
// ]

// ここがPresenter的な役割。UI担当
export const Presenter: VFC<Props> = (props) => {
  return (
    <div>
      {/* タスク入力部 */}
      <InputTodo
        inputText={props.inputText}
        handleInputChange={props.handleChange}
        handleAddTodo={props.handleAddTodo}
      />

      {/* 未完了のタスク */}
      <div className="p-2 m-2 w-80 bg-yellow-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">未完了のTODO</p>
        <ul className="space-y-2">
          {props.incompleteTodos.map((todo: string, index: number) => {
            return (
              <div key={todo} className="flex items-center">
                <li className="pl-5 list-disc list-inside">{todo}</li>
                <button
                  onClick={() => {
                    props.handleCompleteTodo(index)
                  }}
                  className="px-0.5 ml-2 text-sm hover:bg-pink-300 rounded border border-gray-500 shadow-sm cursor-pointer focus:outline-none"
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    props.handleDeleteTodo(index)
                  }}
                  className="px-0.5 ml-2 text-sm hover:bg-pink-300 rounded border border-gray-500 shadow-sm cursor-pointer focus:outline-none"
                >
                  削除
                </button>
              </div>
            )
          })}
        </ul>
      </div>

      {/* 完了済みのタスク */}
      <div className="p-2 m-2 w-80 bg-pink-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">完了済みのTODO</p>
        <ol>
          {props.completeTodos.map((todo: string, index: number) => {
            return (
              <div key={index} className="flex items-center">
                <li className="pl-5 list-decimal list-inside ">{todo}</li>
                <button
                  onClick={() => {
                    props.handleRevertTodo(index)
                  }}
                  className="px-0.5 ml-2 text-sm hover:bg-pink-300 rounded border border-gray-500 shadow-sm cursor-pointer focus:outline-none"
                >
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
