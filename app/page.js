import Link from 'next/link'
export default function page() {
    return(
      <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
<li>
  <Link href="./week-2" className="font-bold text-brown-600 hover:text-blue-400 shadow-lg">
    Week 2
  </Link>
</li>

<li>
  <Link href="./week-3" className="font-bold text-brown-600 hover:text-blue-400 shadow-lg">
    Week 3
  </Link>
</li>

<li>
  <Link href="./week-4" className="font-bold text-brown-600 hover:text-blue-400 shadow-lg">
    Week 4
  </Link>
</li>
      </main>
  );
}
