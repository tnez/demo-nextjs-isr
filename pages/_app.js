import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
