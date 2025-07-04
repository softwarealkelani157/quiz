<template>
  <div id="carouselExampleCaptions" class="carousel mb-5 carousel-dark slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="3"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="4"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/Header.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h3>SALE</h3>
          <p>access a limited selection with up to 70% Off</p>
          <div class="img-btn">
            <img src="@/assets/icons/Bottun.png" width="200" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-indicators {
  bottom: -50px;
}
.carousel-caption {
  width: 250px;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  right: 0;
  text-transform: uppercase;
}
.carousel-caption:dir(rtl){
  right: unset !important;
    left: 20px !important;
}
.carousel-caption .img-btn{
    position: relative;
}
.carousel-caption .img-btn::after {
  content: "Shop Now";
  color: white;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
</style>
