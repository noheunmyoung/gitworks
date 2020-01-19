// 실습1
Vue.component('todo-footer', {
    template: '<p>This is another global child component</p>'
});

var cmp = {
    template: '<p>This is another local child component</p>'
};

var app = new Vue({
    el: '#app',
    data: {
        message: 'this is parent component'
    },
    components: {
        'todo-list': cmp
    } 
});


// 실습2
Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>' 
});

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>' 
}); 

var app = new Vue({
    el: '#app1',
    data: {
        message: 'Hello Vue! passed from Parent component1',
        anotherMessage: 'Hello Vue! passed from Parent component2'
    }
});

//실습 3
var Body = { template: '<div>This is Body</div>' };
var Header = { template: '<div>This is Header</div>' };
var Footer = { template: '<div>This is Footer</div>' }; 
 
// <router-view>의 name 속성과 컴포넌트를 연결
var router = new VueRouter({
    routes: [{
            path: '/',
            components: {
                default: Body,
                header: Header,
                footer: Footer
            }
        }, 
    ]
});

// 뷰 인스턴스에 라우터 추가
var app = new Vue({
    router
}).$mount('#app2');


//실습 4
var app = new Vue({
    el: '#app3',
    data: {
        message: '첫번째 메세지',
        secondMessage: '두번째 메세지',
        uid: 'noh',
        flag: true
    },
    methods: {
        clickBtnType() {
            console.log("hi");
            alert("안녕");
        },
    }
});





 

