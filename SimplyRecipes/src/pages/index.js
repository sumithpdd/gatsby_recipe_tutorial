import React from "react"
import { Link } from "gatsby"
import Layout from './components/Layout'
import {page ,text} from '../examples/home.module.css'
import { ExampleButton } from "../examples/button"

// import Navbar from "./components/Navbar"
export default function Home() {
  return <Layout>
    {/* <Navbar/> */}
    <div className={page}>
    <h1>
    Hello world!
    </h1>
    <p className={text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut nihil mollitia sint unde, maiores natus dicta consectetur molestias at reprehenderit et odio ad incidunt, quo alias omnis neque impedit.
      <ExampleButton>Click me</ExampleButton>
    </p>
    <Link to="/about">about</Link>
    <div>

    <Link to="/company/history">history</Link>
    </div>
    </div>
    </Layout>
    
}
