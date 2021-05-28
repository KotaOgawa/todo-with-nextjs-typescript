import type { ChangeEvent, VFC } from "react"

type Props = {
  inputText: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputTodo: VFC<Props> = (props) => {
  return (
    <div className="flex h-12 w-80 p-2 m-2 bg-blue-100 rounded">
      <input
        type="text"
        value={props.inputText}
        onChange={props.handleInputChange}
        className="p-2 border border-gray-500 rounded-sm shadow-sm cursor-pointer"
      />
      <button
        type="button"
        className="py-0.5 pl-1 pr-1 ml-2 border rounded-sm shadow-sm cursor-pointer focus:outline-none border-gray-500"
      >
        追加
      </button>
    </div>
  )
}
