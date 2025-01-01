import { notFound } from 'next/navigation'

export default async function Page({ params }) {
  const languages = ["python", "javascript", "java", "c++"];
  
  if(!languages.includes(params.slug)) {
    notFound()
  }
  
  return <div>My Post: {params.slug}</div>
}