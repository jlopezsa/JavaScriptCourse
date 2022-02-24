# Introduction

# Elements

* <code>document.getElementBTagName("tag_name")</code>
* <code>document.getElementById("id_name")</code>, # isn't required
* <code>document.gerElementByClassName("class_name")</code>, '.' isn't required.

## Selectors

### querySelector() method

* tag: <code>document.querySelector("tag_name")</code>
* id: <code>document.querySelector("#id_name")</code>
* class: <code>document.querySelector(".class_name")</code>

### querySelectorAll() method

* tag: <code>document.querSelectorAll("tag_name")</code>
* id: <code>document.querSelectorAll("#id_name")</code>
* class: <code>document.querSelectorAll(".class_name")</code>

# jQuery

jQuery is a JavaScript library. "It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers." [1].


To use jQuer library, the following sentence has got to add 

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
```

in the <body></body> label 

```js
<body>
    <!-- your code -->
    <!--====================================================-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="events.js"></script>
</body>
```

## Adding elements
Elements may be inserted in the HTML code using the following sentences, in a **js** code, as:

```js
jQuery('Body').append("<h2>Hi JJLS</h2>");

```

or

```js
$('Body').append("<h2>This is another subtitle</h2>")
```

<code>append</code> add the content after of the paragraph (end of the page)

<code>prepend</code> add the content before of the paragraph (begin of the page)

See [MakeItReal](https://guias.makeitreal.camp/jquery/manipulando-html) to search more properties of jQuery.

## Listening events


# References

1. https://jquery.com/
2. https://guias.makeitreal.camp/jquery/manipulando-html
