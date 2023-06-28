import Image from "next/image"
import { AiOutlineUser } from "react-icons/ai"

export default function PublicacaoComponent({
    post_id, post_owner, created_at, title, description, image_url, likes, comments
}) {
 return (
  <div class="max-w-md container bg-white rounded-xl shadow-lg">
   <div class="flex items-center space-x-2 px-2 py-4">
    {post_owner.image_url ? (

        <Image
         class="w-10 h-10 rounded-full"
         src={post_owner.image_url}
         alt=""
         width={40}
         height={40}
        />
    ) : (
        <AiOutlineUser size={40} className="w-10 h-10 rounded-full"/>
    )}
    <h2 class="text-gray-800 font-bold cursor-pointer">{post_owner.username}</h2>
   </div>
   <Image
    class="w-full cursor-pointer"
    src={image_url}
    alt=""
    width={1280}
    height={720}
   />
   <div className="p-4">
    <div class="flex justify-between">
     <div>
      <h2 class="text-2xl font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
       {title}
      </h2>
     </div>
    </div>
    <div class="flex space-x-2">
     <div class="flex space-x-1 items-center">
      <span>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-gray-600 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
       >
        <path
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
       </svg>
      </span>
      <span>{comments.length}</span>
     </div>
     <div class="flex space-x-1 items-center">
      <span>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
       >
        <path
         fill-rule="evenodd"
         d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
         clip-rule="evenodd"
        />
       </svg>
      </span>
      <span>{likes}</span>
     </div>
    </div>
   </div>
  </div>
 )
}
