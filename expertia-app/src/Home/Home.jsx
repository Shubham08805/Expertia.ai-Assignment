import React from 'react'
import  './Home.css'

function Home() {
  return (
      <>
          <div className="home-container">
            <div className="home-container-items">   
              <div className="home-header">
                  <h2 className='home-hello'>Hello</h2>
                  <h3 className="home-john">John Doe</h3>
                  <p className="home-para">Good to see you here!</p>

              </div>
              <div className="home-task">
                  
              </div>
              <form action="">
                  <input type="text" name="home-task-input" id="home-task-input" placeholder='Enter your task'/><br />
                  <input type="submit" value="Add New Task" className='home-task-add' id="home-task-add"/>
              </form>

            </div>   
          </div>

      </>
  )
}

export default Home