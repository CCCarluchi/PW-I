
<script language="javascript" type="text/javascript">
(function () {
    ("#fileupload").change(function () {
        ("#dvPreview").html("");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
        if (regex.test((this).val().toLowerCase())) {
            if ($.browser.msie && parseFloat(jQuery.browser.version) <= 9.0) {
                ("#dvPreview").show();
                ("#dvPreview")[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = (this).val();
            }
            else {
                if (typeof (FileReader) != "undefined") {
                    ("#dvPreview").show();
                    ("#dvPreview").append("<img />");
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        ("#dvPreview img").attr("src", e.target.result);
                    }
                    reader.readAsDataURL((this)[0].files[0]);
                } else {
                    alert("This browser does not support FileReader.");
                }
            }
        } else {
            alert("Please upload a valid image file.");
        }
    });
});
</script>


<template>

    <main>
        <header>
      <br/>
      <div class="arrowContainer" align="left"> 
        <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
      </div>
      <div class="appTitle">
        <h2>Change profile</h2>
      </div>
     </header> 
     
     <article>
        <div class="inputContainer">
          <input type="text" placeholder="*Name"><br/>
        </div>
     <br/><br/>
     <div class="inputContainer">
     <input type="text" placeholder="*Surname"><br/>
     </div>
     <br/><br/>
     <div class="inputContainer">
     <input type="text" placeholder="*Username"><br/>
        </div>
        <br/><br/>
     <div class="inputContainer">
      <input placeholder="*Date of birth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
        </div>
     <br/><br/>
        <img src='https://pbs.twimg.com/media/EztG5y0WQAAPS69?format=jpg&name=medium' class='imgRedonda' /><br/><br/>
        <input type="file" id="actual-btn" hidden/>
        <label class = "labeel" for="actual-btn">Change picture</label><br/><br/>
        <span id="file-chosen">No file chosen</span>

        <input id="fileupload" type="file"/>
        <hr />
        <b>Live Preview</b>
        <br />
        <br />
        <div id="dvPreview">
        </div>
        
        <br/><br/>
        <a href="/Data" id="button2"><button class = "button2">Apply Changes</button></a><br/><br/>
      </article>  
      
      <input style="display:none" type="file" id="my-file">
<button type="button" onclick="document.getElementById('my-file').click()">Choose file\</button>

      <footer>
      </footer>
      
    </main>
  </template>

<style>
.labeel {
  background-color: indigo;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}
#file-chosen{
  margin-left: 0.3rem;
  font-family: sans-serif;
}

#dvPreview
{
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);
    min-height: 400px;
    min-width: 400px;
    display: none;
}
</style>
