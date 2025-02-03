import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

// モックユーザーデータ
const user = {
  name: "山田 太郎",
  icon: "/placeholder.svg?height=128&width=128",
  feeling: "今日はとても元気です！😊",
  id: "taro_yamada",
  email: "taro.yamada@example.com",
  phoneNumber: "090-1234-5678",
}

export function ProfileInfo() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>プロフィール情報</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-24 h-24">
            <Image
              src={user.icon || "/placeholder.svg"}
              alt={`${user.name}のアイコン`}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.feeling}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="id">ID</Label>
            <p id="id" className="text-gray-700">
              {user.id}
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <p id="email" className="text-gray-700">
              {user.email}
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">電話番号</Label>
            <p id="phone" className="text-gray-700">
              {user.phoneNumber}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

