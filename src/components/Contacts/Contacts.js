import React from 'react'
import './Contacts.css'

const Contacts = () => {

    const styles = {
        contactTab: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            width: 330,
            height: 250,
            boxShadow: '0px 0px 20px 2px rgba(186,186,186,0.75)',
            backgroundColor: '#7B84FF',
            borderLeft: '20px solid #063CAB',
            borderRadius: 20,
            transitionProperty: 'padding',
            transitionDuration: '1s'
        },
        p: {
            fontSize: '1.5rem',
            fontFamily: 'Tahoma, sans-serif',
            textDecoration: 'none',
            color: '#FFF',
            marginLeft: 30
        }
    };

    return (
        <div className="contact-tab" style={styles.contactTab}>
            <p><a style={styles.p} href="mailto: th.brandoli@gmail.com">EMAIL</a></p>
            <p><a style={styles.p} href="https://github.com/ThGnommy" rel="noopener noreferrer" target="_blank">GITHUB</a></p>
            <p><a style={styles.p} href="https://www.linkedin.com/in/thbrandoli/" rel="noopener noreferrer" target="_blank">LINKEDIN</a></p>
        </div>

    )
}

export default Contacts
