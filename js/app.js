var app=angular.module("dgApp",[]);

app.controller("mainCtrl",function($scope){
	
	$scope.playPronounce=function(){
		var x=document.getElementById("namePronounce");
		x.play();
	};
	
	$scope.openPopSection=function(url){
		
		$('.inline-menu-container').removeClass('showx');
	    $('.sidebar-menu').addClass('hidex');
	    $('.content-blocks.pop').addClass('showx');
	    $('.content-blocks.pop section').load(url);
	 	
	}
	
	$scope.portfolioItems=[
		/*{
			"class":"ai",
			"url":"post-single.html",
			"img_src":"images/portfolio/masonry/004.jpg",
			"postTitle":"AI Part 1",
			"hoverContentTitle":"Part 1",
			"postAuthor":"Deepali Garg",
			"postDate":"Jun 10,2018",
			"postCategory":"AI",
			"postBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},*/
		{
			"class":"prep",
			"url":"partials/highlights/gradSchool/why-i-decided-to-go-to-grad-school.html",
			"img_src":"partials/highlights/gradSchool/masters-degree-in-education.png",
			"postTitle":"Why I decided to go to graduate school",
			"hoverContentTitle":"Why I decided to go to graduate school",
			"postAuthor":"Deepali Garg",
			"postDate":"Jul 26,2018",
			"postCategory":"Graduate School",
			"postBody":"Back in the winter of 2016, I decided I didn't want to stick to the status quo. I'd landed my dream job, but something was amiss."
		},
		{
			"class":"prep",
			"url":"partials/highlights/gradSchool/acing-the-gre.html",
			"img_src":"partials/highlights/gradSchool/gre-destroyed.jpg",
			"postTitle":"How I scored 325 on the GRE",
			"hoverContentTitle":"How I scored 325 on the GRE",
			"postAuthor":"Deepali Garg",
			"postDate":"Jul 26,2018",
			"postCategory":"Graduate School",
			"postBody":"A lot of people have asked me how I prepared for the GRE."
		},
		{
			"class":"tech",
			"url":"partials/highlights/technology/trump-news-blocker.html",
			"img_src":"partials/highlights/technology/no-trump-zone.jpg",
			"postTitle":"I made a Chrome extension to block all Trump-related news on Facebook.",
			"hoverContentTitle":"I made a Chrome extension to block all Trump-related news on Facebook.",
			"postAuthor":"Deepali Garg",
			"postDate":"Jul 26,2018",
			"postCategory":"Technology",
			"postBody":"Like many millenials, I like wasting time mindlessly scrolling my Facebook news feed."
		},
	
	]
	
	
	$scope.blogItems={
		
		"travel":[
			{
				"class":"travel",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"hoverContentTitle":"Part 1"
			},
			{
				"class":"travel",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"hoverContentTitle":"Part 1"
			},
			{
				"class":"travel",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"hoverContentTitle":"Part 1"
			},
			{
				"class":"travel",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"hoverContentTitle":"Part 1"
			},
			{
				"class":"travel",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"hoverContentTitle":"Part 1"
			},
			{
				"class":"travel",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"hoverContentTitle":"Part 1"
			}
		
		],
		
		"read":[
			{
				"class":"read",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"postTitle":"Read Part 1",
				"postAuthor":"Deepali Garg",
				"postDate":"Jun 10,2018",
				"postCategory":"Read",
				"postBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			},
			{
				"class":"read",
				"img_src":"images/portfolio/masonry/004.jpg",
				"postTitle":"Read part 2",
				"hoverContentTitle":"Part 1",
				"postAuthor":"Deepali Garg",
				"postDate":"Jun 10,2018",
				"postCategory":"Read",
				"postBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			}
		
		],
		"language":[{
				"class":"language",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"postTitle":"Language Part 1",
				"postAuthor":"Deepali Garg",
				"postDate":"Jun 10,2018",
				"postCategory":"Languages",
				"postBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			},
			{
				"class":"language",
				"img_src":"images/portfolio/masonry/004.jpg",
				"postTitle":"Language part 2",
				"hoverContentTitle":"Part 1",
				"postAuthor":"Deepali Garg",
				"postDate":"Jun 10,2018",
				"postCategory":"Languages",
				"postBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			}],
		"trends":[
			{
				"class":"trends",
				"url":"post-single.html",
				"img_src":"images/portfolio/masonry/004.jpg",
				"postTitle":"Trends Part 1",
				"postAuthor":"Deepali Garg",
				"postDate":"Jun 10,2018",
				"postCategory":"Trends",
				"postBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			},
			{
				"class":"trends",
				"img_src":"images/portfolio/masonry/004.jpg",
				"postTitle":"Trends part 2",
				"hoverContentTitle":"Part 1",
				"postAuthor":"Deepali Garg",
				"postDate":"Jun 10,2018",
				"postCategory":"Trends",
				"postBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			}
		
		]
		
		
	};
	
	
});

