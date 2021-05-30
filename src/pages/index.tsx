import type { NextPage } from "next"
import type { ChangeEvent } from "react"
import { useState } from "react"
import { Layout } from "src/components/Layout"
import { Presenter } from "src/components/Presenter"

// ここが Container 的な役割を担う。ロジック担当
const Home: NextPage = () => {
  const [inputText, setInputText] = useState("")
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([])
  const [completeTodos, setCompleteTodos] = useState<string[]>([])

  const deleteTodoFromIncompleteTodos = (index: number) => {
    // 未完了リストからの削除
    const newArray = [...incompleteTodos]
    newArray.splice(index, 1)
    setIncompleteTodos(newArray)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleAddTodo = () => {
    if (inputText === "") return
    setIncompleteTodos((prevArray) => {
      if (prevArray.includes(inputText)) {
        console.log("既に同じタスクが存在します") // eslint-disable-line
        return prevArray
      }
      return [...prevArray, inputText]
    })
    setInputText("")
  }

  const handleDeleteTodo = (index: number) => {
    deleteTodoFromIncompleteTodos(index)
  }

  const handleCompleteTodo = (index: number) => {
    // 完了済リストに追加する用に指定したTodoを取得
    const completedTodo = incompleteTodos[index]
    // 未完了リストからの削除
    deleteTodoFromIncompleteTodos(index)
    // 完了リストへの追加
    setCompleteTodos((prevArray) => {
      return [...prevArray, completedTodo]
    })
  }

  const handleRevertTodo = (index: number) => {
    // 完了リストの更新
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)
    setCompleteTodos(newCompleteTodos)

    // 未完了リストへの復元
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
  }

  return (
    <Layout>
      <Presenter
        inputText={inputText}
        handleChange={handleChange}
        incompleteTodos={incompleteTodos}
        completeTodos={completeTodos}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleRevertTodo={handleRevertTodo}
      />
    </Layout>
  )
}

export default Home
