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



 

