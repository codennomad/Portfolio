export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">~/codennomad</span>
          <span className="text-muted-foreground"> $ </span>
          <span className="text-foreground">loading</span>
          <span className="cursor-blink inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle" />
        </div>
      </div>
    </div>
  )
}
