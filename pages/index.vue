<template>
  <div>
    <Carousel />

    <Jewelry />
    <ProductCarousel :data="specialOffers" title="SPESIAL OFFERS" />
    <div>
      <img src="/images/dev.jpg" class="w-100" alt="" />
    </div>
    <ProductCarousel :data="newArrivals" title="NEW ARRIVALS" />
    <Become />
  </div>
</template>
<script setup>
const specialOffers = [
  {
    image: "/images/1.jpg",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
  {
    image: "/images/2.jpg",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
  {
    image: "/images/3.jpg",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
  {
    image: "/images/4.jpg",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
  {
    image: "/images/D.png",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
  {
    image: "/images/H.png",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
  {
    image: "/images/F.png",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
  {
    image: "/images/G.png",
    title: "Lorem ipsum dolor",
    price: 899,
    discount: 800,
  },
];
const newArrivals = [
  {
    image: "/images/D.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
  {
    image: "/images/F.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
  {
    image: "/images/G.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
  {
    image: "/images/H.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
  {
    image: "/images/D.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
  {
    image: "/images/F.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
  {
    image: "/images/G.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
  {
    image: "/images/H.png",
    title: "Lorem ipsum dolor",
    price: 899,
  },
];
</script>
