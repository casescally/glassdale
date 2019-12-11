import { getCriminals } from "./criminals/criminalProvider.js"
import CriminalList from "./criminals/criminalList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
//import convictionList from "./convictions/convictionsList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import { getOfficers } from "./officers/officerProvider.js"
import officerList from "./officers/officerList.js"

getCriminals().then(
    () => CriminalList()
)

getConvictions().then(
    () => ConvictionSelect()
)

// getOfficers().then(
//     () => officerList()
// )

