import Header from "@/components/header"
import { ProfileInfo } from "@/components/profile-info"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">プロフィール</h1>
        <ProfileInfo />
      </main>
    </div>
  )
}

