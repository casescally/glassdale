 /*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionsProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".filters__crime")

// Get a reference to the DOM element where the <select> will be rendered
//const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(crime => `<option id=selected${crime}>${crime}</option>`)}
            </select>
        `
    }

    render(convictions)

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {
            const selectConvictions = changeEvent.target.value;

            const crime = new CustomEvent("crimeSelected", {
              detail: {
                crime: selectConvictions
              }
            });
            eventHub.dispatchEvent(crime);
          }
        });
}

export default ConvictionSelect