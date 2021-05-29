import type { NextPage } from "next"
import type { ChangeEvent } from "react"
import { useState } from "react"
import { Layout } from "src/components/Layout"
import { Presenter } from "src/components/Presenter"

// ここが Container 的な役割を担う。ロジック担当
const Home: NextPage = () => {
  const [inputText, setInputText] = useState("")
  // eslint-disable-next-line
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>(["タスク1", "タスク2"]) // 型推論でもいいかも？
  // eslint-disable-next-line
  const [completeTodos, setCompleteTodos] = useState<string[]>(["タスク3"]) // 型推論でもいいかも？
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const addTodo = (): void => {
    if (inputText === "") return
    // const newTodos = [...incompleteTodos, inputText]
    // setIncompleteTodos(newTodos)
    setIncompleteTodos((prevArray) => {
      return [...prevArray, inputText]
    })
    setInputText("")
  }

  const deleteTodo = (index: number): void => {
    const newArray = [...incompleteTodos]
    newArray.splice(index, 1)
    setIncompleteTodos(newArray)
  }

  return (
    <Layout>
      <Presenter
        inputText={inputText}
        handleChange={handleChange}
        incompleteTodos={incompleteTodos}
        completeTodos={completeTodos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
    </Layout>
  )
}

export default Home
