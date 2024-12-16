import {allBlogs} from "contentlayer/generated"
import HomeCoverSection from "../components/Home/HomeCoverSection"

export default function Home() {
  console.log(allBlogs)
  return (
    <main className="flex flex-col items-center justify-center text-green-500">
      <HomeCoverSection blogs={allBlogs} />
      
    </main>
  )
}
