import Head from 'next/head';
import Alert from '../components/Alert';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import variables from '../styles/variables.module.scss'
import { useState, useEffect } from 'react'

export default function Home(props) {
  const [data, setData] = useState(props?.data || [])
  console.log("2. Home Page", data)

  useEffect(() => {
    // // setLoading(true)
    // fetch('/api/profile-data')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data)
    //     // setLoading(false)
    //   })

    console.log("Use effect")
    setTimeout(() => {
      setData([
        { id: 4, name: "ALi" },
        { id: 5, name: "Ahmad" },
        { id: 6, name: "Ahsan" },
      ])
      console.log("Client Side Fetch")
    }, 3000)
  }, [])

  return (
    <Layout home>
      {console.log("3. Home Page Return")}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <Alert type={"success"}>
        <p>I am Alert</p>
        {data?.map((value, index) => (
          <>
            <p>{value.id}. {value.name}</p>
          </>
        ))}


      </Alert>

      <p className="myText">
        Get started by editing by tailwind @apply Query for multiple classes at once
        {/* <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          pages/index.tsx
        </code> */}
      </p>

      <p className='font-bold underline'>Tailwind inline style</p>
      <p color={variables.primaryColor} style={{ color: variables.primaryColor }}>Color FROM SASS Variable</p>

    </Layout >
  );
}

export async function getStaticProps(ctx) {
  let data = [
    { id: 1, name: "Asad" },
    { id: 2, name: "Mubashar" },
    { id: 3, name: "Arslan" },
  ]
  console.log("1. Static Props start", ctx)


  console.log("1. Static Props")
  return {
    // { console.log("Static Props Return") }
    props: {
      data: data
    }
  }
}

// export async function getServerSideProps(context) {
//   let data;
//   console.log("SErver side props ")
//   // let promise = await new Promise((resolve, reject) => {
//   //   setTimeout(() => {
      // data = [
      //   { id: 4, name: "ALi" },
      //   { id: 5, name: "Ahmad" },
      //   { id: 6, name: "Ahsan" },
      // ]
//   //     resolve(data)
//   //     console.log("Reolved")
//   //   }, 10)
//   // })
//   data = [
//     { id: 4, name: "ALi" },
//     { id: 5, name: "Ahmad" },
//     { id: 6, name: "Ahsan" },
//   ]
//   return {
//     props: {
//       // props for your component
//       data
//     },
//   };
// }