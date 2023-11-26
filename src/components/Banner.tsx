import { VERSION } from '../const'

const Banner = () => {
  return (
    <div className="flex flex-col gap-y-3 px-32 py-24 bg-orange-200/50">
      <p className="font-bold text-5xl text-orange-500">LearnHub</p>
      <p className="text-gray-500">Hub for Educational Videos</p>
      <p className="text-sm text-gray-500">v.{VERSION}</p>
    </div>
  )
}

export default Banner
