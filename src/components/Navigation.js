// imports react
import React from 'react';
// navigation function that highlights the active tab using props

function Navigation(props) {
    const styles = {
        ul: {
            margin: '0',
        },
        list: {
            padding: '0 4em',
        },
        listactive: {
            padding: '0 4em',

        }
    };
    // destructures props
    const { currentTab, setCurrentTab } = props;
    // returns html for nav bar
    return (
        <nav className='p-1' >
            <ul style={styles.ul} className="d-flex fs-2 text-white">
                {/* conditional rendering that changes the active tab to have an active class attribute */}
                <li 
                    style={currentTab === "about" ? styles.listactive : styles.list}
                    className={currentTab === "about" ? "active-tab list-group-item" : "list-group-item"}
                    // calls set current tab fuction when the tab is clicked
                    onClick={() => setCurrentTab("about")}>
                    about me
                </li>
                <li
                    style={currentTab === "portfolio" ? styles.listactive : styles.list}
                    className={currentTab === "portfolio" ? "active-tab list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("portfolio")}>
                    portfolio
                </li>
                <li
                    style={currentTab === "contact" ? styles.listactive : styles.list}
                    className={currentTab === "contact" ? "active-tab list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("contact")}>
                    contact
                </li>
            </ul>
        </nav >
    );
};
// exports navigation function
export default Navigation;