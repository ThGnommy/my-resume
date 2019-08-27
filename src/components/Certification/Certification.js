import React from 'react'
import './Certification.css'

const Certification = ({job, year, where, details}) => {

    const styles = {
        p: {
            fontStyle: 'italic',
            opacity: '0.8',
            
        },
        where: {
            display: 'flex',
            justifyContent: 'center',
            fontStyle: 'italic',
            opacity: '0.8',
            borderBottom: '1px solid #000',
            paddingBottom: 3,
            width: '90%',
            margin: 'auto',
            borderColor: '#8b0d13',
            marginBottom: 10
    }}

    return (
        <div className="certification-tab">
                <p  style={styles.where}>{where}</p>
            <div className="cert-details">
                <p style={styles.p}>{job}</p>
                <p style={styles.p}>{year}</p>
            </div>
            <div className="cert-description">
                <p>{details}</p>
            </div>
        </div>
    )
}

export default Certification
