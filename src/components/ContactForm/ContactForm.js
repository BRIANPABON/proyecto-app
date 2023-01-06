import './ContactForm.css'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [message, setMessage] = useState('')
    const [messageLength, setMessageLength] = useState(0)
    const [isMessageValid, setIsMessageValid] = useState(true)
    const [isAnyInputInvalid, setIsAnyInputInvalid] = useState(false)

    const regex = /^[\w.-]+@[\w.-]+\.(com|org|net|edu|gov)$/

    useEffect(() => {
        if (!isEmailValid || !isMessageValid) {
            setIsAnyInputInvalid(true)
        } else {
            setIsAnyInputInvalid(false)
        }
    }, [isEmailValid, isMessageValid])
    

    return(
        <div className='outer-container-contact-form'>        
            <div className='inner-container-contact-form'>  
                <NavBar />
                    <div className='container contact-form'>
                        <h3 className='contact-form-titles'>Contact</h3>
                        <h5 className='contact-form-titles'>Please leave us your contact information so we can get in touch with you</h5>                        
                        <form className='contact-form-fields'>                                
                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label htmlFor='name-input'>Name</label>
                                    <input
                                        id='name-input' 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='your name here' 
                                        name='name' 
                                        value={name} 
                                        onChange={event => setName(event.target.value)}/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label htmlFor='email-input'>Email</label>
                                    <input
                                        id='email-input'
                                        type='email'
                                        className='form-control'
                                        placeholder='example@email.com'
                                        name='email'
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                        onBlur={event => {
                                            if (!regex.test(event.target.value)) {
                                                setIsEmailValid(false)
                                            } else {
                                                setIsEmailValid(true)
                                            }
                                        }}/>
                                </div>
                            </div>                            
                            <div className='row'>
                                    <div className='col-md-6'></div>
                                    <div className={isEmailValid ? 'invisible' : 'col-md-6 visible-invalid-input'}>Invalid email address!</div>
                            </div>
                            <div className='form-group message-group'>
                                <label htmlFor='user-message'>Message</label>                            
                                <textarea
                                    id='user-message'
                                    className='form-control'
                                    placeholder='Max length: 300 characters'
                                    name='message'
                                    value={message}
                                    onChange={(event) => {
                                        setMessage(event.target.value);
                                        setMessageLength(event.target.value.length)                                    
                                        if (event.target.value.length > 300) {
                                            setIsMessageValid(false)
                                        } else {
                                            setIsMessageValid(true)
                                        }
                                    }}>                                        
                                    </textarea>
                                    {messageLength <= 300
                                        ? <div className={messageLength > 0 ? 'visible-invalid-input black-font' : 'invisible'}>Remaining characters: {300 - messageLength}</div>                                    
                                        : <div className='visible-invalid-input'>Exceeded 300 characters!</div>                                    
                                    }
                            </div>
                            <button
                                type='submit'
                                className={isAnyInputInvalid ? 'disabled-button' : ''}
                                disabled={isAnyInputInvalid ? true : false}
                                >Wubba lubba dub dub!</button> 
                        </form>                        
                    </div>
            </div>                  
        </div>
    )
} 


// ToDO:
// 1. Create a state which controls the validity of email; if false, show warning (with visibility class) and disable submit button
// 2. Create a state which controls the validity of the message; if false, show warning and disable submit button
// 3. a- create state which controls if all fields all valid
//    b- if this state is false, then the submit button becomes disabled (use ternary operator for its css class)

// Refresh:
// 1. Regex
// 2. ternary operators in jsx