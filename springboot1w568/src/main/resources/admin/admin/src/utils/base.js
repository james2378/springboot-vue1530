const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1w568/",
            name: "springboot1w568",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1w568/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "养老院管理系统"
        } 
    }
}
export default base
