import Link from "./components/link";
import BookList from "./constant/BookList";


export default function App() {
  return (
    <div className="bg-slate-900 text-slate-100  min-h-[100vh] p-4 flex flex-col flex-wrap gap-8 items-center">
<h1>Download Your Book/Notes </h1>
<div className="book-container flex flex-col flex-wrap gap-3">
  {
    BookList?.map((book)=>{
      return <Link key={book.id} {...book}/>
    })
  }
</div>
    </div>
  )
}
