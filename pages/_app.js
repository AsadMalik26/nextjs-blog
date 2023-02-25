import "../styles/globals.css"
import variables from '../styles/variables.module.scss'
function App({ Component, pageProps }) {
    return (
        <>
            {/* <p className={`${"text-3xl font-bold underline"} ${styles.underline}`}>Tailwind CSS</p> */}
            <Component {...pageProps} />

        </>
    )
}

export default App;