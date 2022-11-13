<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <main>
    <header>
        <br/>
        <div class="arrowContainer" align="left"> 
            <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
        </div>
        <div class="searchTitle">
        <h2>Search Events</h2>
      </div>
    </header>
   
    <nav>
        <div class="searchCont">
            <h3>Name</h3>
            <input type="text" placeholder="Event name..."><br/>
            
        </div>
       
        <div class="searchCont">
            <h3>Location</h3>
            <input type="text" placeholder="Event Location..."><br/>
            
        </div>

        <div class="searchCont">
            <h3>Start date</h3>
            
            <input type="text" placeholder="Event name..."><br/>
            
        </div>

    </nav>
    </main>

</template>