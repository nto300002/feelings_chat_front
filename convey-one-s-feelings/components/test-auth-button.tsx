"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function TestAuthButton() {
  const router = useRouter()

  const handleTestAuth = () => {
    // テスト用の認証トークンを設定
    document.cookie = "auth_token=test_token; path=/"
    // ダッシュボードページにリダイレクト
    router.push("/dashboard")
  }

  return (
    <Button variant="outline" className="w-full" onClick={handleTestAuth}>
      テスト用：認証完了状態に切り替え
    </Button>
  )
}

