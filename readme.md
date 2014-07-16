## Laravel & Gulp Setup

I have been playing around with using Gulp in a Laravel based front-end. This is the basic setup that I came up with, and will be tweaking constantly as I learn more and more about Gulp, and come up with crazier and crazier ideas.

What I consider to be my default Bower includes are: Bootstrap3 (SASS version), Underscore, momentjs, and livestampjs. (Bootstrap install jQuery by default)

At the moment the current Gulpfile is setup to build your application specific CSS and Javascript, as well as the various component and plugin files needed from Bower components. 

### Plans for the future

* Working Imagemin with Blade Templates.
* PHPUnit / Behat Test Runner
* Optional CDN Upload of assets. (That way you can benefit from the speed gain from not loading everything from the same domain)
* Better Logging, either to screen, file or both.
* And more (as I think of it)

Included below is the README contents of the Laravel Framework.

## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/downloads.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching.

Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality. Happy developers make the best code. To this end, we've attempted to combine the very best of what we have seen in other web frameworks, including frameworks implemented in other languages, such as Ruby on Rails, ASP.NET MVC, and Sinatra.

Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the entire framework can be found on the [Laravel website](http://laravel.com/docs).

### Contributing To Laravel

**All issues and pull requests should be filed on the [laravel/framework](http://github.com/laravel/framework) repository.**

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
