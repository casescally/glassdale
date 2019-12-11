//officerSelect component renders an HTML element which outputs the officers
import { useOfficer } from "./officerProvider.js"

// specify an eventHub where all the events will be sent
const eventHub = document.querySelector("#container")
//get a reference on the DOM where the <select> will be rendered
const contentTarget = document.querySelector("filters__officer")


const officerSelect = () => {
//get all officers from the application state
const officers = useOfficer()

const render = officersCollection => {
//use interpolation to invoke the .map method on the officersCollection
contentTarget.innerHTML = `
<select class="dropdown" id="officerSelect">
    <option value="0">Please select a crime...</option>
    ${officersCollection.map(officer => `<option id=selected${officer}>${officer}</option>`)}
</select>
`
}

render(officers)

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("dropdown")) {
        const selectOfficer = changeEvent.target.value;

        const officer = new CustomEvent("officerSelected", {
          detail: {
            officer: selectOfficer
          }
        });
        eventHub.dispatchEvent(officer);
      }
    });
}

export default officerSelect