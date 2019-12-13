import { saveNote } from "./noteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            // Make an object
            const newNote = {
                text: document.querySelector("#note-text").value,
                suspect: document.querySelector("#note-criminal").value,
                date: Date.now()
            }

            saveNote(newNote)
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showNotes") {
            const message = new CustomEvent("showNoteButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>Case Notes</summary>
                <div class="note__field">
                    Note: <input type="text" id="note-text" />
                </div>

                <div class="note__field">
                    Criminal: <input type="text" id="note-criminal" />
                </div>

                <button class="note__field" id="saveNote">Save Note</button>
                <button class="note__field" id="showNotes">Show Notes</button>
            </details>
        `
    }

    render()
}

export default NoteFormComponent

// import { saveNote } from "./noteDataProvider.js"

// const eventHub= document.querySelector("#container")
// const contentTarget = document.querySelector(".noteFormContainer")

// const NoteFormComponent = () => {

//     // Handle internal element click
//     eventHub.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id === "saveNote") {

//             // Make a new object representation of a note
//             const newNote = {
//                 // Key/value pairs here
//             }

//             // Change API state and application state
//             saveNote(newNote)
//         }
//     })

//     // rest of the code here

//     const render = () => {
//         contentTarget.innerHTML = `

//             <input type="text" id="note-text">

//             <button id="saveNote">Save Note</button>
//         `
//     }

//     render()
// }

// export default NoteFormComponent