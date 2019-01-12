//引入gulp
let gulp = require("gulp");
//引入gulp-connect
let connect = require("gulp-connect");

//合并插件
let concat = require("gulp-concat");
//压缩插件
let uglify = require("gulp-uglify");
//重命名插件
let rename = require("gulp-rename");
//es6转es5
let babel = require("gulp-babel");

let sass = require("gulp-sass-china");
	

gulp.task("index",function(){
	gulp.src("src/**/*").pipe(gulp.dest("dist")).pipe(connect.reload())
})
gulp.task("watch",function(){
	gulp.watch(["src/**/*"],["index"])
})

gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8888,
		livereload:true
	})
})

gulp.task("both",["watch","server"])

//gulp.task("concat",function(){
//	gulp.src(["src/js/time.js","src/js/work.js"])
//	.pipe(concat("index.js"))
//	.pipe(uglify())
//	.pipe(rename("index.mini.js"))
//	.pipe(gulp.dest("dist/js"))
//	
//	
//	
//	
//	
//})

gulp.task("sass",()=>{
	gulp.src("./src/sass/*.scss")	//将css变成scss，因为再styles的文件下已经没有css文件
	.pipe(sass())
	.pipe(gulp.dest("./dist/sass"));
});


