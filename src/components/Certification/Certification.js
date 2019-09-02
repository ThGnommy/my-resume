import React from 'react'
import styles from './Certification.css'

const Certification = ({job, year, where, details}) => {

    return (
        <div className={styles.certificationTab}>
                <p style={styles.where}>{where}</p>
            <div className={styles.certDetails}>
                <p className={styles.p}>{job}</p>
                <p className={styles.p}>{year}</p>
            </div>
            <div className={styles.certDescription}>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default Certification
