const Criminal = (criminal) => {
    return `
        <section class="criminal">
            <header class="criminal__header">
               ${criminal.name}
            </header>
            <br>
            <div>Age: ${criminal.age}</div>
            <div>
                Crime: ${criminal.conviction}
            </div>
            <div>
                Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
            </div>
            <div>
                Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
            </div>
        </section>
    `
}
export default Criminal







