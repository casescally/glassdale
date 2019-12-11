import { useOfficers } from "./officerProvider.js"
import Officer from "./officer.js"


const contentTarget = document.querySelector(".officersContainer")

const officerlist = () => {

const appStateOfficers = useOfficers()

const render = officers => {
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

export default officerlist