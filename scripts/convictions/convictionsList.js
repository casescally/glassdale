import { useConvictions } from "./convictionsProvider.js"
import Officer from "./convictions.js"


const contentTarget =document.querySelector(".convictionsContainer")

const convictionlist = () => {

const appStateConvictions = useConvictions()

const render = convictions => {
    contentTarget.innerHTML = `
    <article class="convictionsComponent">
        <div class="convictions">
            ${
                convictions.map(currentConvictionsObject => {
                    const convictionsHTML = Officer(currentConvictionsObject)
                    return convictionsHTML
                }).join("")
            }
        </div>
    </article>
    `
}
render(appStateConvictions)

}

export default convictionlist