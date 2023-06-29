import PublicacaoComponent from "@/components/PublicacaoComponent"

async function getAllPosts() {
 const response = await fetch(`${process.env.BACKEND_URL}/post`, {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
  },
  cache: "no-store",
 })

 const data = await response.json()

 return data
}

export default async function SessaoPagina() {
 const posts = await getAllPosts()

 return (
  <div className="grid py-16 gap-8 justify-items-center">
   {posts.map((item) => {
    return (
      <PublicacaoComponent key={item.post_id} {...item} />
    )
   })}
  </div>
 )
}
