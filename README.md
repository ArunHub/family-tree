# Family tree structure

### What ?
It is a family tree structure project which is used to display readymade JSON data of family members into tree structure using 
SVG

### Why ?
Just to learn SVG, i had developed this family tree structure using my family details.


### How to use?

Download or clone the setup, then open command prompt in the folder and type
> node server.js
> open chrome browser and type localhost:3000 in address bar to run it

**Still under construction**

After achieving the generic purpose of ,

- Searching family member through autocomplete,
- adding provision for other family members through request button
- provision for external JSON structure
- including global factors including culture and tradition around the world

final usage and link for testing will be provided.

#### Learn from this site:

- Initially i chose SVG over canvas is to learn recent technology
- While developing ES6 code and testing in chrome, i came to chrome started to support ES6,7 without any polyfills.
- When i wrote most of the functions globally and to avoid global pollute, i found out <script type="module"> makes the file encapsulated.
- I struggled mixing up html and svg together.
  
**Learned**
- new namespace for SVG in order to create new SVG elements
- SVG path element
- how to reuse the code in DOM 
- Recursion

- Started with variable width size and ended up with faulty SVG drawings. 
- Again started with fresh thoughts to design with fixed width and drawn with single svg using a pattern found.
- Achieving the pattern with some formulas was helpful in designing the tree perfectly.
- Rewrote the most of the logic more than 3 times with resusability in mind.
- Focusing on building the tree with many combinations by leaving misc features like person picture and cosmetics changes.
- Fortunately, ForeignObject element in SVG came to resue for DOM structure. Initially i thought ForeignObject is bad practice.
- Trying to figure out any design pattern can be useful in my code.
- Datalist for input autocomplete and dropped the idea since it has some limitations. I want to have event handlers on those options.

- Domain like imarun.com is hosted in Apache server and i cannot host in node js server since Web host provider didnt provide access.
- I can host nodejs app in AWS / Heroku
- I can able to host web services and static files in same server itself
  
