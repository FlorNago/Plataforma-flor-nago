import BottombarComponent from "@/components/BottomBarComponent"
import BarraEsquerdaComponent from "@/components/SideBarMenu"
import TopbarComponent from "@/components/TopbarComponent"

export default function SessaoLayout({ children }) {
 return (
  <>
   <main className="flex">
    <BarraEsquerdaComponent />
    <div className="flex-1">
     <TopbarComponent />
     <div className="overflow-y-auto">{children}</div>
    </div>
   </main>
   <BottombarComponent />
  </>
 )
}
