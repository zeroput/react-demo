import './InputNew.css'

function InputNew() {
    // need to use event.target.value to get the value of the input label
    const myHandle = (event: any) => {
        if (event.target.value.length > 5) {
            alert('Your input has exceeded the limit')
        }
    }
    return (
        <>
            <section>
                <h1>Character Limit 6 char</h1>
                <input onChange={myHandle} placeholder="Enter some text" />
            </section>
        </>
    )
}
// why do I need to return the App() every time ? is this necessary?
export default function App() {
    return (
        <InputNew />
    )
}