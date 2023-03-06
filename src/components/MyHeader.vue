<template>
    <div>
        <div class="header">
            <div class="making_container">
                <div class='making_logo'></div>
                <div class="making_name">Производство</div>
            </div>
            <div class="menu">
                <template v-for="menuHeaderList in menuHeaderLists" :key="menuHeaderList.value">
                    <div class="item_menu" @click="changeActiveMenu(menuHeaderList.id)">
                        <div class="icon_menu"><img :src="menuHeaderList.img"></div>
                        <div class="name_menu">{{ menuHeaderList.title }}</div>
                    </div>
                </template>
            </div>
        </div>
        <div class="sub_menu">
            <template v-for="subMenuList in subMenuLists" :key="subMenuList.value">
                <div class="item_sub_menu" v-if="idActiveMenu == subMenuList.parentId">
                        <router-link :to="subMenuList.url">
                            <div>{{ subMenuList.title }}</div>
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
                { id: '1', title: 'Обороты', img: require("../../public/img/turns.svg") },
                { id: '2', title: 'Логистика', img: require("../../public/img/turns.svg") }
            ],
            subMenuLists: [
                { id: '1', title: 'Год', parentId: '1', url: '/' },
                { id: '2', title: 'Месяц', parentId: '1', url: '/turn/month' },
                { id: '3', title: 'Неделя', parentId: '1', url: '/turn/week' },
                { id: '4', title: 'Сутки', parentId: '1', url: '/turn/day' },
                { id: '5', title: 'Доставка', parentId: '2', url: '/logistics/delivery' },
                { id: '6', title: 'Товары', parentId: '2', url: '/logistics/gds' }
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
/* === header === */
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
    background: url(../../public/img/making_icon.svg);
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

/* === sub menu === */
.sub_menu {
    display: flex;
    height: 40px;
    border-bottom: 1px solid #EDEDED;
}

.item_sub_menu {
    display: flex;
    align-items: center;
}

.item_sub_menu:nth-child(1) {
    margin-left: 20px;
}

.item_sub_menu:nth-child(1n) {
    margin-left: 24px;
}

.item_sub_menu>a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
}

.item_sub_menu>a>div {
    color: #3686BB;
}

.item_sub_menu>a:hover div{
    color: #165F8E;
}
.item_sub_menu>a:active div{
    color: #2A73A3;
}
</style>