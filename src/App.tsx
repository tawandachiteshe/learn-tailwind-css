import "tailwindcss/tailwind.css"


function App() {

  return (
    <div className="bg-gray-900 h-full w-full">
      <div className="flex w-full h-full">
        <div className="bg-slate-500 w-full flex flex-col items-center justify-center">
          <h1 className="text-slate-900 font-bold font-serif text-2xl">HEY, I'M TAWANDA CHITESHE</h1>
          <h1 className="text-slate-900 font-bold font-serif mt-5">@ChitesheTawanda</h1>
        </div>
        <div className=" w-full flex flex-col items-center justify-center">
          <div className="bg-slate-200 w-64 h-64 flex rounded-full items-center justify-center">
            <h1 className="text-gray-600 text-9xl">T</h1>
          </div>

          <div className="m-8 flex flex-col list-disc">
          <p className="bg-slate-400 text-xl font-serif  mt-1 p-0.5">- Fullstack developer</p>
            <p className="bg-slate-400 text-xl font-serif mt-1  p-0.5">- Game developer</p>
            <p className="bg-slate-400 text-xl font-serif  mt-1  p-0.5">- 3D artist</p>
       
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
