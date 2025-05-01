
export default function Link({title='',link=''}:{title:string,link:string}) {
  return (
    <a href={link}target='_blank' className="
    bg-blue-500 text-sm text-white m-2 p-2 rounded-2xl
    ">{title}</a>
  )
}
