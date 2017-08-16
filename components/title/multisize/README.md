
### TitleMultisize

#### Provides a group of up to 3 title segments, each one with a customizable font size.

Useful when we intend to have a main title with a word that must be highlighted among the other (i.e. having a bigger font size).

The titles can be displayed in horizontal or vertical direction, though "orientation" property:
- horizontal: All titles in the same line when possible.
- vertical: one title above the other.

The available sizes are:
- xl : H1 Tag.
- l  : H2 Tag.
- m  : H3 Tag.
- s  : H4 Tag.
- xs : H5 Tag.


This component is built with the following the structure:

````html
<h3>pre-title</h3><h1>TITLE</h1><h3>post-title</h3>
````
where first and last parts of title are optional.
