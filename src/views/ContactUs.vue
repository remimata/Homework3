<template>
  <div id = 'contactUs'>
    <p id = 'title'>Contact Us</p>
    <div id = 'frame'>
      <br><p class = 'type_mail'>Email : </p><p class = 'mail'> bestwadteam@ut.ee</p>
      <br><p class = 'type_phone'>Phone number : </p><p class = 'phone'> 0874589132</p><br>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#title
{
  text-align: center;
  font-size: 50px;
  font-weight : bold;
}

#frame
{
  /*margin-top: 10%;*/
  margin-left: auto;
  margin-right: auto;
  border-width: 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 16px;
  width: 580px;
  background-color: #42b983;
  }

.type_mail
{ 
  margin-top: 0px;
  text-align: center;
  color: auto;
  font-size: 35px;
  font-weight: bold;
}

.type_phone
{
  text-align: center;
  color: auto;
  font-size: 35px;
  font-weight: bold;
}
     
.mail
{ 
  text-align: center;
  color: auto;
  font-size: 35px;
  font-weight:lighter;
}

.phone
{
  margin-bottom: 0px;
  text-align: center;
  color: auto;
  font-size: 35px;
  font-weight:lighter;
}



</style>