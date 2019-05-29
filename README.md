# Template For Personal Website

Here you can find a version of the code that I've used to create my personal website.

## Getting Started

The first thing you need to do is clone or download this repository on your machine or development environment.

The template is based on a one-page node app ready to be deployed. Once you have downloaded all the documents and installed the
tools and packages needed to work with it, there is some stuff you should know.

#### App.js
This is a really simple node application using express as a web framework. The reason of this is make it easy for you to expand their capabilities. For example, create a blog or practise with databases. Here you will see the code below.

```
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started...")
});

```
I am using Cloud9 as my IDE, so this is why is defined like that. If you are working locally make sure to change it to the following one if you want to be able to deploy it in Heroku.
```
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
```

#### Main.scss

Here you can customise the CSS framework used to build this website, Bulma. Just add the variables that you want to change and then compile the main.scss file to main.css. Here is a very good article to understand how it works if you are not familiar with SASS.

* [Customizing Bulma's Sass Variables](https://medium.com/@mlars84/customizing-bulmas-sass-variables-725a9588cdd9)

Once you have made all the chagnes use run ```sass styles/main.scss public/css/main.css``` in your terminal to compile everything.




### Prerequisites

To make any changes to this project and run it you are gonna need to install:

* node for your OS - [i.e. Mac](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm)
* sass - [info](https://sass-lang.com/install)

### Steps

 * To check that everything is working you should be able to preview the template in your browser by running ```node app.js``` in your terminal being in the folder where app.js is located and then open a tab in your browser and go to http://127.0.0.1:8000

* If everything is working you can start customising everything:

  1. You can start customising Bulma variables, this includes fonts, colours... etc. See getting started for more info.


```
until finished
```

End with an example of getting some data out of the system or using it for a little demo


## Deployment

One of the easiest way for me to have this app running is use Heroku. To work with Heroku we need to use git in our project and open an account in Heroku. Then install Heroku CLI in your environment if is not already installed. Then log in from your terminal.
```
heroku login -i
     Email:
     Password:
```
Now we need to create a project:
```
    Heroku create
```

This will create a new Heroku app named randomly and will add a remote repository (check it with ```git remote -v```).

**IMPORTANT**: Despite you will find it in this project, always remember to declare start point on scripts of the package.JSON.
```
    "start": "node app.js"
```
Now we are ready for deployment
To rename the app check this:
[https://devcenter.heroku.com/articles/renaming-apps](https://devcenter.heroku.com/articles/renaming-apps)

To custom domain check this:
[https://devcenter.heroku.com/articles/custom-domains](https://devcenter.heroku.com/articles/custom-domains)

If you need more help go to Heroku documentation:
* [Getting Started on Heroku with Node.js | Heroku Dev Center](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
* [Preparing a Codebase for Heroku Deployment | Heroku Dev Center](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Alejandro Marco** - [AM](https://amisdoinghisbest.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
