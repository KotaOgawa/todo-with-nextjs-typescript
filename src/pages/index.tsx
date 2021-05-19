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
      <div className="">
        <input type="text" className="py-0.5 border border-gray-500 rounded-sm shadow-sm cursor-pointer" />
        <button type="button" className="border-gray-500 btn">
          追加
        </button>
      </div>

      {/* 未完了のタスク */}
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div className="flex items-center">
            <li className="pl-5 list-disc list-inside">リストアイテム</li>
            <button className="text-blue-600 border-blue-500 btn">完了</button>
            <button className="text-red-600 border-red-500 btn">削除</button>
          </div>
        </ul>
      </div>

      {/* 完了済みのタスク */}
      <div>
        <p>完了済みのTODO</p>
        <ul>
          <div className="flex items-center">
            <li className="pl-5 list-decimal list-inside ">リストアイテム</li>
            <button className="text-green-600 border-green-500 btn">戻す</button>
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
