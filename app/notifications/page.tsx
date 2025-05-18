import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserNav } from "@/components/user-nav"
import { Search } from "@/components/search"
import Link from "next/link"
import { GraduationCap, CalendarDays, Users, BookOpen, Bell, Plus, Mail, MessageSquare } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <GraduationCap className="h-6 w-6" />
          <span>EduManage</span>
        </Link>
        <div className="w-full flex-1">
          <Search />
        </div>
        <UserNav />
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[200px] flex-col border-r bg-muted/40 lg:flex">
          <nav className="grid items-start px-2 py-4 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <GraduationCap className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/students"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              Students
            </Link>
            <Link
              href="/attendance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <CalendarDays className="h-4 w-4" />
              Attendance
            </Link>
            <Link
              href="/grades"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="h-4 w-4" />
              Grades
            </Link>
            <Link
              href="/notifications"
              className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
            >
              <Bell className="h-4 w-4" />
              Notifications
            </Link>
          </nav>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
              <p className="text-muted-foreground">Communicate with students, parents, and staff</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Message
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Send Notification</CardTitle>
                <CardDescription>Create and send messages to students, parents, or staff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="recipient-type" className="text-sm font-medium">
                      Recipient Type
                    </label>
                    <Select defaultValue="students">
                      <SelectTrigger id="recipient-type">
                        <SelectValue placeholder="Select recipient type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="students">Students</SelectItem>
                        <SelectItem value="parents">Parents</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                        <SelectItem value="all">All</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="class" className="text-sm font-medium">
                      Class (Optional)
                    </label>
                    <Select>
                      <SelectTrigger id="class">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9a">Grade 9-A</SelectItem>
                        <SelectItem value="9b">Grade 9-B</SelectItem>
                        <SelectItem value="10a">Grade 10-A</SelectItem>
                        <SelectItem value="10b">Grade 10-B</SelectItem>
                        <SelectItem value="11a">Grade 11-A</SelectItem>
                        <SelectItem value="12a">Grade 12-A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Type your message here" className="min-h-[120px]" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send SMS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
                <CardDescription>History of sent notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="sms">SMS</TabsTrigger>
                    <TabsTrigger value="app">App</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start gap-4 rounded-lg border p-4">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                          <AvatarFallback>
                            {notification.type === "email" ? "E" : notification.type === "sms" ? "S" : "A"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">{notification.subject}</p>
                            <Badge
                              variant={
                                notification.type === "email"
                                  ? "default"
                                  : notification.type === "sms"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {notification.type.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">To: {notification.recipients}</p>
                          <p className="text-sm">{notification.preview}</p>
                          <p className="text-xs text-muted-foreground">{notification.date}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="email" className="space-y-4">
                    {notifications
                      .filter((n) => n.type === "email")
                      .map((notification) => (
                        <div key={notification.id} className="flex items-start gap-4 rounded-lg border p-4">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                            <AvatarFallback>E</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium">{notification.subject}</p>
                              <Badge>EMAIL</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">To: {notification.recipients}</p>
                            <p className="text-sm">{notification.preview}</p>
                            <p className="text-xs text-muted-foreground">{notification.date}</p>
                          </div>
                        </div>
                      ))}
                  </TabsContent>
                  <TabsContent value="sms" className="space-y-4">
                    {notifications
                      .filter((n) => n.type === "sms")
                      .map((notification) => (
                        <div key={notification.id} className="flex items-start gap-4 rounded-lg border p-4">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                            <AvatarFallback>S</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium">{notification.subject}</p>
                              <Badge variant="secondary">SMS</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">To: {notification.recipients}</p>
                            <p className="text-sm">{notification.preview}</p>
                            <p className="text-xs text-muted-foreground">{notification.date}</p>
                          </div>
                        </div>
                      ))}
                  </TabsContent>
                  <TabsContent value="app" className="space-y-4">
                    {notifications
                      .filter((n) => n.type === "app")
                      .map((notification) => (
                        <div key={notification.id} className="flex items-start gap-4 rounded-lg border p-4">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                            <AvatarFallback>A</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium">{notification.subject}</p>
                              <Badge variant="outline">APP</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">To: {notification.recipients}</p>
                            <p className="text-sm">{notification.preview}</p>
                            <p className="text-xs text-muted-foreground">{notification.date}</p>
                          </div>
                        </div>
                      ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

// Sample notifications data
const notifications = [
  {
    id: "1",
    type: "email",
    subject: "End of Semester Exams Schedule",
    recipients: "All Students",
    preview: "Please find attached the schedule for the upcoming end of semester examinations...",
    date: "May 15, 2023 - 10:23 AM",
  },
  {
    id: "2",
    type: "sms",
    subject: "School Closure Notice",
    recipients: "All Parents",
    preview: "Due to severe weather conditions, the school will remain closed tomorrow...",
    date: "May 12, 2023 - 4:15 PM",
  },
  {
    id: "3",
    type: "app",
    subject: "Parent-Teacher Meeting",
    recipients: "Grade 10 Parents",
    preview: "The parent-teacher meeting for Grade 10 is scheduled for next Friday...",
    date: "May 10, 2023 - 2:30 PM",
  },
  {
    id: "4",
    type: "email",
    subject: "Science Fair Registration",
    recipients: "All Students",
    preview: "Registration for the annual science fair is now open. Interested students...",
    date: "May 8, 2023 - 9:45 AM",
  },
  {
    id: "5",
    type: "sms",
    subject: "Attendance Alert",
    recipients: "Selected Parents",
    preview: "Your child was absent from school today. Please provide a reason...",
    date: "May 5, 2023 - 3:20 PM",
  },
]
