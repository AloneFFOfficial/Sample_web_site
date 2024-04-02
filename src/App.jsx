import React from "react";
import "./App.css"; // Import your CSS file
import Navbar from "./Navbar.jsx"; // Import the Navbar component

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="vision">
          <h3>Viksit Bharat @ 2047</h3>
          <p>Ideas For The Vision</p>
          <p>
            "Today the goal of the country is Viksit Bharat, Sashakt Bharat! We
            cannot stop until this dream of a developed India is fulfilled." -
            Narendra Modi, Prime Minister
          </p>
          <p>
            CALLING ALL STUDENT VISIONARIES AND DREAMERS! An Opportunity To
            Participate In India's Bold, Ambitious And Transformative Agenda
          </p>
        </section>
        <section className="notices">
          <h3>Notices/Circulars</h3>
          <ul>
            <li>
              <p>Notice1</p>
            </li>
            <li>
              <p>Notice 2</p>
            </li>
          </ul>
        </section>
        <section className="events">
          <h3>Upcoming Events</h3>
          <ul>
            <li>
              <a href="#">
                Exploring Innovations in Cloud Security, IoT, and eHealth
                Solutions by Dr. Antonino Galletta (27-12-2023)
              </a>
            </li>
            <li>
              <a href="#">Rashtriya Ekta Dewas (31-10-2023)</a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>
            Copyright &copy; 2024 IIC, Shyam Lal College | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
