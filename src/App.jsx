//importo le due funzioni di GlobalContext.jsx
import { GlobalContextProvider, useGlobalContext } from './context/GlobalContext'
//css
import './App.css'

function App() {

  //funzione AppHeader con le costanti necessarie per far funzionare il form
  function AppHeader() {
    const { searchText, setSearchText, base_movies_api_url } = useGlobalContext()
    console.log(base_movies_api_url);

    return (
      <header>
        <div className="logo">Boolflix</div>
        {/* form */}
        <form onSubmit={HandleSearchTextSubmit}>
          <input type="text" placeholder='Search a film' onChange={(e) => setSearchText(e.target.value)} value={searchText} />
        </form>
      </header>
    )
  }


  return (
    <>
      <GlobalContextProvider>

        <AppHeader />

        <main>
          <MovieList />
        </main>

      </GlobalContextProvider>
    </>
  )
}

export default App


