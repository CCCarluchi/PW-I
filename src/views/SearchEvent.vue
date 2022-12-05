<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <main>
    <header>
        <br/>
        <div class="arrowContainer"> 
            <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
        </div>
        <div class="searchTitle">
          <h2>Search Events</h2>
        </div>
    </header>
   
    <nav>
        <div class="searchContainer2">
          <h2>Search</h2>
          <div class="inputContainer">
            <input type="text" placeholder="Search event by name">
          </div>
          <div class="inputContainer">
            <input placeholder="Search event by start date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
          </div>
          <div class="inputContainer">
            <input type="text" placeholder="Search event by location">
          </div>
          <div class="inputContainer">
            <button type="submit"><i class="fa fa-search"></i></button><br/><br/>
          </div>
        </div>
        <br/><br/><br/>
      </nav>
    </main>

</template>