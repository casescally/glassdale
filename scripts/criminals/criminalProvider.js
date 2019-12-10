let criminals = []

export const useCriminals = () => {
    return criminals}

export const getCriminals = () => {
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/criminals")
        .then(
            // Execute this function when a response is received
            response => response.json()
        )
        .then(
            // Execute this function after the data is parsed
            parsedCriminals => 
               { criminals = parsedCriminals.slice()
              
            }
        )
}









