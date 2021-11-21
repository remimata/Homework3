<template>
  <div class="about">
    <p id='title'>About us</p>
    <div class="post_it_container">
      <img class='postIt1' src="postit_about_us.png" alt="PostIt" width="400px" height="400px">
      <p class='textPostIt1'>We are currently developping <br> our web application PostIt !</p>
      <p class='textPostIt1_1'>It allows people to add post <br> to a page, some kind of social <br> media but on post it notes.</p>
    </div>
    <p>For now you can navigate threw the webpage, but the really important page is Main, you can add postIt, like others ones (or yours...) and reset the like count</p>
    <p>Thank you for using our application, we'll keep working on it and try to make it better with time !</p>
 


    <!--
    <div class="post_it_container2">
      <img class='postIt2' src="postit_about_us.png" alt="PostIt" width="400px" height="400px">
      <p class='textPostIt2'>For now you can navigate threw <br> the webpage, but the really important <br> page is Main, you can add postIt, like <br> others ones (or yours...) and <br>reset the like count</p>
      <p class='textPostIt2_1'>Thank you for using our <br> application, we'll keep working on it and <br> try to make it better with time !</p>
    </div>
    <p>We are currently developping our web application PostIt !</p>
    <p>It allows people to add post to a page, some kind of social media but on post it notes.</p>
    <p>For now you can navigate threw the webpage, but the really important page is Main, you can add postIt, like others ones (or yours...) and reset the like count</p>
    <p>Thank you for using our application, we'll keep working on it and try to make it better with time !</p>
    !-->
  </div>
</template>

<script>
export default {
  components: {

    }
  
}
</script>
<style lang="scss" scoped>
.about
{
  //display: flex;
}

#title
{
  text-align: center;
  font-size: 50px;
  font-weight : bold;
}

p
{
  font-size: 20px;
  font-weight : bold;
  color :white;
}

.post_it_container
{
  position: relative;
  margin-top : 0px;
  //text-align: center;
  color: white;
}


.postIt1
{
  -webkit-transform:rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
  z-index: 100;
  margin-left: 150px;
}

.textPostIt1
{
  -webkit-transform:rotate(25deg);
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  transform: rotate(25deg);
  font-weight: 700;
  font-size: 17px;
  margin-top: 0px;
  margin-left: 180px;
  //background-color: white;
}

.textPostIt1_1
{
  -webkit-transform:rotate(25deg);
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  transform: rotate(25deg);
  font-weight: 700;
  font-size: 17px;
  margin-top: 0px;
  margin-left: 152px;
}

/*
.postIt2
{
  -webkit-transform:rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  transform: rotate(5deg);
  z-index: 100;
  margin-left: 600px;
}

.textPostIt2
{
  -webkit-transform:rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  transform: rotate(5deg);
  font-weight: 700;
  position: absolute;
  font-size: 17px;
  margin-left: 600px;
}

.textPostIt2_1
{
  -webkit-transform:rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  transform: rotate(5deg);
  font-weight: 700;
  font-size: 17px;
  position: absolute;
  margin-top: 100px;
  margin-left: 600px;
}
*/
</style>