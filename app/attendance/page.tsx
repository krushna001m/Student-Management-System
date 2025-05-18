import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserNav } from "@/components/user-nav"
import { Search } from "@/components/search"
import Link from "next/link"
import { GraduationCap, CalendarDays, Users, BookOpen, Bell, Download, Filter, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AttendancePage() {
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
              className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
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
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Bell className="h-4 w-4" />
              Notifications
            </Link>
          </nav>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
              <p className="text-muted-foreground">Track and manage student attendance</p>
            </div>
            <Button>Take Attendance</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Attendance</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">+2.1% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Average</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.8%</div>
                <p className="text-xs text-muted-foreground">+0.4% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Absent Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">-3 from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Perfect Attendance</CardTitle>
                <Check className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground">Students with 100% attendance</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium">Class</p>
              <Select defaultValue="10a">
                <SelectTrigger className="w-[180px]">
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
            <div className="grid gap-1">
              <p className="text-sm font-medium">Date</p>
              <Input type="date" className="w-[180px]" defaultValue="2023-05-18" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Grade 10-A Attendance - May 18, 2023</CardTitle>
              <CardDescription>Total students: 32 | Present: 30 | Absent: 2</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time In</TableHead>
                    <TableHead>Remarks</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.id}</TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>
                        <Badge variant={record.status === "Present" ? "default" : "destructive"}>{record.status}</Badge>
                      </TableCell>
                      <TableCell>{record.timeIn}</TableCell>
                      <TableCell>{record.remarks}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

// Sample attendance data
const attendanceData = [
  {
    id: "STU001",
    name: "KRUSHNA MENGAL",
    status: "Present",
    timeIn: "08:15 AM",
    remarks: "",
  },
  {
    id: "STU002",
    name: "SUMIT DIGHE",
    status: "Present",
    timeIn: "08:05 AM",
    remarks: "",
  },
  {
    id: "STU003",
    name: "AJINKYA SHINDE",
    status: "Absent",
    timeIn: "-",
    remarks: "Sick leave",
  },
  {
    id: "STU004",
    name: "ADITYA NAGARE",
    status: "Present",
    timeIn: "08:10 AM",
    remarks: "",
  },
  {
    id: "STU005",
    name: "RUPESH JADHAV",
    status: "Present",
    timeIn: "08:22 AM",
    remarks: "Late",
  },
  {
    id: "STU006",
    name: "SURAJ MENGAL",
    status: "Absent",
    timeIn: "-",
    remarks: "Family emergency",
  },
  {
    id: "STU007",
    name: "AYUSH JAWALE",
    status: "Present",
    timeIn: "08:01 AM",
    remarks: "",
  },
]
