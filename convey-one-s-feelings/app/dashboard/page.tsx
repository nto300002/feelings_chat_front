import Header from "@/components/header"
import StatusUpdateForm from "@/components/status-update-form"
import ChatList from "@/components/chat-list"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <StatusUpdateForm />
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">チャット</h2>
          <ChatList />
        </section>
      </main>
    </div>
  )
}

