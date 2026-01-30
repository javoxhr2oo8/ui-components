<script setup>
import Card from '../Ui/Card.vue';
import GridBox from '../Ui/GridBox.vue';
import CardContent from '../Ui/CardContent.vue';
import Toggle from '../Ui/Toggle.vue';
import FlexBox from '../Ui/FlexBox.vue';
import Button from '../Ui/Button.vue';
import window from '../AppWindow/window.vue';
import Input from '../Ui/Input.vue';

const isLightOn = ref(false);
const isLightOff = ref(true);
const isLightSquare = ref(false);
const isLightSquareOff = ref(true);

const appWindowSwitch = ref(false)
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