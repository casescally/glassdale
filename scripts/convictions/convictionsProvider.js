let convictions = []

export const useConvictions = () => {
    return convictions}

export const getConvictions = () => {
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/crimes")
        .then(
            // Execute this function when a response is received
            response => response.json()
        )
        .then(
            // Execute this function after the data is parsed
            parsedConvictions => 
                convictions = parsedConvictions.slice()
            
        )
}









