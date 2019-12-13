import { getCriminals } from "./criminals/criminalProvider.js"
import CriminalList from "./criminals/criminalList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import { getOfficers } from "./officers/officerProvider.js"
import officerSelect from "./officers/officerSelect.js"
import officerList from "./officers/officerList.js"
import NoteFormComponent from "./notes/NoteForm.js"
import NoteListComponent from "./notes/NoteList.js"

NoteFormComponent()

getCriminals().then(
    () => CriminalList()
)   

getConvictions().then(
    () => ConvictionSelect()
)

getOfficers().then(
    () => officerList()
)

getOfficers().then(
    () => officerSelect()
)

NoteFormComponent()
NoteListComponent()