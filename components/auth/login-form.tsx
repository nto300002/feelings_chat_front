"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import Link from "next/link"

export function LoginForm() {
  return (
    <div className="space-y-6">
      <Button variant="outline" className="w-full" type="button">
        <Icons.google className="mr-2 h-4 w-4" />
        Googleでログイン
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">または</span>
        </div>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" type="email" placeholder="taro@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">パスワード</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          ログイン
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        アカウントをお持ちでないですか？{" "}
        <Link href="/sign-up" className="text-primary underline-offset-4 hover:underline">
          新規登録
        </Link>
      </p>
    </div>
  )
}

