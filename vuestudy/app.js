Vue.component('todo-footer', {
    template: '<p>This is another global child component</p>'
});

var cmp = {
    template: '<p>This is another local child component</p>'
};

var app = new Vue({
    el: '#app4',
    data: {
        message: 'this is parent component'
    },
    components: {
        'todo-list': cmp
    }

});