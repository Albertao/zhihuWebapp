var home = new Vue({
    el: "#app",
    ready: function () {
        //port repost
        this.$http.get('http://localhost:2080/api.php?url=http://news-at.zhihu.com/api/4/news/latest',function(data) {
            this.stories = data.stories;
            this.top_stories = data.top_stories;
        });
    },
    data: {
        top_stories: [],
        stories: []
    },
    methods: {

    }
});