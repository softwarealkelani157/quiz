<template>
      <div  class="jewelry">
        <img src="/images/Jewelry.jpg" class="d-block w-100" alt="..." />
          <div class="container">
        <div class="caption d-none d-md-block">
          <div class="img-btn">
            <img src="@/assets/icons/BottunWhite.png" width="200" alt="" />
          </div>

          </div>
        </div>
      </div>
</template>

<style scoped>
.jewelry{
  position: relative;
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
  content: "SEE MORE";
  color: black;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
</style>
