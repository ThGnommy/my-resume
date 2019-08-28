import React from 'react'
import './Portfolio.css'

const Portfolio = () => {

    const styles = {
        portfolioTab: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            width: 330,
            height: 150,
            boxShadow: '0px 0px 20px 2px rgba(186,186,186,0.75)',
            backgroundColor: '#E26152',
            borderLeft: '20px solid #8B0D13',
            borderRadius: 20,
            transitionProperty: 'padding',
            transitionDuration: '1s',
            marginTop: 40
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
        <div className="portfolio-tab" style={styles.portfolioTab}>
            <p><a style={styles.p} href="https://gnommysound.netlify.com/" rel="noopener noreferrer" target="_blank">GAME AUDIO PORTFOLIO</a></p>
        </div>
    )
}

export default Portfolio
