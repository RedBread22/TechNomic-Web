export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_bottom,hsl(var(--background))_0%,transparent_50%)]"></div>
      <div className="saturate-[1.2] opacity-70">
        <div className="absolute left-[30%] top-[45%] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,59,48,0.4)_0%,transparent_70%)] lg:h-[40vw] lg:w-[40vw]"></div>
        <div className="absolute left-[70%] top-[40%] h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,146,0.3)_0%,transparent_70%)] lg:h-[35vw] lg:w-[35vw]"></div>
        <div className="absolute left-[50%] top-[90%] h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,149,0,0.4)_0%,transparent_70%)] lg:h-[50vw] lg:w-[50vw]"></div>
      </div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,transparent_85%,hsl(var(--background))_100%)]"></div>
      <div
        className="pointer-events-none fixed inset-0 -z-5 h-full w-full opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEXp6en////x8fH4+Pj19fU8215yAAAAUElEQVQ4y2NgoAW8//+B6QXw9/8nAx4wMDCIgUvg//8bAxgYGBnY//8nBTAwMLD//yUDgEAgF4AYGJiA8f9/YIBgYOBhAAI3g//3kAGJWQAAgvgHwoJ4iWAAAAAASUVORK5CYII=")',
        }}
      />
    </div>
  );
}
