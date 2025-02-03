import { SignUpForm } from "@/components/auth/sign-up-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">アカウント作成</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </main>
  )
}

