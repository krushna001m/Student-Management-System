import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserNav } from "@/components/user-nav"
import { Search } from "@/components/search"
import Link from "next/link"
import {
  GraduationCap,
  Plus,
  Filter,
  Download,
  Pencil,
  Trash2,
  Users,
  CalendarDays,
  BookOpen,
  Bell,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function StudentsPage() {
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
              className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
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
              <h1 className="text-2xl font-bold tracking-tight">Students</h1>
              <p className="text-muted-foreground">Manage student records and information</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          </div>
          <Tabs defaultValue="all">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All Students</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="inactive">Inactive</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
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
            <TabsContent value="all" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Attendance</TableHead>
                        <TableHead>Average Grade</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 w-9">
                                <AvatarImage src="/placeholder.svg?height=36&width=36" alt={student.name} />
                                <AvatarFallback>
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{student.name}</div>
                                <div className="text-sm text-muted-foreground">{student.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{student.id}</TableCell>
                          <TableCell>{student.grade}</TableCell>
                          <TableCell>
                            <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{student.attendance}%</TableCell>
                          <TableCell>{student.averageGrade}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="active" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p>Active students content</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inactive" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p>Inactive students content</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

// Sample student data
const students = [
  {
    id: "STU001",
    name: "KRUSHNA MENGAL",
    email: "krushnamengal46@gamil.com",
    grade: "10-A",
    status: "Active",
    attendance: 95,
    averageGrade: "A+",
  },
  {
    id: "STU002",
    name: "SUMIT DIGHE",
    email: "sumitdighe80@gmail.com",
    grade: "11-B",
    status: "Active",
    attendance: 92,
    averageGrade: "B+",
  },
  {
    id: "STU003",
    name: "AJINKYA SHINDE",
    email: "ajinkyashinde12@gmail.com",
    grade: "9-C",
    status: "Active",
    attendance: 88,
    averageGrade: "B",
  },
  {
    id: "STU004",
    name: "ADITYA NAGARE",
    email: "adityanagare34@gmail.com",
    grade: "12-A",
    status: "Active",
    attendance: 97,
    averageGrade: "A",
  },
  {
    id: "STU005",
    name: "RUPESH JADHAV",
    email: "rupeshjadhav67@gmail.com",
    grade: "10-B",
    status: "Inactive",
    attendance: 78,
    averageGrade: "C+",
  },
]
