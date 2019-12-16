import { getCriminals, getCriminalsByOfficer } from "./criminals/criminalProvider.js"
import CriminalList from "./criminals/criminalList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import { getOfficers } from "./officers/officerProvider.js"
import officerSelect from "./officers/officerSelect.js"
import officerList from "./officers/officerList.js"
import NoteFormComponent from "./notes/NoteForm.js"
import NoteListComponent from "./notes/NoteList.js"
import { getNotes } from "./notes/noteDataProvider.js"

const loadData = () => {
        return getConvictions()
            .then(getNotes)
            .then(getCriminals)
            .then(getOfficers)
}

const renderInitialComponents = () => {
    ConvictionSelect()
    officerSelect()
    NoteFormComponent()
    NoteListComponent()
    CriminalList()
}

loadData().then(renderInitialComponents)