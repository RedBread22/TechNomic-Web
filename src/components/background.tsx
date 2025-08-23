export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_bottom,hsl(var(--background))_0%,transparent_25%)]"></div>
      <div className="saturate-[1.2] opacity-100">
        {/* Primary Blobs */}
        <div className="absolute left-[28%] top-[30%] h-[85vw] w-[85vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,59,48,0.55)_0%,transparent_70%)] opacity-80 lg:h-[75vw] lg:w-[75vw]"></div>
        <div className="absolute left-[72%] top-[28%] h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,146,0.55)_0%,transparent_70%)] opacity-80 lg:h-[70vw] lg:w-[70vw]"></div>
        <div className="absolute left-[50%] top-[78%] h-[95vw] w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,149,0,0.6)_0%,transparent_70%)] opacity-90 lg:h-[85vw] lg:w-[85vw]"></div>

        {/* Secondary Blobs */}
        <div className="absolute left-[20%] top-[55%] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,59,48,0.25)_0%,transparent_80%)]"></div>
        <div className="absolute left-[80%] top-[60%] h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,146,0.25)_0%,transparent_80%)]"></div>
      </div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,transparent_94%,hsl(var(--background))_100%)]"></div>
      <div
        className="pointer-events-none fixed inset-0 -z-5 h-full w-full opacity-[0.035]"
        style={{
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEXp6en////x8fH4+Pj19fU8215yAAAAUElEQVQ4y2NgoAW8//+B6QXw9/8nAx4wMDCIgUvg//8bAxgYGBnY//8nBTAwMLD//yUDgEAgF4AYGJiA8f9/YIBgYOBhAAI3g//3kAGJWQAAgvgHwoJ4iWAAAAAASUVORK5CYII=")',
        }}
      />
    </div>
  );
}
