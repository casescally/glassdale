import { useCriminals } from "./criminalProvider.js"
import Criminal from "./criminal.js"


const eventHub = document.querySelector(".container")

const CriminalList = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    // What should happen when detective selects a crime?
    eventHub.addEventListener('crimeSelected', event => {
        if ("crime" in event.detail) {
            /*
                Filter the criminals application state down to the people that committed the crime
            */
            const matchingCriminals = appStateCriminals.filter(criminal => criminal.conviction === event.detail.crime)

            /*
                Then invoke render() and pass the filtered collection as
                an argument
            */
            render(matchingCriminals)
        }
    })
    const criminalsContainer = document.querySelector(".criminalsContainer")
    const render = criminalCollection => {
        criminalsContainer.innerHTML = `
        <section class="criminalList">
        ${criminalCollection.map(criminal => {
            return Criminal(criminal)
        }).join("")
            }
        </section>
        `

    }
render(appStateCriminals)
}

export default CriminalList

