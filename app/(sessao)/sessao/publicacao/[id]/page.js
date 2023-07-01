import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import ComentarComponent from "@/components/ComentarComponent"
import CurtidaComponent from "@/components/CurtidaComponent"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AiOutlineUser } from "react-icons/ai"

async function getPostById(post_id) {
 const response = await fetch(`${process.env.BACKEND_URL}/post/${post_id}`, {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
  },
  cache: "no-store",
 })

 const data = await response.json()

 return data
}

export default async function PaginaDaPublicacao({ params }) {
 const post = await getPostById(params.id)

 if (!post) notFound()

 return (
  <div className="grid place-content-center px-8 py-20">
   <div className="bg-white shadow rounded-lg">
    <div className="flex flex-row px-2 py-3 mx-3">
     <Link
      href={`/sessao/usuarios/${post.post_owner.user_id}`}
      className="w-14 h-14 grid place-content-center rounded-full border-2 border-green-500 cursor-pointer shadow"
     >
      {post.post_owner.image_url ? (
       <Image
        src={image_url}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
        alt=""
       />
      ) : (
       <AiOutlineUser
        size={48}
        className="w-12 h-12 object-cover rounded-full"
       />
      )}
     </Link>
     <div className="flex flex-col mb-2 ml-4 mt-1">
      <div className="text-gray-600 text-sm font-semibold">
       @{post.post_owner.username}
      </div>
      <div className="flex w-full mt-1 gap-2 flex-wrap">
       {post.post_owner.segments &&
        post.post_owner.segments.map((segment) => {
         return (
          <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
           • {segment.name}
          </div>
         )
        })}
      </div>
     </div>
    </div>
    <div className="border-b border-gray-100" />
    <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
     <Image
      className="rounded w-full max-w-[720px] h-[720px] object-cover"
      src={post.image_url}
      width={1280}
      height={720}
      aspectRatio={16 / 9}
      alt=""
     />
    </div>
    <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">
     {post.title}
    </div>
    <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
     {post.description}
    </div>
    <div className="flex justify-start mb-4">
     <div className="flex justify-end w-full mt-1 pt-2 pr-5">
      <CurtidaComponent id={post.post_id} likesList={post.likes} />
     </div>
    </div>
    <div className="flex w-full">
     <div className="mt-3 mx-5 flex flex-row text-xs">
      <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
       Comentários:
       <div className="ml-1 text-gray-400 text-ms"> {post.comments.length}</div>
      </div>
     </div>
     <div className="mt-3 mx-5 w-full flex justify-end text-xs">
      <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">
       Curtidas: <div className="ml-1 text-gray-400 text-ms"> {post.likes.length}</div>
      </div>
     </div>
    </div>
    <ComentarComponent id={post.post_id} />
    {/* --> <-- */}
    <div>
     {post.comments.map((comment) => {
      return (
       <div
        key={comment.comment_id}
        className="relative flex flex-col gap-4 self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400 border-b border-gray-100"
       >
        <Link href={`/sessao/usuarios/${comment.comment_owner.user_id}`} className="flex items-center self-start">
         {comment.comment_owner.image_url ? (
          <img
           className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
           alt="User avatar"
           src={comment.comment_owner.image_url}
          />
         ) : (
          <AiOutlineUser
           size={40}
           className="rounded-full shadow mr-2 cursor-pointer"
          />
         )}

         <p className="font-bold self-start text-sm">
          @{comment.comment_owner.username}
         </p>
        </Link>
        <p className="max-w-prose">{comment.text}</p>
       </div>
      )
     })}
    </div>
    {/* <-- --> */}
   </div>
  </div>
 )
}
