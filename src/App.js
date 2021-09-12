import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import InterestList from './components/InterestList';
import WeekendProjectList from './components/WeekendProjectList';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import logo1 from './assets/1.jpg'
import logo2 from './assets/2.jpg'
import logo3 from './assets/3.jpg'

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <Carousel>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}


function App() {

  const selected = 'item1';
  let message = `My portfolio. 
   A showcase of the projects I've worked on`


  return (
    <div className="App">
      <div className="mainContainer">
        <Title
          message={message} />
      </div>

      <div className="mainContainer">
        <Title
          message="I'm interested in..." />
        <InterestList />
      </div>

      <div className="mainContainer grey">
        {/* <Title
          message="3rd." /> */}
        <Carousel
          next={(next, active) => console.log()}
          prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
          <div>
          <div>
                  <img src={logo1} />
                </div>
                </div>
                <div>
                    <img src={logo2} />
                </div>
                <div>
                    <img src={logo3} />
                </div>
          
        </Carousel>
      </div>

      <div className="mainContainer extendable">
        <Title
          message='"Weekend" Projects' />
        <WeekendProjectList />
      </div>


    </div>
  );
}

export default App;
