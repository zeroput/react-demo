import './InputNew.css'

const myHandleOuter = (event: any, charLimit) => {
    if (event.target.value.length > charLimit) {
        alert(`Your input has exceeded the limit: ${charLimit}`)
    }
}

function InputNew({ charLimit }) {
    // inner handler in parent scope
    const innerHandler = (event) => {
        // need to use event.target.value to get the value of the input label
        if (event.target.value.length > charLimit) {
            alert(`Your input has exceeded the limit: ${charLimit}`)
        }
    }
    return (
        <>
            <section>
                <h1>Character Limit 6 char</h1>
                <input onChange={innerHandler} placeholder="Enter some text" />
            </section>
        </>
    )
}
// why do I need to return the App() every time ? is this necessary?
export default function App() {
    return (
        <InputNew charLimit={11} />
    )
}