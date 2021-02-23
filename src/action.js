import { useState } from "react";

function Action() {
    
    const skills = [
        {name: 'JS', des: 'programming language'},
        {name: 'Python', des: 'programming language'},
        {name: 'C', des: 'programming language'},
    ];
 
    const navs = ['Home', 'Skills', 'Spaces', 'Contact'];

    

    const returnAction = (
    <div>
    <ul>
        {
            navs.map(nav => {
                return <NavigationBar navItem={nav}></NavigationBar>
            })
        }
    </ul>

    <Count></Count>
    
    {
        skills.map(skill => {
        return <Skills skill={skill}></Skills>;
    })
    }
    {/* <Skills skill={skills[0]}></Skills>
    <Skills skill={skills[1]}></Skills>
    <Skills skill={skills[2]}></Skills> */}
        
    </div>
    );

    return returnAction;


    function Skills(props) {
        const {name, des} = props.skill;

        const skillStyle = {
            border: '2px solid black',
            margin: '10px'
        }
        const skillsDiv = (
            <div style={skillStyle}>
                <h2>Skill name: {name}</h2>
                <p>Description: {des}</p>
            </div>
        )
        return skillsDiv;
    }

    function NavigationBar(props) {
        const navItemStyle = {
            textDecoration: 'none',
            display: 'inline-block',
            margin: '0.5rem',
            color: 'gold'
        }
        const navItem = props.navItem;
        return <li style={navItemStyle}><a href="#" style={navItemStyle}>{navItem}</a></li>
        
    }

    function Count(props) {
        const [count, setCount] = useState(0);

        return (
            <div>
                <h3>Count: {count}</h3>
                <p>One step forward, hundred steps backward!</p>
                <button onMouseMove={() => setCount(count-1)}>Decrease</button>
                <button onClick={() => setCount(count+1)}>Increase</button>
            </div>
        );
    }

}
export default Action;