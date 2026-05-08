import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level?: "primary" | "secondary"
  className?: string
}

export function SkillBadge({ name, level = "primary", className }: SkillBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-mono text-xs transition-all duration-200 cursor-default",
        level === "primary"
          ? "border-primary/30 text-foreground bg-primary/5 hover:bg-primary/10 hover:border-primary/50"
          : "border-border text-muted-foreground bg-muted/30 hover:border-border/70",
        className
      )}
    >
      {name}
    </Badge>
  )
}
