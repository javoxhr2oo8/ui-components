<script setup>
import Card from '../Ui/Card.vue';
import GridBox from '../Ui/GridBox.vue';
import CardContent from '../Ui/CardContent.vue';
import Toggle from '../Ui/Toggle.vue';
import FlexBox from '../Ui/FlexBox.vue';
import Button from '../Ui/Button.vue';
import window from '../AppWindow/window.vue';
import Input from '../Ui/Input.vue';
import Select from '../Ui/Select.vue';
import Accordion from '../Ui/Accordion.vue';

const isLightOn = ref(false);
const isLightOff = ref(true);
const isLightSquare = ref(false);
const isLightSquareOff = ref(true);

const appWindowSwitch = ref(false)

const selectedCollection = ref('');
const isCityOpen = ref(false);
const collections = [
    { label: 'iPhone', value: 'phone' },
    { label: 'iPad', value: 'pad' },
    { label: 'iPod', value: 'm3' },
    { label: 'Airpods', value: 'garniture' },
    { label: 'Apple watch', value: 'watch' },
    { label: 'Mac book', value: 'laptop' },
];

const selectedModel = ref('');
const models = [
    {
        label: "Iphone 7",
        value: "iphone 7"
    },

    {
        label: "Iphone 8",
        value: "iphone 8"
    },

    {
        label: "Iphone 8+",
        value: "iphone 8+"
    },

    {
        label: "Iphone x",
        value: "iphone x"
    },

    {
        label: "Iphone 11",
        value: "iphone 11"
    },

    {
        label: "Iphone 12",
        value: "iphone 12"
    },

    {
        label: "Iphone 13",
        value: "iphone 13"
    },

    {
        label: "Iphone 14",
        value: "iphone 14"
    },

    {
        label: "Iphone 15",
        value: "iphone 15"
    },

    {
        label: "Iphone 16",
        value: "iphone 16"
    },
]


const faq = [
  { 
    title: 'Настройки профиля', 
    content: 'Здесь вы можете изменить свой пароль и аватар.', 
    icon: 'fa-gear' 
  },
  { 
    title: 'Статус доставки', 
    content: 'Ваш заказ уже в пути и прибудет в течение 3 дней.', 
    icon: 'fa-truck' 
  },
  { 
    title: 'Техподдержка', 
    content: 'Мы работаем 24/7. Напишите нам в чат.', 
    icon: 'fa-life-ring' 
  }
]
</script>

<template>
    <main>
        <div class="container">
            <div class="main-wrapper">

                <FlexBox direction="column" gap="10px">
                    <Card>
                        <FlexBox gap="5px">
                            <Button width="fit-content" class="search-btn"><i class="fas fa-bars"></i></Button>
                            <Button width="fit-content" class="search-btn"><i class="fas fa-search"></i></Button>
                            <Input placeholder="Search" icon="fas fa-search" />
                        </FlexBox>
                    </Card>

                    <Card>
                        <FlexBox gap="10px">
                            <Button><i class="fas fa-unlock"></i>Garant</Button>
                            <Button><i class="fas fa-cog"></i>Settings</Button>
                        </FlexBox>
                    </Card>

                    <Card :style="{ zIndex: isCityOpen ? 100 : 1 }">
                        <FlexBox gap="10px">
                            <Select v-model="selectedCollection" :options="collections" placeholder="Collection"
                                @toggle="(val) => isCityOpen = val" />
                            <Select v-model="selectedModel" :options="models" placeholder="Model"
                                @toggle="(val) => isCityOpen = val" />
                        </FlexBox>
                    </Card>

                    <GridBox>
                        <Card v-for="item in 6">
                            <CardContent :item="item" />
                        </Card>
                    </GridBox>

                    <Card>
                        <FlexBox gap="20px">
                            <Toggle v-model:toggle="isLightOn" />
                            <Toggle v-model:toggle="isLightSquare" :square="true" />
                        </FlexBox>
                    </Card>

                    <Accordion :items="faq"/>

                    <GridBox class="elements-box" v-if="false">
                        <Card>
                            <FlexBox gap="20px">
                                <Toggle v-model:toggle="isLightOn" />
                                <Toggle v-model:toggle="isLightOff" />
                                <Toggle v-model:toggle="isLightSquare" :square="true" />
                                <Toggle v-model:toggle="isLightSquareOff" :square="true" />
                            </FlexBox>
                        </Card>

                        <Card>
                            <Button @click="appWindowSwitch = true">Build a web app using the components. click the
                                button
                                to open window</Button>
                        </Card>
                    </GridBox>
                </FlexBox>

                <window v-model="appWindowSwitch" title="My App" bgApp="#3c3c3c" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding: 20px 0;
}

.search-btn {
    padding-left: 15px;
    padding-right: 15px;
}
</style>