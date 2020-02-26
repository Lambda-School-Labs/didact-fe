import React from 'react'

const promoteUser = () => {
    const state = userSelector(state => state);
    const user = state.onboardingReducer.user;
    const [inputValues, setInputValues] = useState({
        email: '',
        role: null
    })

    const handleChange = e => {
        setInputValues({...inputValues,
        [e.target.name]: e.target.value})
        console.log(inputValues)
    }

    return (
        <form>
            <label>E-mail:</label>
            <input name="email" value={inputValues.email} onChange={handleChange} />
            
        </form>
    )
}