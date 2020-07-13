import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'
import SearchParams from './SearchParams'
const App = () => {
    return (
        <div>
            <h1 id="something-important"> "Adopt Me!" </h1>{' '}
            <Pet name="Flin" animal="Dog" breed="Bull-dog" />
            <Pet name="Vixen" animal="Bird" breed="Sparrow" />
            <Pet name="Lionel" animal="Cat" breed="Fat-Claw" />
            <SearchParams />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
