        let h1 = document.getElementById('demo');
        h1.innerHTML = "Hello DOM.";

        //returns array
        let x = document.getElementsByClassName('heading')
        x[0].innerHTML = "Learning DOM";

        let y = document.getElementsByTagName('a');

        let z = document.querySelector('.heading');
        let a = document.querySelectorAll('h1');
        console.log(x);
        console.log(y);
        console.log(z);
        console.log(a);

        let attribute = h1.getAttribute('id');
        console.log(attribute);

        let set = h1.setAttribute('class','demoClass');

        h1.style.color = 'blue';

        //create element
        let h2 = document.createElement('h2');
        h2.innerHTML = "This is a new heading created by JavaScript";

        let parent = document.getElementsByTagName("body");
        parent[0].append(h2);
        parent[0].prepend(h2);

        

