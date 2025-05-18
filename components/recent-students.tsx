import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecentStudents() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">KRUSHNA MENGAL</p>
          <p className="text-sm text-muted-foreground">Grade 10-A</p>
        </div>
        <div className="ml-auto">
          <Badge>New</Badge>
        </div>
        <Button size="sm" variant="ghost" className="ml-2">
          View
        </Button>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">SUMIT DIGHE</p>
          <p className="text-sm text-muted-foreground">Grade 11-B</p>
        </div>
        <div className="ml-auto">
          <Badge variant="outline">Updated</Badge>
        </div>
        <Button size="sm" variant="ghost" className="ml-2">
          View
        </Button>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>RJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">AJINKYA SHINDE</p>
          <p className="text-sm text-muted-foreground">Grade 9-C</p>
        </div>
        <div className="ml-auto">
          <Badge variant="outline">Updated</Badge>
        </div>
        <Button size="sm" variant="ghost" className="ml-2">
          View
        </Button>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>EW</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">ADITYA NAGARE</p>
          <p className="text-sm text-muted-foreground">Grade 12-A</p>
        </div>
        <div className="ml-auto">
          <Badge>New</Badge>
        </div>
        <Button size="sm" variant="ghost" className="ml-2">
          View
        </Button>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">SURAJ MENGAL</p>
          <p className="text-sm text-muted-foreground">Grade 10-B</p>
        </div>
        <div className="ml-auto">
          <Badge variant="outline">Updated</Badge>
        </div>
        <Button size="sm" variant="ghost" className="ml-2">
          View
        </Button>
      </div>
    </div>
  )
}
