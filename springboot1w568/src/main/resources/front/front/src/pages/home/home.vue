<template>
<div class="home-preview" :style='{"width":"100%","margin":"0px auto","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>



<div class="recommend" :style='{"width":"100%","margin":"0px auto","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230108/caf263fc0a304a7a907e11691deb7ae2.jpg) repeat-y","flex":"1","display":"flex"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"30px auto 50px","lineHeight":"54px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230108/7c8f15334365458b8ec1c7beedb0d8f4.png) no-repeat center bottom"}'>
		<span :style='{"color":"#249940","fontSize":"20px"}'>养老院信息推荐</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"0 7%","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}'>
		<div :style='{"margin":"0 0 40px","borderRadius":"8px","background":"#fff","display":"inline-block","width":"22%","position":"relative","height":"auto"}' v-for="(item,index) in yanglaoyuanxinxiRecommend" :key="index" @click="toDetail('yanglaoyuanxinxiDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","margin":"0 0 8px","objectFit":"cover","display":"block","height":"275px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","margin":"0 0 8px","objectFit":"cover","display":"block","height":"275px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"4px 10px","lineHeight":"24px","fontSize":"16px","color":"#249940","textAlign":"center"}'>养老院名称:{{item.yanglaoyuanmingcheng}}</div>
			<div class="name line1" :style='{"padding":"4px 10px","lineHeight":"24px","fontSize":"16px","color":"#249940","textAlign":"center"}'>地址:{{item.dizhi}}</div>
			<div class="name line1" :style='{"padding":"4px 10px","lineHeight":"24px","fontSize":"16px","color":"#249940","textAlign":"center"}'>成立日期:{{item.chengliriqi}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('yanglaoyuanxinxi')" :style='{"border":"0","padding":"0 20px","margin":"20px auto 40px","borderColor":"#b5e8af","textAlign":"center","display":"inline-block","minWidth":"110px","background":"#fff","borderWidth":"1px 4px","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"40px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#333","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>


	<!-- 系统简介 -->
	<div :style='{"padding":"20px 7% 60px","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"0px auto 0px","flexWrap":"wrap","background":"#39b457","display":"flex","width":"100%","position":"relative","height":"auto"}'>
	  <div :style='{"minHeight":"52px","margin":"0 auto 40px","color":"#fff","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230108/be8ab030ca3b48cf846466a6aefc3df7.png) no-repeat center bottom","width":"100%","lineHeight":"72px","fontSize":"22px"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"0 0px","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <img :style='{"width":"48%","margin":"0px","objectFit":"cover","display":"block","height":"360px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"width":"24%","margin":"208px 0px 0","objectFit":"cover","display":"block","height":"150px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"width":"24%","margin":"208px 0px 0","objectFit":"cover","display":"block","height":"150px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"border":"1px solid #bdefb6","padding":"10px","boxShadow":"inset 0px 0px 56px 0px #c5f1c0","margin":"0 0 10px 0","color":"rgb(102, 102, 102)","right":"7%","textIndent":"2em","overflow":"hidden","top":"132px","background":"#fff","width":"calc(43% - 0px)","lineHeight":"2","fontSize":"14px","position":"absolute","height":"188px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>

<div class="lists" :style='{"width":"100%","margin":"0px auto","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230108/caf263fc0a304a7a907e11691deb7ae2.jpg) repeat-y","display":"block"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"30px auto 50px","lineHeight":"52px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230108/7c8f15334365458b8ec1c7beedb0d8f4.png) no-repeat center bottom"}'>
	  <span :style='{"padding":"0 4px 0 20px","fontSize":"20px","lineHeight":"52px","color":"#249940"}'>活动信息展示</span>
	</div>
	
	
	
	
	
	
	<!-- 样式五 -->
	<div class="list list5 index-pv1">
		<div id="lists-five-swiperhuodongxinxi" class="swiper-container lists-five-swiper" :style='{"width":"100%","padding":"80px 10px","margin":"0","background":"none"}'>
			<div class="swiper-wrapper">
				<div :style='{"border":"0","cursor":"pointer","borderRadius":"8px","background":"#fff","width":"320px","fontSize":"0","position":"relative","height":"240px"}' class="swiper-slide" v-for="(item,index) in huodongxinxiList" :key="index" @click="toDetail('huodongxinxiDetail', item)">
					<img :style='{"border":"4px solid #d0d0d0","width":"320px","borderRadius":"4px","background":"#fff","height":"240px"}' v-if="preHttp(item.huodongfengmian)" :src="item.huodongfengmian.split(',')[0]" alt="" />
					<img :style='{"border":"4px solid #d0d0d0","width":"320px","borderRadius":"4px","background":"#fff","height":"240px"}' v-else :src="baseUrl + (item.huodongfengmian?item.huodongfengmian.split(',')[0]:'')" alt="" />
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
	
	
	
	
	
	<div @click="moreBtn('huodongxinxi')" :style='{"border":"0","padding":"0 20px","margin":"30px auto 40px","borderColor":"#b5e8af","textAlign":"center","display":"inline-block","minWidth":"110px","background":"#fff","borderWidth":"1px 4px","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"40px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#333","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>

	<!-- 关于我们 -->
	<div :style='{"padding":"30px 7% 80px","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"0px auto 0px","flexWrap":"wrap","background":"#39b457","display":"block","width":"100%","position":"relative","height":"423px"}'>
	  <div :style='{"padding":"0 20px 24px","margin":"0 auto 10px","color":"#fff","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230109/af5e1b2d47df46f18245086c74a2d414.png) no-repeat 8% top,url(http://codegen.caihongy.cn/20230108/be8ab030ca3b48cf846466a6aefc3df7.png) no-repeat center bottom","width":"auto","lineHeight":"80px","fontSize":"20px","minWidth":"180px","height":"68px"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"margin":"0 0 20px","color":"#fff","textAlign":"center","display":"block","width":"100%","lineHeight":"1","fontSize":"16px"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"padding":"0","top":"0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230109/90e1369585fc46dfbbe31bba91b0c5c8.png) no-repeat left bottom","display":"flex","width":"800px","position":"absolute","right":"7%","height":"100%"}'>
	    <img :style='{"padding":"30px","margin":"0 10px","borderColor":"#249940","objectFit":"cover","display":"block","right":"0","borderRadius":"100%","top":"40px","borderWidth":"8px 0px 0px 2px","background":"#fff","width":"420px","position":"absolute","borderStyle":"outset","height":"420px"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"20px","boxShadow":"inset 0px 0px 56px 0px #c5f1c0","margin":"0 0 0 0px","color":"rgb(102, 102, 102)","textIndent":"2em","overflow":"hidden","top":"130px","left":"7%","background":"#fff","width":"32%","lineHeight":"24px","fontSize":"14px","position":"absolute","height":"236px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	
<div class="news" :style='{"width":"100%","margin":"0px auto 0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230108/caf263fc0a304a7a907e11691deb7ae2.jpg) repeat-y","display":"flex"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"30px auto 50px","lineHeight":"54px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230108/7c8f15334365458b8ec1c7beedb0d8f4.png) no-repeat center bottom"}'>
		<span :style='{"color":"#249940","margin":"0 4px 0 0","fontSize":"20px"}'>养老院公告</span>
	</div>
	
	
	
	
	
	
	
	
	
	
	
	<!-- 样式十 -->
	<div v-if="newsList.length" class="list list10 index-pv1" :style='{"padding":"10px 7%","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
	  <div v-if="newsList.length>0" @click="toDetail('newsDetail', newsList[0])" :style='{"width":"48%","margin":"0","position":"relative","background":"none","height":"auto"}' class="new10-list-item animation-box">
	    <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"300px"}' :src="baseUrl + newsList[0].picture" alt="">
		<div :style='{"width":"calc(100% - 80px)","padding":"4px 20px","fontSize":"14px","lineHeight":"28px","overflow":"hidden","color":"#249940"}' class="new9-list-item-title line1">{{newsList[0].title}}</div>
		<div :style='{"fontSize":"12px","lineHeight":"24px","position":"absolute","right":"10px","color":"#999","top":"306px"}' class="new9-list-item-time">{{newsList[0].addtime.split(' ')[0]}}</div>
	    <div :style='{"padding":"0 10px","overflow":"hidden","color":"#666","fontSize":"14px","lineHeight":"24px","textIndent":"2em","height":"72px"}' class="new9-list-item-descript line2">{{newsList[0].introduction}}</div>
		<div :style='{"padding":"0 10px","margin":"0 10px 10px","color":"#999","background":"#fff","display":"inline-block","fontSize":"12px","lineHeight":"24px"}' class="new9-list-item-identification">新闻动态</div>
	  </div>
	  <div v-if="newsList.length>1" :style='{"margin":"0 10px","background":"none","flexDirection":"column","display":"block","width":"48%","position":"relative","justifyContent":"space-between","height":"auto"}'>
	    <div v-for="(item,index) in newsList" v-if="index<4 && index>0" :key="index" @click="toDetail('newsDetail', item)" :style='{"width":"100%","position":"relative","background":"none","height":"auto"}' class="new10-list-item animation-box">
	        <div :style='{"padding":"4px 20px","overflow":"hidden","color":"#333","background":"url(http://codegen.caihongy.cn/20230108/abf1800477a8444c8c27e9fe71949723.png) no-repeat 0px center","width":"calc(100% - 80px)","fontSize":"14px","lineHeight":"28px"}' class="new9-list-item-title line1">{{ item.title }}</div>
	        <div :style='{"fontSize":"12px","lineHeight":"24px","position":"absolute","right":"20px","color":"#fc932c","top":"4px"}' class="new9-list-item-time">{{ item.addtime.split(' ')[0] }}</div>
			<div :style='{"padding":"0","margin":"0 auto","overflow":"hidden","color":"#666","width":"calc(100% - 0px)","fontSize":"14px","lineHeight":"24px","textIndent":"2em","height":"72px"}' class="new9-list-item-descript line2">{{ item.introduction }}</div>
			<div :style='{"padding":"0 10px","fontSize":"12px","lineHeight":"24px","color":"#999","background":"#fff","display":"none"}' class="new9-list-item-identification">新闻动态</div>
	    </div>
	  </div>
	</div>
	
	<div @click="moreBtn('news')" :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"20px auto 40px","borderColor":"#b5e8af","textAlign":"center","display":"block","minWidth":"110px","background":"#fff","borderWidth":"1px 4px","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"40px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#333","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        yanglaoyuanxinxiRecommend: [],

        huodongxinxiList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 11,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "yanglaoyuanxinxi/autoSort";
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 4,
			}}).then(res => {
				if (res.data.code == 0) {
					this.yanglaoyuanxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			this.$http.get('huodongxinxi/list', {params: {
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.huodongxinxiList = res.data.data.list;
					
					// 商品列表样式五
					this.$nextTick(() => {
						new Swiper('#lists-five-swiperhuodongxinxi', {
							loop: true,
							speed: 500,
							slidesPerView: Number(5),
							spaceBetween: Number(10),
							autoplay: {"delay":3000,"disableOnInteraction":false},
							centeredSlides: true,
							watchSlidesProgress: true,
							on: {
								setTranslate: function() {
									var slides = this.slides
									for (var i = 0; i < slides.length; i++) {
										var slide = slides.eq(i)
										var progress = slides[i].progress
										// slide.html(progress.toFixed(2)); //看清楚progress是怎么变化的
										slide.css({
											'opacity': '',
											'background': ''
										});
										slide.transform(''); //清除样式
						
										slide.transform('scale(' + (1.5 - Math.abs(progress) / 4) + ')');
									}
								},
								setTransition: function(transition) {
									for (var i = 0; i < this.slides.length; i++) {
										var slide = this.slides.eq(i)
										slide.transition(transition);
									}
								},
							},
							navigation: {"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},
						});
					})
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, -8px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: #249940;
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: #249940;
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(360deg) scale(1.2) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(360deg) scale(0.8) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
