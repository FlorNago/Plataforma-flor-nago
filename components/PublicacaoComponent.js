import Image from "next/image"
import Link from "next/link"
import { AiOutlineUser } from "react-icons/ai"
import CurtidaComponent from "./CurtidaComponent"

export default function PublicacaoComponent({
 post_id,
 post_owner,
 created_at,
 title,
 description,
 image_url,
 likes,
 comments,
}) {

 return (
  <div className="grid place-content-center px-8">
   <div className="bg-white shadow rounded-lg">
    <div className="flex flex-row px-2 py-3 mx-3">
     <Link
      href={`/sessao/usuarios/${post_owner.user_id}`}
      className="w-14 h-14 grid place-content-center rounded-full border-2 border-green-500 cursor-pointer shadow"
     >
      {post_owner.image_url ? (
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
       @{post_owner.username}
      </div>
      <div className="flex w-full mt-1 gap-2 flex-wrap">
       {post_owner.segments &&
        post_owner.segments.map((segment) => {
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
      src={image_url}
      width={1280}
      height={720}
      aspectRatio={16 / 9}
     />
    </div>
    <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">{title}</div>
    <div className="text-gray-500 text-sm mb-6 mx-3 px-2">{description}</div>
    <div className="flex justify-start mb-4">
     <div className="flex justify-end w-full mt-1 pt-2 pr-5">
      <CurtidaComponent id={post_id} likesList={likes} />
     </div>
    </div>
    <div className="flex w-full">
     <div className="mt-3 mx-5 flex flex-row text-xs">
      <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
       Comentários:
       <div className="ml-1 text-gray-400 text-ms"> {comments.length}</div>
      </div>
     </div>
     <div className="mt-3 mx-5 w-full flex justify-end text-xs">
      <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">
       Curtidas:{" "}
       <div className="ml-1 text-gray-400 text-ms"> {likes.length}</div>
      </div>
     </div>
    </div>
    <Link className="flex w-full p-3" href={`/sessao/publicacao/${post_id}`}>
     <p className="py-3 text-center rounded-lg bg-segunda w-full text-white">
      Acessar publicação
     </p>
    </Link>
   </div>
  </div>
 )
}
