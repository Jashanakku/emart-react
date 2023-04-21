/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div id="container">
    <header>
			<img src="images/peluso_construction_logo.gif" alt="Peluso Construction, Inc."/>
		<nav>
        	<ul>
				<li><a href= "index.html">Home</a></li>
        		<li><a href= "services_and_clients.html">Services and Clients</a></li>
        		<li><a href= "about_us.html">About Us</a></li>
        		<li><a href= "contact_us.html">Contact Us</a></li>
        	</ul>
    	</nav>
    </header>
    
	<div id="mainContent">
	
		<h1>Construction Management Professionals</h1>			
		<h2>Contact Us</h2>
			<p>Peluso Construction works with clients across central and eastern Massachusetts. Call/fax us or fill out the form below for more information about our services, experience, and bids.</p>
			<h3>Address</h3>
				<p> Peluso Construction, Inc.
				<br/>81 Bechan Rd.
				<br/>Oakham, MA 01068</p>
				<p><a href= "http://bit.ly/pelusoconstructioninc">Google Maps</a></p>
			<h3>Phone and Fax</h3>
				<p>508-882-3174
				<br/>508-882-3914</p>
			<h3>Contact</h3>
				<form action="#" method="get" id="myForm">0
					<p><label>Company Name:</label>
					<input type="text" name="company_name"/></p>
					<p><label>First Name:</label>
          			<input type="text" name="first_name"/></p>
          			<p><label>Last Name:</label>
					<input type="text" name="last_name"/></p>
					<p><label>Phone:</label>
					<input type="text" name="phone"/></p>
					<p><label>Email:</label>
					<input type="text" name="email"/></p>
					<p><label>Questions Or Comments:</label>
					<textarea></textarea></p>
					
					<p><em>Would you prefer to be contacted by phone or email?</em></p>
					<p><label>Contact me by phone:</label>
					<input type="checkbox" name="contact" value="Phone" /></p>
					<p><label>Contact me by email:</label>
					<input type="checkbox" name="contact" value="Email" /></p>
					<p><label>No preference:</label>
					<input type="checkbox" name="contact" value="Either" /></p>
					
        			<p><input type="submit" value="Submit"/></p>
        			</form>
				<p> How did you hear about us?</p>
					<select>
  						<option>Angie's List</option>
  						<option>Yelp</option>
  						<option>From A Former Client</option>
  						<option>Other</option>
  					</select>
  				<p></p>
    
	</div>
	<footer>
		Peluso Construction, Inc. is fully licensed (CS00011737) and insured.
	</footer>
</div>
    </>
  )
}

export default About
