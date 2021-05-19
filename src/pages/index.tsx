import type { VFC } from "react"
import { BaseButton } from "src/components/atoms/BaseButton"
import { Layout } from "src/components/Layout"
import {
  SampleComponent1,
  SampleComponent2,
  SampleComponent3,
  SampleComponent4,
  SampleComponent5,
} from "src/components/SampleComponent"

const Home: VFC = () => {
  return (
    <Layout>
      {/* タスク入力部 */}
      <div className="flex h-12 w-80 p-2 m-2 bg-blue-100 rounded">
        <input type="text" className="py-0.5 border border-gray-500 rounded-sm shadow-sm cursor-pointer" />
        <button type="button" className="border-gray-500 bg-white btn">
          追加
        </button>
      </div>

      {/* 未完了のタスク */}
      <div className="w-80 p-2 m-2 bg-yellow-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">未完了のTODO</p>
        <ul>
          <div className="flex items-center">
            <li className="pl-5 list-decimal list-inside">リストアイテム</li>
            <button className="btn border-gray-500">完了</button>
            <button className="btn border-gray-500">削除</button>
          </div>
        </ul>
      </div>

      {/* 完了済みのタスク */}
      <div className="w-80 p-2 m-2 bg-pink-100 rounded">
        <p className="mb-2 text-lg font-medium text-center">完了済みのTODO</p>
        <ul>
          <div className="flex items-center">
            <li className="pl-5 list-disc list-inside ">リストアイテム</li>
            <button className="btn border-gray-500">戻す</button>
          </div>
        </ul>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SampleComponent1 />
      <SampleComponent2 />
      <SampleComponent3 text="TypeScript" />
      <SampleComponent4 text="TypeScript" />
      <SampleComponent5 text="TypeScript">ちるどれん</SampleComponent5>
      <BaseButton text="サンプルボタン" />
    </Layout>
  )
}

export default Home
