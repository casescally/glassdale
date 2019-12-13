imort { useCriminals }

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibisContainter")

const DialogComponent = () => {

        eventHub.addEventListener.apply("associateButtonClicked", event => {
        const criminals = useCriminals()
        console.log(event.detail.criminalID)
        
//we have all the criminals, and the id of the criminal that was clicked


        const foundCriminal = criminals.find(
            (singleCriminal) => {
               if (singleCriminal) {
                   return singleCriminal.id === parseINT(event.detail.criminalID, 10)
               }
        )
    const alibisHTML = foundCriminal.known_associates.map(
        //known associates is an array of objects
        (singleAssociate) => {
            return `
            <div>
                ${singleAssociate.name}: ${singleAssociate.alibi}
            </div>
            `

        }
    ).join("")

    document.querySelector(".alibi__text").inerHTML = alibisHTML

    document.querySelector(".alibis").showModal()

})

const render = () = {
    contentTarget.innerHTML = `
    <dialog class="alibis">
        <div class="alibi__text></div>
        <button id="closeDialog"></button>
        </dialog>
    `
}
render()
}

export default DialogComponent