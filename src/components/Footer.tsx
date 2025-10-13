import { Copyright } from "lucide-react"

function Footer() {
  return (
    <div className="py-6">
      <div className="text-gray-900/70 dark:text-white/70 flex flex-row gap-1 items-center justify-center">
        <Copyright/>
        <p>{new Date().getFullYear()}</p>
        <div className="w-0.5 h-8 bg-gray-100 mx-1"></div>
        <p>Made with ❤️ by Adi</p>
      </div>
    </div>
  )
}

export default Footer
