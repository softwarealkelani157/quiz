<template>
      <div  class="become">
          <div class="container ">
              <div class="h3">BECOME A MEMBER & GET 15% OFF</div>
        <div class="caption d-none d-md-block">
          <div class="img-btn">
            <img src="@/assets/icons/Bottun.png" width="200" alt="" />
          </div>

          </div>
        </div>
      </div>
</template>

<style scoped>
.become{
  position: relative;
  background-color: #EDE635;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 200px;
}
.jewelry .container{
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
}
.caption .img-btn{
    position: relative;
    width: 200px;
}
.caption .img-btn::after {
  content: "SIGN UP FOR FREE";
  color: white;
  font-size: small;
  position: absolute;
  top: 45%;
  left: 35%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
</style>
