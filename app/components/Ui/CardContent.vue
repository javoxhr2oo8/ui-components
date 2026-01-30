<script setup>
import FlexBox from './FlexBox.vue';
import Button from './Button.vue';

const { item } = defineProps(['item'])
</script>

<template>
    <FlexBox direction="column" gap="10px">
        <!-- <NuxtImg src="https://miro.medium.com/v2/resize:fit:1200/1*qrHM3MBWI4LlWJdtFkR5CA.jpeg" /> -->
         <img src="https://miro.medium.com/v2/resize:fit:1200/1*qrHM3MBWI4LlWJdtFkR5CA.jpeg" alt="">
        <h2>{{ item }}. Card content</h2>
        <p>
            20$
        </p>
        <Button>
            Buy now
        </Button>
    </FlexBox>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    border-radius: 10px;
}

h2 {
    font-size: 20px;
    @media screen and (max-width: 550px) {
        font-size: 17px;
    }
}

p {
    font-weight: 400;
    font-size: 16px;
    opacity: 0.8;
    letter-spacing: 1px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
}
</style>