let notes = []

const setNotes = (noteArray) => {
    notes = noteArray.slice()
}

export const useNotes = () => notes.slice()

export const saveNote = note => {
    fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

export const getNotes = () => {
    // Load database state into application state
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then((noteArray) => {
            notes = noteArray.slice()
        })
}

// let notes = []

// // const setNotes = (noteArray) => {
// //     notes = noteArray.slice()
// // }

// export const useNotes = () => notes.slice()

// export const saveNote = note => {
//     fetch('http://localhost:8088/notes', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(note)
//     })
//     .then(getNotes)
// }

// export const getNotes = () => {
//     //load database
//     return fetch("http://localhost:8088/notes")
//     .then(response => response.json())
//     .then(parsednotes => parsednotes.slice(),
//     //    getNotes.sort()
//     )
//     }