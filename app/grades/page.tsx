import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserNav } from "@/components/user-nav"
import { Search } from "@/components/search"
import Link from "next/link"
import { GraduationCap, CalendarDays, Users, BookOpen, Bell, Download, Filter, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function GradesPage() {
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
              className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
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
              <h1 className="text-2xl font-bold tracking-tight">Grades</h1>
              <p className="text-muted-foreground">Manage and track student academic performance</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Grade Entry
            </Button>
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
              <p className="text-sm font-medium">Subject</p>
              <Select defaultValue="math">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium">Term</p>
              <Select defaultValue="midterm">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="midterm">Midterm</SelectItem>
                  <SelectItem value="final">Final</SelectItem>
                  <SelectItem value="q1">Quarter 1</SelectItem>
                  <SelectItem value="q2">Quarter 2</SelectItem>
                  <SelectItem value="q3">Quarter 3</SelectItem>
                  <SelectItem value="q4">Quarter 4</SelectItem>
                </SelectContent>
              </Select>
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
              <CardTitle>Grade 10-A Mathematics - Midterm Results</CardTitle>
              <CardDescription>Class average: B (85.4%) | Highest: A+ (98%) | Lowest: C- (72%)</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gradesData.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.id}</TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.score}/100</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            record.grade.startsWith("A")
                              ? "default"
                              : record.grade.startsWith("B")
                                ? "secondary"
                                : record.grade.startsWith("C")
                                  ? "outline"
                                  : "destructive"
                          }
                        >
                          {record.grade}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={record.score} className="h-2 w-[100px]" />
                          <span className="text-sm text-muted-foreground">{record.score}%</span>
                        </div>
                      </TableCell>
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Mathematics - Midterm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-primary"></div>
                      <span>A (90-100%)</span>
                    </div>
                    <span>8 students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-green-500"></div>
                      <span>B (80-89%)</span>
                    </div>
                    <span>12 students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                      <span>C (70-79%)</span>
                    </div>
                    <span>7 students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-red-500"></div>
                      <span>D (60-69%)</span>
                    </div>
                    <span>3 students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-gray-500"></div>
                      <span>F (Below 60%)</span>
                    </div>
                    <span>2 students</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Students with highest scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gradesData.slice(0, 5).map((student, index) => (
                    <div key={student.id} className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.id}</p>
                      </div>
                      <div className="text-sm font-medium">{student.score}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improvement Areas</CardTitle>
                <CardDescription>Students needing additional support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gradesData
                    .slice(-3)
                    .reverse()
                    .map((student, index) => (
                      <div key={student.id} className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                          !
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.id}</p>
                        </div>
                        <div className="text-sm font-medium">{student.score}%</div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

// Sample grades data
const gradesData = [
  {
    id: "STU001",
    name: "KRUSHNA MENGAL",
    score: 92,
    grade: "A-",
  },
  {
    id: "STU002",
    name: "SUMIT DIGHE",
    score: 88,
    grade: "B+",
  },
  {
    id: "STU003",
    name: "AJINKYA SHINDE",
    score: 78,
    grade: "C+",
  },
  {
    id: "STU004",
    name: "ADITYA NAGARE",
    score: 98,
    grade: "A+",
  },
  {
    id: "STU005",
    name: "RUPESH JADHAV",
    score: 85,
    grade: "B",
  },
  {
    id: "STU006",
    name: "SURAJ MENGAL",
    score: 76,
    grade: "C",
  },
  {
    id: "STU007",
    name: "AYUSH JAWALE",
    score: 91,
    grade: "A-",
  },
  {
    id: "STU008",
    name: "KUSHAL SURANA",
    score: 72,
    grade: "C-",
  },
]
