"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

export default function RelacaoComponente({ user }) {
    const router = useRouter()
  const [seguindo, setSeguindo] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (!user.followers) return;

    const isFollowing = user.followers.find(
      (follower) => follower._id === session?.user?._id
    );

    console.log("estado: " + isFollowing)

    if (isFollowing) {
      setSeguindo(true);
    }
  }, [user.followers, session?.user?.user_id]);

  async function seguir() {
    const response = await fetch(`/api/relationship/${user.user_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json()

    console.log(data)
    router.refresh()
  }

  async function naoSeguir() {
    const response = await fetch(`/api/relationship/${user.user_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json()
    setSeguindo(() => false)
    router.refresh()
  }

  return (
    <div className="px-4 lg:order-1 p-6 flex items-center gap-4 -m-16">
      <div className="text-center grid place-content-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
          {user.followers.length}
        </span>
        <span className="text-sm text-gray-500">Seguidores</span>
      </div>
      <div className="text-center grid place-content-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
          {user.following.length}
        </span>
        <span className="text-sm text-gray-500">Seguindo</span>
      </div>
      {seguindo ? (
        <button onClick={() => naoSeguir()} className="inline-block place-self-end items-center ml-4 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
          <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
            Parar de seguir
          </span>
        </button>
      ) : (
        <button onClick={() => seguir()} className="inline-block place-self-end items-center ml-4 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
          <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
            Seguir
          </span>
        </button>
      )}
    </div>
  );
}
