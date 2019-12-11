import { useOfficers } from "./officerProvider.js"
import Officer from "./officer.js"

const eventHub = document.querySelector("#container")

const contentTarget = document.querySelector(".officersContainer")

const officerList = () => {
    // Load the application state to be used by this component
    const appStateOfficers = useOfficers()

    eventHub.addEventListener("officerSelected", event => {

        const officerName = event.detail.officer;

        const matchingOfficers = appStateOfficers.filter(currentOfficer => {
            if (currentOfficer === officerName) {
                return currentOfficer;
            }
        });
        render(matchingOfficers)
    }
 )

    const render = officers => {
        //sort here
        contentTarget.innerHTML = `
    <article class="officerComponent">
        <div class="officers">
            ${
            officers.map(currentOfficerObject => {
                const officerHTML = Officer(currentOfficerObject)
                return officerHTML
            }).join("")
            }
        </div>
    </article>
    `
    }

    render(appStateOfficers)
}

export default officerList