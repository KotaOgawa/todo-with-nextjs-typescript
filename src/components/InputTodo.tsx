import type { ChangeEvent, VFC } from "react"

type Props = {
  inputText: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  addTodo: () => void
}

export const InputTodo: VFC<Props> = (props) => {
  return (
    <div className="flex h-12 w-80 p-2 m-2 bg-blue-100 rounded">
      <input
        type="text"
        value={props.inputText}
        onChange={props.handleInputChange}
        placeholder="TODOを入力できます"
        className="p-2 border border-gray-500 rounded shadow-sm cursor-pointer"
      />
      <button
        type="button"
        onClick={props.addTodo}
        className="py-0.5 pl-1 pr-1 ml-2 text-sm border rounded shadow-sm cursor-pointer focus:outline-none border-gray-500 hover:bg-pink-300"
      >
        追加
      </button>
    </div>
  )
}
