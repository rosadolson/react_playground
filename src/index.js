import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import data from './acmeApp/data'
// import MonsterApp from './monsterMash/monsterApp'
// import SmartApp from './smartApp/SmartApp'
// import MappingAndFiltering from './mapAndFilter/MappingAndFiltering'
// import Data from './mapAndFilter/Data'
// import ChatterApp from './chatterApp/ChatterApp'
// import Data from './chatterApp/Data'
// import SearchApp from './searchApp/App'
// import data from './searchApp/sentences'
// import RestaurantApp from './restaurantApp/RestaurantApp'
// import Data from './restaurantApp/Data'
// import LousTexMexApp from './restaurantApp/LousTexMexApp'
// import data from './restaurantApp/data'
import App from './tex-mex-solution/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
