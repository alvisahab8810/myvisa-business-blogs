import Home from "../components/home.component"

export default function Homepage() {
  return (
    <>
    {console.log(process.env.MONGO_URI)}
    <Home />
    </>
  )
}

