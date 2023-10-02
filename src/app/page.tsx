export async function generateStaticParams() {
  console.log("Executing...")
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

function Home(props: any) {
  console.log(props)
  return (
    <main className="px-5">
      <ul>
        <li>Helo</li>
        <li>Helo</li>
        <li>Helo</li>
        <li>Helo</li>
      </ul>
    </main>
  )
}

export default Home;