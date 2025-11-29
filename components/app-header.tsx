import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function AppHeader() {
  return (
    <div className="mb-6 flex gap-4">
      <div className="flex-shrink-0">
        <div className="h-24 w-24 overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/chicken-game-app-icon-with-cute-dog-character.jpg"
            alt="Chicken Road 2"
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="mb-1 text-2xl font-medium leading-tight">Chicken Road 2 x Best Game 2025</h1>
        <div className="mb-2 text-sm text-muted-foreground">
          <a href="#" className="text-primary hover:underline">
            Joker Game
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Badge variant="outline" className="rounded-md">
            Contains ads
          </Badge>
          <Badge variant="outline" className="rounded-md">
            In-app purchases
          </Badge>
        </div>
      </div>
    </div>
  )
}
