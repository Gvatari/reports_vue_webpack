<template>
    <div>
        <div class="header">
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </nav>

            <div class="making_container">
                <div class='making_logo'></div>
                <div class="making_name">Производство</div>
            </div>
            <div class="menu">
                <div class="item_menu" v-for="menuHeaderList in menuHeaderLists" :key="menuHeaderList.value">
                    <div class="icon_menu"><img :src="menuHeaderList.img"></div>
                    <div class="name_menu" @click="changeActiveMenu(menuHeaderList.id)">{{ menuHeaderList.title }}</div>
                </div>
            </div>
        </div>
        <div>
            <template v-for="subMenuTurnsList in subMenuTurnsLists" :key="subMenuTurnsList.value" >
                <div v-if="idActiveMenu == subMenuTurnsList.parentId">
                    <router-link :to="subMenuTurnsList.url">
                        <div>{{ subMenuTurnsList.title }}</div>
                    </router-link>
                </div>
            </template>
        </div>
    </div>

    <router-view />
</template>

<script>
export default {
    name: 'my-header',

    data() {
        return {
            menuHeaderLists: [
                { id: '1', title: 'Обороты', img: '../../public/turns.svg' },
                { id: '2', title: 'QWERTY', img: '../../public/turns.svg' },
            ],
            subMenuTurnsLists: [
                { id: '1', title: 'Год', parentId: '1', url: '/turn/year' },
                { id: '2', title: 'Месяц', parentId: '1', url: '/turn/month' },
                { id: '3', title: 'Неделя', parentId: '1', url: '/turn/week' },
                { id: '4', title: 'Сутки', parentId: '1', url: '/turn/day' },
                { id: '5', title: 'qwerty', parentId: '2', url: '/turn/day' },
                { id: '6', title: 'qwertyyz', parentId: '2', url: '/turn/day' }
            ], 
            idActiveMenu: 1
        }
    },
    methods: {
        changeActiveMenu(id) {
            this.idActiveMenu = id;
        }
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 60px;
    background-color: #3997D3;
    display: flex;
}

.making_container {
    display: flex;
    align-items: center;
    width: 170px;
}

.making_logo {
    margin-left: 16px;
    margin-right: 8px;
    width: 24px;
    height: 24px;
    background: url(../../public/making_icon.svg);
}

.making_name {
    font-weight: 700;
    color: #fff;
    cursor: default;
}

.menu {
    display: flex;
}

.icon_menu {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
}

.name_menu {
    font-weight: 500;
    color: #fff;
}

.item_menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 84px;
    cursor: pointer;
}
</style>