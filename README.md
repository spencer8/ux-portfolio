## Spencer's Portfolio

A simple project built on webpack, handlebars, sass and babel.

### Installation

    npm install
    
### Usage

Run the following to start up the development server and watch for changes.

    npm start
    
Browse to `http://localhost:8080/`

Run the following for a production build (minification, etc.).

    npm run build

The generated `docs` folder is created with the following structure:

    docs
      about
        index.html
      css
        about.css
        index.css
      img
      	logo.png
      js
        about.js
        index.js
      favicon.ico
      index.html

The generated `html` files will have links to their respective `[name].css` and `[name].js` files.

Contents of the `static` directory are simply copied to `dist`.

To add a new page to the site, create a view folder with content similar to `home` and `about` and update the `webpack.config.js` as follows:

##### Entry

Deploy using github pages set to the master/docs folder


##### Entry

```javascript
entry: {
	index: './src/views/home/home.js',
	about: './src/views/about/about.js',
	//new entry goes here
},
```

##### HtmlWebpackPlugin

```javascript
new HtmlWebpackPlugin({
	//new instance goes here, chunks value should match key from entry above
})
```
