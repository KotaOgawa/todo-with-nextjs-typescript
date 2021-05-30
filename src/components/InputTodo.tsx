import type { ChangeEvent, VFC } from "react"

type Props = {
  inputText: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleAddTodo: () => void
}

export const InputTodo: VFC<Props> = (props) => {
  return (
    <div className="flex p-2 m-2 w-80 h-12 bg-blue-100 rounded">
      <input
        type="text"
        value={props.inputText}
        onChange={props.handleInputChange}
        placeholder="TODOを入力できます"
        className="p-2 rounded border border-gray-500 shadow-sm cursor-pointer"
      />
      <button
        type="button"
        onClick={props.handleAddTodo}
        className="py-0.5 pr-1 pl-1 ml-2 text-sm hover:bg-pink-300 rounded border border-gray-500 shadow-sm cursor-pointer focus:outline-none"
      >
        追加
      </button>
    </div>
  )
}
